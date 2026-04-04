"use client";

import { useState } from 'react';
import { uploadCadDesigns } from '../actions/order-flow';
import { useRouter } from 'next/navigation';

export default function ActiveOrdersClient({ orders }: { orders: any[] }) {
  const router = useRouter();

  if (orders.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No active orders from sales yet.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {orders.map((order: any) => (
        <ActiveOrderCard key={order.id} order={order} onRefresh={() => router.refresh()} />
      ))}
    </div>
  );
}

function ActiveOrderCard({ order, onRefresh }: { order: any, onRefresh: () => void }) {
  const mto = order.mtoQuery;
  const est = mto?.estimations?.[0];
  const vendorEst = mto?.vendorEstimations?.[0];
  const existingCads: string[] = order.cadDesigns ? JSON.parse(order.cadDesigns) : [];

  const [cadUrl, setCadUrl] = useState('');
  const [cadFile, setCadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleAddUrl = async () => {
    if (!cadUrl.trim()) return;
    setUploading(true);
    try {
      await uploadCadDesigns(mto.id, [cadUrl.trim()]);
      setCadUrl('');
      onRefresh();
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setUploading(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Convert to base64 data URL for storage
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      try {
        await uploadCadDesigns(mto.id, [dataUrl]);
        onRefresh();
      } catch (err: any) {
        alert('Error: ' + err.message);
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleShare = () => {
    const origin = window.location.origin;
    const shareUrl = `${origin}/share/order/${mto.id}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Order Share Link copied!');
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.3rem' }}>
            <h3 style={{ margin: 0 }}>{mto?.customer?.name}</h3>
            <span className="badge badge-info">Order: {order.orderRefId}</span>
            <span className={`badge ${order.orderStatus === 'CAD_UPLOADED' ? 'badge-success' : 'badge-warning'}`}>
              {order.orderStatus === 'CAD_UPLOADED' ? 'CAD Added' : 'Awaiting CAD'}
            </span>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            MTO-{String(mto?.queryNo).padStart(4, '0')} • {mto?.category} • {mto?.goldKaratage || ''} {mto?.metalType}
          </div>
        </div>
        <button onClick={handleShare} className="btn" style={{ padding: '0.5rem 1rem', background: 'var(--info)', color: 'white', fontSize: '0.85rem' }}>
          🔗 Share Link
        </button>
      </div>

      {/* Requirements Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem' }}>
          <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Customer Requirements</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
            <div>Category: <strong>{mto?.category}</strong></div>
            <div>Metal: <strong>{mto?.goldKaratage} {mto?.metalType} {mto?.metalColor || ''}</strong></div>
            <div>Studded: <strong>{mto?.isStudded ? 'Yes' : 'No'}</strong></div>
            <div>Target Weight: <strong>{mto?.weightRange}</strong></div>
            {mto?.size && <div>Size: <strong>{mto.size}</strong></div>}
            {mto?.notes && <div style={{ marginTop: '0.3rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>"{mto.notes}"</div>}
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '1rem' }}>
          <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Vendor Estimates</h4>
          {vendorEst ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
              <div>Vendor: <strong>{vendorEst.vendorName}</strong></div>
              <div>Gold Weight: <strong>{vendorEst.goldWeight}</strong></div>
              {vendorEst.diamondWeight && <div>Diamond: <strong>{vendorEst.diamondWeight}</strong></div>}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No vendor estimate available</p>
          )}
        </div>
      </div>

      {/* Existing CAD Designs */}
      {existingCads.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.8rem' }}>CAD Designs ({existingCads.length})</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {existingCads.map((cad, i) => (
              <div key={i} style={{ border: '1px solid var(--surface-border)', borderRadius: '8px', overflow: 'hidden', width: '150px' }}>
                {cad.startsWith('data:image') || cad.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? (
                  <img src={cad} alt={`CAD ${i + 1}`} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                ) : (
                  <a href={cad} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '1rem', fontSize: '0.8rem', color: 'var(--info)', wordBreak: 'break-all' }}>
                    {cad.length > 30 ? cad.substring(0, 30) + '...' : cad}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Section */}
      <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '1rem' }}>Add CAD Design</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'end' }}>
          {/* URL Input */}
          <div style={{ flex: 1, minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Image URL</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="text" value={cadUrl} onChange={e => setCadUrl(e.target.value)} placeholder="https://..." style={{ flex: 1, padding: '0.6rem' }} />
              <button onClick={handleAddUrl} className="btn" disabled={uploading || !cadUrl.trim()} style={{ padding: '0.6rem 1rem', background: 'var(--primary)', color: 'white' }}>
                Add
              </button>
            </div>
          </div>
          {/* File Upload */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Or Upload Image</label>
            <input type="file" accept="image/*" onChange={handleFileUpload} disabled={uploading} style={{ padding: '0.4rem' }} />
          </div>
        </div>
        {uploading && <p style={{ marginTop: '0.5rem', color: 'var(--warning)' }}>Uploading...</p>}
      </div>
    </div>
  );
}
