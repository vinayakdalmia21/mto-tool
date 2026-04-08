"use server";

import { prisma } from "@/lib/prisma"
import { revalidatePath } from 'next/cache';

export async function getOrdersForOperations() {
  return await prisma.mtoOrder.findMany({
    where: {
      isMovedToOps: true,
      OR: [
        { 
          mtoQuery: { 
            status: { in: ['PO_PENDING', 'PO_RAISED', 'COMPLETED'] } 
          } 
        },
        { 
          purchaseOrder: { isNot: null } 
        }
      ]
    },
    include: {
      mtoQuery: {
        include: { 
          customer: true,
          vendorEstimations: { where: { isAccepted: true }, take: 1 },
          pricing: true
        }
      },
      purchaseOrder: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function createPurchaseOrder(mtoOrderId: number, deliveryTimeline: string, poNumber?: string) {
  const order = await prisma.mtoOrder.findUnique({
    where: { id: mtoOrderId },
    include: {
      mtoQuery: {
        include: {
          vendorEstimations: { where: { isAccepted: true }, take: 1 },
          pricing: true
        }
      }
    }
  });

  if (!order || !order.mtoQuery.pricing) throw new Error("Order or pricing not found");
  
  const vendorName = order.mtoQuery.vendorEstimations[0]?.vendorName || "Unknown Vendor";
  const lockedGoldPrice = order.mtoQuery.pricing.goldRate;

  const po = await prisma.purchaseOrder.create({
    data: {
      mtoOrderId,
      poNumber,
      vendorName,
      lockedGoldPrice,
      deliveryTimeline,
      status: 'RAISED'
    }
  });

  revalidatePath('/orders');
  return { success: true, poId: po.id };
}

export async function updatePurchaseOrderStatus(poId: number, status: string) {
  await prisma.purchaseOrder.update({
    where: { id: poId },
    data: { status }
  });
  revalidatePath('/orders');
  revalidatePath('/qc');
  return { success: true };
}
