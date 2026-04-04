import { getMtoQueryDetails } from '../../actions/estimation';
import { getGlobalPricing } from '../../actions/pricing';
import EstimationForm from './EstimationForm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EstimationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mto = await getMtoQueryDetails(id);
  const pricing = await getGlobalPricing();

  if (!mto) {
    notFound();
  }

  // Find the latest accepted vendor estimate for auto-fills
  const acceptedVendorEst = mto.vendorEstimations?.find(v => v.isAccepted);
  
  // Find the most recent overall vendor feedback for context
  const latestVendorFeedback = mto.vendorEstimations && mto.vendorEstimations.length > 0
    ? mto.vendorEstimations[0]
    : null;

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

          {/* VENDOR REJECTION ALERT */}
          {latestVendorFeedback && !latestVendorFeedback.isAccepted && (
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--danger)', background: 'rgba(255, 0, 0, 0.05)' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 ⚠️ Vendor Refused Query
               </h3>
               <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                 <strong>{latestVendorFeedback.vendorName}</strong> did not accept this MTO.
               </p>
               {latestVendorFeedback.remarks && (
                 <div style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', fontStyle: 'italic', fontSize: '0.85rem' }}>
                   "{latestVendorFeedback.remarks}"
                 </div>
               )}
            </div>
          )}

          {/* VENDOR ACCEPTANCE LIMITS */}
          {acceptedVendorEst && (
             <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--info)' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--info)' }}>Operations Vendor Limits</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ color: 'var(--text-muted)' }}>Vendor:</span>
                   <span>{acceptedVendorEst.vendorName}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ color: 'var(--text-muted)' }}>Locked Gold:</span>
                   <span style={{ fontWeight: 600 }}>{acceptedVendorEst.goldWeight}</span>
                 </div>
                 {acceptedVendorEst.diamondWeight && (
                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <span style={{ color: 'var(--text-muted)' }}>Locked Diamond:</span>
                     <span style={{ fontWeight: 600 }}>{acceptedVendorEst.diamondWeight}</span>
                   </div>
                 )}
                 {acceptedVendorEst.remarks && (
                   <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.85rem' }}>
                     "{acceptedVendorEst.remarks}"
                   </div>
                 )}
               </div>
             </div>
          )}

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
                      Gold: {est.goldWeight} | MC: {est.makingPercent}% | Final: ₹{est.finalEstimatedPrice.toLocaleString()}
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
           <EstimationForm 
             mtoId={mto.id} 
             mto={mto}
             vendorLimit={acceptedVendorEst}
             globalPricing={pricing}
           />
        </div>

      </div>
    </div>
  );
}
