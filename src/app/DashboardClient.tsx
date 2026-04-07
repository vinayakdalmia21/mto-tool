"use client";

import { useAuth } from './auth-context';
import OperationsMasterDashboard from './dashboard/OperationsMasterDashboard';

export default function DashboardClient({ 
  stats, 
  allQueries,
  masterStats,
  masterQueries = []
}: { 
  stats: any, 
  allQueries: any[],
  masterStats?: any,
  masterQueries?: any[]
}) {
  const { role, userName } = useAuth();

  // If Operations, show the full Master Dashboard with KPIs
  if (role === 'OPERATIONS' && masterStats) {
    return (
      <OperationsMasterDashboard 
        stats={masterStats} 
        masterQueries={masterQueries} 
        title="Operations Command Center"
      />
    );
  }

  // If Staff (Sales), show the Master Dashboard but filtered by their name and without KPIs
  // Filter rule: Assigned to them OR raised by them
  const staffQueries = masterQueries.filter(q => {
    const isAssigned = q.staffName.toLowerCase().startsWith(userName.toLowerCase());
    const isCreator = q.raisedBy?.toLowerCase() === userName.toLowerCase();
    return isAssigned || isCreator;
  });

  return (
    <OperationsMasterDashboard 
      stats={{}} // Stats aren't needed since KPIs are hidden
      masterQueries={staffQueries} 
      hideKpis={true}
      title={`Staff Dashboard: ${userName}`}
    />
  );
}
