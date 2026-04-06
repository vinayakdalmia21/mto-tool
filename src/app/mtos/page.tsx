import { getMtos } from '../actions/mto';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import DeleteMtoButton from './components/DeleteMtoButton';
import DropMtoButton from './components/DropMtoButton';
import ShareButton from './[id]/ShareButton';
import { formatIST } from '@/lib/date-utils';

export const dynamic = "force-dynamic";

export default async function MtosPage() {
  const mtos = await getMtos() as any[];

  return (
    <div style={{ maxWidth: '100%', margin: '0 2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>CRM Pipeline</h1>
          <Link href="/mtos/create" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
            + New MTO Query
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>Track and manage all Make-to-Order queries.</p>
      </header>

      <div className="glass-panel" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)', background: 'rgba(255, 255, 255, 0.03)' }}>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Lead Priority</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Query ID</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>MTO Type</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Image</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>SKU (If any)</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Query Date</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Customer Name</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Customer No.</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Placed By (Staff)</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Category</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Studded (Yes/No)</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Metal KT</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Metal Colour</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Size</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Approx Gold Weight</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Diamond Carat</th>
              <th style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>Design Notes</th>
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
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {mto.orders?.[0]?.staffMtoId ? (
                      <span style={{ color: 'var(--success)' }}>{mto.orders[0].staffMtoId}</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>Q-{mto.queryNo.toString().padStart(4, '0')}</span>
                    )}
                    {mto.status === 'DROPPED' && (
                      <span style={{ fontSize: '0.65rem', color: 'var(--warning)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Dropped @ {mto.droppedAtStage || 'Initial'}
                      </span>
                    )}
                  </div>
                </td>
                <td style={{ padding: '0.75rem' }}>{mto.mtoType}</td>
                <td style={{ padding: '0.75rem' }}>
                  {mto.referenceImages ? <span style={{ color: 'var(--primary)' }}>Yes</span> : <span style={{ color: 'var(--text-muted)' }}>No</span>}
                </td>
                <td style={{ padding: '0.75rem' }}>{mto.catalogueSku || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{formatIST(mto.createdAt)}</td>
                <td style={{ padding: '0.75rem', fontWeight: 500 }}>{mto.customer.name}</td>
                <td style={{ padding: '0.75rem' }}>{mto.customer.phone}</td>
                <td style={{ padding: '0.75rem' }}>{mto.staff?.name || '-'}</td>
                <td style={{ padding: '0.75rem', textTransform: 'capitalize' }}>{mto.category.toLowerCase()}</td>
                <td style={{ padding: '0.75rem' }}>{mto.isStudded ? 'Yes' : 'No'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.goldKaratage || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.metalColor || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.size || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.goldWeight || mto.weightRange || '-'}</td>
                <td style={{ padding: '0.75rem' }}>{mto.diamondCaratage ? `${mto.diamondCaratage} Ct` : '-'}</td>
                <td style={{ padding: '0.75rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mto.notes || '-'}</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <ShareButton queryId={mto.id} />
                    {mto.status !== 'DROPPED' && <DropMtoButton id={mto.id} />}
                    <DeleteMtoButton id={mto.id} />
                    <Link href={`/mtos/${mto.id}`} className="btn-icon" style={{ display: 'inline-flex', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', textDecoration: 'none', color: 'var(--text-main)' }}>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
