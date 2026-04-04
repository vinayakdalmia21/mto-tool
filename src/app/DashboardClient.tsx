"use client";

import { useAuth } from './auth-context';
import { useState } from 'react';
import Link from 'next/link';

export default function DashboardClient({ stats, allQueries }: { stats: any, allQueries: any[] }) {
  const { role, userName } = useAuth();
  const [activeTab, setActiveTab] = useState<'action' | 'all'>('action');

  const getActionRequired = (status: string) => {
    switch (status) {
      case 'OPEN':
        return { team: 'Sales Staff', action: 'Draft Estimation' };
      case 'ESTIMATING':
        return { team: 'Operations', action: 'Awaiting Vendor Estimates' };
      case 'AWAITING_RESPONSE':
        return { team: 'Sales Staff', action: 'Share Link / Follow Up' };
      case 'NEGOTIATION':
        return { team: 'Sales Staff', action: 'Revise Estimation' };
      case 'PRICE_LOCKED':
        return { team: 'Sales Staff', action: 'Collect Advance & Record Order ID' };
      case 'ORDER_PLACED':
        return { team: 'Operations', action: 'Upload CAD Designs' };
      case 'CAD_UPLOADED':
        return { team: 'Sales Staff', action: 'Get CAD Approval from Customer' };
      case 'DROPPED':
        return { team: 'None', action: 'Query Dropped' };
      case 'ACCEPTED':
        return { team: 'None', action: 'Ready for Order' };
      default:
        return { team: 'Sales Staff', action: 'Check Details' };
    }
  };

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

      {/* Stats Cards */}
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

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)' }}>
        <button 
          onClick={() => setActiveTab('action')}
          style={{ 
            padding: '1rem 2rem', 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'action' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            borderBottom: activeTab === 'action' ? '2px solid var(--primary)' : 'none'
          }}
        >
          Action Center
        </button>
        <button 
          onClick={() => setActiveTab('all')}
          style={{ 
            padding: '1rem 2rem', 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'all' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            borderBottom: activeTab === 'all' ? '2px solid var(--primary)' : 'none'
          }}
        >
          All Queries
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', minHeight: 400 }}>
        {activeTab === 'action' ? (
          <>
            <h2>Dashboard Action Center</h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              To view your specific tasks, use the sidebar to navigate to the module that corresponds with your current role ({role}).
            </p>
          </>
        ) : (
          <>
            <h2 style={{ marginBottom: '1.5rem' }}>All MTO Queries</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>MTO ID</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Customer</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Status</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Action Required By</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allQueries.length === 0 ? (
                    <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No queries found.</td></tr>
                  ) : (
                    allQueries.map(q => {
                      const { team, action } = getActionRequired(q.status);
                      return (
                        <tr key={q.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                          <td style={{ padding: '1rem', fontWeight: 600 }}>MTO-{String(q.queryNo || 0).padStart(4, '0')}</td>
                          <td style={{ padding: '1rem' }}>{q.customer?.name}</td>
                          <td style={{ padding: '1rem' }}>
                            <span className="badge badge-info" style={{ textTransform: 'capitalize' }}>
                              {q.status.replace(/_/g, ' ').toLowerCase()}
                            </span>
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <div style={{ fontWeight: 600, color: team === 'Sales Staff' ? 'var(--primary)' : 'var(--warning)' }}>{team}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{action}</div>
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right' }}>
                            <Link 
                              href={q.status === 'OPEN' || q.status === 'ESTIMATING' || q.status === 'AWAITING_RESPONSE' || q.status === 'NEGOTIATION' ? `/estimations/${q.id}` : `/mtos/${q.id}`} 
                              className="btn" 
                              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', border: '1px solid var(--surface-border)' }}
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
