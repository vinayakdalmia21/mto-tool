import { getDashboardStats, getAllQueriesForDashboard } from './actions/dashboard';
import DashboardClient from './DashboardClient';

export const dynamic = "force-dynamic";

export default async function Home() {
  const stats = await getDashboardStats();
  const allQueriesRaw = await getAllQueriesForDashboard();
  const allQueries = JSON.parse(JSON.stringify(allQueriesRaw));

  return (
    <div>
      <DashboardClient stats={stats} allQueries={allQueries} />
    </div>
  );
}
