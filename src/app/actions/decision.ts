"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function processCustomerDecision(mtoId: string, decision: 'ACCEPT' | 'REJECT' | 'NEGOTIATE', reason?: string) {
  if (decision === 'REJECT') {
    await prisma.mtoQuery.update({
      where: { id: mtoId },
      data: { status: 'DROPPED', notes: `Rejected. Reason: ${reason}` }
    });
  } else if (decision === 'NEGOTIATE') {
    await prisma.mtoQuery.update({
      where: { id: mtoId },
      data: { status: 'NEGOTIATION' }
    });
  } else if (decision === 'ACCEPT') {
    // "Accept" conceptually just means the customer agreed, but locking pricing 
    // happens strictly upon payment success according to the spec.
    // For MVP, we'll keep it as AWAITING_RESPONSE or ACCEPTED conceptually.
    // Let's just keep it AWAITING_RESPONSE until paid, or mark PAYMENT_PENDING.
    await prisma.mtoQuery.update({
      where: { id: mtoId },
      data: { status: 'PAYMENT_PENDING' } // Using a pseudo-status before payment
    });
  }

  revalidatePath(`/mtos/${mtoId}`);
  return { success: true };
}

export async function processPaymentAndLockPricing(mtoId: string, amount: number) {
  // Get latest estimation
  const latestEst = await prisma.estimation.findFirst({
    where: { mtoQueryId: mtoId },
    orderBy: { version: 'desc' }
  });

  if (!latestEst) throw new Error("No estimation found");

  // 1. Record payment
  await prisma.payment.create({
    data: {
      mtoQueryId: mtoId,
      amount: amount,
      status: 'PAID'
    }
  });

  // 2. Lock Promised Pricing
  await prisma.promisedPricing.create({
    data: {
      mtoQueryId: mtoId,
      goldWeight: latestEst.goldWeight,
      makingCharges: latestEst.makingCharges,
      wastage: latestEst.wastage,
      stoneDetails: `Diam: ${latestEst.diamondWeight || 0}ct @ ₹${latestEst.diamondRate || 0}, Other: ₹${latestEst.otherStones || 0}`,
      finalPrice: latestEst.finalEstimatedPrice
    }
  });

  // 3. Create MTO Order ID mapped internally
  const pseudoRef = `POS-${Math.floor(Math.random()*100000)}`;
  await prisma.mtoOrder.create({
    data: {
      mtoQueryId: mtoId,
      posRefId: pseudoRef
    }
  });

  // 4. Update MTO Status
  await prisma.mtoQuery.update({
    where: { id: mtoId },
    data: { status: 'ACCEPTED' }
  });

  revalidatePath(`/mtos/${mtoId}`);
  revalidatePath(`/payments`);
  return { success: true };
}
