"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function createMtoQuery(formData: FormData) {
  const customerName = formData.get('customerName') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const leadType = formData.get('leadType') as string;
  const mtoType = formData.get('mtoType') as string;
  const category = formData.get('category') as string;
  const metalType = formData.get('metalType') as string;
  const isStudded = formData.get('isStudded') === 'true';
  const weightRange = formData.get('weightRange') as string;
  const notes = formData.get('notes') as string;

  // 1. Ensure staff user exists (mocking for simplicity)
  let staff = await prisma.user.findFirst({ where: { role: 'SALES' } });
  if (!staff) {
    staff = await prisma.user.create({
      data: { name: 'Sarah (Sales)', role: 'SALES', email: 'sarah@veda.com' }
    });
  }

  // 2. Ensure customer exists
  let customer = await prisma.customer.findUnique({ where: { phone: phoneNumber } });
  if (!customer) {
    customer = await prisma.customer.create({
      data: { name: customerName, phone: phoneNumber }
    });
  }

  // 3. Create MTO
  const mto = await prisma.mtoQuery.create({
    data: {
      customerId: customer.id,
      staffId: staff.id,
      leadType,
      mtoType,
      category,
      metalType,
      isStudded,
      weightRange,
      notes,
      status: 'OPEN'
    }
  });

  revalidatePath('/mtos');
  return { success: true, mtoId: mto.id };
}

export async function getMtos() {
  return await prisma.mtoQuery.findMany({
    include: {
      customer: true
    },
    orderBy: { createdAt: 'desc' }
  });
}
