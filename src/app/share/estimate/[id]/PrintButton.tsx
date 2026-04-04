"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn"
      style={{
        background: 'transparent',
        border: '1px solid var(--surface-border)',
        color: 'var(--text-muted)',
        padding: '0.6rem 1.5rem',
      }}
    >
      Print Quotation
    </button>
  );
}
