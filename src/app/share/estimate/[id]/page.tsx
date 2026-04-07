import { prisma } from "@/lib/prisma";
import { notFound } from 'next/navigation';
import PrintButton from './PrintButton';

export default async function SharedEstimatePage({ params }: { params: Promise<{ id: string }> }) {
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
  const est = mto.estimations[0] || {};
  const queryNoStr = String(mto.queryNo || 0).padStart(4, '0');

  // Logic values for the table - Prefer Order Snapshots, Fallback to Estimation
  const weight = order?.goldWeight || est?.goldWeight || '0';
  const rate = order?.goldRate || est?.goldRate || 0;
  const goldTotal = (parseFloat(weight) || 0) * (rate || 0);
  
  const dWeight = order?.diamondWeight ?? est?.diamondWeight ?? 0;
  const dRate = order?.diamondRate ?? est?.diamondRate ?? 0;
  const diamondTotal = (dWeight || 0) * (dRate || 0);
  
  const mPercent = order?.makingPercent ?? est?.makingPercent ?? 0;
  const makingCharge = goldTotal * (mPercent / 100);
  
  const hasDiamond = diamondTotal > 0;
  const oStones = order?.otherStones ?? est?.otherStones ?? 0;
  const hasOtherStones = oStones > 0;
  const hasDiscount = (order?.discountAmount || est?.discountAmount || 0) > 0;

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
          Quotation
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
          <span>REF: Q-{queryNoStr}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#631E32' }}></span>
          <span>{mto.customer.name}</span>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '3.5rem', 
        borderRadius: '4px', 
        boxShadow: '0 20px 40px rgba(99, 30, 50, 0.05)',
        border: '1px solid rgba(99, 30, 50, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative corner accent */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: '100px', 
          height: '100px', 
          background: 'linear-gradient(135deg, transparent 50%, rgba(204, 166, 96, 0.1) 50%)' 
        }} />

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '3rem' }}>
          <thead>
            <tr>
              <th style={{ 
                padding: '1.5rem 1rem', 
                borderBottom: '2px solid #631E32', 
                textAlign: 'left', 
                color: '#631E32', 
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Description</th>
              <th style={{ 
                padding: '1.5rem 1rem', 
                borderBottom: '2px solid #631E32', 
                textAlign: 'center', 
                color: '#631E32', 
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Weight/Qty</th>
              <th style={{ 
                padding: '1.5rem 1rem', 
                borderBottom: '2px solid #631E32', 
                textAlign: 'right', 
                color: '#631E32', 
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Gold */}
            <tr style={{ borderBottom: '1px solid rgba(99, 30, 50, 0.08)' }}>
              <td style={{ padding: '1.5rem 1rem' }}>
                <div style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '1.1rem' }}>Gold Value</div>
                <div style={{ fontSize: '0.85rem', color: '#631E32', opacity: 0.6, marginTop: '0.2rem' }}>
                  {mto.goldKaratage || ''} {mto.metalColor || ''} @ ₹{rate.toLocaleString()}/gm
                </div>
              </td>
              <td style={{ padding: '1.5rem 1rem', textAlign: 'center', color: '#444' }}>
                {weight} g
              </td>
              <td style={{ padding: '1.5rem 1rem', textAlign: 'right', fontWeight: 600, color: '#631E32' }}>
                ₹{goldTotal.toLocaleString()}
              </td>
            </tr>

            {/* Diamond */}
            {hasDiamond ? (
              <tr style={{ borderBottom: '1px solid rgba(99, 30, 50, 0.08)' }}>
                <td style={{ padding: '1.5rem 1rem' }}>
                  <div style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '1.1rem' }}>Diamond Value</div>
                  <div style={{ fontSize: '0.85rem', color: '#631E32', opacity: 0.6, marginTop: '0.2rem' }}>
                    VVS-EF Diamonds @ ₹{dRate.toLocaleString()}/ct
                  </div>
                </td>
                <td style={{ padding: '1.5rem 1rem', textAlign: 'center', color: '#444' }}>
                  {dWeight} ct
                </td>
                <td style={{ padding: '1.5rem 1rem', textAlign: 'right', fontWeight: 600, color: '#631E32' }}>
                  ₹{diamondTotal.toLocaleString()}
                </td>
              </tr>
            ) : null}

            {/* Making */}
            <tr style={{ borderBottom: '1px solid rgba(99, 30, 50, 0.08)' }}>
              <td style={{ padding: '1.5rem 1rem' }}>
                 <div style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '1.1rem' }}>Making Charges</div>
                 <div style={{ fontSize: '0.85rem', color: '#631E32', opacity: 0.6, marginTop: '0.2rem' }}>
                   Bespoke hand-detailing @ {mPercent}%
                 </div>
              </td>
              <td style={{ padding: '1.5rem 1rem', textAlign: 'center', color: '#888' }}>—</td>
              <td style={{ padding: '1.5rem 1rem', textAlign: 'right', fontWeight: 600, color: '#631E32' }}>
                ₹{makingCharge.toLocaleString()}
              </td>
            </tr>

            {/* Other Stones */}
            {hasOtherStones ? (
              <tr style={{ borderBottom: '1px solid rgba(99, 30, 50, 0.08)' }}>
                <td style={{ padding: '1.5rem 1rem' }}>
                  <div style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '1.1rem' }}>Additional Stones</div>
                </td>
                <td style={{ padding: '1.5rem 1rem', textAlign: 'center', color: '#888' }}>—</td>
                <td style={{ padding: '1.5rem 1rem', textAlign: 'right', fontWeight: 600, color: '#631E32' }}>
                  ₹{oStones.toLocaleString()}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {/* Totals Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', fontSize: '0.95rem' }}>
            <span style={{ color: '#444' }}>Taxes (GST 3%)</span>
            <span style={{ fontWeight: 600 }}>₹{(order.gstAmount || 0).toLocaleString()}</span>
          </div>
          {hasDiscount ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', fontSize: '0.95rem', color: '#CCA660' }}>
              <span>Discount</span>
              <span style={{ fontWeight: 600 }}>- ₹{(order.discountAmount || 0).toLocaleString()}</span>
            </div>
          ) : null}

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'baseline',
            width: '100%',
            maxWidth: '500px',
            borderTop: '2px solid #631E32',
            paddingTop: '1.5rem',
            marginTop: '1rem'
          }}>
             <span style={{ 
               fontSize: '1.1rem', 
               color: '#631E32', 
               fontFamily: "'Playfair Display', serif",
               fontWeight: 600,
               textTransform: 'uppercase',
               letterSpacing: '0.1em'
             }}>Total Estimate</span>
             <span style={{ 
               fontSize: '2.5rem', 
               fontWeight: 800, 
               color: '#631E32',
               lineHeight: 1
             }}>₹{(order.advanceAmount + order.remainingAmount).toLocaleString()}</span>
          </div>
        </div>

        {/* Notes Section */}
        {est.notes ? (
          <div style={{ 
            marginTop: '4rem', 
            padding: '2rem', 
            backgroundColor: '#FDF8F0', 
            border: '1px dashed rgba(99, 30, 50, 0.2)',
            borderRadius: '2px'
          }}>
             <h4 style={{ 
               margin: '0 0 1rem 0', 
               fontSize: '0.8rem', 
               color: '#631E32', 
               textTransform: 'uppercase', 
               letterSpacing: '0.15em',
               fontWeight: 700
             }}>Artisan Notes</h4>
             <p style={{ margin: 0, lineHeight: 1.8, color: '#444', fontSize: '0.95rem', fontStyle: 'italic' }}>
               "{est.notes}"
             </p>
          </div>
        ) : null}

        {/* Visual Specifications */}
        {(mto.referenceImages || (order?.cadDesigns && JSON.parse(order.cadDesigns).length > 0)) && (
          <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(99, 30, 50, 0.1)', paddingTop: '3rem' }}>
            <h2 style={{ 
              marginBottom: '2rem', 
              fontSize: '1.4rem', 
              fontFamily: "'Playfair Display', serif", 
              color: '#631E32',
              borderBottom: '1px solid #631E32',
              paddingBottom: '0.75rem',
              display: 'inline-block'
            }}>Visual Specifications</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Reference Image */}
              {mto.referenceImages && (
                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(99, 30, 50, 0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#631E32', textTransform: 'uppercase' }}>Design Reference</span>
                    <a href={mto.referenceImages} download={`MTO_${queryNoStr}_Ref.png`} style={{ fontSize: '0.7rem', color: '#631E32', textDecoration: 'underline' }}>Download</a>
                  </div>
                  <img src={mto.referenceImages} alt="Reference" style={{ width: '100%', height: '200px', objectFit: 'contain', background: '#FDF8F0' }} />
                </div>
              )}

              {/* Latest CAD (if any) */}
              {order?.cadDesigns && JSON.parse(order.cadDesigns).length > 0 && (
                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(99, 30, 50, 0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#631E32', textTransform: 'uppercase' }}>Proposed CAD</span>
                    <a href={JSON.parse(order.cadDesigns)[0]} download={`MTO_${queryNoStr}_CAD.png`} style={{ fontSize: '0.7rem', color: '#631E32', textDecoration: 'underline' }}>Download</a>
                  </div>
                  <img src={JSON.parse(order.cadDesigns)[0]} alt="CAD Design" style={{ width: '100%', height: '200px', objectFit: 'contain', background: '#FDF8F0' }} />
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
        <PrintButton />
        <p style={{ 
          marginTop: '2rem', 
          color: '#631E32', 
          opacity: 0.5, 
          fontSize: '0.75rem',
          letterSpacing: '0.05em'
        }}>
          This quotation is valid for 24 hours. Gold prices are subject to global bullion fluctuations.
        </p>
      </div>
    </div>
  );
}
