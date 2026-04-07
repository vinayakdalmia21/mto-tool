"use client";

import { useState } from 'react';
import { saveEstimation } from '../../actions/estimation';
import { lockPrice } from '../../actions/order-flow';
import { useRouter } from 'next/navigation';

export default function EstimationForm({ 
  mtoId, 
  mto, 
  vendorLimit, 
  globalPricing 
}: { 
  mtoId: string, 
  mto: any,
  vendorLimit: any,
  globalPricing: any 
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [savedId, setSavedId] = useState<number | null>(null);
  const [locking, setLocking] = useState(false);
  const [priceLocked, setPriceLocked] = useState(false);
  
  const isLocked = ['PRICE_LOCKED', 'ORDER_PLACED', 'CAD_UPLOADED', 'COMPLETED'].includes(mto.status);

  // Dynamic Pricing Extraction
  const karr = mto.goldKaratage || '18K';
  const pricingMap: Record<string, number> = {
    '9K': globalPricing.rate9k,
    '14K': globalPricing.rate14k,
    '18K': globalPricing.rate18k,
    '22K': globalPricing.rate22k,
    '24K': globalPricing.rate24k,
  };
  const baseGoldRate = pricingMap[karr] || globalPricing.rate18k || 0;
  
  const extractNum = (str: string | null | undefined) => {
    if (!str) return '';
    const match = str.match(/\d+(?:\.\d+)?/);
    return match ? match[0] : '';
  };

  // Extract latest estimation values for persistence
  const latestSaved = mto.estimations?.[0];
  
  // Inputs - Prioritize latest saved version, then vendor confirmed limits, then global defaults
  const [goldWeight, setGoldWeight] = useState(latestSaved?.goldWeight || extractNum(vendorLimit?.goldWeight) || '0');
  const [goldRate, setGoldRate] = useState(latestSaved?.goldRate?.toString() || baseGoldRate.toString());
  const [diamondWeight, setDiamondWeight] = useState(latestSaved?.diamondWeight?.toString() || extractNum(vendorLimit?.diamondWeight) || '0');
  const [diamondRate, setDiamondRate] = useState(latestSaved?.diamondRate?.toString() || (globalPricing.diamondRate || 0).toString());
  const [makingPercent, setMakingPercent] = useState(latestSaved?.makingPercent?.toString() || '10');
  const [otherStones, setOtherStones] = useState(latestSaved?.otherStones?.toString() || '0');
  const [discountPercent, setDiscountPercent] = useState(latestSaved?.discountPercent?.toString() || '25');
  const [notes, setNotes] = useState(latestSaved?.notes || '');

  // Calculations
  const goldAmount = (parseFloat(goldWeight) || 0) * (parseFloat(goldRate) || 0);
  const diamondAmount = (parseFloat(diamondWeight) || 0) * (parseFloat(diamondRate) || 0);
  const makingAmount = goldAmount * (parseFloat(makingPercent) / 100);
  const otherAmount = parseFloat(otherStones) || 0;
  
  const discountAmount = Number((makingAmount * (parseFloat(discountPercent) / 100)).toFixed(2));
  const taxableSubtotal = Number((goldAmount + diamondAmount + otherAmount + makingAmount - discountAmount).toFixed(2));
  
  const gstAmount = Number((taxableSubtotal * 0.03).toFixed(2));
  const finalValue = Number((taxableSubtotal + gstAmount).toFixed(2));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await saveEstimation(mtoId, {
      goldWeight,
      goldRate,
      diamondWeight,
      diamondRate,
      makingPercent,
      discountPercent,
      otherStones,
      gstAmount: gstAmount.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      totalAmount: finalValue.toFixed(2),
      finalEstimatedPrice: finalValue.toFixed(2),
      notes
    });
    setLoading(false);
    if(res.success) {
       setSavedId(res.estimationId);
       router.refresh();
    }
  }

  const handleShare = () => {
    const origin = window.location.origin;
    const shareUrl = `${origin}/share/estimate/${mtoId}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Estimation Share Link copied to clipboard!');
  };

  const handleLockPrice = async () => {
    setLocking(true);
    try {
      await lockPrice(mtoId);
      setPriceLocked(true);
      router.refresh();
    } catch (err: any) {
      alert('Error locking price: ' + err.message);
    }
    setLocking(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {!isLocked ? (
        <form onSubmit={handleSubmit}>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--surface-border)' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <th style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'left' }}>Item</th>
                  <th style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}>Weight (gms/ct)</th>
                  <th style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}>Rate</th>
                  <th style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* GOLD ROW */}
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600 }}>Gold ({karr})</td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" step="0.001" value={goldWeight} onChange={e => setGoldWeight(e.target.value)} style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" value={goldRate} onChange={e => setGoldRate(e.target.value)} style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    ₹{goldAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* DIAMOND ROW */}
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600 }}>Diamond</td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" step="0.001" value={diamondWeight} onChange={e => setDiamondWeight(e.target.value)} style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" value={diamondRate} onChange={e => setDiamondRate(e.target.value)} style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    ₹{diamondAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* OTHER STONES */}
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600 }}>Other Stones</td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    <input type="number" value={otherStones} onChange={e => setOtherStones(e.target.value)} style={{ padding: '0.4rem', width: '80px', textAlign: 'right' }} />
                  </td>
                </tr>
                {/* MAKING CHARGES */}
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600 }}>
                    Making ({makingPercent}%)
                  </td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" value={makingPercent} onChange={e => setMakingPercent(e.target.value)} placeholder="%" style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    ₹{makingAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* DISCOUNT ROW */}
                <tr>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600, color: 'var(--success)' }}>
                    Discount on Making ({discountPercent}%)
                  </td>
                  <td style={{ padding: '0.5rem', border: '1px solid var(--surface-border)' }}>
                    <input type="number" value={discountPercent} onChange={e => setDiscountPercent(e.target.value)} placeholder="%" style={{ padding: '0.4rem', width: '100%' }} />
                  </td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right', color: 'var(--success)' }}>
                    - ₹{discountAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* SUBTOTAL ROW */}
                <tr style={{ background: 'rgba(255,255,255,0.05)', fontWeight: 700 }}>
                  <td colSpan={3} style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>Taxable Subtotal</td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    ₹{taxableSubtotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* GST ROW */}
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', fontWeight: 600 }}>GST (3%)</td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)' }}></td>
                  <td style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>
                    ₹{gstAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                {/* FINAL VALUE */}
                <tr style={{ background: 'var(--surface-light)', fontWeight: 800, fontSize: '1.2rem' }}>
                  <td colSpan={3} style={{ padding: '1rem', border: '1px solid var(--surface-border)', textAlign: 'right' }}>Final Value</td>
                  <td style={{ padding: '1rem', border: '1px solid var(--surface-border)', textAlign: 'right', color: 'var(--primary)' }}>
                    ₹{finalValue.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
             <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Additional Notes (Customer Facing)</label>
             <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} style={{ width: '100%', padding: '0.8rem' }} placeholder="Terms, delivery time, etc."></textarea>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ padding: '0.8rem 2rem' }}>
              {loading ? 'Saving...' : 'Save Estimation'}
            </button>
          </div>
        </form>
      ) : (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', border: '1px solid var(--primary)', background: 'rgba(139, 92, 246, 0.05)' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>🔒 Price Locked</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            The price for this query has been finalized. Quotation editing is now disabled.
          </p>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            Final Value: ₹{mto.estimations?.[0]?.finalEstimatedPrice?.toLocaleString() || 'N/A'}
          </div>

          <button onClick={handleShare} className="btn" style={{ margin: '0 auto', background: 'var(--info)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.5rem' }}>
             📋 Share Estimate Link
          </button>
        </div>
      )}

      {savedId && (
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid var(--success)' }}>
          <div>
            <h4 style={{ color: 'var(--success)', marginBottom: '0.2rem' }}>Estimation Saved Successfully!</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>You can share this quote or lock the price for order placement.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={handleShare} className="btn" style={{ background: 'var(--info)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               📋 Share Estimate Link
            </button>
            <button onClick={handleLockPrice} className="btn" disabled={locking || priceLocked} style={{ background: priceLocked ? 'var(--success)' : 'var(--warning)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               {priceLocked ? '✅ Price Locked' : locking ? '🔒 Locking...' : '🔒 Lock Price'}
            </button>
          </div>
          {priceLocked && (
            <p style={{ fontSize: '0.85rem', color: 'var(--success)', margin: 0 }}>
              Price locked at ₹{finalValue.toLocaleString()}. Go to <strong>MTO & Advance</strong> to enter advance payment.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
