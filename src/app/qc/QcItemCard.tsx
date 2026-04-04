"use client";

import { recordQcActuals, markAsBilled } from '../actions/qc';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QcItemCard({ po }: { po: any }) {
  const router = useRouter();
  const [rejectMode, setRejectMode] = useState(false);
  const [passMode, setPassMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Promised Data (from Pricing/Vendor Est)
  const promised = po.mtoOrder.mtoQuery.pricing;
  const vendorEst = po.mtoOrder.mtoQuery.vendorEstimations[0];

  // Actuals State
  const [actuals, setActuals] = useState({
    goldWeight: promised?.goldWeight || vendorEst?.goldWeight || 0,
    makingCharges: vendorEst?.makingCharges || 0,
    stoneWeight: vendorEst?.diamondWeight || 0,
    stoneValue: vendorEst?.diamondValue || 0,
    otherCharges: 0,
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setActuals(prev => ({ ...prev, [field]: value === "" ? "" : parseFloat(value) }));
  };

  // Calculations for Comparison
  const promisedGoldValue = (promised?.goldRate || 0) * (parseFloat(promised?.goldWeight) || 0);
  const actualGoldValue = (promised?.goldRate || 0) * (actuals.goldWeight || 0);
  
  const actualTotal = actualGoldValue + (actuals.makingCharges * (actuals.goldWeight || 0)) + (actuals.stoneValue || 0) + (actuals.otherCharges || 0);
  const difference = actualTotal - (promised?.finalPrice || 0);

  async function handleSaveActuals(status: string) {
    setLoading(true);
    try {
      await recordQcActuals(po.id, {
        actualGoldWeight: Number(actuals.goldWeight),
        actualMakingCharges: Number(actuals.makingCharges),
        actualStoneWeight: Number(actuals.stoneWeight),
        actualStoneValue: Number(actuals.stoneValue),
        actualOtherCharges: Number(actuals.otherCharges),
        notes: actuals.notes,
        status: status
      });
      if (status === 'PASS') {
        setPassMode(true);
      }
      router.refresh();
      alert(`Status updated to ${status}`);
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
    setLoading(false);
  }

  async function handleFinalizeBilling() {
    if (!po.qcRecord) return;
    setLoading(true);
    await markAsBilled(po.qcRecord.id);
    router.refresh();
    setLoading(false);
    alert('Marked as Billed. Order complete.');
  }

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ margin: 0 }}>PO #{String(po.id).padStart(4, '0')}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Vendor: <strong>{po.vendorName}</strong> | {po.mtoOrder.mtoQuery.customer.name}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className={`badge ${po.qcRecord?.status === 'PASS' ? 'badge-success' : 'badge-warning'}`}>
            QC: {po.qcRecord?.status || 'PENDING'}
          </span>
          {po.qcRecord?.isBilled && <span className="badge badge-primary" style={{ marginLeft: '0.5rem' }}>BILLED</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Actuals Form */}
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)' }}>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>📥 Recording Actuals</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gold Weight (g)</label>
              <input type="number" step="0.001" value={actuals.goldWeight} onChange={e => handleInputChange('goldWeight', e.target.value)} style={{ padding: '0.5rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Making Chg (₹/g)</label>
              <input type="number" value={actuals.makingCharges} onChange={e => handleInputChange('makingCharges', e.target.value)} style={{ padding: '0.5rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Stone Weight (ct)</label>
              <input type="number" step="0.01" value={actuals.stoneWeight} onChange={e => handleInputChange('stoneWeight', e.target.value)} style={{ padding: '0.5rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Stone Value (₹)</label>
              <input type="number" value={actuals.stoneValue} onChange={e => handleInputChange('stoneValue', e.target.value)} style={{ padding: '0.5rem' }} />
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button onClick={() => handleSaveActuals('PASS')} className="btn btn-primary" disabled={loading} style={{ flex: 1 }}>Pass QC</button>
            <button onClick={() => handleSaveActuals('REJECT')} className="btn" disabled={loading} style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--danger)' }}>Reject</button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.15)' }}>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>📊 Promised vs Actual Comparison</h4>
          <table style={{ width: '100%', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <th style={{ padding: '0.5rem 0', color: 'var(--text-muted)' }}>Item</th>
                <th style={{ padding: '0.5rem 0' }}>Promised</th>
                <th style={{ padding: '0.5rem 0' }}>Actual</th>
                <th style={{ padding: '0.5rem 0', textAlign: 'right' }}>Diff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem 0' }}>Gold</td>
                <td>{promised?.goldWeight}g</td>
                <td>{actuals.goldWeight}g</td>
                <td style={{ textAlign: 'right', color: actuals.goldWeight > (parseFloat(promised?.goldWeight) || 0) ? 'var(--warning)' : 'var(--success)' }}>
                  {(parseFloat(actuals.goldWeight.toString()) - (parseFloat(promised?.goldWeight) || 0)).toFixed(3)}g
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0' }}>Stone Value</td>
                <td>₹{vendorEst?.diamondValue || 0}</td>
                <td>₹{actuals.stoneValue}</td>
                <td style={{ textAlign: 'right' }}>₹{(actuals.stoneValue - (vendorEst?.diamondValue || 0)).toLocaleString()}</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--surface-border)', fontWeight: 700 }}>
                <td style={{ padding: '0.5rem 0' }}>TOTAL</td>
                <td>₹{promised?.finalPrice?.toLocaleString()}</td>
                <td>₹{actualTotal.toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: difference > 0 ? 'var(--error)' : 'var(--success)' }}>
                  ₹{difference.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          {po.qcRecord?.status === 'PASS' && !po.qcRecord?.isBilled && (
            <div style={{ marginTop: '1.5rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem' }}>Comparison looks good? Proceed to final billing.</p>
              <button onClick={handleFinalizeBilling} className="btn btn-primary" style={{ width: '100%' }}>
                ✅ Finalize & Mark as Billed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
