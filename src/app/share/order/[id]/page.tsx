import { prisma } from "@/lib/prisma"
import { notFound } from 'next/navigation';
import PrintButton from '../../estimate/[id]/PrintButton';

export default async function SharedOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const mto = await prisma.mtoQuery.findUnique({
    where: { id },
    include: {
      customer: true,
      orders: { take: 1, orderBy: { version: 'desc' } },
      estimations: { orderBy: { version: 'desc' }, take: 1 },
      vendorEstimations: { where: { isAccepted: true }, take: 1 },
      pricing: true,
    }
  }) as any;

  if (!mto || !mto.orders?.length) {
    notFound();
  }

  const order = mto.orders[0];
  const est = mto.estimations[0];
  const vendorEst = mto.vendorEstimations[0];
  const cadDesigns: string[] = order.cadDesigns ? JSON.parse(order.cadDesigns) : [];
  const queryNoStr = String(mto.queryNo || 0).padStart(4, '0');

  return (
    <div style={{ maxWidth: 850, margin: '0 auto', color: '#1A1A1A' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 700, 
          margin: 0, 
          color: '#631E32', 
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          Order Specifics
        </h1>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginTop: '0.75rem',
          color: '#631E32',
          opacity: 0.7,
          fontSize: '1rem',
          letterSpacing: '0.1em'
        }}>
          <span>MTO-{queryNoStr}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#631E32' }}></span>
          <span>{mto.customer.name}</span>
        </div>
      </div>

      {/* Requirements */}
      <div style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '3rem', 
        marginBottom: '2rem', 
        borderRadius: '4px',
        border: '1px solid rgba(99, 30, 50, 0.1)',
        boxShadow: '0 15px 35px rgba(99, 30, 50, 0.05)'
      }}>
        <h2 style={{ 
          marginBottom: '2rem', 
          fontSize: '1.4rem', 
          fontFamily: "'Playfair Display', serif", 
          color: '#631E32',
          borderBottom: '1px solid #631E32',
          paddingBottom: '0.75rem',
          display: 'inline-block'
        }}>Customer Requirements</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: '#FDF8F0', border: '1px solid rgba(99, 30, 50, 0.05)' }}>
            <div style={{ color: '#631E32', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Product Details</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Category:</span> <strong>{mto.category}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Metal:</span> <strong>{mto.goldKaratage || ''} {mto.metalType} {mto.metalColor || ''}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Studded:</span> <strong>{mto.isStudded ? 'Yes' : 'No'}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Weight:</span> <strong>{mto.weightRange}</strong></div>
              {mto.size ? <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Size:</span> <strong>{mto.size}</strong></div> : null}
            </div>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: '#FDF8F0', border: '1px solid rgba(99, 30, 50, 0.05)' }}>
            <div style={{ color: '#631E32', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Confirmed Specs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              {vendorEst ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Artisan:</span> <strong>{vendorEst.vendorName}</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Gold Wt:</span> <strong>{vendorEst.goldWeight}</strong></div>
                  {vendorEst.diamondWeight ? <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.6 }}>Diamond:</span> <strong>{vendorEst.diamondWeight}</strong></div> : null}
                </>
              ) : (
                <div style={{ color: '#631E32', opacity: 0.5, fontStyle: 'italic' }}>Pending final artisan confirmation...</div>
              )}
            </div>
          </div>
        </div>
        
        {mto.notes ? (
          <div style={{ marginTop: '2rem', padding: '1.2rem', background: '#FDF8F0', borderLeft: '4px solid #631E32', fontSize: '0.95rem', fontStyle: 'italic', color: '#444' }}>
            <span style={{ fontWeight: 700, fontStyle: 'normal', display: 'block', marginBottom: '0.4rem', color: '#631E32', fontSize: '0.7rem', textTransform: 'uppercase' }}>Reference Notes</span>
            "{mto.notes}"
          </div>
        ) : null}
      </div>

      {/* Initial Design Reference */}
      {mto.referenceImages && (
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '3rem', 
          marginBottom: '2rem', 
          borderRadius: '4px',
          border: '1px solid rgba(99, 30, 50, 0.1)',
          boxShadow: '0 15px 35px rgba(99, 30, 50, 0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #631E32', paddingBottom: '0.75rem' }}>
            <h2 style={{ 
              margin: 0,
              fontSize: '1.4rem', 
              fontFamily: "'Playfair Display', serif", 
              color: '#631E32',
              display: 'inline-block'
            }}>Initial Design Reference</h2>
            <a 
              href={mto.referenceImages} 
              download={`MTO_${queryNoStr}_Initial_Reference.png`}
              style={{ 
                background: '#631E32', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '2px', 
                fontSize: '0.7rem', 
                textDecoration: 'none', 
                fontWeight: 600 
              }}
            >
              DOWNLOAD REFERENCE
            </a>
          </div>
          
          <div style={{ background: '#FDF8F0', padding: '1rem', borderRadius: '2px', border: '1px solid rgba(99, 30, 50, 0.05)' }}>
            <img 
              src={mto.referenceImages} 
              alt="Initial Reference" 
              style={{ width: '100%', maxHeight: '500px', objectFit: 'contain', background: '#FDF8F0' }} 
            />
          </div>
        </div>
      )}

      {/* CAD Designs */}
      {cadDesigns.length > 0 ? (
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '3rem', 
          marginBottom: '2rem', 
          borderRadius: '4px',
          border: '1px solid rgba(99, 30, 50, 0.1)',
          boxShadow: '0 15px 35px rgba(99, 30, 50, 0.05)'
        }}>
          <h2 style={{ 
            marginBottom: '2rem', 
            fontSize: '1.4rem', 
            fontFamily: "'Playfair Display', serif", 
            color: '#631E32',
            borderBottom: '1px solid #631E32',
            paddingBottom: '0.75rem',
            display: 'inline-block'
          }}>CAD Designs</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {cadDesigns.map((cad, i) => (
              <div key={i} style={{ border: '1px solid rgba(204, 166, 96, 0.2)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
                {cad.startsWith('data:image') || cad.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? (
                  <>
                    <img src={cad} alt={`CAD Design ${i + 1}`} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                      <a href={cad} download={`CAD_Design_${i+1}.png`} style={{ background: 'rgba(99, 30, 50, 0.8)', color: 'white', padding: '0.5rem 1rem', borderRadius: '2px', fontSize: '0.7rem', textDecoration: 'none', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        DOWNLOAD
                      </a>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: '3rem', textAlign: 'center' }}>
                    <a href={cad} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#631E32', wordBreak: 'break-all', fontWeight: 600 }}>
                      VIEW DOCUMENT
                    </a>
                  </div>
                )}
                <div style={{ padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#631E32', background: '#FDF8F0', fontWeight: 700, letterSpacing: '0.1em' }}>PROPOSAL {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Pricing Summary */}
      {est ? (
        <div style={{ 
          backgroundColor: '#631E32', 
          padding: '2.5rem 3rem', 
          marginBottom: '2rem', 
          borderRadius: '4px',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.4rem', fontFamily: "'Playfair Display', serif" }}>Project Valuation</h2>
            <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.8rem', opacity: 0.7, letterSpacing: '0.05em' }}>Price locked for production</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹{est.finalEstimatedPrice.toLocaleString()}</span>
          </div>
        </div>
      ) : null}

      <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
        <PrintButton />
        <p style={{ marginTop: '2rem', color: '#631E32', opacity: 0.5, fontSize: '0.75rem' }}>
          VEDA Modern Heritage System
        </p>
      </div>
    </div>
  );
}
