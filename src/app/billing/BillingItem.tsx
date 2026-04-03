"use client";

import { completeBilling } from '../actions/billing';
import { useState } from 'react';

export default function BillingItem({ invoice }: { invoice: any }) {
  const [loading, setLoading] = useState(false);

  async function handleComplete() {
    setLoading(true);
    await completeBilling(invoice.id);
    setLoading(false);
  }

  const mto = invoice.mtoOrder.mtoQuery;
  const isCompleted = invoice.status === 'COMPLETED';

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderLeft: isCompleted ? '4px solid var(--success)' : '4px solid var(--warning)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: isCompleted ? 'var(--success)' : 'var(--text-main)' }}>Invoice #{invoice.id.toString().padStart(4, '0')}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Customer: {mto.customer.name} | MTO: {mto.id.slice(-6).toUpperCase()}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <span className={`badge ${isCompleted ? 'badge-success' : 'badge-warning'}`}>{invoice.status}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
         <div>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Final Total (Actuals incl. GST)</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>₹{invoice.totalAmount.toLocaleString()}</span>
         </div>
         <div>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--success)' }}>Advance Paid</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--success)' }}>- ₹{invoice.paidAmount.toLocaleString()}</span>
         </div>
         <div style={{ borderLeft: '1px solid var(--surface-border)', paddingLeft: '1rem' }}>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--info)' }}>Remaining Balance</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--info)' }}>₹{invoice.balanceAmount.toLocaleString()}</span>
         </div>
      </div>

      {!isCompleted && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
           <button className="btn btn-primary" onClick={handleComplete} disabled={loading}>
             {loading ? 'Processing...' : 'Collect Payment & Mark Completed'}
           </button>
        </div>
      )}
    </div>
  );
}
