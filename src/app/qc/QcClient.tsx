"use client";

import { useState } from 'react';
import QcItemCard from './QcItemCard';

export default function QcClient({ pos }: { pos: any[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Sort: RECEIVED (Awaiting QC) on top
  // Sort: Awaiting QC (DISPATCHED) and Reworking on top, Passed (COMPLETED) on bottom
  const sortedPos = [...pos].sort((a, b) => {
    const order = { 'DISPATCHED': 0, 'REWORKING': 1, 'RAISED': 2, 'IN_PRODUCTION': 3, 'COMPLETED': 4 };
    const getOrder = (status: string) => (order as any)[status] ?? 99;
    return getOrder(a.status) - getOrder(b.status);
  });

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>PO ID</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Query ID</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>MTO ID</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vendor</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Status</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedPos.length === 0 ? (
            <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No items in QC right now.</td></tr>
          ) : null}
          {sortedPos.map(po => (
            <>
              <tr 
                key={po.id} 
                style={{ borderBottom: '1px solid var(--surface-border)', cursor: 'pointer' }}
                onClick={() => setExpandedId(expandedId === po.id ? null : po.id)}
                className="glass-panel-interactive"
              >
                <td style={{ padding: '1rem', fontWeight: 600 }}>{po.poNumber ? po.poNumber : `#${po.id}`}</td>
                <td style={{ padding: '1rem' }}>
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                    QRY-{String(po.mtoOrder?.mtoQuery?.queryNo || 0).padStart(4, '0')}
                  </span>
                </td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{po.mtoOrder?.staffMtoId || '-'}</td>
                <td style={{ padding: '1rem' }}>{po.vendorName}</td>
                <td style={{ padding: '1rem' }}>
                  <span className={`badge ${
                    po.status === 'COMPLETED' ? 'badge-success' : 
                    po.status === 'REWORKING' ? 'badge-danger' : 
                    'badge-warning'
                  }`}>
                    {po.qcRecord?.isBilled ? 'BILLING CONFIRMED' :
                     po.status === 'DISPATCHED' ? 'AWAITING QC' : 
                     po.status === 'COMPLETED' ? 'QC PASSED' : 
                     po.status.replace(/_/g, ' ')}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button className="btn" style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.4rem 0.8rem', 
                    border: '1px solid var(--surface-border)',
                    background: po.status === 'COMPLETED' ? 'transparent' : 'var(--primary)',
                    color: po.status === 'COMPLETED' ? 'inherit' : 'white'
                  }}>
                    {expandedId === po.id ? 'Close' : po.status === 'COMPLETED' ? 'Edit QC' : 'QC Pass & Verify'}
                  </button>
                </td>
              </tr>
              {expandedId === po.id && (
                <tr>
                  <td colSpan={6} style={{ padding: '0' }}>
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                      <QcItemCard po={po} />
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
