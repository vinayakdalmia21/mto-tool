"use client";

import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';

// Color Palette for Charts
const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function OperationsMasterDashboard({ 
  stats, 
  masterQueries,
  actionView
}: { 
  stats: any, 
  masterQueries: any[],
  actionView: React.ReactNode
}) {
  const [viewMode, setViewMode] = useState<'command_center' | 'action_center'>('command_center');

  // Filter state for table
  const [filterStatus, setFilterStatus] = useState('ALL');
  
  const filteredQueries = masterQueries.filter(q => {
    if (filterStatus === 'ALL') return true;
    if (filterStatus === 'INACTIVE') return q.isInactive;
    return q.status === filterStatus;
  });

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Master Tracking Dashboard
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Central command center for pipeline health, bottlenecks, and performance.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '8px' }}>
          <button 
            onClick={() => setViewMode('command_center')}
            className={`btn ${viewMode === 'command_center' ? 'btn-primary' : ''}`}
            style={{ background: viewMode === 'command_center' ? '' : 'transparent', border: 'none' }}
          >
            Command Center
          </button>
          <button 
            onClick={() => setViewMode('action_center')}
            className={`btn ${viewMode === 'action_center' ? 'btn-primary' : ''}`}
            style={{ background: viewMode === 'action_center' ? '' : 'transparent', border: 'none' }}
          >
            Action Center (Legacy)
          </button>
        </div>
      </header>

      {viewMode === 'action_center' ? (
        actionView
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* 1. TOP KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Active Queries</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stats.pipeline.active}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--success)' }}>{stats.pipeline.conversionRate}% Conversion</div>
            </div>
            
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: stats.pipeline.inactive > 0 ? '4px solid var(--danger)' : '4px solid var(--success)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Inactive Queries (&gt;3 Days)</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stats.pipeline.inactive > 0 ? 'var(--danger)' : 'inherit' }}>
                {stats.pipeline.inactive}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--danger)' }}>{stats.pipeline.dropOffRate}% Total Drop-off</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total Pipeline Value</h3>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>₹{stats.revenue.pipelineValue.toLocaleString()}</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--success)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Realized Revenue</h3>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>₹{stats.revenue.convertedValue.toLocaleString()}</div>
            </div>
          </div>

          {/* 2. CHARTS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            {/* Funnel / Status Breakdown */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 350 }}>
              <h3 style={{ marginBottom: '1rem' }}>Stage-wise Pipeline Breakdown</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.funnel} layout="vertical" margin={{ left: 50, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                  <Tooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                  <Bar dataKey="value" fill="var(--primary)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Staff Performance */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 350 }}>
              <h3 style={{ marginBottom: '1rem' }}>Staff Performance (Conversion/Load)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.staffPerformance} margin={{ bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                  <YAxis yAxisId="left" orientation="left" stroke="var(--primary)" />
                  <YAxis yAxisId="right" orientation="right" stroke="var(--success)" />
                  <Tooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                  <Legend />
                  <Bar yAxisId="left" name="Total Queries" dataKey="total" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                  <Line yAxisId="right" name="Conversion %" type="monotone" dataKey="conversionRate" stroke="var(--success)" strokeWidth={3} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Drop Reason Pie Chart */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 350 }}>
              <h3 style={{ marginBottom: '1rem' }}>Where/Why We Lose Customers</h3>
              {stats.dropReasons.length === 0 ? (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  No drop drops recorded yet.
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={stats.dropReasons} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                      {stats.dropReasons.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

          </div>

          {/* 3. MASTER TABLE VIEW */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3>Master Table View</h3>
              <select 
                className="select" 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ width: 200 }}
              >
                <option value="ALL">All Queries</option>
                <option value="INACTIVE">🔴 Inactive (&gt;3 days)</option>
                <option value="OPEN">Open (New)</option>
                <option value="ESTIMATING">Estimating</option>
                <option value="AWAITING_RESPONSE">Awaiting Response</option>
                <option value="ACCEPTED">Accepted / Working</option>
              </select>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>ID</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Customer</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Staff & Lead</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Status</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Pipeline Time</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Est. Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueries.length === 0 && (
                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No records match the filter.</td></tr>
                  )}
                  {filteredQueries.map(q => (
                    <tr key={q.id} style={{ borderBottom: '1px solid var(--surface-border)', background: q.isInactive ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }}>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>MTO-{String(q.queryNo || 0).padStart(4, '0')}</td>
                      <td style={{ padding: '1rem' }}>{q.customerName}</td>
                      <td style={{ padding: '1rem' }}>
                        <div>{q.staffName}</div>
                        <span style={{ fontSize: '0.75rem', color: q.leadType === 'HIGH' ? 'var(--danger)' : 'var(--text-muted)' }}>
                          {q.leadType}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span className="badge" style={{ background: 'var(--surface-border)', color: 'var(--text-primary)' }}>
                          {q.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div>{q.daysInPipeline} Days</div>
                        {q.isInactive && (
                          <div style={{ color: 'var(--danger)', fontSize: '0.75rem', fontWeight: 600 }}>Inactive: Follow Up!</div>
                        )}
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>
                        {q.estimatedValue ? `₹${q.estimatedValue.toLocaleString()}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
