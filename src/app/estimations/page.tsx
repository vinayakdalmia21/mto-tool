import { getOpenMtosForEstimation } from '../actions/estimation';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function EstimationsPage() {
  const mtos = await getOpenMtosForEstimation();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Estimations & Quoting</h1>
        <p style={{ color: 'var(--text-muted)' }}>Provide and manage pricing estimates for MTO queries.</p>
      </header>

      <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>MTO ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Customer</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Specs</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Priority</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {mtos.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No MTOs need estimation right now.</td></tr>
            ) : null}
            {mtos.map(mto => (
              <tr key={mto.id} style={{ borderBottom: '1px solid var(--surface-border)' }} className="glass-panel-interactive">
                <td style={{ padding: '1rem', fontWeight: 500 }}>{mto.id.slice(-6).toUpperCase()}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 600 }}>{mto.customer.name}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div>{mto.category} • {mto.metalType}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Weight: {mto.weightRange}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                   <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : 'badge-warning'}`}>
                    {mto.leadType}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                   <Link href={`/estimations/${mto.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                     View Estimate
                   </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
