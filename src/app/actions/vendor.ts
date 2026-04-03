"use server";

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getPendingVendorQueries() {
  // Fetch queries that are OPEN or ESTIMATING (perhaps they are revising)
  // Let's get queries where they do NOT have an accepted vendor estimation yet.
  return await prisma.mtoQuery.findMany({
    where: {
      status: 'OPEN',
      vendorEstimations: {
        none: {}
      }
    },
    include: {
      customer: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function submitVendorEstimation(formData: FormData) {
  try {
    const mtoQueryId = formData.get('mtoQueryId') as string;
    const vendorName = formData.get('vendorName') as string;
    const goldWeight = formData.get('goldWeight') as string;
    const diamondWeight = formData.get('diamondWeight') as string;
    const remarks = formData.get('remarks') as string;
    const isAccepted = formData.get('isAccepted') === 'true';

    // Handle Image Upload
    const rawImage = formData.get('image');
    let base64Image: string | null = null;
    if (rawImage instanceof File && rawImage.size > 0) {
      const arrayBuffer = await rawImage.arrayBuffer();
      const base64Str = Buffer.from(arrayBuffer).toString('base64');
      base64Image = `data:${rawImage.type};base64,${base64Str}`;
    }

    const estimation = await prisma.vendorEstimation.create({
      data: {
        mtoQueryId,
        vendorName,
        goldWeight,
        diamondWeight,
        remarks,
        images: base64Image,
        isAccepted
      }
    });

    if (isAccepted) {
       await prisma.mtoQuery.update({
         where: { id: mtoQueryId },
         data: { status: 'ESTIMATING' }
       });
    }

    revalidatePath('/vendor-estimations');
    return { success: true, estimation };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getVendorEstimationHistory() {
  return await prisma.vendorEstimation.findMany({
    include: {
      mtoQuery: {
        include: { customer: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function updateVendorEstimation(id: number, formData: FormData) {
  try {
    const vendorName = formData.get('vendorName') as string;
    const goldWeight = formData.get('goldWeight') as string || null;
    const diamondWeight = formData.get('diamondWeight') as string || null;
    const remarks = formData.get('remarks') as string;
    const isAccepted = formData.get('isAccepted') === 'true';

    const rawImage = formData.get('image');
    let base64Image: string | undefined = undefined;
    if (rawImage instanceof File && rawImage.size > 0) {
      const arrayBuffer = await rawImage.arrayBuffer();
      const base64Str = Buffer.from(arrayBuffer).toString('base64');
      base64Image = `data:${rawImage.type};base64,${base64Str}`;
    }

    const dataToUpdate: any = {
      vendorName,
      goldWeight,
      diamondWeight,
      remarks,
      isAccepted
    };

    if (base64Image) {
      dataToUpdate.images = base64Image;
    }

    const updated = await prisma.vendorEstimation.update({
      where: { id },
      data: dataToUpdate
    });

    if (isAccepted) {
       await prisma.mtoQuery.update({
         where: { id: updated.mtoQueryId },
         data: { status: 'ESTIMATING' }
       });
    }

    revalidatePath('/vendor-estimations');
    return { success: true, estimation: updated };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
