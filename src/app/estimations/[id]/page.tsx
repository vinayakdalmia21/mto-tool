import { getMtoQueryDetails } from '../../actions/estimation';
import { getGlobalPricing } from '../../actions/pricing';
import EstimationForm from './EstimationForm';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EstimationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mtoRaw = await getMtoQueryDetails(id);
  const pricingRaw = await getGlobalPricing();

  if (!mtoRaw) {
    notFound();
  }

  // Next.js cannot pass Date objects from Server to Client components.
  // We must serialize them to strings or POJOs first.
  const mto = JSON.parse(JSON.stringify(mtoRaw));
  const pricing = JSON.parse(JSON.stringify(pricingRaw));

  // Safety check for pricing
  const safePricing = pricing || {
    rate9k: 0, rate14k: 0, rate18k: 0, rate22k: 0, rate24k: 0, diamondRate: 0
  };

  // Find the latest vendor feedback for state determination
  const vendorFeedbacks = mto.vendorEstimations || [];
  const latestFeedback = vendorFeedbacks.length > 0 ? vendorFeedbacks[0] : null;
  const acceptedVendorEst = vendorFeedbacks.find((v: any) => v.isAccepted);

  // Defensive check for customer
  const customerName = mto.customer?.name || "Unknown Customer";

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/estimations" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>← Back</Link>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Sales Estimation: {customerName}</h1>
          <span className={`badge ${mto.leadType === 'HIGH' ? 'badge-danger' : 'badge-info'}`}>{mto.leadType} PRIORITY</span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* LEFT COLUMN: STATUS & CONTEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* STATE 1: NO UPDATE FROM VENDOR/OPS */}
          {!latestFeedback && (
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--warning)', background: 'rgba(255, 165, 0, 0.05)' }}>
               <h3 style={{ color: 'var(--warning)', marginBottom: '0.8rem' }}>⏳ Status: Pending</h3>
               <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                 No update has been received from the vendor or operations team for this query yet. 
                 Please wait for the vendor to provide weight confirmations.
               </p>
            </div>
          )}

          {/* STATE 2: VENDOR REJECTED */}
          {latestFeedback && !latestFeedback.isAccepted && (
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--danger)', background: 'rgba(255, 0, 0, 0.05)' }}>
               <h3 style={{ color: 'var(--danger)', marginBottom: '0.8rem' }}>❌ Vendor Rejected</h3>
               <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                 <strong>{latestFeedback.vendorName}</strong> rejected this query.
               </p>
               {latestFeedback.remarks && (
                 <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                   " {latestFeedback.remarks} "
                 </div>
               )}
            </div>
          )}

          {/* STATE 3: ACCEPTED LIMITS */}
          {acceptedVendorEst && (
             <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--success)' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--success)' }}>✅ Vendor Confirmed</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ color: 'var(--text-muted)' }}>Vendor:</span>
                   <span>{acceptedVendorEst.vendorName}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <span style={{ color: 'var(--text-muted)' }}>Confirmed Gold:</span>
                   <span style={{ fontWeight: 600 }}>{acceptedVendorEst.goldWeight}</span>
                 </div>
                 {acceptedVendorEst.diamondWeight && (
                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <span style={{ color: 'var(--text-muted)' }}>Confirmed Diamond:</span>
                     <span style={{ fontWeight: 600 }}>{acceptedVendorEst.diamondWeight}</span>
                   </div>
                 )}
               </div>
             </div>
          )}

          {/* MTO SPECS REFERENCE */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Customer Requirements</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <div>Category: {mto.category}</div>
              {mto.goldKaratage && <div>Metal: {mto.goldKaratage} {mto.metalType}</div>}
              <div>Target: {mto.weightRange}</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CALCULATIONS OR PLACEHOLDER */}
        <div style={{ minWidth: 0 }}>
          {acceptedVendorEst ? (
            <div className="glass-panel" style={{ padding: '2rem' }}>
               <h2 style={{ marginBottom: '1.5rem' }}>Pricing Breakdown</h2>
               <EstimationForm 
                 mtoId={mto.id} 
                 mto={mto}
                 vendorLimit={acceptedVendorEst}
                 globalPricing={safePricing}
               />
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.6 }}>
               <h3 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Calculator Unavailable</h3>
               <p style={{ fontSize: '0.9rem' }}>
                 Pricing details will unlock once a vendor provides weight confirmations.
               </p>
            </div>
          )}

          {/* HISTORY */}
          {mto.estimations && mto.estimations.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
               <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Previous Estimations</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {mto.estimations.map((est: any) => (
                   <div key={est.id} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div>
                       <span className="badge badge-info" style={{ marginRight: '1rem' }}>v{est.version}</span>
                       <span style={{ fontSize: '0.9rem' }}>₹{est.finalEstimatedPrice.toLocaleString()}</span>
                     </div>
                     <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                       {new Date(est.createdAt).toLocaleDateString()}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
