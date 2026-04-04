"use client";

import { useState } from 'react';
import QcItemCard from './QcItemCard';

export default function QcClient({ pos }: { pos: any[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Sort: RECEIVED (Awaiting QC) on top
  const sortedPos = [...pos].sort((a, b) => {
    if (a.status === 'DISPATCHED' && b.status !== 'DISPATCHED') return -1;
    if (a.status !== 'DISPATCHED' && b.status === 'DISPATCHED') return 1;
    return 0;
  });

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>PO #</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>MTO Ref</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vendor</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Status</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedPos.length === 0 ? (
            <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No items in QC right now.</td></tr>
          ) : null}
          {sortedPos.map(po => (
            <>
              <tr 
                key={po.id} 
                style={{ borderBottom: '1px solid var(--surface-border)', cursor: 'pointer' }}
                onClick={() => setExpandedId(expandedId === po.id ? null : po.id)}
                className="glass-panel-interactive"
              >
                <td style={{ padding: '1rem', fontWeight: 600 }}>#{po.id}</td>
                <td style={{ padding: '1rem' }}>MTO-{String(po.mtoOrder?.mtoQuery?.queryNo || 0).padStart(4, '0')}</td>
                <td style={{ padding: '1rem' }}>{po.vendorName}</td>
                <td style={{ padding: '1rem' }}>
                  <span className={`badge ${po.status === 'DISPATCHED' ? 'badge-warning' : 'badge-success'}`}>
                    {po.status === 'DISPATCHED' ? 'Awaiting QC' : po.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button className="btn" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', border: '1px solid var(--surface-border)' }}>
                    {expandedId === po.id ? 'Close Details' : 'QC Pass & Verify'}
                  </button>
                </td>
              </tr>
              {expandedId === po.id && (
                <tr>
                  <td colSpan={5} style={{ padding: '0' }}>
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
