"use client";

import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
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

  // Filters for the Master table
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterStaff, setFilterStaff] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique staff names
  const staffNames = Array.from(new Set(masterQueries.map(q => q.staffName))).filter(Boolean);

  const filteredQueries = useMemo(() => {
    return masterQueries.filter(q => {
      if (filterStatus !== 'ALL') {
        if (filterStatus === 'INACTIVE' && !q.isInactive) return false;
        if (filterStatus !== 'INACTIVE' && q.status !== filterStatus) return false;
      }
      if (filterStaff !== 'ALL' && q.staffName !== filterStaff) return false;
      
      if (searchQuery) {
        const searchLow = searchQuery.toLowerCase();
        return (
          q.customerName?.toLowerCase().includes(searchLow) ||
          q.queryNo?.toString().includes(searchLow) ||
          q.staffMtoId?.toLowerCase().includes(searchLow) ||
          q.vendor?.toLowerCase().includes(searchLow)
        );
      }
      return true;
    });
  }, [masterQueries, filterStatus, filterStaff, searchQuery]);

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
          
          {/* --- 1. CORE PIPELINE OVERVIEW --- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total vs Active Queries</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                {stats.pipeline.active} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ {stats.pipeline.total}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--success)' }}>Active Pipeline Volume</div>
            </div>
            
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: stats.pipeline.inactive > 0 ? '4px solid var(--danger)' : '4px solid var(--success)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Inactive Queries (&gt;3 Days)</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stats.pipeline.inactive > 0 ? 'var(--danger)' : 'inherit' }}>
                {stats.pipeline.inactive}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--danger)' }}>{stats.pipeline.inactivityRate}% Inactivity Rate</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--success)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Completed Orders</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stats.pipeline.completed}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--success)' }}>{stats.pipeline.conversionRate}% Conversion Rate</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--danger)' }}>
              <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Dropped Queries</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{stats.pipeline.dropped}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--danger)' }}>{stats.pipeline.dropOffRate}% Drop-Off Rate</div>
            </div>
          </div>

          {/* --- 2. VALUE & SPEED OF SYSTEM --- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 2fr', gap: '2rem' }}>
            {/* Speed Panel */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Speed of System (Avg Days)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Query to 1st Estimation:</span>
                  <span style={{ fontWeight: 600 }}>{stats.timeMetrics.avgTimeFirstEstimation} days</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Estimation to Confirmation:</span>
                  <span style={{ fontWeight: 600 }}>{stats.timeMetrics.avgTimeNegotiation} days</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Cycle Time (to Delivery):</span>
                  <span style={{ fontWeight: 600, color: 'var(--success)' }}>{stats.timeMetrics.avgCycleTime} days</span>
                </div>
              </div>
            </div>

            {/* Value Funnel */}
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Pipeline Value</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#f59e0b' }}>₹{(stats.revenue.pipelineValue / 100000).toFixed(1)}L</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: 'var(--surface-border)' }}>→</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Converted Value</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>₹{(stats.revenue.convertedValue / 100000).toFixed(1)}L</div>
              </div>
              <div style={{ fontSize: '1.5rem', color: 'var(--surface-border)' }}>/</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Average Order Value</div>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>₹{(stats.revenue.avgOrderValue / 1000).toFixed(1)}k</div>
              </div>
            </div>
          </div>

          {/* --- 3. CORE CHARTS GRID --- */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            {/* Funnel / Status Breakdown */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 350 }}>
              <h3 style={{ marginBottom: '1rem' }}>Stage-wise Pipeline Funnel</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.funnel} layout="vertical" margin={{ left: 50, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 10, fill: 'var(--text-muted)' }} />
                  <RechartsTooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                  <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Drop Reason Pie Chart */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 350 }}>
              <h3 style={{ marginBottom: '1rem' }}>Sieve Analysis (Drop Reasons)</h3>
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
                    <RechartsTooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Staff Performance Extended */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 400 }}>
              <h3 style={{ marginBottom: '1rem' }}>Staff Performance (Conversion % vs Inactive Focus)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.staffPerformance} margin={{ bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                  <YAxis yAxisId="left" orientation="left" stroke="var(--primary)" />
                  <YAxis yAxisId="right" orientation="right" stroke="var(--danger)" />
                  <RechartsTooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                  <Legend wrapperStyle={{ bottom: 0 }} />
                  <Bar yAxisId="left" name="Conversion %" dataKey="conversionRate" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Line yAxisId="right" name="Inactive Leads" type="monotone" dataKey="inactive" stroke="#ef4444" strokeWidth={3} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Vendor Performance */}
            <div className="glass-panel" style={{ padding: '1.5rem', height: 400 }}>
              <h3 style={{ marginBottom: '1rem' }}>Vendor Performance (Orders vs QC Pass %)</h3>
              {stats.vendorPerformance.length === 0 ? (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  No Vendor history logged via POs yet.
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.vendorPerformance} margin={{ bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                    <YAxis yAxisId="left" orientation="left" stroke="var(--primary)" />
                    <YAxis yAxisId="right" orientation="right" stroke="var(--success)" domain={[0, 100]} />
                    <RechartsTooltip contentStyle={{ background: '#1e1e24', border: 'none', borderRadius: 8 }} />
                    <Legend wrapperStyle={{ bottom: 0 }} />
                    <Bar yAxisId="left" name="Total Orders" dataKey="totalOrders" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="right" name="QC Pass %" type="monotone" dataKey="qcPassRate" stroke="#f59e0b" strokeWidth={3} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* --- 4. MASTER TABLE VIEW (CORE UI) --- */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h3>Master Table View</h3>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input 
                  type="text" 
                  placeholder="Search Customer, ID, Vendor..." 
                  className="input"
                  style={{ width: 250 }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select 
                  className="select" 
                  value={filterStaff} 
                  onChange={(e) => setFilterStaff(e.target.value)}
                  style={{ width: 160 }}
                >
                  <option value="ALL">All Staff</option>
                  {staffNames.map(name => (
                    <option key={name as string} value={name as string}>{name}</option>
                  ))}
                </select>
                <select 
                  className="select" 
                  value={filterStatus} 
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{ width: 180 }}
                >
                  <option value="ALL">All Status</option>
                  <option value="INACTIVE">🔴 Inactive (&gt;3 days)</option>
                  <option value="OPEN">Open</option>
                  <option value="ESTIMATING">Estimating</option>
                  <option value="AWAITING_RESPONSE">Awaiting Response</option>
                  <option value="ACCEPTED">Accepted / Working</option>
                  <option value="MOVED_TO_OPS">In Production</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="DROPPED">Dropped</option>
                </select>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Tracking ID</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Customer</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Staff / Vendor</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Status</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Pipeline Time</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Est. / Final Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueries.length === 0 && (
                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No records match the active filters.</td></tr>
                  )}
                  {filteredQueries.map(q => (
                    <tr key={q.id} style={{ borderBottom: '1px solid var(--surface-border)', background: q.isInactive ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }}>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>
                        {q.staffMtoId ? (
                          <div style={{ color: 'var(--success)' }}>{q.staffMtoId}</div>
                        ) : (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Q-{String(q.queryNo || 0).padStart(4, '0')}</div>
                        )}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div>{q.customerName}</div>
                        <div style={{ fontSize: '0.75rem', color: q.leadType === 'HIGH' ? 'var(--danger)' : 'var(--text-muted)' }}>
                          {q.leadType}
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>S:</span> {q.staffName}</div>
                        <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>V:</span> {q.vendor}</div>
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
