import { getPendingVendorQueries, getVendorEstimationHistory } from '../actions/vendor';
import VendorEstimationsClient from './VendorEstimationsClient';

import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function VendorEstimationsPage() {
  const pendingQueries = await getPendingVendorQueries();
  const history = await getVendorEstimationHistory();
  const globalPricing = await prisma.globalPricing.findFirst({
    where: { id: 1 }
  });

  return <VendorEstimationsClient pendingQueries={pendingQueries} history={history} globalPricing={globalPricing} />;
}
