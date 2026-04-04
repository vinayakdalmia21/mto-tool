"use server";

import { prisma } from "@/lib/prisma"


export async function getDashboardStats() {
  const activeMtos = await prisma.mtoQuery.count({
    where: {
      status: {
        notIn: ['DROPPED', 'COMPLETED']
      }
    }
  });

  const pendingEstimates = await prisma.mtoQuery.count({
    where: {
      status: {
        in: ['OPEN', 'NEGOTIATION']
      }
    }
  });

  const aggregatePayments = await prisma.payment.aggregate({
    _sum: {
      amount: true
    }
  });

  const totalRevenue = aggregatePayments._sum.amount || 0;

  return {
    activeMtos,
    pendingEstimates,
    totalRevenue
  };
}

export async function getAllQueriesForDashboard() {
  return await prisma.mtoQuery.findMany({
    include: {
      customer: true,
      order: true,
      pricing: true,
      vendorEstimations: { 
        where: { isAccepted: true },
        take: 1 
      }
    },
    orderBy: { updatedAt: 'desc' }
  });
}
