"use client";

import { useAuth } from './auth-context';

export default function DashboardClient({ stats }: { stats: any }) {
  const { role, userName } = useAuth();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Welcome back, {userName.split(' ')[0]}
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Here's what's happening with the MTO pipeline today.
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Active MTOs</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.activeMtos}</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Pending Estimates</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.pendingEstimates}</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Collected Revenue</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>₹{stats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', minHeight: 400 }}>
        <h2>Dashboard Action Center</h2>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          To view your specific tasks, use the sidebar to navigate to the module that corresponds with your current role ({role}).
        </p>
      </div>
    </div>
  );
}
