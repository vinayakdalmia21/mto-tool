"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

// Lock the price for a given MTO query
export async function lockPrice(mtoId: string) {
  const latestEst = await prisma.estimation.findFirst({
    where: { mtoQueryId: mtoId },
    orderBy: { version: 'desc' }
  });

  if (!latestEst) throw new Error("No estimation found to lock");

  // Create promised pricing record
  await prisma.promisedPricing.upsert({
    where: { mtoQueryId: mtoId },
    update: {
      goldWeight: latestEst.goldWeight,
      stoneDetails: `Diam: ${latestEst.diamondWeight || 0}ct, Other: ₹${latestEst.otherStones || 0}`,
      finalPrice: latestEst.finalEstimatedPrice,
      goldRate: latestEst.goldRate,
    },
    create: {
      mtoQueryId: mtoId,
      goldWeight: latestEst.goldWeight,
      stoneDetails: `Diam: ${latestEst.diamondWeight || 0}ct, Other: ₹${latestEst.otherStones || 0}`,
      finalPrice: latestEst.finalEstimatedPrice,
      goldRate: latestEst.goldRate,
    }
  });

  // Update status
  await prisma.mtoQuery.update({
    where: { id: mtoId },
    data: { status: 'PRICE_LOCKED' }
  });

  revalidatePath(`/estimations/${mtoId}`);
  revalidatePath('/estimations');
  revalidatePath('/orders-sales');
  return { success: true };
}

// Get all queries with locked prices (for Sales staff)
export async function getLockedPriceQueries() {
  return await prisma.mtoQuery.findMany({
    where: {
      status: { in: ['PRICE_LOCKED', 'ORDER_PLACED'] }
    },
    include: {
      customer: true,
      pricing: true,
      order: true,
      estimations: { orderBy: { version: 'desc' }, take: 1 },
      payment: true,
    },
    orderBy: { updatedAt: 'desc' }
  });
}

// Place order with Advance
export async function placeOrder(mtoId: string, advanceAmount: number) {
  const pricing = await prisma.promisedPricing.findUnique({
    where: { mtoQueryId: mtoId }
  });
  if (!pricing) throw new Error("Price not locked yet");

  const remaining = pricing.finalPrice - advanceAmount;

  // Create or update the MTO Order
  await prisma.mtoOrder.upsert({
    where: { mtoQueryId: mtoId },
    update: {
      advanceAmount,
      remainingAmount: remaining > 0 ? remaining : 0,
    },
    create: {
      mtoQueryId: mtoId,
      advanceAmount,
      remainingAmount: remaining > 0 ? remaining : 0,
      status: 'PENDING',
    }
  });

  // Record payment
  await prisma.payment.create({
    data: {
      mtoQueryId: mtoId,
      amount: advanceAmount,
      status: 'PAID'
    }
  });

  revalidatePath('/orders-sales');
  revalidatePath(`/mtos/${mtoId}`);
  return { success: true };
}

// Move order to operations team
export async function moveToOperations(mtoId: string) {
  // Ensure order exists
  const order = await prisma.mtoOrder.findUnique({
    where: { mtoQueryId: mtoId }
  });
  if (!order) throw new Error("Order not found. Save order details first.");

  await prisma.mtoOrder.update({
    where: { mtoQueryId: mtoId },
    data: { status: 'MOVED_TO_OPS' }
  });

  await prisma.mtoQuery.update({
    where: { id: mtoId },
    data: { 
      status: 'ORDER_PLACED',
      statusHistory: { create: { status: 'ORDER_PLACED' } }
    }
  });

  revalidatePath('/orders-sales');
  revalidatePath('/active-orders');
  return { success: true };
}

// Get active orders for operations team
export async function getActiveOrders() {
  return await prisma.mtoOrder.findMany({
    where: {
      mtoQuery: {
        status: { in: ['ORDER_PLACED', 'CAD_UPLOADED'] }
      }
    },
    include: {
      mtoQuery: {
        include: {
          customer: true,
          estimations: { orderBy: { version: 'desc' }, take: 1 },
          vendorEstimations: { where: { isAccepted: true }, take: 1 },
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
}

// Upload CAD designs (URLs or file paths)
export async function uploadCadDesigns(mtoQueryId: string, cadUrls: string[]) {
  const order = await prisma.mtoOrder.findUnique({
    where: { mtoQueryId }
  });
  if (!order) throw new Error("Order not found");

  // Merge with existing CAD designs
  const existing: string[] = order.cadDesigns ? JSON.parse(order.cadDesigns) : [];
  const merged = [...existing, ...cadUrls];

  await prisma.mtoOrder.update({
    where: { mtoQueryId },
    data: {
      cadDesigns: JSON.stringify(merged),
      status: 'CAD_UPLOADED'
    }
  });

  await prisma.mtoQuery.update({
    where: { id: mtoQueryId },
    data: { 
      status: 'CAD_UPLOADED',
      statusHistory: { create: { status: 'CAD_UPLOADED' } }
    }
  });

  revalidatePath('/active-orders');
  return { success: true };
}

// Get order details for share page
export async function getOrderForShare(mtoQueryId: string) {
  return await prisma.mtoQuery.findUnique({
    where: { id: mtoQueryId },
    include: {
      customer: true,
      order: true,
      estimations: { orderBy: { version: 'desc' }, take: 1 },
      vendorEstimations: { where: { isAccepted: true }, take: 1 },
      pricing: true,
    }
  });
}
