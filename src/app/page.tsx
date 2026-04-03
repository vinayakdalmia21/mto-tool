import { getDashboardStats } from './actions/dashboard';
import DashboardClient from './DashboardClient';

export const dynamic = "force-dynamic";

export default async function Home() {
  const stats = await getDashboardStats();

  return (
    <div>
      <DashboardClient stats={stats} />
    </div>
  );
}
