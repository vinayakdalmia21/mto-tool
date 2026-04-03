"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getOpenMtosForEstimation() {
  return await prisma.mtoQuery.findMany({
    where: {
      status: {
        in: ['OPEN', 'ESTIMATING', 'NEGOTIATION']
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
  const finalPrice = parseFloat(data.finalEstimatedPrice);

  const estimation = await prisma.estimation.create({
    data: {
      mtoQueryId: mtoId,
      version: nextVersion,
      goldWeight: data.goldWeight,
      goldRate: parseFloat(data.goldRate),
      diamondWeight: data.diamondWeight ? parseFloat(data.diamondWeight) : null,
      diamondRate: data.diamondRate ? parseFloat(data.diamondRate) : null,
      makingCharges: parseFloat(data.makingCharges),
      wastage: parseFloat(data.wastage),
      otherStones: data.otherStones ? parseFloat(data.otherStones) : null,
      notes: data.notes,
      finalEstimatedPrice: finalPrice
    }
  });

  // Update MTO Status
  await prisma.mtoQuery.update({
    where: { id: mtoId },
    data: { status: 'AWAITING_RESPONSE' }
  });

  revalidatePath(`/estimations/${mtoId}`);
  revalidatePath('/estimations');
  return { success: true, estimationId: estimation.id, version: nextVersion };
}
