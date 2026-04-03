"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getInvoices() {
  return await prisma.invoice.findMany({
    include: {
      mtoOrder: {
        include: {
          mtoQuery: {
            include: { customer: true, pricing: true }
          }
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function completeBilling(invoiceId: number) {
  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { status: 'COMPLETED' }
  });
  
  // also update MTO status
  const inv = await prisma.invoice.findUnique({ where: { id: invoiceId }, include: { mtoOrder: true }});
  if (inv) {
     await prisma.mtoQuery.update({
       where: { id: inv.mtoOrder.mtoQueryId },
       data: { status: 'COMPLETED' }
     });
  }

  revalidatePath('/billing');
  return { success: true };
}
