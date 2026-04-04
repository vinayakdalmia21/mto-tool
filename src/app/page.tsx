import { getDashboardStats, getAllQueriesForDashboard } from './actions/dashboard';
import { getMasterTrackingStats, getMasterTableQueries } from './actions/analytics';
import DashboardClient from './DashboardClient';

export const dynamic = "force-dynamic";

export default async function Home() {
  const stats = await getDashboardStats();
  const allQueriesRaw = await getAllQueriesForDashboard();
  const allQueries = JSON.parse(JSON.stringify(allQueriesRaw));

  const masterStatsRaw = await getMasterTrackingStats();
  const masterQueriesRaw = await getMasterTableQueries();
  
  const masterStats = JSON.parse(JSON.stringify(masterStatsRaw));
  const masterQueries = JSON.parse(JSON.stringify(masterQueriesRaw));

  return (
    <div>
      <DashboardClient 
        stats={stats} 
        allQueries={allQueries} 
        masterStats={masterStats}
        masterQueries={masterQueries}
      />
    </div>
  );
}
