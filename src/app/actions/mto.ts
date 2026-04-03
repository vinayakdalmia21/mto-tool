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

  const staffName = formData.get('staffName') as string;

  // 1. Ensure staff user exists (mocking creation if missing)
  let staff = await prisma.user.findFirst({ where: { name: staffName } });
  if (!staff) {
    staff = await prisma.user.create({
      data: { 
        name: staffName || 'Unknown Staff', 
        role: 'SALES', 
        email: `${(staffName || 'unknown').split(' ')[0].toLowerCase()}@veda.com` 
      }
    });
  }

  // 2. Ensure customer exists
  let customer = await prisma.customer.findUnique({ where: { phone: phoneNumber } });
  if (!customer) {
    customer = await prisma.customer.create({
      data: { name: customerName, phone: phoneNumber }
    });
  }

  const catalogueSku = formData.get('catalogueSku') as string;
  const rawImage = formData.get('referenceImage');
  
  let base64Image: string | null = null;
  if (rawImage instanceof File && rawImage.size > 0) {
    const arrayBuffer = await rawImage.arrayBuffer();
    const base64Str = Buffer.from(arrayBuffer).toString('base64');
    base64Image = `data:${rawImage.type};base64,${base64Str}`;
  }

  // 3. Create MTO
  const mto = await prisma.mtoQuery.create({
    data: {
      customerId: customer.id,
      staffId: staff.id,
      leadType,
      mtoType,
      catalogueSku: catalogueSku || null,
      category,
      metalType,
      isStudded,
      weightRange,
      notes,
      referenceImages: base64Image,
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
