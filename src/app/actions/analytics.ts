"use server";

import { prisma } from "@/lib/prisma";

export async function getMasterTrackingStats(inactiveDays: number = 3) {
  const now = new Date();
  const inactiveThreshold = new Date(now.getTime() - inactiveDays * 24 * 60 * 60 * 1000);

  // 1. Core Counts
  const totalQueries = await prisma.mtoQuery.count();
  const activeQueriesCount = await prisma.mtoQuery.count({
    where: { status: { notIn: ['DROPPED', 'COMPLETED'] } }
  });
  const inactiveQueriesCount = await prisma.mtoQuery.count({
    where: { 
      status: { notIn: ['DROPPED', 'COMPLETED'] },
      updatedAt: { lt: inactiveThreshold } 
    }
  });
  const completedQueries = await prisma.mtoQuery.count({
    where: { status: 'COMPLETED' }
  });
  const droppedQueries = await prisma.mtoQuery.count({
    where: { status: 'DROPPED' }
  });

  // 2. Performance & Financial Metrics
  const conversionRate = totalQueries > 0 ? (completedQueries / totalQueries) * 100 : 0;
  const dropRate = totalQueries > 0 ? (droppedQueries / totalQueries) * 100 : 0;

  // Avg Pipeline Time (for active or completed queries)
  const allQueries = await prisma.mtoQuery.findMany({
    select: { createdAt: true, updatedAt: true, status: true }
  });
  const totalPipelineDays = allQueries.reduce((acc, q) => {
    const end = q.status === 'COMPLETED' || q.status === 'DROPPED' ? q.updatedAt : new Date();
    return acc + (end.getTime() - q.createdAt.getTime()) / (1000 * 60 * 60 * 24);
  }, 0);
  const avgPipelineTime = allQueries.length > 0 ? totalPipelineDays / allQueries.length : 0;

  // Pipeline Values
  const activeQueries = await prisma.mtoQuery.findMany({
    where: { status: { notIn: ['DROPPED', 'COMPLETED'] } },
    include: { pricing: true, estimations: { orderBy: { version: 'desc' }, take: 1 } }
  });

  const totalPipelineValue = activeQueries.reduce((acc, q) => {
    // Priority: Locked Price > Latest Estimation
    const val = q.pricing?.finalPrice || q.estimations[0]?.finalEstimatedPrice || 0;
    return acc + val;
  }, 0);

  const lockedValue = activeQueries.reduce((acc, q) => {
    if (['PRICE_LOCKED', 'ORDER_PLACED', 'CAD_UPLOADED', 'MOVED_TO_OPS'].includes(q.status)) {
       return acc + (q.pricing?.finalPrice || 0);
    }
    return acc;
  }, 0);

  return {
    totalQueries,
    activeQueries: activeQueriesCount,
    inactiveQueries: inactiveQueriesCount,
    conversionRate: conversionRate.toFixed(1),
    dropCount: droppedQueries,
    dropRate: dropRate.toFixed(1),
    avgPipelineTime: avgPipelineTime.toFixed(1),
    totalPipelineValue,
    lockedValue,
    inactiveDays // Echo back the threshold used
  };
}

export async function getMasterTableQueries() {
  const queries = await prisma.mtoQuery.findMany({
    include: {
      customer: true,
      staff: true,
      pricing: true,
      vendorEstimations: true,
      estimations: { orderBy: { version: 'desc' } },
      orders: { 
        include: { 
          purchaseOrder: {
            include: { qcRecord: true }
          },
          invoice: true
        },
        orderBy: { version: 'desc' },
        take: 1
      }
    },
    orderBy: { updatedAt: 'desc' }
  });

  return queries.map(q => {
    const daysInPipeline = Math.floor((Date.now() - new Date(q.createdAt).getTime()) / (1000 * 60 * 60 * 24));
    
    // Core Status Flags (Chronological order)
    const hasInvoice = q.status === 'COMPLETED' || !!q.orders[0]?.invoice;
    const hasQC = hasInvoice || q.orders[0]?.purchaseOrder?.qcRecord?.status === 'PASS';
    const hasPO = hasQC || !!q.orders[0]?.purchaseOrder;
    const hasCAD = hasPO || (!!q.orders[0]?.cadDesigns && JSON.parse(q.orders[0].cadDesigns).length > 0);
    const hasOrder = hasCAD || !!q.orders[0];
    const hasLock = hasOrder || !!q.pricing || ['ORDER_PLACED', 'CAD_UPLOADED', 'MOVED_TO_OPS'].includes(q.status);
    const hasEst = hasLock || q.estimations.length > 0;
    const hasVendor = hasEst || q.vendorEstimations.length > 0;

    const stages = {
      vendorEst: hasEst ? 'PASSED' : (q.vendorEstimations.length > 0 ? 'PASSED' : 'DASH'),
      estSent: hasLock ? 'PASSED' : (q.estimations.length > 0 ? 'PASSED' : (q.status === 'ESTIMATING' ? 'PENDING' : 'DASH')),
      priceLocked: hasOrder ? 'PASSED' : (!!q.pricing ? 'PASSED' : (q.status === 'PRICE_LOCKED' ? 'PENDING' : 'DASH')),
      mtoRaised: hasCAD ? 'PASSED' : (!!q.orders[0] ? 'PASSED' : (q.status === 'PRICE_LOCKED' ? 'PENDING' : 'DASH')),
      cadUpload: hasPO ? 'PASSED' : (hasCAD ? 'PASSED' : (q.orders[0]?.status === 'PENDING' ? 'PENDING' : 'DASH')),
      poRaised: hasQC ? 'PASSED' : (!!q.orders[0]?.purchaseOrder ? 'PASSED' : (q.orders[0]?.status === 'MOVED_TO_OPS' ? 'PENDING' : 'DASH')),
      qcPassed: hasInvoice ? 'PASSED' : (q.orders[0]?.purchaseOrder?.qcRecord?.status === 'PASS' ? 'PASSED' : (q.orders[0]?.purchaseOrder?.status === 'DISPATCHED' ? 'PENDING' : 'DASH')),
      completed: hasInvoice ? 'PASSED' : 'DASH'
    };

    return {
      id: q.id,
      queryNo: q.queryNo,
      customerName: q.customer?.name || 'N/A',
      staffName: q.staff?.name || 'N/A',
      status: q.status,
      vendor: q.orders[0]?.purchaseOrder?.vendorName || '—',
      staffMtoId: q.orders[0]?.staffMtoId || '—',
      estimatedValue: q.estimations[0]?.finalEstimatedPrice || 0,
      lockedPrice: q.pricing?.finalPrice || 0,
      daysInPipeline,
      updatedAt: q.updatedAt,
      stages
    };
  });
}
