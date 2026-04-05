"use server";

import { prisma } from "@/lib/prisma"
import { revalidatePath } from 'next/cache';

export async function getReceivedPos() {
  return await prisma.purchaseOrder.findMany({
    where: {
      status: { in: ['RAISED', 'IN_PRODUCTION', 'DISPATCHED'] }
    },
    include: {
      mtoOrder: {
        include: {
          mtoQuery: {
            include: {
              customer: true,
              pricing: true,
              vendorEstimations: { where: { isAccepted: true }, take: 1 }
            }
          }
        }
      },
      qcRecord: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function recordQcActuals(poId: number, data: {
  actualGoldWeight: number;
  actualGoldRate: number;
  actualDiamondWeight: number;
  actualDiamondRate: number;
  actualMakingPercent: number;
  actualOtherStones: number;
  actualDiscountPercent: number;
  actualTaxableTotal: number;
  actualGstAmount: number;
  actualFinalValue: number;
  notes?: string;
  status: string;
}) {
  const existing = await prisma.qcRecord.findUnique({ where: { purchaseOrderId: poId } });
  
  const qc = await prisma.qcRecord.upsert({
    where: { purchaseOrderId: poId },
    update: {
      actualGoldWeight: data.actualGoldWeight,
      actualGoldRate: data.actualGoldRate,
      actualDiamondWeight: data.actualDiamondWeight,
      actualDiamondRate: data.actualDiamondRate,
      actualMakingPercent: data.actualMakingPercent,
      actualOtherStones: data.actualOtherStones,
      actualDiscountPercent: data.actualDiscountPercent,
      actualTaxableTotal: data.actualTaxableTotal,
      actualGstAmount: data.actualGstAmount,
      actualFinalValue: data.actualFinalValue,
      notes: data.notes,
      status: data.status,
      iterations: data.status === 'REJECT' ? (existing?.iterations || 0) + 1 : (existing?.iterations || 0)
    },
    create: {
      purchaseOrderId: poId,
      actualGoldWeight: data.actualGoldWeight,
      actualGoldRate: data.actualGoldRate,
      actualDiamondWeight: data.actualDiamondWeight,
      actualDiamondRate: data.actualDiamondRate,
      actualMakingPercent: data.actualMakingPercent,
      actualOtherStones: data.actualOtherStones,
      actualDiscountPercent: data.actualDiscountPercent,
      actualTaxableTotal: data.actualTaxableTotal,
      actualGstAmount: data.actualGstAmount,
      actualFinalValue: data.actualFinalValue,
      notes: data.notes,
      status: data.status,
      iterations: data.status === 'REJECT' ? 1 : 0
    }
  });

  // Update PO status based on outcome
  await prisma.purchaseOrder.update({
    where: { id: poId },
    data: { 
      status: data.status === 'PASS' ? 'COMPLETED' : 'REWORKING' 
    }
  });

  revalidatePath('/qc');
  return { success: true, qcId: qc.id };
}

export async function markAsBilled(qcId: number) {
  await prisma.qcRecord.update({
    where: { id: qcId },
    data: { isBilled: true }
  });
  revalidatePath('/qc');
  return { success: true };
}
