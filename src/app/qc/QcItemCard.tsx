"use client";

import { processQcFail, processQcPassAndGenerateInvoice } from '../actions/qc';
import { useState } from 'react';

export default function QcItemCard({ po }: { po: any }) {
  const [rejectMode, setRejectMode] = useState(false);
  const [passMode, setPassMode] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [loading, setLoading] = useState(false);

  // Actuals
  const [actualGold, setActualGold] = useState("");
  const [actualDiamonds, setActualDiamonds] = useState("");

  const pricing = po.mtoOrder.mtoQuery.pricing;

  async function handleReject() {
    setLoading(true);
    await processQcFail(po.id, rejectReason);
    setLoading(false);
  }

  async function handlePass() {
    setLoading(true);
    await processQcPassAndGenerateInvoice(po.id, {
      actualGoldWeight: actualGold,
      actualDiamondValue: actualDiamonds
    });
    setLoading(false);
  }

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem' }}>PO: #{po.id} ({po.vendorName})</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>MTO Ref: {po.mtoOrder.mtoQuery.id.slice(-6).toUpperCase()} | Customer: {po.mtoOrder.mtoQuery.customer.name}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="badge badge-warning">QC PENDING</span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
            Iterations: {po.qcRecord ? po.qcRecord.iterations : 0}
          </p>
        </div>
      </div>

      {!rejectMode && !passMode && (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={() => setPassMode(true)}>QC Pass & Verify Actuals</button>
          <button className="btn" onClick={() => setRejectMode(true)} style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>Reject / Rework</button>
        </div>
      )}

      {rejectMode && (
        <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--danger)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>Reject Reason for Vendor</h4>
          <textarea rows={3} value={rejectReason} onChange={e => setRejectReason(e.target.value)} style={{ marginBottom: '1rem' }} placeholder="Specify defects..."></textarea>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button className="btn" onClick={handleReject} disabled={!rejectReason || loading} style={{ background: 'var(--danger)', color: 'white' }}>Confirm Reject & Sent to Vendor</button>
             <button className="btn" onClick={() => setRejectMode(false)} style={{ background: 'transparent' }}>Cancel</button>
          </div>
        </div>
      )}

      {passMode && (
        <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', marginBottom: '1rem' }}>⭐ Promised vs Actual Verification & Invoice Prep</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
             <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}>
                <h5 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Promised Specs (Customer Expectation)</h5>
                <div>Gold: <span style={{ fontWeight: 600 }}>{pricing?.goldWeight}g</span></div>
                <div>Making Chg: <span style={{ fontWeight: 600 }}>₹{pricing?.makingCharges}/g</span></div>
                <div>Locked Price: <span style={{ fontWeight: 600 }}>₹{pricing?.finalPrice.toLocaleString()}</span></div>
             </div>

             <div style={{ padding: '1rem', border: '1px solid var(--primary)', borderRadius: '6px' }}>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Actuals (Post-Production)</h5>
                <div style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Actual Gold Weight (g) *</label>
                  <input type="number" step="0.01" value={actualGold} onChange={e => setActualGold(e.target.value)} style={{ padding: '0.4rem' }} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Actual Diamond Value (₹) *</label>
                  <input type="number" value={actualDiamonds} onChange={e => setActualDiamonds(e.target.value)} style={{ padding: '0.4rem' }} required />
                </div>
             </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
             <button className="btn btn-primary" onClick={handlePass} disabled={!actualGold || !actualDiamonds || loading}>
               Generate Final Invoice & Compare
             </button>
             <button className="btn" onClick={() => setPassMode(false)} style={{ background: 'transparent' }}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
}
