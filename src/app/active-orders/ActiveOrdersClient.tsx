"use client";

import { useState } from 'react';
import { uploadCadDesigns } from '../actions/order-flow';
import { useRouter } from 'next/navigation';

export default function ActiveOrdersClient({ orders }: { orders: any[] }) {
  const router = useRouter();
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  if (orders.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No active orders from sales yet.</p>
      </div>
    );
  }

  // Sort orders: ORDER_PLACED (Awaiting CAD) on top
  const sortedOrders = [...orders].sort((a, b) => {
    const statusA = a.mtoQuery?.status || 'ORDER_PLACED';
    const statusB = b.mtoQuery?.status || 'ORDER_PLACED';
    if (statusA === 'ORDER_PLACED' && statusB !== 'ORDER_PLACED') return -1;
    if (statusA !== 'ORDER_PLACED' && statusB === 'ORDER_PLACED') return 1;
    return 0;
  });

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>MTO ID</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Order Ref</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Customer</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Category</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Status</th>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => (
            <React.Fragment key={order.id}>
              <tr 
                onClick={() => setExpandedOrderId(expandedOrderId === order.mtoQueryId ? null : order.mtoQueryId)}
                style={{ 
                  borderBottom: '1px solid var(--surface-border)', 
                  cursor: 'pointer',
                  background: expandedOrderId === order.mtoQueryId ? 'rgba(255,255,255,0.05)' : 'transparent'
                }} 
                className="glass-panel-interactive"
              >
                <td style={{ padding: '1rem', fontWeight: 600 }}>MTO-{String(order.mtoQuery.queryNo).padStart(4, '0')}</td>
                <td style={{ padding: '1rem' }}>
                  <span className="badge badge-info">{order.orderRefId}</span>
                </td>
                <td style={{ padding: '1rem' }}>{order.mtoQuery.customer.name}</td>
                <td style={{ padding: '1rem' }}>{order.mtoQuery.category}</td>
                <td style={{ padding: '1rem' }}>
                  {order.mtoQuery?.status === 'PO_PENDING' || order.mtoQuery?.status === 'COMPLETED' ? (
                    <span className="badge badge-success">At PO Stage</span>
                  ) : (
                    <span className={`badge ${order.mtoQuery?.status === 'CAD_UPLOADED' ? 'badge-success' : 'badge-warning'}`}>
                      {order.mtoQuery?.status === 'CAD_UPLOADED' ? 'CAD Added' : 'Awaiting CAD'}
                    </span>
                  )}
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <button className="btn" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                    {expandedOrderId === order.mtoQueryId ? 'Collapse' : 'Open CAD Upload'}
                  </button>
                </td>
              </tr>
              {expandedOrderId === order.mtoQueryId && (
                <tr>
                  <td colSpan={6} style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.1)' }}>
                    <ActiveOrderCard order={order} onRefresh={() => router.refresh()} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper to make React available if not global
import React from 'react';

function ActiveOrderCard({ order, onRefresh }: { order: any, onRefresh: () => void }) {
  const mto = order.mtoQuery;
  const vendorEst = mto?.vendorEstimations?.[0];
  const serverCads: string[] = order.cadDesigns ? JSON.parse(order.cadDesigns) : [];

  const [cadUrl, setCadUrl] = useState('');
  const [pendingCads, setPendingCads] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [cadRequired, setCadRequired] = useState(order.cadRequired ?? true);
  const [movingToPo, setMovingToPo] = useState(false);

  const handleAddPendingUrl = () => {
    if (!cadUrl.trim()) return;
    setPendingCads([...pendingCads, cadUrl.trim()]);
    setCadUrl('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setPendingCads([...pendingCads, dataUrl]);
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePending = (index: number) => {
    setPendingCads(pendingCads.filter((_, i) => i !== index));
  };

  const handleSaveAll = async () => {
    if (pendingCads.length === 0) return;
    setUploading(true);
    try {
      await uploadCadDesigns(mto.id, pendingCads);
      setPendingCads([]);
      onRefresh();
      alert('CAD designs saved successfully!');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setUploading(false);
  };

  const handleShare = () => {
    const origin = window.location.origin;
    const shareUrl = `${origin}/share/order/${mto.id}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Order Share Link copied!');
  };

  const handleMoveToPo = async () => {
    if (cadRequired && serverCads.length === 0 && pendingCads.length === 0) {
      if (!confirm('CAD is required but no designs are uploaded. Move to PO anyway?')) return;
    }
    setMovingToPo(true);
    try {
      const { moveToPurchaseOrder } = await import('../actions/order-flow');
      await moveToPurchaseOrder(mto.id);
      onRefresh();
      alert('Order moved to Purchase Order stage!');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setMovingToPo(false);
  };

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--surface)' }}>
      {/* Detail Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h4 style={{ margin: 0 }}>Design Management</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Manage requirements and CAD designs for this order.</p>
        </div>
        <button onClick={handleShare} className="btn" style={{ background: 'var(--info)', color: 'white' }}>
          🔗 Copy Share Link
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
          <h5 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Customer Requirements</h5>
          <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div>Category: <strong>{mto?.category}</strong></div>
            <div>Metal: <strong>{mto?.goldKaratage} {mto?.metalType} {mto?.metalColor || ''}</strong></div>
            <div>Target Weight: <strong>{mto?.weightRange}</strong></div>
            {mto?.notes && <div style={{ marginTop: '0.5rem', fontStyle: 'italic', opacity: 0.8 }}>"{mto.notes}"</div>}
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
          <h5 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Vendor Ref</h5>
          <div style={{ fontSize: '0.9rem' }}>
            <div>Vendor: <strong>{vendorEst?.vendorName || 'Not Assigned'}</strong></div>
            <div>Est. Gold Weight: <strong>{vendorEst?.goldWeight || '-'}</strong></div>
          </div>
        </div>
      </div>

      {/* Existing CAD Designs */}
      {serverCads.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ marginBottom: '1rem' }}>Uploaded Designs</h5>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {serverCads.map((cad, i) => (
              <div key={i} style={{ border: '1px solid var(--surface-border)', borderRadius: '8px', overflow: 'hidden', width: '120px' }}>
                <img src={cad} alt={`CAD ${i + 1}`} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload & Pending Section */}
      <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h5 style={{ margin: 0 }}>Step 1: CAD Requirements</h5>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>CAD Required?</span>
            <select 
              value={cadRequired ? "yes" : "no"} 
              onChange={e => setCadRequired(e.target.value === "yes")}
              style={{ padding: '0.4rem', borderRadius: '4px', background: 'var(--surface-light)', border: '1px solid var(--surface-border)' }}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {cadRequired && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '1rem' }}>
            <h5 style={{ marginBottom: '1rem' }}>Step 2: Add New Designs</h5>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.3rem' }}>Image URL</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="text" value={cadUrl} onChange={e => setCadUrl(e.target.value)} placeholder="https://..." style={{ flex: 1, padding: '0.5rem' }} />
                  <button onClick={handleAddPendingUrl} className="btn" disabled={!cadUrl.trim()}>Add to List</button>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.3rem' }}>File Upload</label>
                <input type="file" accept="image/*" onChange={handleFileUpload} disabled={uploading} style={{ padding: '0.4rem' }} />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
          <button 
            onClick={handleSaveAll} 
            className="btn" 
            style={{ flex: 1, padding: '0.8rem', background: 'var(--info)', color: 'white' }}
            disabled={uploading || (cadRequired && pendingCads.length === 0)}
          >
            {uploading ? 'Finalizing...' : '💾 Save CAD Configuration'}
          </button>
          <button 
            onClick={handleMoveToPo} 
            className="btn btn-primary" 
            style={{ flex: 1, padding: '0.8rem' }}
            disabled={movingToPo || mto.status === 'PO_PENDING' || mto.status === 'COMPLETED'}
          >
            {movingToPo ? 'Moving...' : (mto.status === 'PO_PENDING' || mto.status === 'COMPLETED' ? '✅ Moved to PO' : '🚀 Move to Purchase Order')}
          </button>
        </div>

        {/* Pending Preview */}
        {pendingCads.length > 0 && (
          <div style={{ marginBottom: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <h5 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Pending Changes (Not Saved Yet)</h5>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {pendingCads.map((cad, i) => (
                <div key={i} style={{ position: 'relative', width: '100px' }}>
                  <img src={cad} alt="Pending" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                  <button 
                    onClick={() => handleRemovePending(i)}
                    style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--error)', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button 
              onClick={handleSaveAll} 
              className="btn btn-primary" 
              style={{ marginTop: '1.5rem', width: '100%', padding: '0.8rem' }}
              disabled={uploading}
            >
              {uploading ? 'Saving...' : '💾 Save all CAD Designs'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
