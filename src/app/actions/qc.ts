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

  // Generate Invoice based on actuals vs promised
  const pricing = po.mtoOrder.mtoQuery.pricing;
  
  // Recalculate based on actuals
  const actualGW = parseFloat(actualData.actualGoldWeight);
  const actualLockedGoldPrice = po.lockedGoldPrice;
  const makingCharges = pricing?.makingCharges || 0;
  const wastage = pricing?.wastage || 0;

  const actualGoldValue = actualGW * actualLockedGoldPrice + (actualGW * (wastage/100) * actualLockedGoldPrice);
  const actualMC = actualGW * makingCharges;
  const actualDiamondValue = parseFloat(actualData.actualDiamondValue) || 0;
  
  const subTotal = actualGoldValue + actualDiamondValue + actualMC;
  const gst = subTotal * 0.03;
  const grandTotal = subTotal + gst;

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
      status: 'PENDING' // Pending final payment
    }
  });

  revalidatePath('/qc');
  revalidatePath('/billing');
  return { success: true };
}
