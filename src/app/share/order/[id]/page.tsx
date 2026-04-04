import { prisma } from "@/lib/prisma"
import { notFound } from 'next/navigation';
import PrintButton from '../../estimate/[id]/PrintButton';

export default async function SharedOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const mto = await prisma.mtoQuery.findUnique({
    where: { id },
    include: {
      customer: true,
      order: true,
      estimations: { orderBy: { version: 'desc' }, take: 1 },
      vendorEstimations: { where: { isAccepted: true }, take: 1 },
      pricing: true,
    }
  });

  if (!mto || !mto.order) {
    notFound();
  }

  const order = mto.order;
  const est = mto.estimations[0];
  const vendorEst = mto.vendorEstimations[0];
  const cadDesigns: string[] = order.cadDesigns ? JSON.parse(order.cadDesigns) : [];
  const queryNoStr = String(mto.queryNo).padStart(4, '0');

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1.5rem', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
          Order Details
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          Ref: MTO-{queryNoStr} | Order: {order.orderRefId} | {mto.customer.name}
        </p>
      </header>

      {/* Requirements */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Customer Requirements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Product Details</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              <div>Category: <strong>{mto.category}</strong></div>
              <div>Metal: <strong>{mto.goldKaratage || ''} {mto.metalType} {mto.metalColor || ''}</strong></div>
              <div>Studded: <strong>{mto.isStudded ? 'Yes' : 'No'}</strong></div>
              <div>Target Weight: <strong>{mto.weightRange}</strong></div>
              {mto.size ? <div>Size: <strong>{mto.size}</strong></div> : null}
            </div>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Confirmed Specifications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              {vendorEst ? (
                <>
                  <div>Vendor: <strong>{vendorEst.vendorName}</strong></div>
                  <div>Gold Weight: <strong>{vendorEst.goldWeight}</strong></div>
                  {vendorEst.diamondWeight ? <div>Diamond: <strong>{vendorEst.diamondWeight}</strong></div> : null}
                </>
              ) : (
                <div style={{ color: 'var(--text-muted)' }}>Pending vendor confirmation</div>
              )}
            </div>
          </div>
        </div>
        {mto.notes ? (
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', fontStyle: 'italic' }}>
            Notes: {mto.notes}
          </div>
        ) : null}
      </div>

      {/* CAD Designs */}
      {cadDesigns.length > 0 ? (
        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '16px' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>CAD Designs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {cadDesigns.map((cad, i) => (
              <div key={i} style={{ border: '1px solid var(--surface-border)', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                {cad.startsWith('data:image') || cad.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? (
                  <>
                    <img src={cad} alt={`CAD Design ${i + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                      <a href={cad} download={`CAD_Design_${i+1}.png`} style={{ background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', textDecoration: 'none' }}>
                        📥 Download
                      </a>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <a href={cad} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--info)', wordBreak: 'break-all' }}>
                      📎 View Document
                    </a>
                  </div>
                )}
                <div style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}>Design {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Pricing Summary */}
      {est ? (
        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', borderRadius: '16px' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Pricing Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.15)', borderRadius: '8px' }}>
            <span style={{ fontSize: '1.1rem' }}>Locked Price</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>₹{est.finalEstimatedPrice.toLocaleString()}</span>
          </div>
        </div>
      ) : null}

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <PrintButton />
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Generated by VEDA MTO System
        </p>
      </div>
    </div>
  );
}
