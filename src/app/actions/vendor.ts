"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

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
      customer: true,
      // Need goldKaratage for the vendor form
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
    const labourCharges = formData.get('labourCharges') ? parseFloat(formData.get('labourCharges') as string) : null;
    const goldRate = formData.get('goldRate') ? parseFloat(formData.get('goldRate') as string) : null;
    const remarks = formData.get('remarks') as string;

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
        labourCharges,
        goldRate,
        remarks,
        images: base64Image,
        isAccepted: false
      }
    });

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

export async function acceptVendorEstimate(id: number) {
  try {
    const est = await prisma.vendorEstimation.findUnique({ where: { id } });
    if (!est) throw new Error("Estimate not found");

    // Ensure all other estimates for this query are NOT accepted natively
    await prisma.vendorEstimation.updateMany({
      where: { mtoQueryId: est.mtoQueryId },
      data: { isAccepted: false }
    });

    // Mark current as accepted
    const updated = await prisma.vendorEstimation.update({
      where: { id },
      data: { isAccepted: true }
    });

    // Bubble up workflow to sales
    await prisma.mtoQuery.update({
      where: { id: est.mtoQueryId },
      data: { status: 'ESTIMATING' }
    });

    revalidatePath('/vendor-estimations');
    return { success: true, updated };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateVendorEstimation(id: number, formData: FormData) {
  try {
    const vendorName = formData.get('vendorName') as string;
    const goldWeight = formData.get('goldWeight') as string || null;
    const diamondWeight = formData.get('diamondWeight') as string || null;
    const labourCharges = formData.get('labourCharges') ? parseFloat(formData.get('labourCharges') as string) : null;
    const goldRate = formData.get('goldRate') ? parseFloat(formData.get('goldRate') as string) : null;
    const remarks = formData.get('remarks') as string;

    const rawImage = formData.get('image');
    let base64Image: string | undefined = undefined;
    if (rawImage instanceof File && rawImage.size > 0) {
      const arrayBuffer = await rawImage.arrayBuffer();
      const base64Str = Buffer.from(arrayBuffer).toString('base64');
      base64Image = `data:${rawImage.type};base64,${base64Str}`;
    }

    const updated = await prisma.vendorEstimation.update({
      where: { id },
      data: {
        vendorName,
        goldWeight,
        diamondWeight,
        labourCharges,
        goldRate,
        remarks,
        ...(base64Image !== undefined && { images: base64Image })
      }
    });

    revalidatePath('/vendor-estimations');
    return { success: true, estimation: updated };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
