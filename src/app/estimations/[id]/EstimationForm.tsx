"use client";

import { useState, useMemo } from 'react';
import { saveEstimation } from '../../actions/estimation';
import { useRouter } from 'next/navigation';

export default function EstimationForm({ mtoId, isStudded }: { mtoId: string, isStudded: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [goldWeight, setGoldWeight] = useState('10');
  const [goldRate, setGoldRate] = useState('6500'); // per gram
  const [wastage, setWastage] = useState('12'); // %
  const [makingCharges, setMakingCharges] = useState('800'); // flat or per gram? Let's say flat logic for demo, or per gram as user specifies. We will just use it as Flat Addition for simplicity, or actually per gram. Let's do per gram.
  
  const [diamondWeight, setDiamondWeight] = useState('0');
  const [diamondRate, setDiamondRate] = useState('50000'); // per carat
  
  // Calculations
  const calculatedGoldValue = useMemo(() => {
    const gw = parseFloat(goldWeight) || 0;
    const gr = parseFloat(goldRate) || 0;
    const w = parseFloat(wastage) || 0;
    // value = weight * rate + (weight * wastage%) * rate
    return (gw * gr) + (gw * (w / 100) * gr);
  }, [goldWeight, goldRate, wastage]);

  const calculatedDiamondValue = useMemo(() => {
    return (parseFloat(diamondWeight) || 0) * (parseFloat(diamondRate) || 0);
  }, [diamondWeight, diamondRate]);

  const calculatedMC = useMemo(() => {
    return (parseFloat(goldWeight) || 0) * (parseFloat(makingCharges) || 0);
  }, [goldWeight, makingCharges]);

  const subTotal = calculatedGoldValue + calculatedDiamondValue + calculatedMC;
  const gst = subTotal * 0.03;
  const grandTotal = subTotal + gst;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await saveEstimation(mtoId, {
      goldWeight,
      goldRate,
      diamondWeight,
      diamondRate,
      makingCharges,
      wastage,
      finalEstimatedPrice: grandTotal.toFixed(2)
    });
    setLoading(false);
    if(res.success) {
       router.push('/mtos'); // redirect back to CRM
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* GOLD SPECS */}
        <div style={{ padding: '1rem', border: '1px solid var(--surface-border)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Gold Details</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Approx Gold Weight (grams)</label>
              <input type="number" step="0.01" value={goldWeight} onChange={e => setGoldWeight(e.target.value)} required />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Gold Rate (/gram)</label>
              <input type="number" value={goldRate} onChange={e => setGoldRate(e.target.value)} required />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Wastage (%)</label>
              <input type="number" step="0.1" value={wastage} onChange={e => setWastage(e.target.value)} required />
            </div>
          </div>
        </div>

        {/* DIAMOND SPECS */}
        <div style={{ padding: '1rem', border: '1px solid var(--surface-border)', borderRadius: '8px', opacity: isStudded ? 1 : 0.5 }}>
          <h4 style={{ color: 'var(--info)', marginBottom: '1rem' }}>Diamond Details</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Diamond Weight (Ct)</label>
              <input type="number" step="0.01" value={diamondWeight} onChange={e => setDiamondWeight(e.target.value)} disabled={!isStudded} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Diamond Rate (/Ct)</label>
              <input type="number" value={diamondRate} onChange={e => setDiamondRate(e.target.value)} disabled={!isStudded} />
            </div>
          </div>
        </div>

        {/* MAKING CHARGES */}
        <div style={{ gridColumn: '1 / -1', padding: '1rem', border: '1px solid var(--surface-border)', borderRadius: '8px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Making Charges (/gram)</label>
            <input type="number" value={makingCharges} onChange={e => setMakingCharges(e.target.value)} required />
          </div>
        </div>

      </div>

      {/* LIVE BREAKDOWN */}
      <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Live Cost Breakdown</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Gold Value (incl. {wastage}% wastage)</span>
            <span>₹{calculatedGoldValue.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          {isStudded && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Diamond Value</span>
              <span>₹{calculatedDiamondValue.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Making Charges</span>
            <span>₹{calculatedMC.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          <div style={{ height: '1px', background: 'var(--surface-border)', margin: '0.5rem 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
            <span>₹{subTotal.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>GST (3%)</span>
            <span>₹{gst.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          
          <div style={{ height: '1px', background: 'var(--surface-border)', margin: '0.5rem 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)' }}>
            <span>Final Estimated Amount</span>
            <span>₹{grandTotal.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save & Send Estimate'}
        </button>
      </div>
    </form>
  )
}
