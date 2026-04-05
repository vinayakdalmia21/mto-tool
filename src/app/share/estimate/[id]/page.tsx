import { prisma } from "@/lib/prisma";
import { notFound } from 'next/navigation';
import PrintButton from './PrintButton';

export default async function SharedEstimatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const mto = await prisma.mtoQuery.findUnique({
    where: { id },
    include: {
      customer: true,
      estimations: {
        orderBy: { version: 'desc' },
        take: 1
      }
    }
  });

  if (!mto || !mto.estimations.length) {
    notFound();
  }

  const est = mto.estimations[0];
  const queryNoStr = String(mto.queryNo).padStart(4, '0');

  // Logic values for the table
  const goldTotal = (parseFloat(est.goldWeight) || 0) * est.goldRate;
  const diamondTotal = (est.diamondWeight || 0) * (est.diamondRate || 0);
  const makingCharge = goldTotal * (est.makingPercent / 100);
  const hasDiamond = diamondTotal > 0;
  const hasOtherStones = est.otherStones != null && est.otherStones > 0;
  const hasDiscount = est.discountAmount > 0;

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1.5rem', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
          Quotation
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          Ref: MTO-{queryNoStr} | {mto.customer.name}
        </p>
      </header>

      <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
              <th style={{ padding: '1.2rem 1rem', borderBottom: '2px solid var(--surface-border)', textAlign: 'left', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Item Description</th>
              <th style={{ padding: '1.2rem 1rem', borderBottom: '2px solid var(--surface-border)', textAlign: 'center', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Weight/Qty</th>
              <th style={{ padding: '1.2rem 1rem', borderBottom: '2px solid var(--surface-border)', textAlign: 'right', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Gold */}
            <tr>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Gold Fine</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{mto.goldKaratage || ''} {mto.metalColor || ''} @ ₹{est.goldRate.toLocaleString()}/gm</div>
              </td>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'center', fontWeight: 500 }}>
                {est.goldWeight} g
              </td>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'right', fontWeight: 600 }}>
                ₹{goldTotal.toLocaleString()}
              </td>
            </tr>

            {/* Diamond - use ternary instead of && to avoid rendering 0 */}
            {hasDiamond ? (
              <tr>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Diamonds</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quality Assured @ ₹{est.diamondRate?.toLocaleString()}/ct</div>
                </td>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'center', fontWeight: 500 }}>
                  {est.diamondWeight} ct
                </td>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'right', fontWeight: 600 }}>
                  ₹{diamondTotal.toLocaleString()}
                </td>
              </tr>
            ) : null}

            {/* Making */}
            <tr>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)' }}>
                 <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Craftsmanship & Making</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Precision handcrafted @ {est.makingPercent}%</div>
              </td>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'center' }}>-</td>
              <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'right', fontWeight: 600 }}>
                ₹{makingCharge.toLocaleString()}
              </td>
            </tr>

            {/* Other Stones */}
            {hasOtherStones ? (
              <tr>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Other Stones / Extras</div>
                </td>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'center' }}>-</td>
                <td style={{ padding: '1.2rem 1rem', borderBottom: '1px solid var(--surface-border)', textAlign: 'right', fontWeight: 600 }}>
                  ₹{(est.otherStones || 0).toLocaleString()}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {/* Footer Calculations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>GST (3%)</span>
            <span style={{ fontWeight: 600, width: '100px', textAlign: 'right' }}>₹{est.gstAmount.toLocaleString()}</span>
          </div>
          
          {hasDiscount ? (
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', color: 'var(--success)' }}>
              <span>Discount ({est.discountPercent}%)</span>
              <span style={{ fontWeight: 600, width: '100px', textAlign: 'right' }}>- ₹{est.discountAmount.toLocaleString()}</span>
            </div>
          ) : null}

          <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '2px solid var(--surface-border)', display: 'flex', gap: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>
             <span style={{ color: 'var(--text-main)' }}>Total Value</span>
             <span style={{ color: 'var(--primary)', width: '150px', textAlign: 'right' }}>₹{est.finalEstimatedPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Design Notes */}
        {est.notes ? (
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--surface-border)' }}>
             <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terms & Design Notes</h4>
             <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-main)' }}>{est.notes}</p>
          </div>
        ) : null}

      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <PrintButton />
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Generated by VEDA MTO System. Prices valid for 24 hours due to bullion fluctuations.
        </p>
      </div>
    </div>
  );
}
