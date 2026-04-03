import { getMtoQueryDetails } from '../../actions/estimation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DecisionButtons from './DecisionButtons';

export const dynamic = "force-dynamic";

export default async function MtoDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mto = await getMtoQueryDetails(id);

  if (!mto) {
    notFound();
  }

  const latestEst = mto.estimations.length > 0 ? mto.estimations[0] : null;
  const isPendingDecision = mto.status === 'AWAITING_RESPONSE';
  const isPaymentPending = mto.status === 'PAYMENT_PENDING' || mto.status === 'AWAITING_RESPONSE';

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/mtos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>← Pipeline</Link>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>MTO Query: {mto.id.slice(-6).toUpperCase()}</h1>
          <span className={`badge ${mto.status === 'ACCEPTED' ? 'badge-success' : 'badge-primary'}`} style={{ border: '1px solid currentColor' }}>
            {mto.status}
          </span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* MTO DETAILS SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Customer Profile</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{mto.customer.name}</div>
              <div style={{ color: 'var(--text-muted)' }}>{mto.customer.phone}</div>
              <div style={{ marginTop: '0.5rem' }}>
                <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : 'badge-info'}`}>{mto.leadType} PRIORITY</span>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
             <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>Query Specs</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <div><span style={{ color: 'var(--text-muted)' }}>Category:</span> {mto.category}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Metal:</span> {mto.metalType}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Studded:</span> {mto.isStudded ? 'Yes' : 'No'}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>Target Weight:</span> {mto.weightRange}</div>
              {mto.notes && (
                <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>
                  {mto.notes}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DECISION & PAYMENT PANEL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {latestEst ? (
             <div className="glass-panel" style={{ padding: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                 <div>
                   <h2 style={{ marginBottom: '0.5rem' }}>Latest Estimation (v{latestEst.version})</h2>
                   <p style={{ color: 'var(--text-muted)' }}>Sent on {new Date(latestEst.createdAt).toLocaleDateString()}</p>
                 </div>
                 <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                   ₹{latestEst.finalEstimatedPrice.toLocaleString()}
                 </div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                 <div><span style={{ color: 'var(--text-muted)' }}>Gold Wt:</span> {latestEst.goldWeight}g</div>
                 <div><span style={{ color: 'var(--text-muted)' }}>Making Charges:</span> ₹{latestEst.makingCharges}/g</div>
                 <div><span style={{ color: 'var(--text-muted)' }}>Wastage:</span> {latestEst.wastage}%</div>
                 {mto.isStudded && <div><span style={{ color: 'var(--text-muted)' }}>Diamonds:</span> {latestEst.diamondWeight}ct</div>}
               </div>

               {/* DECISION BUTTONS CLIENT COMPONENT */}
               <DecisionButtons 
                 mtoId={mto.id} 
                 currentStatus={mto.status} 
                 estAmount={latestEst.finalEstimatedPrice} 
               />
             </div>
          ) : (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                This MTO is currently awaiting estimation.
              </div>
              <Link href={`/estimations/${mto.id}`} className="btn btn-primary">
                Provide Estimate
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
