"use client";

import { useAuth } from './auth-context';

export default function Home() {
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
        {/* Placeholder Stat Cards */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Active MTOs</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>24</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Pending Estimates</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>7</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Revenue (This Month)</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>₹12.4L</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', minHeight: 400 }}>
        <h2>Dashboard Content specific to {role}</h2>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          To start the workflow, use the sidebar to navigate to the CRM & MTOs section.
        </p>
      </div>
    </div>
  );
}
