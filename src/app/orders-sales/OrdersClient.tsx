"use client";

import { useState } from 'react';
import { placeOrder, moveToOperations } from '../actions/order-flow';
import { useRouter } from 'next/navigation';

export default function OrdersClient({ queries }: { queries: any[] }) {
  const router = useRouter();

  if (queries.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No orders with locked prices yet.</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lock a price from the Estimations section to see orders here.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {queries.map(q => (
        <OrderCard key={q.id} query={q} onRefresh={() => router.refresh()} />
      ))}
    </div>
  );
}

function OrderCard({ query, onRefresh }: { query: any, onRefresh: () => void }) {
  const lockedPrice = query.pricing?.finalPrice || 0;
  const existingOrder = query.order;
  const isMovedToOps = existingOrder?.orderStatus === 'MOVED_TO_OPS' || query.status === 'ORDER_PLACED';

  const [advance, setAdvance] = useState(existingOrder?.advanceAmount?.toString() || '');
  const [mtoIdValue, setMtoIdValue] = useState(existingOrder?.staffMtoId || '');
  const [saving, setSaving] = useState(false);
  const [moving, setMoving] = useState(false);

  const advanceNum = parseFloat(advance) || 0;
  const remaining = lockedPrice - advanceNum;

  const handleSave = async () => {
    if (advanceNum <= 0) { alert('Please enter advance amount'); return; }
    if (!mtoIdValue.trim()) { alert('Please enter the core MTO ID to link this payment.'); return; }
    setSaving(true);
    try {
      await placeOrder(query.id, advanceNum, mtoIdValue);
      onRefresh();
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setSaving(false);
  };

  const handleMoveToOps = async () => {
    if (!mtoIdValue.trim()) { alert('Please enter the core MTO ID to link this payment before mapping to Operations.'); return; }
    setMoving(true);
    try {
      await placeOrder(query.id, advanceNum, mtoIdValue);
      await moveToOperations(query.id);
      onRefresh();
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setMoving(false);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', border: isMovedToOps ? '1px solid var(--success)' : '1px solid var(--surface-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ marginBottom: '0.3rem' }}>{query.customer?.name}</h3>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {query.category} • {query.metalType} {query.goldKaratage || ''} • MTO-{String(query.queryNo).padStart(4, '0')}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>₹{lockedPrice.toLocaleString()}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Locked Price</div>
        </div>
      </div>

      {isMovedToOps ? (
        <div style={{ padding: '1rem', background: 'rgba(0, 200, 0, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✅</span>
          <span style={{ fontWeight: 600 }}>Moved to Operations</span>
          <span style={{ color: 'var(--text-muted)', marginLeft: 'auto' }}>MTO ID: {existingOrder?.staffMtoId}</span>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr)', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>MTO ID *</label>
            <input type="text" value={mtoIdValue} onChange={e => setMtoIdValue(e.target.value)} placeholder="e.g. VEDA-MTO-89" style={{ width: '100%', padding: '0.6rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Advance Amount (₹) *</label>
            <input type="number" value={advance} onChange={e => setAdvance(e.target.value)} placeholder="Enter advance" style={{ width: '100%', padding: '0.6rem' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Remaining Amount</label>
            <div style={{ padding: '0.6rem', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', fontWeight: 700, color: remaining > 0 ? 'var(--warning)' : 'var(--success)' }}>
              ₹{remaining > 0 ? remaining.toLocaleString() : '0'}
            </div>
          </div>
        </div>
      )}

      {!isMovedToOps && (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button onClick={handleSave} className="btn" disabled={saving} style={{ padding: '0.6rem 1.5rem', background: 'var(--info)', color: 'white' }}>
            {saving ? 'Saving...' : '💾 Save'}
          </button>
          <button onClick={handleMoveToOps} className="btn" disabled={moving} style={{ padding: '0.6rem 1.5rem', background: 'var(--success)', color: 'white' }}>
            {moving ? 'Moving...' : '📦 Move to Operations'}
          </button>
        </div>
      )}
    </div>
  );
}
