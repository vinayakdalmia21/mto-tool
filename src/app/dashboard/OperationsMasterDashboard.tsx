"use client";

import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Minus, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  Layers, 
  User, 
  Calendar,
  XCircle,
  Search
} from 'lucide-react';

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
  const [inactiveDays, setInactiveDays] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. KPI Calculation Logic
  const kpis = [
    { 
      label: 'Total Queries', 
      value: stats.totalQueries, 
      sub: 'All-time volume', 
      icon: <Layers size={20} />, 
      color: '#6366f1' 
    },
    { 
      label: 'Active Queries', 
      value: stats.activeQueries, 
      sub: 'Live workload', 
      icon: <Clock size={20} />, 
      color: '#10b981' 
    },
    { 
      label: 'Inactive Queries', 
      value: stats.inactiveQueries, 
      sub: `No status changes (> ${inactiveDays} days)`, 
      icon: <AlertCircle size={20} />, 
      color: '#ef4444' 
    },
    { 
      label: 'Conversion Rate', 
      value: `${stats.conversionRate}%`, 
      sub: 'Query to Completed', 
      icon: <TrendingUp size={20} />, 
      color: '#8b5cf6' 
    },
    { 
      label: 'Drop Rate', 
      value: `${stats.dropRate}%`, 
      sub: `${stats.dropCount} queries lost`, 
      icon: <XCircle size={20} />, 
      color: '#f43f5e' 
    },
    { 
      label: 'Avg Pipeline Time', 
      value: `${stats.avgPipelineTime} Days`, 
      sub: 'Lead to closure', 
      icon: <Calendar size={20} />, 
      color: '#06b6d4' 
    },
    { 
      label: 'Total Pipeline Value', 
      value: `₹${(stats.totalPipelineValue / 100000).toFixed(1)}L`, 
      sub: 'Potential Rev', 
      icon: <DollarSign size={20} />, 
      color: '#f59e0b' 
    },
    { 
      label: 'Locked Value', 
      value: `₹${(stats.lockedValue / 100000).toFixed(1)}L`, 
      sub: 'High certainty', 
      icon: <CheckCircle2 size={20} />, 
      color: '#22c55e' 
    },
  ];

  // 2. Table Filtering Logic
  const filteredQueries = useMemo(() => {
    return masterQueries.filter(q => {
      const searchLow = searchQuery.toLowerCase();
      return (
        q.id.toLowerCase().includes(searchLow) ||
        q.customerName.toLowerCase().includes(searchLow) ||
        q.staffMtoId?.toLowerCase().includes(searchLow) ||
        q.vendor?.toLowerCase().includes(searchLow)
      );
    });
  }, [masterQueries, searchQuery]);

  // 3. Status Display Logic
  const renderStageStatus = (status: string) => {
    if (status === 'PASSED') return <div style={{ display: 'flex', justifyContent: 'center' }} title="Passed"><CheckCircle2 size={18} color="var(--success)" /></div>;
    if (status === 'PENDING') return <div style={{ display: 'flex', justifyContent: 'center' }} title="Pending"><Clock size={18} color="var(--warning)" /></div>;
    return <div style={{ display: 'flex', justifyContent: 'center' }} title="Not Reached"><Minus size={18} color="var(--surface-border)" /></div>;
  };

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
            Operations Command Center
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            High-signal visibility into your MTO pipeline and operational bottlenecks.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem', borderRadius: '12px' }}>
          <button 
            onClick={() => setViewMode('command_center')}
            className={`btn ${viewMode === 'command_center' ? 'btn-primary shadow-glow' : ''}`}
            style={{ 
              background: viewMode === 'command_center' ? '' : 'transparent', 
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px'
            }}
          >
            Dashboard View
          </button>
          <button 
            onClick={() => setViewMode('action_center')}
            className={`btn ${viewMode === 'action_center' ? 'btn-primary shadow-glow' : ''}`}
            style={{ 
              background: viewMode === 'action_center' ? '' : 'transparent', 
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px'
            }}
          >
            Action Lists
          </button>
        </div>
      </header>

      {viewMode === 'action_center' ? (
        actionView
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* --- KPI SECTION --- */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem' 
          }}>
            {kpis.map((kpi, idx) => (
              <div key={idx} className="glass-panel" style={{ 
                padding: '1.5rem', 
                borderLeft: `4px solid ${kpi.color}`,
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ 
                  background: `${kpi.color}20`, 
                  color: kpi.color,
                  padding: '1rem',
                  borderRadius: '12px'
                }}>
                  {kpi.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {kpi.label}
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>
                    {kpi.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {kpi.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- OPERATIONS MASTER TABLE --- */}
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Master Operational Pipeline</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Follow-up Threshold:</span>
                    <select 
                       value={inactiveDays} 
                       onChange={(e) => setInactiveDays(Number(e.target.value))}
                       style={{ background: 'transparent', color: 'var(--primary)', border: 'none', fontWeight: 600, cursor: 'pointer', outline: 'none' }}
                    >
                      <option value={1}>1 Day</option>
                      <option value={2}>2 Days</option>
                      <option value={3}>3 Days</option>
                      <option value={5}>5 Days</option>
                      <option value={7}>7 Days</option>
                    </select>
                  </div>
               </div>

               <div style={{ position: 'relative' }}>
                 <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                 <input 
                   type="text" 
                   placeholder="Search ID, Customer, Staff..." 
                   className="input" 
                   style={{ width: '320px', paddingLeft: '2.5rem', background: 'rgba(255,255,255,0.03)' }}
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
               </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1300px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Basic Info</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Status</th>
                    {/* Progression Columns */}
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Query</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Est.</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Negot.</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Locked</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>PO</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Prod.</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>QC</th>
                    <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Comp.</th>
                    {/* Time & Finance */}
                    <th style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Time</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'right' }}>Est. Amount</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'right' }}>Locked Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueries.length === 0 ? (
                    <tr><td colSpan={13} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>No queries match your current focus.</td></tr>
                  ) : null}
                  {filteredQueries.map(q => {
                    const isInactive = !['COMPLETED', 'DROPPED'].includes(q.status) && 
                                       (Date.now() - new Date(q.updatedAt).getTime()) > (inactiveDays * 24 * 60 * 60 * 1000);
                    
                    return (
                      <tr key={q.id} className="glass-panel-interactive" style={{ borderBottom: '1px solid var(--surface-border)', opacity: q.status === 'DROPPED' ? 0.6 : 1 }}>
                        <td style={{ padding: '1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                             <div style={{ background: 'var(--surface-light)', height: 36, width: 36, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                               <User size={16} color="var(--primary)" />
                             </div>
                             <div>
                               <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Q-{String(q.queryNo || 0).padStart(4, '0')}</div>
                               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem' }}>
                                 <span>{q.customerName}</span>
                                 {q.staffMtoId !== '—' && <span style={{ color: 'var(--success)' }}>• {q.staffMtoId}</span>}
                               </div>
                             </div>
                          </div>
                        </td>
                        <td style={{ padding: '1.25rem' }}>
                           <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>S: <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{q.staffName}</span></div>
                           <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>V: <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{q.vendor}</span></div>
                        </td>
                        {/* Progression Grid */}
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.queryRaised)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.estimation)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.negotiation)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.priceLocked)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.po)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.production)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.qc)}</td>
                        <td style={{ padding: '1rem' }}>{renderStageStatus(q.stages.completed)}</td>

                        <td style={{ padding: '1.25rem' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: isInactive ? 'var(--danger)' : 'inherit' }}>
                             <Clock size={14} />
                             {q.daysInPipeline}d
                           </div>
                           {isInactive && <div style={{ fontSize: '0.65rem', color: 'var(--danger)', fontWeight: 700, textTransform: 'uppercase' }}>Attention</div>}
                        </td>

                        <td style={{ padding: '1.25rem', textAlign: 'right', fontWeight: 600 }}>
                           {q.estimatedValue > 0 ? `₹${q.estimatedValue.toLocaleString()}` : '—'}
                        </td>
                        <td style={{ padding: '1.25rem', textAlign: 'right', fontWeight: 800, color: 'var(--success)' }}>
                           {q.lockedPrice > 0 ? `₹${q.lockedPrice.toLocaleString()}` : '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', display: 'flex', gap: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="var(--success)" /> Passed Stage</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} color="var(--warning)" /> Current Stage (Pending)</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Minus size={14} color="var(--surface-border)" /> Not Reached / Not Applicable</div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
