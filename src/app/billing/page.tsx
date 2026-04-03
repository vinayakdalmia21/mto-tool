import { getInvoices } from '../actions/billing';
import BillingItem from './BillingItem';

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  const invoices = await getInvoices();

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Invoices & Billing</h1>
        <p style={{ color: 'var(--text-muted)' }}>Collect final balance payments based on Actual Promised vs Actual difference.</p>
      </header>

      <div>
        {invoices.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>No invoices have been generated yet. MTOs must pass QC first.</p>
          </div>
        ) : null}

        {invoices.map(inv => (
           <BillingItem key={inv.id} invoice={inv} />
        ))}
      </div>
    </div>
  );
}
