import { getPendingVendorQueries, getVendorEstimationHistory } from '../actions/vendor';
import VendorEstimationsClient from './VendorEstimationsClient';

export const dynamic = "force-dynamic";

export default async function VendorEstimationsPage() {
  const pendingQueries = await getPendingVendorQueries();
  const history = await getVendorEstimationHistory();

  return <VendorEstimationsClient pendingQueries={pendingQueries} history={history} />;
}
