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
  const orders = query.orders || [];
  const latestOrder = orders.length > 0 ? orders.sort((a: any, b: any) => b.version - a.version)[0] : null;
  const movedOrder = orders.find((o: any) => o.isMovedToOps);
  const isAnyMoved = !!movedOrder;

  const [advance, setAdvance] = useState('');
  const [mtoIdValue, setMtoIdValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [expanding, setExpanding] = useState(false);

  const advanceNum = parseFloat(advance) || 0;
  const remaining = lockedPrice - advanceNum;

  const handleSave = async () => {
    if (advanceNum <= 0) { alert('Please enter advance amount'); return; }
    if (!mtoIdValue.trim()) { alert('Please enter the core MTO ID.'); return; }
    setSaving(true);
    try {
      await placeOrder(query.id, advanceNum, mtoIdValue);
      setAdvance('');
      setMtoIdValue('');
      onRefresh();
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setSaving(false);
  };

  const handleMoveToOps = async (orderId: number) => {
    try {
      await moveToOperations(orderId);
      onRefresh();
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', border: isAnyMoved ? '1px solid var(--success)' : '1px solid var(--surface-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ marginBottom: '0.3rem' }}>{query.customer?.name}</h3>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {query.category} • {query.metalType} {query.goldKaratage || ''} • QRY-{String(query.queryNo).padStart(4, '0')}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>₹{lockedPrice.toLocaleString()}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Locked Price</div>
        </div>
      </div>

      {!isAnyMoved && (
        <div style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Add New Order Detail Version</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem' }}>MTO ID *</label>
              <input type="text" value={mtoIdValue} onChange={e => setMtoIdValue(e.target.value)} placeholder="e.g. MTO-89" style={{ width: '100%', padding: '0.6rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem' }}>Advance (₹) *</label>
              <input type="number" value={advance} onChange={e => setAdvance(e.target.value)} placeholder="0.00" style={{ width: '100%', padding: '0.6rem' }} />
            </div>
            <button onClick={handleSave} className="btn" disabled={saving} style={{ padding: '0.6rem', background: 'var(--info)', color: 'white' }}>
              {saving ? 'Creating...' : '💾 Save New Version'}
            </button>
          </div>
        </div>
      )}

      {orders.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>Order Versions ({orders.length})</h4>
            <button onClick={() => setExpanding(!expanding)} className="btn" style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
              {expanding ? 'Collapse History' : 'View All Versions'}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {orders
              .sort((a: any, b: any) => b.version - a.version)
              .slice(0, expanding ? undefined : 1)
              .map((o: any) => (
                <div key={o.id} style={{ 
                  padding: '1rem', 
                  background: o.isMovedToOps ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  border: o.isMovedToOps ? '1px solid var(--success)' : '1px solid var(--surface-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="badge">v{o.version}</span>
                      <strong style={{ fontSize: '1rem' }}>{o.staffMtoId}</strong>
                      {o.isMovedToOps && <span className="badge badge-success">MOVED TO CAD</span>}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                      Advance: ₹{o.advanceAmount.toLocaleString()} • Bal: ₹{o.remainingAmount.toLocaleString()}
                    </div>
                  </div>
                  {!isAnyMoved && (
                    <button 
                      onClick={() => handleMoveToOps(o.id)} 
                      className="btn" 
                      style={{ background: 'var(--success)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      📦 Move to CAD Upload
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
