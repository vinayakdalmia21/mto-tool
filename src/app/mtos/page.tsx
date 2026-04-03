import { getMtos } from '../actions/mto';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function MtosPage() {
  const mtos = await getMtos();

  return (
    <div style={{ maxWidth: '100%', margin: '0 2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>CRM Pipeline</h1>
          <p style={{ color: 'var(--text-muted)' }}>Track and manage all Make-to-Order queries.</p>
        </div>
        <Link href="/mtos/create" className="btn btn-primary">
          + New MTO Query
        </Link>
      </header>

      <div className="glass-panel" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)', background: 'rgba(255, 255, 255, 0.03)' }}>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Lead Temperature</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Query ID</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Gold/Silver</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Image</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>SKU (if any)</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Query Date</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Customer Name</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Customer No.</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Placed By</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Category</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Sub Category</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Metal KT</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Metal Colour</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Size</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Weight</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Diamond Carat</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Voice of Customer</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mtos.length === 0 ? (
              <tr><td colSpan={18} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No MTO queries found. Create one.</td></tr>
            ) : null}
            {mtos.map(mto => (
              <tr key={mto.id} style={{ borderBottom: '1px solid var(--surface-border)' }} className="glass-panel-interactive">
                <td style={{ padding: '0.75rem' }}>
                   <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : mto.leadType === 'LOW' ? 'badge-info' : 'badge-warning'}`}>
                    {mto.leadType}
                  </span>
                </td>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>{mto.id.slice(-6).toUpperCase()}</td>
                <td style={{ padding: '0.75rem' }}>{mto.metalType}</td>
                <td style={{ padding: '0.75rem' }}>
                  {mto.referenceImages ? <span style={{ color: 'var(--primary)' }}>Yes</span> : <span style={{ color: 'var(--text-muted)' }}>No</span>}
                </td>
                <td style={{ padding: '0.75rem' }}>{mto.catalogueSku || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{new Date(mto.createdAt).toLocaleDateString()}</td>
                <td style={{ padding: '0.75rem', fontWeight: 500 }}>{mto.customer.name}</td>
                <td style={{ padding: '0.75rem' }}>{mto.customer.phone}</td>
                <td style={{ padding: '0.75rem' }}>{mto.staff?.name || '-'}</td>
                <td style={{ padding: '0.75rem', textTransform: 'capitalize' }}>{mto.category.toLowerCase()}</td>
                <td style={{ padding: '0.75rem' }}>-</td>
                <td style={{ padding: '0.75rem' }}>{mto.goldKaratage || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.metalColor || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.size || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.goldWeight || mto.weightRange || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.diamondCaratage ? `${mto.diamondCaratage} Ct` : '-'}</td>
                <td style={{ padding: '0.75rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mto.notes || '-'}</td>
                <td style={{ padding: '0.75rem' }}>
                   <Link href={`/mtos/${mto.id}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                     View →
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
