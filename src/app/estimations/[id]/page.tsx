import { getMtoQueryDetails } from '../../actions/estimation';
import EstimationForm from './EstimationForm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EstimationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mto = await getMtoQueryDetails(id);

  if (!mto) {
    notFound();
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/estimations" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>← Back</Link>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Estimate for {mto.customer.name}</h1>
          <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : 'badge-info'}`}>{mto.leadType} PRIORITY</span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* MTO DETAILS SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>Query Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <div><span style={{ color: 'var(--text-muted)' }}>Category:</span> {mto.category}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Type:</span> {mto.mtoType}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Metal:</span> {mto.metalType}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Studded:</span> {mto.isStudded ? 'Yes' : 'No'}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Target Weight:</span> {mto.weightRange}</div>
              {mto.notes && (
                <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Notes:</span>
                  {mto.notes}
                </div>
              )}
            </div>
          </div>

          {/* PREVIOUS VERSIONS */}
          {mto.estimations.length > 0 && (
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Previous Versions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {mto.estimations.map(est => (
                  <div key={est.id} style={{ padding: '0.8rem', border: '1px solid var(--surface-border)', borderRadius: '6px', background: 'rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span className="badge badge-info">v{est.version}</span>
                      <span style={{ fontWeight: 600 }}>₹{est.finalEstimatedPrice.toLocaleString()}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Gold: {est.goldWeight} | MC: {est.makingCharges}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ESTIMATION CALCULATOR */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
           <h2 style={{ marginBottom: '1.5rem' }}>Provide New Estimate (Live Calculator)</h2>
           <EstimationForm mtoId={mto.id} isStudded={mto.isStudded} />
        </div>

      </div>
    </div>
  );
}
