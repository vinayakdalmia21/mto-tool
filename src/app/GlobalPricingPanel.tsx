"use client";

import { useState } from 'react';
import { useAuth } from './auth-context';
import { updateGlobalPricing, fetchLiveGoldRate } from './actions/pricing';
import { TrendingUp, Gem, Save, RefreshCw } from 'lucide-react';

export default function GlobalPricingPanel({ initialPricing }: { initialPricing: any }) {
  const { role } = useAuth();
  
  const [rates, setRates] = useState(initialPricing);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // Hide entirely if NOT operations
  if (role !== 'OPERATIONS') return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      You do not have permission to view global pricing defaults.
    </div>
  );

  async function handleLiveFetch() {
    setFetching(true);
    const res: any = await fetchLiveGoldRate();
    setFetching(false);
    
    if (res.success && res.rate24k) {
      const pure = parseFloat(res.rate24k);
      setRates({
        ...rates,
        rate24k: Math.round(pure),
        rate22k: Math.round(pure * (22/24)),
        rate18k: Math.round(pure * (18/24)),
        rate14k: Math.round(pure * (14/24)),
        rate9k:  Math.round(pure * (9/24)),
      });
    } else {
      alert("Failed to fetch live metals data: " + (res.error || 'Unknown error'));
    }
  }

  async function handleSave() {
    setLoading(true);
    const res = await updateGlobalPricing(rates);
    setLoading(false);
    if(res.success) {
      alert("Pricing parameters saved universally!");
    } else {
      alert("Error saving: " + res.error);
    }
  }

  return (
    <div style={{ maxWidth: 1200, margin: '2rem auto 0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Pricing Panel</h2>
          <p style={{ color: 'var(--text-muted)' }}>Set gold PG rates and diamond prices globally.</p>
        </div>
        <button onClick={handleSave} disabled={loading} className="btn" style={{ background: '#cca660', color: '#1a1a24', display: 'flex', gap: '0.5rem', alignItems: 'center', fontWeight: 600 }}>
          <Save size={16} />
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* GOLD PRICING CORE CARD */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
             <div style={{ background: 'rgba(255, 230, 150, 0.2)', padding: '0.8rem', borderRadius: '50%' }}>
               <TrendingUp size={24} color="#ffd45e" />
             </div>
             <div>
               <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 Gold Price Per Gram (PG)
                 <button onClick={handleLiveFetch} disabled={fetching} style={{ padding: '0.3rem 0.6rem', border: '1px solid #cca660', borderRadius: '20px', background: 'transparent', color: '#cca660', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                   <RefreshCw size={12} className={fetching ? "spin" : ""} />
                   Fetch Live Rates
                 </button>
               </h3>
               <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Set today's exact gold parameters automatically or manually</p>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {['9k', '14k', '18k', '22k', '24k'].map(karr => (
              <div key={karr}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  {karr}T
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>₹</span>
                  <input 
                    type="number"
                    value={rates[`rate${karr}`] || ''}
                    onChange={(e) => setRates({...rates, [`rate${karr}`]: parseFloat(e.target.value) || 0})}
                    style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.03)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIAMOND PRICING */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
               <div style={{ background: 'rgba(150, 200, 255, 0.2)', padding: '0.8rem', borderRadius: '50%' }}>
                 <Gem size={24} color="#96c8ff" />
               </div>
               <div>
                 <h3 style={{ fontSize: '1.2rem' }}>Diamond Price</h3>
                 <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Set current median diamond mapping.</p>
               </div>
            </div>

            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
              PRICE PER CARAT (₹)
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>₹</span>
              <input 
                type="number"
                value={rates.diamondRate || ''}
                onChange={(e) => setRates({...rates, diamondRate: parseFloat(e.target.value) || 0})}
                style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2rem', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.03)' }}
              />
            </div>
          </div>
        </div>
      </div>
    {/* Adds style rotation trick for icons globally if not existing */}
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes spin { 100% { transform: rotate(360deg); } }
      .spin { animation: spin 1s linear infinite; }
    `}} />
    </div>
  );
}
