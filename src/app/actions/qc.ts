"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getReceivedPos() {
  return await prisma.purchaseOrder.findMany({
    where: {
      status: 'DISPATCHED' // Arrived for QC conceptually
    },
    include: {
      mtoOrder: {
        include: {
          mtoQuery: {
            include: { customer: true, pricing: true }
          }
        }
      },
      qcRecord: true
    }
  });
}

export async function processQcFail(poId: number, notes: string) {
  const qc = await prisma.qcRecord.findUnique({ where: { purchaseOrderId: poId } });
  
  if (qc) {
    await prisma.qcRecord.update({
      where: { id: qc.id },
      data: { status: 'REJECT', iterations: qc.iterations + 1, notes }
    });
  } else {
    await prisma.qcRecord.create({
      data: { purchaseOrderId: poId, status: 'REJECT', iterations: 1, notes }
    });
  }

  // Push PO back to IN_PRODUCTION
  await prisma.purchaseOrder.update({
    where: { id: poId },
    data: { status: 'IN_PRODUCTION' }
  });

  revalidatePath('/qc');
  revalidatePath('/orders');
  return { success: true };
}

export async function processQcPassAndGenerateInvoice(poId: number, actualData: any) {
  const po = await prisma.purchaseOrder.findUnique({
    where: { id: poId },
    include: { mtoOrder: { include: { mtoQuery: { include: { pricing: true, payment: true } } } } }
  });

  if (!po) throw new Error("PO not found");

  const qc = await prisma.qcRecord.findUnique({ where: { purchaseOrderId: poId } });
  if (qc) {
    await prisma.qcRecord.update({
      where: { id: qc.id },
      data: { status: 'PASS' }
    });
  } else {
    await prisma.qcRecord.create({
      data: { purchaseOrderId: poId, status: 'PASS' }
    });
  }

  // Generate Invoice based on actuals
  const pricing = po.mtoOrder.mtoQuery.pricing;
  
  if (!pricing) throw new Error("Promised pricing not found");

  // Recalculate based on actuals
  const actualGW = parseFloat(actualData.actualGoldWeight);
  const actualLockedGoldPrice = po.lockedGoldPrice;
  const actualDiamondValue = parseFloat(actualData.actualDiamondValue) || 0;
  
  // For simplicity after the pricing overhaul:
  // (Actual Gold + Actual Diamond) + Fixed Making & GST calculated during estimation
  // We'll use the finalPrice as a baseline or re-verify.
  // Given the user's focus on "final value" in the estimation, we'll use that as the target.
  const grandTotal = pricing.finalPrice; // Defaulting to promised price for now

  // Payments received
  const payments = po.mtoOrder.mtoQuery.payment;
  const advancePaid = payments.reduce((sum, p) => sum + p.amount, 0);
  const balance = grandTotal - advancePaid;

  await prisma.invoice.create({
    data: {
      mtoOrderId: po.mtoOrder.id,
      totalAmount: grandTotal,
      paidAmount: advancePaid,
      balanceAmount: balance > 0 ? balance : 0,
      status: 'PENDING'
    }
  });

  revalidatePath('/qc');
  revalidatePath('/billing');
  return { success: true };
}
