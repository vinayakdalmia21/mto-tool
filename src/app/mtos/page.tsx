import { getMtos } from '../actions/mto';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function MtosPage() {
  const mtos = await getMtos();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>CRM Pipeline</h1>
          <p style={{ color: 'var(--text-muted)' }}>Track and manage all Make-to-Order queries.</p>
        </div>
        <Link href="/mtos/create" className="btn btn-primary">
          + New MTO Query
        </Link>
      </header>

      <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Customer</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Category & Metal</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Priority</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mtos.length === 0 ? (
              <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No MTO queries found. Create one.</td></tr>
            ) : null}
            {mtos.map(mto => (
              <tr key={mto.id} style={{ borderBottom: '1px solid var(--surface-border)' }} className="glass-panel-interactive">
                <td style={{ padding: '1rem', fontWeight: 500 }}>{mto.id.slice(-6).toUpperCase()}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 600 }}>{mto.customer.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{mto.customer.phone}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', textTransform: 'capitalize' }}>
                     <span className="badge badge-info">{mto.category.toLowerCase()}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {mto.metalType} • {mto.isStudded ? 'Studded' : 'Plain'}
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span className={`badge ${mto.status === 'OPEN' ? 'badge-primary' : mto.status === 'ACCEPTED' ? 'badge-success' : 'badge-warning'}`} style={{ border: '1px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
                    {mto.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                   <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : mto.leadType === 'LOW' ? 'badge-info' : 'badge-warning'}`}>
                    {mto.leadType}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                   <Link href={`/mtos/${mto.id}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                     View Details →
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
