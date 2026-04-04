"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';
import https from 'https';

export async function getGlobalPricing() {
  let pricing = await prisma.globalPricing.findUnique({
    where: { id: 1 }
  });

  if (!pricing) {
    pricing = await prisma.globalPricing.create({
      data: {
        id: 1,
        rate9k: 0,
        rate14k: 0,
        rate18k: 0,
        rate22k: 0,
        rate24k: 0,
        diamondRate: 0
      }
    });
  }

  return pricing;
}

export async function updateGlobalPricing(data: any) {
  try {
    const updated = await prisma.globalPricing.upsert({
      where: { id: 1 },
      update: {
        rate9k: parseFloat(data.rate9k) || 0,
        rate14k: parseFloat(data.rate14k) || 0,
        rate18k: parseFloat(data.rate18k) || 0,
        rate22k: parseFloat(data.rate22k) || 0,
        rate24k: parseFloat(data.rate24k) || 0,
        diamondRate: parseFloat(data.diamondRate) || 0,
      },
      create: {
        id: 1,
        rate9k: parseFloat(data.rate9k) || 0,
        rate14k: parseFloat(data.rate14k) || 0,
        rate18k: parseFloat(data.rate18k) || 0,
        rate22k: parseFloat(data.rate22k) || 0,
        rate24k: parseFloat(data.rate24k) || 0,
        diamondRate: parseFloat(data.diamondRate) || 0,
      }
    });

    revalidatePath('/');
    revalidatePath('/estimations/[id]', 'page');
    return { success: true, pricing: updated };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function fetchLiveGoldRate() {
  return new Promise((resolve, reject) => {
    const dataString = JSON.stringify({
      cardNumber: "1007090017293163",
      cardPin: "117029"
    });

    const options = {
      hostname: 'givadiva.co',
      path: '/v2/products/goldPrice',
      method: 'GET',
      headers: {
        'xaccesstoken': 'ozxIoQhPNug0fF839wNQpSVkLfLR7Y',
        'Content-Type': 'application/json',
        'Content-Length': dataString.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.success && typeof parsed.data === 'number') {
            resolve({ success: true, rate24k: parsed.data });
          } else {
            resolve({ success: false, error: 'Invalid API format or unsuccessful.' });
          }
        } catch (e) {
          resolve({ success: false, error: 'Failed to parse JSON' });
        }
      });
    });

    req.on('error', (e) => {
      resolve({ success: false, error: e.message });
    });

    req.write(dataString);
    req.end();
  });
}
