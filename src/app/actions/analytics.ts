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
    totalQueries: Number(totalQueries || 0),
    activeQueries: Number(activeQueriesCount || 0),
    inactiveQueries: Number(inactiveQueriesCount || 0),
    conversionRate: String(conversionRate.toFixed(1)),
    dropCount: Number(droppedQueries || 0),
    dropRate: String(dropRate.toFixed(1)),
    avgPipelineTime: String(avgPipelineTime.toFixed(1)),
    totalPipelineValue: Number(totalPipelineValue || 0),
    lockedValue: Number(lockedValue || 0),
    inactiveDays: Number(inactiveDays || 3)
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
    
    let hasCAD = false;
    try {
      if (q.orders[0]?.cadDesigns) {
        const designs = JSON.parse(q.orders[0].cadDesigns);
        hasCAD = Array.isArray(designs) && designs.length > 0;
      }
    } catch (e) {
      console.error("CAD Parse Error:", e);
    }
    hasCAD = hasPO || hasCAD;

    const hasOrder = hasCAD || !!q.orders[0];
    const hasLock = hasOrder || !!q.pricing || ['ORDER_PLACED', 'CAD_UPLOADED', 'MOVED_TO_OPS'].includes(q.status);
    const hasEst = hasLock || q.estimations.length > 0;
    const hasVendor = hasEst || q.vendorEstimations.length > 0;

    const isDropped = q.status === 'DROPPED';
    const stages = {
      vendorEst: !isDropped && hasEst ? 'PASSED' : (!isDropped && q.vendorEstimations.length > 0 ? 'PASSED' : (!isDropped && q.status === 'OPEN' ? 'PENDING' : 'DASH')),
      estSent: !isDropped && hasLock ? 'PASSED' : (!isDropped && q.estimations.length > 0 ? 'PASSED' : (!isDropped && q.status === 'ESTIMATING' ? 'PENDING' : 'DASH')),
      priceLocked: !isDropped && hasOrder ? 'PASSED' : (!isDropped && !!q.pricing ? 'PASSED' : (!isDropped && (q.status === 'AWAITING_RESPONSE' || q.status === 'NEGOTIATION') ? 'PENDING' : 'DASH')),
      mtoRaised: !isDropped && hasCAD ? 'PASSED' : (!isDropped && !!q.orders[0] ? 'PASSED' : (!isDropped && (q.status === 'PRICE_LOCKED' || q.status === 'ACCEPTED') ? 'PENDING' : 'DASH')),
      cadUpload: !isDropped && hasPO ? 'PASSED' : (!isDropped && hasCAD ? 'PASSED' : (!isDropped && (q.orders[0]?.status === 'PENDING' || q.status === 'ORDER_PLACED') ? 'PENDING' : 'DASH')),
      poRaised: !isDropped && hasQC ? 'PASSED' : (!isDropped && !!q.orders[0]?.purchaseOrder ? 'PASSED' : (!isDropped && (q.orders[0]?.status === 'MOVED_TO_OPS' || q.status === 'PO_PENDING' || q.status === 'CAD_UPLOADED') ? 'PENDING' : 'DASH')),
      qcPassed: !isDropped && hasInvoice ? 'PASSED' : (!isDropped && q.orders[0]?.purchaseOrder?.qcRecord?.status === 'PASS' ? 'PASSED' : (!isDropped && (!!q.orders[0]?.purchaseOrder || q.status === 'PO_RAISED') ? 'PENDING' : 'DASH')),
      completed: !isDropped && hasInvoice ? 'PASSED' : (!isDropped && hasQC ? 'PENDING' : 'DASH')
    };

    // Manual Mapping to guarantee plain serializable objects
    return {
      id: q.id,
      queryNo: Number(q.queryNo || 0),
      customerName: q.customer?.name || 'Unknown',
      staffName: q.staff?.name || 'N/A',
      raisedBy: (q as any).raisedBy || null,
      status: q.status || 'OPEN',
      vendor: q.orders[0]?.purchaseOrder?.vendorName || '—',
      staffMtoId: q.orders[0]?.staffMtoId || '—',
      poNumber: q.orders[0]?.purchaseOrder?.poNumber || '—',
      estimatedValue: Number(q.estimations[0]?.finalEstimatedPrice || 0),
      vendorEstValue: Number(q.vendorEstimations[0]?.labourCharges || 0),
      lockedPrice: Number(q.pricing?.finalPrice || 0),
      qcFinalPrice: Number(q.orders[0]?.purchaseOrder?.qcRecord?.actualFinalValue || 0),
      daysInPipeline: Number(daysInPipeline || 0),
      droppedAtStage: isDropped ? String(q.dropReason?.split('at ')?.[1] || q.dropReason || 'Initial Stage') : null,
      updatedAt: q.updatedAt instanceof Date ? q.updatedAt.toISOString() : String(q.updatedAt),
      stages: { ...stages }
    };
  });
}
