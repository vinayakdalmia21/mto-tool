"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

export async function getOpenMtosForEstimation() {
  return await prisma.mtoQuery.findMany({
    where: {
      status: {
        not: 'OPEN'
      }
    },
    include: { customer: true },
    orderBy: { createdAt: 'desc' }
  });
}

export async function getMtoQueryDetails(mtoId: string) {
  return await prisma.mtoQuery.findUnique({
    where: { id: mtoId },
    include: {
      customer: true,
      orders: true,
      vendorEstimations: {
        orderBy: { createdAt: 'desc' }
      },
      estimations: {
        orderBy: { version: 'desc' }
      }
    }
  });
}

export async function saveEstimation(mtoId: string, data: any) {
  // Find highest version
  const lastEst = await prisma.estimation.findFirst({
    where: { mtoQueryId: mtoId },
    orderBy: { version: 'desc' }
  });
  
  const nextVersion = lastEst ? lastEst.version + 1 : 1;

  const estimation = await prisma.estimation.create({
    data: {
      mtoQueryId: mtoId,
      version: nextVersion,
      goldWeight: data.goldWeight,
      goldRate: parseFloat(data.goldRate),
      diamondWeight: data.diamondWeight ? parseFloat(data.diamondWeight) : null,
      diamondRate: data.diamondRate ? parseFloat(data.diamondRate) : null,
      makingPercent: parseFloat(data.makingPercent),
      discountPercent: parseFloat(data.discountPercent),
      otherStones: data.otherStones ? parseFloat(data.otherStones) : null,
      gstAmount: parseFloat(data.gstAmount),
      discountAmount: parseFloat(data.discountAmount),
      totalAmount: parseFloat(data.totalAmount),
      finalEstimatedPrice: parseFloat(data.finalEstimatedPrice),
      notes: data.notes
    }
  });

  // Update MTO Status only if it's in an early stage
  const mto = await prisma.mtoQuery.findUnique({ where: { id: mtoId }, select: { status: true } });
  const earlyStages = ['OPEN', 'ESTIMATING', 'AWAITING_RESPONSE', 'NEGOTIATION'];
  
  if (mto && earlyStages.includes(mto.status)) {
    await prisma.mtoQuery.update({
      where: { id: mtoId },
      data: { 
        status: 'AWAITING_RESPONSE',
        statusHistory: {
          create: { status: 'AWAITING_RESPONSE' }
        }
      }
    });
  }

  revalidatePath(`/estimations/${mtoId}`);
  revalidatePath('/estimations');
  return { success: true, estimationId: estimation.id, version: nextVersion };
}
