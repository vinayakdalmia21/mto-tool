"use client";

import { useState } from 'react';
import { deleteMtoQuery } from '@/app/actions/mto';
import { Trash2 } from 'lucide-react';

export default function DeleteMtoButton({ id, redirectUrl }: { id: string, redirectUrl?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to completely delete this query and all its associated data (estimations, orders, etc.)? This action cannot be undone.")) return;
    
    setLoading(true);
    const res = await deleteMtoQuery(id);
    setLoading(false);
    
    if (res.success) {
      if (redirectUrl) {
         window.location.href = redirectUrl;
      }
    } else {
      alert("Failed to delete query: " + res.error);
    }
  }

  return (
    <button onClick={handleDelete} disabled={loading} className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: 'rgba(239,68,68,0.1)', border: '1px solid var(--danger)', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: loading ? 'not-allowed' : 'pointer' }}>
      <Trash2 size={14} />
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
