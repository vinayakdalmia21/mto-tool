import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { formatIST } from "@/lib/date-utils";

export default async function VendorEstimateSharePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const estId = parseInt(params.id, 10);
  if (isNaN(estId)) return notFound();

  const estimate = await prisma.vendorEstimation.findUnique({
    where: { id: estId },
    include: {
      mtoQuery: {
        include: { customer: true }
      }
    }
  });

  if (!estimate) return notFound();

  const queryNo = String(estimate.mtoQuery.queryNo || 0).padStart(4, '0');

  return (
    <div style={{ padding: '0 1rem', display: 'flex', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '2rem' }}>
        <div style={{ borderBottom: '1px solid var(--surface-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Vendor Requirement Specification
          </h1>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Reference: Q-{queryNo}
          </div>
        </div>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
            <h2 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Requested Specifications</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Karatage</span>
                <strong>{estimate.mtoQuery.goldKaratage || 'N/A'}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Category</span>
                <strong>{estimate.mtoQuery.category || 'N/A'}</strong>
              </div>
            </div>
            
            {estimate.mtoQuery.size && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size</span>
                  <strong>{estimate.mtoQuery.size}</strong>
                </div>
              </div>
            )}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
            <h2 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Logged Vendor Quotation</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vendor</span>
                <strong style={{ color: 'var(--primary)' }}>{estimate.vendorName}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Date Logged</span>
                <strong>{formatIST(estimate.createdAt)}</strong>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Gold Wt.</span>
                <strong>{estimate.goldWeight || 'TBD'}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Diamond Wt.</span>
                <strong>{estimate.diamondWeight || 'TBD'}</strong>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Est. Labour Charges</span>
                <strong>{estimate.labourCharges ? `₹${estimate.labourCharges}` : 'TBD'}</strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Locked Gold Rate (/g)</span>
                <strong>{estimate.goldRate ? `₹${estimate.goldRate}` : 'TBD'}</strong>
              </div>
            </div>

            {estimate.remarks && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Remarks/Notes</span>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>{estimate.remarks}</p>
              </div>
            )}
            
            {estimate.images && (
               <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                   <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Attached Vendor CAD/Sketch</span>
                   <a 
                     href={estimate.images} 
                     download={`Vendor_Sketch_Q${queryNo}.png`}
                     style={{ fontSize: '0.7rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}
                   >
                     DOWNLOAD
                   </a>
                 </div>
                 <img src={estimate.images} alt="Vendor Sketch" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }} />
               </div>
            )}
          </div>

          {/* Customer Reference */}
          {estimate.mtoQuery.referenceImages && (
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0 }}>Customer's Initial Reference</h2>
                <a 
                  href={estimate.mtoQuery.referenceImages} 
                  download={`Customer_Ref_Q${queryNo}.png`}
                  style={{ fontSize: '0.7rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}
                >
                  DOWNLOAD REF
                </a>
              </div>
              <img 
                src={estimate.mtoQuery.referenceImages} 
                alt="Customer Reference" 
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }} 
              />
            </div>
          )}
        </section>

        <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          This is a read-only estimation summary.
        </footer>
      </div>
    </div>
  );
}
