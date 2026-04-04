"use server";

import { prisma } from "@/lib/prisma";

export async function getMasterTrackingStats() {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  // 1. Pipeline Overview
  const totalQueries = await prisma.mtoQuery.count();
  const activeQueries = await prisma.mtoQuery.count({
    where: { status: { notIn: ['DROPPED', 'COMPLETED'] } }
  });
  const inactiveQueriesCount = await prisma.mtoQuery.count({
    where: { 
      status: { notIn: ['DROPPED', 'COMPLETED'] },
      updatedAt: { lt: threeDaysAgo } 
    }
  });
  const completedQueries = await prisma.mtoQuery.count({
    where: { status: 'COMPLETED' }
  });
  const droppedQueries = await prisma.mtoQuery.count({
    where: { status: 'DROPPED' }
  });

  const conversionRate = totalQueries > 0 ? (completedQueries / totalQueries) * 100 : 0;
  const dropOffRate = totalQueries > 0 ? (droppedQueries / totalQueries) * 100 : 0;

  // 2. Stage-wise Funnel
  const funnelRaw = await prisma.mtoQuery.groupBy({
    by: ['status'],
    _count: { id: true }
  });
  const funnel = funnelRaw.map(f => ({ name: f.status, value: f._count.id }));

  // 3. Staff Performance
  const staffQueries = await prisma.mtoQuery.findMany({
    select: { staffId: true, status: true, staff: { select: { name: true } } }
  });
  
  const staffStatsMap: Record<string, { name: string; total: number; converted: number }> = {};
  
  staffQueries.forEach(q => {
    const staffId = String(q.staffId);
    if (!staffStatsMap[staffId]) {
      staffStatsMap[staffId] = { name: q.staff?.name || 'Unknown', total: 0, converted: 0 };
    }
    staffStatsMap[staffId].total += 1;
    if (['ACCEPTED', 'ORDER_PLACED', 'CAD_UPLOADED', 'COMPLETED'].includes(q.status)) {
      staffStatsMap[staffId].converted += 1;
    }
  });

  const staffPerformance = Object.values(staffStatsMap).map(s => ({
    name: s.name,
    total: s.total,
    conversionRate: s.total > 0 ? (s.converted / s.total) * 100 : 0
  }));

  // 4. Drop-off Analysis
  const dropReasonsRaw = await prisma.mtoQuery.groupBy({
    by: ['dropReason'],
    where: { status: 'DROPPED', dropReason: { not: null } },
    _count: { id: true }
  });
  const dropReasons = dropReasonsRaw.map(d => ({ name: d.dropReason || 'Unknown', value: d._count.id }));

  // 5. Revenue Metrics (Pipeline vs Realized)
  const allPricings = await prisma.promisedPricing.findMany({
    include: { mtoQuery: { select: { status: true } } }
  });

  let pipelineValue = 0;
  let convertedValue = 0;

  allPricings.forEach(p => {
    const isCompleted = p.mtoQuery?.status === 'COMPLETED';
    const isDropped = p.mtoQuery?.status === 'DROPPED';
    
    if (isCompleted) {
      convertedValue += p.finalPrice;
    } else if (!isDropped) {
      pipelineValue += p.finalPrice;
    }
  });

  return {
    pipeline: {
      total: totalQueries,
      active: activeQueries,
      inactive: inactiveQueriesCount,
      completed: completedQueries,
      dropped: droppedQueries,
      conversionRate: conversionRate.toFixed(1),
      dropOffRate: dropOffRate.toFixed(1)
    },
    funnel,
    staffPerformance,
    dropReasons,
    revenue: {
      pipelineValue,
      convertedValue
    }
  };
}

export async function getMasterTableQueries() {
  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  
  const queries = await prisma.mtoQuery.findMany({
    include: {
      customer: true,
      staff: true,
      pricing: true,
      order: { include: { purchaseOrder: true } }
    },
    orderBy: { updatedAt: 'desc' }
  });

  return queries.map(q => {
    const isInactive = !['DROPPED', 'COMPLETED'].includes(q.status) && q.updatedAt < threeDaysAgo;
    const daysInPipeline = Math.floor((Date.now() - new Date(q.createdAt).getTime()) / (1000 * 60 * 60 * 24));
    
    return {
      id: q.id,
      queryNo: q.queryNo,
      customerName: q.customer?.name || 'N/A',
      staffName: q.staff?.name || 'N/A',
      status: q.status,
      leadType: q.leadType,
      vendor: q.order?.purchaseOrder?.vendorName || 'Not Assigned',
      estimatedValue: q.pricing?.finalPrice || null,
      daysInPipeline,
      lastActivity: q.updatedAt,
      isInactive
    };
  });
}
