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
  const inactivityRate = activeQueries > 0 ? (inactiveQueriesCount / activeQueries) * 100 : 0;

  // 2. Stage-wise Funnel
  const funnelRaw = await prisma.mtoQuery.groupBy({
    by: ['status'],
    _count: { _all: true }
  });
  
  // Custom Funnel Ordering
  const stageOrder = ['OPEN', 'ESTIMATING', 'AWAITING_RESPONSE', 'ACCEPTED', 'ORDER_PLACED', 'CAD_UPLOADED', 'MOVED_TO_OPS', 'COMPLETED', 'DROPPED'];
  const funnel = funnelRaw
    .map(f => ({ name: f.status, value: f._count._all }))
    .sort((a, b) => stageOrder.indexOf(a.name) - stageOrder.indexOf(b.name));

  // 3. Status History (Speed of System)
  const statusHistory = await prisma.mtoStatusHistory.findMany({
    orderBy: { createdAt: 'asc' }
  });
  const historyByQuery: Record<string, { status: string; createdAt: Date }[]> = {};
  statusHistory.forEach(h => {
    if (!historyByQuery[h.mtoQueryId]) historyByQuery[h.mtoQueryId] = [];
    historyByQuery[h.mtoQueryId].push({ status: h.status, createdAt: h.createdAt });
  });

  let sumEstTime = 0, countEstTime = 0;
  let sumNegTime = 0, countNegTime = 0;
  let sumCycleTime = 0, countCycleTime = 0;

  for (const qId in historyByQuery) {
    const history = historyByQuery[qId];
    
    const openRec = history.find(h => h.status === 'OPEN');
    const estRec = history.find(h => h.status === 'ESTIMATING' || h.status === 'ESTIMATION_SUBMITTED');
    const acceptRec = history.find(h => h.status === 'ACCEPTED');
    const compRec = history.find(h => h.status === 'COMPLETED');

    if (openRec && estRec) {
      sumEstTime += (estRec.createdAt.getTime() - openRec.createdAt.getTime());
      countEstTime++;
    }
    if (estRec && acceptRec) {
      sumNegTime += (acceptRec.createdAt.getTime() - estRec.createdAt.getTime());
      countNegTime++;
    }
    if (openRec && compRec) {
      sumCycleTime += (compRec.createdAt.getTime() - openRec.createdAt.getTime());
      countCycleTime++;
    }
  }

  const msToDays = (ms: number) => ms / (1000 * 60 * 60 * 24);

  // 4. Staff Performance Extended
  const staffQueries = await prisma.mtoQuery.findMany({
    select: { staffId: true, status: true, leadType: true, updatedAt: true, staff: { select: { name: true } }, pricing: { select: { finalPrice: true } } }
  });
  
  const staffStatsMap: Record<string, { name: string; total: number; converted: number; revenue: number; inactive: number }> = {};
  
  staffQueries.forEach(q => {
    const staffId = String(q.staffId);
    if (!staffStatsMap[staffId]) {
      staffStatsMap[staffId] = { name: q.staff?.name || 'Unknown', total: 0, converted: 0, revenue: 0, inactive: 0 };
    }
    staffStatsMap[staffId].total += 1;
    if (['ACCEPTED', 'ORDER_PLACED', 'CAD_UPLOADED', 'COMPLETED'].includes(q.status)) {
      staffStatsMap[staffId].converted += 1;
      if (q.pricing) staffStatsMap[staffId].revenue += q.pricing.finalPrice;
    }
    if (!['DROPPED', 'COMPLETED'].includes(q.status) && q.updatedAt < threeDaysAgo) {
      staffStatsMap[staffId].inactive += 1;
    }
  });

  const staffPerformance = Object.values(staffStatsMap).map(s => ({
    name: s.name,
    total: s.total,
    inactive: s.inactive,
    conversionRate: s.total > 0 ? ((s.converted / s.total) * 100).toFixed(1) : 0,
    avgDealValue: s.converted > 0 ? (s.revenue / s.converted).toFixed(0) : 0,
    revenue: s.revenue
  }));

  // 5. Drop-off Analysis
  const dropReasonsRaw = await prisma.mtoQuery.groupBy({
    by: ['dropReason'],
    where: { status: 'DROPPED', dropReason: { not: null } },
    _count: { _all: true }
  });
  const dropReasons = dropReasonsRaw.map(d => ({ name: d.dropReason || 'Unknown', value: d._count._all }));

  // 6. Revenue Metrics
  const allPricings = await prisma.promisedPricing.findMany({
    include: { mtoQuery: { select: { status: true } } }
  });

  let pipelineValue = 0;
  let convertedValue = 0;
  let lostValue = 0;

  allPricings.forEach(p => {
    const isCompleted = ['COMPLETED', 'MOVED_TO_OPS', 'CAD_UPLOADED', 'ORDER_PLACED'].includes(p.mtoQuery?.status || '');
    const isDropped = p.mtoQuery?.status === 'DROPPED';
    
    if (isCompleted) {
      convertedValue += p.finalPrice;
    } else if (isDropped) {
      lostValue += p.finalPrice;
    } else {
      pipelineValue += p.finalPrice;
    }
  });

  const avgOrderValue = convertedValue > 0 && completedQueries > 0 ? convertedValue / completedQueries : 0;

  // 7. Vendor Performance
  const purchaseOrders = await prisma.purchaseOrder.findMany({
    include: { qcRecord: true }
  });

  const vendorMap: Record<string, { totalOrders: number; passedQc: number; iterations: number }> = {};
  purchaseOrders.forEach(po => {
    const vName = po.vendorName.trim().toUpperCase();
    if (!vendorMap[vName]) vendorMap[vName] = { totalOrders: 0, passedQc: 0, iterations: 0 };
    
    vendorMap[vName].totalOrders += 1;
    if (po.qcRecord?.status === 'PASS') vendorMap[vName].passedQc += 1;
    if (po.qcRecord?.iterations) vendorMap[vName].iterations += po.qcRecord.iterations;
  });

  const vendorPerformance = Object.entries(vendorMap).map(([name, data]) => ({
    name,
    totalOrders: data.totalOrders,
    qcPassRate: data.totalOrders > 0 ? ((data.passedQc / data.totalOrders) * 100).toFixed(1) : 0,
    avgIterations: data.totalOrders > 0 ? (data.iterations / data.totalOrders).toFixed(1) : 0
  }));

  return {
    pipeline: {
      total: totalQueries,
      active: activeQueries,
      inactive: inactiveQueriesCount,
      completed: completedQueries,
      dropped: droppedQueries,
      conversionRate: conversionRate.toFixed(1),
      dropOffRate: dropOffRate.toFixed(1),
      inactivityRate: inactivityRate.toFixed(1)
    },
    timeMetrics: {
      avgTimeFirstEstimation: countEstTime > 0 ? msToDays(sumEstTime / countEstTime).toFixed(1) : 0,
      avgTimeNegotiation: countNegTime > 0 ? msToDays(sumNegTime / countNegTime).toFixed(1) : 0,
      avgCycleTime: countCycleTime > 0 ? msToDays(sumCycleTime / countCycleTime).toFixed(1) : 0
    },
    funnel,
    staffPerformance,
    vendorPerformance,
    dropReasons,
    revenue: {
      pipelineValue,
      convertedValue,
      lostValue,
      avgOrderValue: avgOrderValue.toFixed(0)
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
      isInactive,
      staffMtoId: q.order?.staffMtoId || null
    };
  });
}
