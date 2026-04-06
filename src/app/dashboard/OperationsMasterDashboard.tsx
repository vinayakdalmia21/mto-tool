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
  Search,
  Download,
  HelpCircle
} from 'lucide-react';

export default function OperationsMasterDashboard({ 
  stats, 
  masterQueries,
  actionView,
  hideKpis = false,
  title = "Operations Command Center"
}: { 
  stats: any, 
  masterQueries: any[],
  actionView?: React.ReactNode,
  hideKpis?: boolean,
  title?: string
}) {
  const [inactiveDays, setInactiveDays] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to find the current pending stage
  const getPendingStageLabel = (stages: any) => {
    if (stages.completed === 'PASSED') return 'No Action Required';
    
    const stageOrder = [
      { key: 'vendorEst', label: 'Vendor Estimation' },
      { key: 'estSent', label: 'Estimate to Customer' },
      { key: 'priceLocked', label: 'Price Locking' },
      { key: 'mtoRaised', label: 'MTO Raising' },
      { key: 'cadUpload', label: 'CAD Upload' },
      { key: 'poRaised', label: 'PO Raising' },
      { key: 'qcPassed', label: 'Production / QC' }
    ];

    for (const s of stageOrder) {
      if (stages[s.key] === 'PENDING') return s.label;
    }
    
    return 'No Action Required';
  };

  // 1. KPI Calculation Logic
  const kpis = [
    { 
      label: 'Total Queries', 
      value: stats.totalQueries, 
      sub: 'All-time volume', 
      icon: <Layers size={20} />, 
      color: '#6366f1',
      tooltip: 'Total number of inquiries received since inception.'
    },
    { 
      label: 'Active Queries', 
      value: stats.activeQueries, 
      sub: 'Live workload', 
      icon: <Clock size={20} />, 
      color: '#10b981',
      tooltip: 'Inquiries currently moving through the pipeline (Open to Production).'
    },
    { 
      label: 'Inactive Queries', 
      value: stats.inactiveQueries, 
      sub: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>Threshold:</span>
          <select 
              value={inactiveDays} 
              onChange={(e) => setInactiveDays(Number(e.target.value))}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--primary)', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer', outline: 'none', padding: '0 0.2rem' }}
          >
            <option value={1}>1d</option>
            <option value={2}>2d</option>
            <option value={3}>3d</option>
            <option value={5}>5d</option>
            <option value={7}>7d</option>
          </select>
        </div>
      ), 
      icon: <AlertCircle size={20} />, 
      color: '#ef4444',
      tooltip: 'Queries with no activity/status updates beyond the defined threshold.'
    },
    { 
      label: 'Conversion Rate', 
      value: `${stats.conversionRate}%`, 
      sub: 'Query to Completed', 
      icon: <TrendingUp size={20} />, 
      color: '#8b5cf6',
      tooltip: 'Percentage of total inquiries that successfully reached the Completed stage.'
    },
    { 
      label: 'Drop Rate', 
      value: `${stats.dropRate}%`, 
      sub: `${stats.dropCount} queries lost`, 
      icon: <XCircle size={20} />, 
      color: '#f43f5e',
      tooltip: 'Percentage of inquiries marked as Dropped/Closed without a sale.'
    },
    { 
      label: 'Avg Pipeline Time', 
      value: `${stats.avgPipelineTime} Days`, 
      sub: 'Lead to closure', 
      icon: <Calendar size={20} />, 
      color: '#06b6d4',
      tooltip: 'Average duration from query creation to the final completion milestone.'
    },
    { 
      label: 'Total Pipeline Value', 
      value: `₹${(stats.totalPipelineValue / 100000).toFixed(1)}L`, 
      sub: 'Potential Rev', 
      icon: <DollarSign size={20} />, 
      color: '#f59e0b',
      tooltip: 'Sum of the estimated/current value of all live queries in the pipeline.'
    },
    { 
      label: 'Locked Value', 
      value: `₹${(stats.lockedValue / 100000).toFixed(1)}L`, 
      sub: 'High certainty', 
      icon: <CheckCircle2 size={20} />, 
      color: '#22c55e',
      tooltip: 'Value of orders where the price is locked or a PO has been issued.'
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
  const renderStageStatus = (status: string, customLabel?: string) => {
    if (status === 'PASSED') return <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--success)', fontWeight: 600, fontSize: '0.75rem' }}>{customLabel || 'Passed'}</div>;
    if (status === 'PENDING') return <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--warning)', fontWeight: 600, fontSize: '0.75rem' }}>Pending</div>;
    return <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--surface-border)' }}>—</div>;
  };

  // 4. CSV Download Logic
  const handleDownloadCSV = () => {
    const headers = [
      'Query ID', 'MTO ID', 'Customer', 'Staff', 'Vendor', 'Pending Stage',
      'Vendor Est.', 'Estimate Sent', 'Price Locked', 'MTO Raised', 'CAD Upload', 'PO Raised', 'QC Passed', 'Completed',
      'Pipeline Time', 'Customer Locked Price', 'QC Final Price'
    ];
    
    const rows = filteredQueries.map(q => [
      `Q-${String(q.queryNo || 0).padStart(4, '0')}`,
      q.staffMtoId,
      q.customerName,
      q.staffName,
      q.vendor,
      getPendingStageLabel(q.stages),
      q.stages.vendorEst,
      q.stages.estSent,
      q.stages.priceLocked,
      q.stages.mtoRaised,
      q.stages.cadUpload,
      q.stages.poRaised,
      q.stages.qcPassed,
      q.stages.completed,
      `${q.daysInPipeline} Days`,
      q.lockedPrice,
      q.qcFinalPrice
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `veda_operations_report_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
            {title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            High-signal visibility into your MTO pipeline and operational bottlenecks.
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* --- KPI SECTION --- */}
          {!hideKpis && (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem' 
            }}>
              {kpis.map((kpi, idx) => (
                <div key={idx} className="glass-panel" 
                  style={{ 
                    padding: '1.5rem', 
                    borderLeft: `4px solid ${kpi.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    transition: 'transform 0.2s ease',
                    position: 'relative'
                  }}>
                  <div 
                    title={kpi.tooltip}
                    style={{ 
                      position: 'absolute', 
                      top: '0.75rem', 
                      right: '0.75rem', 
                      color: 'var(--text-muted)',
                      cursor: 'help',
                      opacity: 0.6
                    }}
                  >
                    <HelpCircle size={14} />
                  </div>
                  
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
          )}

          {/* --- OPERATIONS MASTER TABLE --- */}
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Master Operational Pipeline</h2>
               </div>

               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <button 
                   onClick={handleDownloadCSV}
                   className="btn" 
                   style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     gap: '0.5rem', 
                     background: 'rgba(255,255,255,0.05)', 
                     fontSize: '0.85rem',
                     border: '1px solid var(--surface-border)',
                     padding: '0.5rem 1rem'
                   }}
                 >
                   <Download size={16} /> 
                   Export CSV
                 </button>

                 <div style={{ position: 'relative' }}>
                   <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                   <input 
                     type="text" 
                     placeholder="Search ID, Customer, Staff..." 
                     className="input" 
                     style={{ width: '300px', paddingLeft: '2.5rem', background: 'rgba(255,255,255,0.03)' }}
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                   />
                 </div>
               </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1600px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Query ID</th>
                    <th style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>MTO ID</th>
                    <th style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Customer</th>
                    <th style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Staff</th>
                    <th style={{ padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Vendor</th>
                    <th style={{ padding: '0.75rem', color: 'var(--warning)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Pending</th>
                    
                    {/* STAGES (13 core) */}
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>Vendor Est.</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>Est. Sent</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>Locked</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>MTO Raised</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>CAD Upload</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>PO Raised</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>QC Passed</th>
                    <th style={{ padding: '0.5rem', color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>Completed</th>

                    {/* SUPPLEMENTARY FINANCIALS */}
                    <th style={{ padding: '0.75rem', color: 'var(--primary)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>Pipeline Time</th>
                    <th style={{ padding: '0.75rem', color: 'var(--primary)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'right' }}>Locked Price</th>
                    <th style={{ padding: '0.75rem', color: 'var(--success)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'right' }}>QC Final</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueries.length === 0 ? (
                    <tr><td colSpan={17} style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>No queries match your current focus.</td></tr>
                  ) : null}
                  {filteredQueries.map(q => {
                    const isInactive = !['COMPLETED', 'DROPPED'].includes(q.status) && 
                                       (Date.now() - new Date(q.updatedAt).getTime()) > (inactiveDays * 24 * 60 * 60 * 1000);
                    return (
                      <tr key={q.id} className="glass-panel-interactive" style={{ borderBottom: '1px solid var(--surface-border)', opacity: q.status === 'DROPPED' ? 0.6 : 1 }}>
                        <td style={{ padding: '0.75rem', fontWeight: 700, fontSize: '0.8rem' }}>
                          Q-{String(q.queryNo || 0).padStart(4, '0')}
                        </td>
                        <td style={{ padding: '0.75rem', fontSize: '0.8rem', color: q.staffMtoId === '—' ? 'var(--text-muted)' : 'var(--success)', fontWeight: 600 }}>
                          {q.staffMtoId}
                        </td>
                        <td style={{ padding: '0.75rem', fontSize: '0.8rem' }}>{q.customerName}</td>
                        <td style={{ padding: '0.75rem', fontSize: '0.8rem' }}>{q.staffName}</td>
                        <td style={{ padding: '0.75rem', fontSize: '0.8rem' }}>{q.vendor}</td>
                        <td style={{ 
                          padding: '0.75rem', 
                          fontSize: '0.75rem', 
                          fontWeight: 600, 
                          color: getPendingStageLabel(q.stages) === 'No Action Required' ? 'var(--success)' : 'var(--warning)' 
                        }}>
                           {getPendingStageLabel(q.stages)}
                        </td>
                        
                        {/* STAGES */}
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.vendorEst)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.estSent)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.priceLocked)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.mtoRaised)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.cadUpload)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.poRaised)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.qcPassed)}</td>
                        <td style={{ padding: '0.5rem' }}>{renderStageStatus(q.stages.completed, 'Completed')}</td>

                        {/* FINANCIALS */}
                        <td style={{ padding: '0.75rem', textAlign: 'center', fontSize: '0.8rem' }}>
                           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontWeight: 600, color: isInactive ? 'var(--danger)' : 'inherit' }}>
                             <Clock size={12} />
                             {q.daysInPipeline}d
                           </div>
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'right', fontSize: '0.8rem', fontWeight: 600 }}>
                           {q.lockedPrice > 0 ? `₹${q.lockedPrice.toLocaleString()}` : '—'}
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'right', fontSize: '0.85rem', fontWeight: 800, color: 'var(--success)' }}>
                           {q.qcFinalPrice > 0 ? `₹${q.qcFinalPrice.toLocaleString()}` : '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', display: 'flex', gap: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: 'var(--success)', fontWeight: 700 }}>Passed</span> / Validated</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: 'var(--warning)', fontWeight: 700 }}>Pending</span> / Action Required</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: 'var(--surface-border)', fontWeight: 700 }}>—</span> Not Reached</div>
            </div>
          </div>
      </div>
    </div>
  );
}
