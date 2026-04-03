"use client";

import { useState } from 'react';
import { createMtoQuery } from '../../actions/mto';
import { useRouter } from 'next/navigation';

export default function CreateMtoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await createMtoQuery(formData);
    setLoading(false);
    if (res.success) {
      router.push('/mtos');
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>New MTO Query</h1>
        <p style={{ color: 'var(--text-muted)' }}>Capture customer intent and basic design requirements.</p>
      </header>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Staff Member *</label>
              <select name="staffName" required>
                <option value="">Select Staff...</option>
                <option value="Vishaka (STAFF)">Vishaka (STAFF)</option>
                <option value="Intakhab (STAFF)">Intakhab (STAFF)</option>
                <option value="Ankesh (STAFF)">Ankesh (STAFF)</option>
                <option value="Roshan (STAFF)">Roshan (STAFF)</option>
                <option value="Sri (STAFF)">Sri (STAFF)</option>
                <option value="Karthik (STAFF)">Karthik (STAFF)</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Customer Name *</label>
              <input name="customerName" required placeholder="e.g. Priya Sharma" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Phone Number *</label>
              <input name="phoneNumber" type="tel" required placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Lead Priority</label>
              <select name="leadType">
                <option value="HIGH">High (Hot Lead)</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>MTO Type</label>
              <select name="mtoType">
                <option value="REGULAR">Regular (Catalogue)</option>
                <option value="CUSTOM">Fully Custom Design</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Category</label>
              <select name="category">
                <option value="RING">Ring</option>
                <option value="BRACELET">Bracelet</option>
                <option value="NECKLACE">Necklace</option>
                <option value="EARRINGS">Earrings</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Metal Preference</label>
              <select name="metalType">
                <option value="GOLD">Gold (18K / 22K)</option>
                <option value="SILVER">Silver</option>
                <option value="PLATINUM">Platinum</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Studded?</label>
              <select name="isStudded">
                <option value="true">Yes (Diamonds/Polki)</option>
                <option value="false">Plain</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Approx Weight Range</label>
              <input name="weightRange" placeholder="e.g. 10g - 15g" />
            </div>
          </div>

          <div>
             <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Design Notes / Customer Specs</label>
             <textarea name="notes" rows={4} placeholder="Any specific requirements..."></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => router.back()} className="btn" style={{ background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--surface-border)' }}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Creating...' : 'Create MTO Query'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
