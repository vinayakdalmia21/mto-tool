"use client";

import { recordQcActuals, markAsBilled } from '../actions/qc';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QcItemCard({ po }: { po: any }) {
  const router = useRouter();
  const [rejectMode, setRejectMode] = useState(false);
  const [passMode, setPassMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Promised Data (from the Order Snapshot)
  const promised = po.mtoOrder;
  const queryPricing = po.mtoOrder.mtoQuery?.pricing;
  const vendorEst = po.mtoOrder.mtoQuery?.vendorEstimations?.[0];

  // Actuals State (Detailed Pricing Table)
  const [actuals, setActuals] = useState({
    goldWeight: promised?.goldWeight || queryPricing?.goldWeight || vendorEst?.goldWeight || 0,
    goldRate: promised?.goldRate || queryPricing?.goldRate || 0,
    diamondWeight: promised?.diamondWeight || queryPricing?.diamondWeight || vendorEst?.diamondWeight || 0,
    diamondRate: promised?.diamondRate || queryPricing?.diamondRate || vendorEst?.diamondRate || 0,
    makingPercent: promised?.makingPercent || queryPricing?.makingPercent || 0,
    otherStones: promised?.otherStones || queryPricing?.otherStones || 0,
    discountPercent: promised?.discountPercent || queryPricing?.discountPercent || 0,
    gstPercent: 3,
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setActuals(prev => ({ ...prev, [field]: value === "" ? "" : parseFloat(value) }));
  };

  // Calculations (Mirroring EstimationForm logic)
  const goldValue = Number(actuals.goldWeight) * Number(actuals.goldRate);
  const diamondValue = Number(actuals.diamondWeight) * Number(actuals.diamondRate);
  const makingCharges = goldValue * (Number(actuals.makingPercent) / 100);
  const subtotal = goldValue + diamondValue + makingCharges + Number(actuals.otherStones);
  const discountAmount = makingCharges * (Number(actuals.discountPercent) / 100);
  const taxableTotal = subtotal - discountAmount;
  const gstAmount = taxableTotal * (Number(actuals.gstPercent) / 100);
  const actualTotal = taxableTotal + gstAmount;
  const difference = actualTotal - (promised?.totalAmount || queryPricing?.finalPrice || 0);

  async function handleSaveActuals(status: string) {
    setLoading(true);
    try {
      await recordQcActuals(po.id, {
        actualGoldWeight: Number(actuals.goldWeight),
        actualGoldRate: Number(actuals.goldRate),
        actualDiamondWeight: Number(actuals.diamondWeight),
        actualDiamondRate: Number(actuals.diamondRate),
        actualMakingPercent: Number(actuals.makingPercent),
        actualOtherStones: Number(actuals.otherStones),
        actualDiscountPercent: Number(actuals.discountPercent),
        actualTaxableTotal: taxableTotal,
        actualGstAmount: gstAmount,
        actualFinalValue: actualTotal,
        notes: actuals.notes,
        status: status
      });
      if (status === 'PASS') setPassMode(true);
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
            Vendor: <strong>{po.vendorName}</strong> | {po.mtoOrder.mtoQuery?.customer?.name || 'Unknown'}
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
        {/* Actuals Form - Detailed Pricing Table */}
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)' }}>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>📥 Recording Actuals</h4>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <tbody>
              {/* Gold Row */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.6rem 0' }}>Gold ({po.mtoOrder.mtoQuery?.goldKaratage || 'N/A'})</td>
                <td style={{ padding: '0.6rem 0.5rem' }}>
                  <input type="number" step="0.001" value={actuals.goldWeight} onChange={e => handleInputChange('goldWeight', e.target.value)} style={{ width: '60px', padding: '0.3rem' }} />g
                </td>
                <td style={{ padding: '0.6rem 0.5rem' }}>
                  @ ₹<input type="number" value={actuals.goldRate} onChange={e => handleInputChange('goldRate', e.target.value)} style={{ width: '80px', padding: '0.3rem' }} />
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600 }}>₹{goldValue.toLocaleString()}</td>
              </tr>

              {/* Diamond Row */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.6rem 0' }}>Diamond</td>
                <td style={{ padding: '0.6rem 0.5rem' }}>
                  <input type="number" step="0.01" value={actuals.diamondWeight} onChange={e => handleInputChange('diamondWeight', e.target.value)} style={{ width: '60px', padding: '0.3rem' }} />ct
                </td>
                <td style={{ padding: '0.6rem 0.5rem' }}>
                  @ ₹<input type="number" value={actuals.diamondRate} onChange={e => handleInputChange('diamondRate', e.target.value)} style={{ width: '80px', padding: '0.3rem' }} />
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600 }}>₹{diamondValue.toLocaleString()}</td>
              </tr>

              {/* Making Row */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.6rem 0' }}>Making</td>
                <td style={{ padding: '0.6rem 0.5rem' }} colSpan={2}>
                  <input type="number" value={actuals.makingPercent} onChange={e => handleInputChange('makingPercent', e.target.value)} style={{ width: '40px', padding: '0.3rem' }} />% of Gold Value
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600 }}>₹{makingCharges.toLocaleString()}</td>
              </tr>

              {/* Other Stones Row */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.6rem 0' }}>Other Stones</td>
                <td style={{ padding: '0.6rem 0.5rem' }} colSpan={2}>
                  Raw Value (₹)
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600 }}>
                  ₹<input type="number" value={actuals.otherStones} onChange={e => handleInputChange('otherStones', e.target.value)} style={{ width: '80px', padding: '0.3rem', textAlign: 'right' }} />
                </td>
              </tr>

              {/* Discount Row */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.6rem 0' }}>Discount</td>
                <td style={{ padding: '0.6rem 0.5rem' }} colSpan={2}>
                  <input type="number" value={actuals.discountPercent} onChange={e => handleInputChange('discountPercent', e.target.value)} style={{ width: '40px', padding: '0.3rem' }} />% off Making
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600, color: 'var(--error)' }}>
                  -₹{discountAmount.toLocaleString()}
                </td>
              </tr>

              {/* GST Row */}
              <tr>
                <td style={{ padding: '0.6rem 0' }}>GST</td>
                <td style={{ padding: '0.6rem 0.5rem' }} colSpan={2}>
                  Fixed 3%
                </td>
                <td style={{ padding: '0.6rem 0', textAlign: 'right', fontWeight: 600 }}>₹{gstAmount.toLocaleString()}</td>
              </tr>

              {/* Final Row */}
              <tr style={{ borderTop: '2px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.8rem 0.5rem' }} colSpan={3}><strong>TOTAL ACTUAL VALUE</strong></td>
                <td style={{ padding: '0.8rem 0.5rem', textAlign: 'right', fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 800 }}>
                  ₹{actualTotal.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button onClick={() => handleSaveActuals('PASS')} className="btn btn-primary" disabled={loading} style={{ flex: 1 }}>Pass QC</button>
            <button onClick={() => handleSaveActuals('REJECT')} className="btn" disabled={loading} style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--danger)' }}>Reject</button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.15)' }}>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>📊 Promised vs Actual Comparison</h4>
          <table style={{ width: '100%', fontSize: '0.82rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <th style={{ padding: '0.5rem 0', color: 'var(--text-muted)', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '0.5rem 0.5rem', textAlign: 'right' }}>Promised</th>
                <th style={{ padding: '0.5rem 0.5rem', textAlign: 'right' }}>Actual</th>
                <th style={{ padding: '0.5rem 0.5rem', textAlign: 'right' }}>Diff</th>
              </tr>
            </thead>
            <tbody>
              {/* Gold Comparison */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <td style={{ padding: '0.5rem 0' }}>Gold ({po.mtoOrder.mtoQuery?.goldKaratage || 'N/A'})</td>
                <td style={{ textAlign: 'right' }}>₹{((promised?.goldRate || 0) * (Number(promised?.goldWeight) || 0)).toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{goldValue.toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: goldValue > ((promised?.goldRate || 0) * (Number(promised?.goldWeight) || 0)) ? 'var(--error)' : 'var(--success)' }}>
                  ₹{(goldValue - ((promised?.goldRate || 0) * (Number(promised?.goldWeight) || 0))).toLocaleString()}
                </td>
              </tr>

              {/* Diamond Comparison */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <td style={{ padding: '0.5rem 0' }}>Diamond</td>
                <td style={{ textAlign: 'right' }}>₹{((promised?.diamondRate || 0) * (promised?.diamondWeight || 0)).toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{diamondValue.toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: diamondValue > ((promised?.diamondRate || 0) * (promised?.diamondWeight || 0)) ? 'var(--error)' : 'var(--success)' }}>
                  ₹{(diamondValue - ((promised?.diamondRate || 0) * (promised?.diamondWeight || 0))).toLocaleString()}
                </td>
              </tr>

              {/* Making Comparison */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <td style={{ padding: '0.5rem 0' }}>Making</td>
                <td style={{ textAlign: 'right' }}>₹{( (promised?.goldRate || 0) * (Number(promised?.goldWeight) || 0) * (promised?.makingPercent || 0) / 100 ).toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{makingCharges.toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{(makingCharges - ((promised?.goldRate || 0) * (Number(promised?.goldWeight) || 0) * (promised?.makingPercent || 0) / 100)).toLocaleString()}</td>
              </tr>

              {/* Discount Comparison */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <td style={{ padding: '0.5rem 0' }}>Discount</td>
                <td style={{ textAlign: 'right', color: 'var(--error)' }}>-₹{(Number(promised?.discountAmount) || 0).toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: 'var(--error)' }}>-₹{discountAmount.toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{( (Number(promised?.discountAmount) || 0) - discountAmount ).toLocaleString()}</td>
              </tr>

              {/* GST Comparison */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <td style={{ padding: '0.5rem 0' }}>GST (3%)</td>
                <td style={{ textAlign: 'right' }}>₹{(promised?.gstAmount || 0).toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{gstAmount.toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>₹{(gstAmount - (promised?.gstAmount || 0)).toLocaleString()}</td>
              </tr>

              {/* Grand Total Comparison */}
              <tr style={{ fontWeight: 700, background: 'rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>
                <td style={{ padding: '0.8rem 0.5rem' }}>TOTAL</td>
                <td style={{ textAlign: 'right', padding: '0.8rem 0.5rem' }}>
                  ₹{( (Number(promised?.totalAmount) || 0) + (Number(promised?.gstAmount) || 0) || queryPricing?.finalPrice || 0 ).toLocaleString()}
                </td>
                <td style={{ textAlign: 'right', padding: '0.8rem 0.5rem', color: 'var(--primary)' }}>₹{actualTotal.toLocaleString()}</td>
                <td style={{ textAlign: 'right', padding: '0.8rem 0.5rem', color: difference > 0 ? 'var(--error)' : 'var(--success)' }}>
                  ₹{(actualTotal - ((Number(promised?.totalAmount) || 0) + (Number(promised?.gstAmount) || 0) || queryPricing?.finalPrice || 0)).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          {(po.qcRecord?.status === 'PASS' || passMode) && !po.qcRecord?.isBilled && (
            <div id="finalize-section" style={{ 
              marginTop: '1.5rem', 
              textAlign: 'center', 
              background: 'rgba(16, 185, 129, 0.15)', 
              padding: '1.25rem', 
              borderRadius: '12px',
              border: '1px solid var(--success)',
              animation: 'pulse 2s infinite'
            }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem', fontWeight: 600 }}>
                QC Passed! Comparison looks good? Proceed to final billing.
              </p>
              <button 
                onClick={handleFinalizeBilling} 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.8rem', fontSize: '1rem' }}
                disabled={loading}
              >
                {loading ? 'Processing...' : '✅ Finalize & Mark as Billed'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
