"use client";

import { useState } from "react";
import { Slash } from "lucide-react";
import { dropMtoQuery } from "../../actions/mto";

export default function DropMtoButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDrop() {
    const reason = prompt("Reason for dropping this query?");
    if (reason === null) return; // Cancelled

    if (confirm("Are you sure you want to DROP this query?")) {
      setLoading(true);
      const res = await dropMtoQuery(id, reason || "Staff action");
      if (!res.success) {
        alert("Error: " + res.error);
      }
      setLoading(false);
    }
  }

  return (
    <button 
      onClick={handleDrop}
      disabled={loading}
      className="btn"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.4rem', 
        padding: '0.5rem 1rem', 
        background: 'rgba(245, 158, 11, 0.1)', 
        color: 'var(--warning)', 
        border: '1px solid var(--warning)',
        fontSize: '0.75rem',
        fontWeight: 600
      }}
    >
      <Slash size={14} />
      Drop
    </button>
  );
}
