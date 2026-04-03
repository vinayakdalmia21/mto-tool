import { getDashboardStats } from './actions/dashboard';
import { getGlobalPricing } from './actions/pricing';
import DashboardClient from './DashboardClient';
import GlobalPricingPanel from './GlobalPricingPanel';

export const dynamic = "force-dynamic";

export default async function Home() {
  const stats = await getDashboardStats();
  const pricing = await getGlobalPricing();

  return (
    <div>
      <DashboardClient stats={stats} />
      <GlobalPricingPanel initialPricing={pricing} />
    </div>
  );
}
