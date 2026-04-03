"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getOrdersForOperations() {
  return await prisma.mtoOrder.findMany({
    include: {
      mtoQuery: {
        include: { customer: true }
      },
      purchaseOrder: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function createPurchaseOrder(mtoOrderId: number, vendorName: string, lockedGoldPrice: number, deliveryTimeline: string) {
  const po = await prisma.purchaseOrder.create({
    data: {
      mtoOrderId,
      vendorName,
      lockedGoldPrice,
      deliveryTimeline,
      status: 'RAISED' // RAISED, IN_PRODUCTION, DISPATCHED
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
