import { prisma } from "@/lib/prisma";
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function SharedMtoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const mto = await prisma.mtoQuery.findUnique({
    where: { id }
  }) as any;

  if (!mto) {
    notFound();
  }

  const queryNoStr = String(mto.queryNo || 0).padStart(4, '0');

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
          Design Specifications
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Reference: MTO-{queryNoStr}
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <DetailBlock label="Category" value={mto.category} />
          <DetailBlock label="MTO Type" value={mto.mtoType} />
          <DetailBlock label="Gold Karatage" value={mto.goldKaratage || 'N/A'} />
          <DetailBlock label="Metal Color" value={mto.metalColor || 'N/A'} />
          <DetailBlock label="Studded" value={mto.isStudded ? 'Yes' : 'No'} />
          <DetailBlock label="Diamond Caratage" value={mto.diamondCaratage || 'N/A'} />
          <DetailBlock label="Product Size" value={mto.size || 'N/A'} />
          <DetailBlock label="Target Weight" value={mto.weightRange || 'N/A'} />
        </div>

        {mto.notes && (
          <div>
            <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Additional Notes / Modifications</label>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border)', color: 'var(--text-main)', lineHeight: 1.6 }}>
              {mto.notes}
            </div>
          </div>
        )}

        {mto.referenceImages && (
          <div>
            <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Reference Image</label>
            <div style={{ position: 'relative', height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
               {/* Using next/img with unoptimized because it's base64 for now */}
               <img 
                 src={mto.referenceImages} 
                 alt="Design Reference" 
                 style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#000' }}
               />
            </div>
          </div>
        )}

      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        <p>This is a strictly confidential design requirement specification.</p>
      </div>
    </div>
  );
}

function DetailBlock({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
        {label}
      </span>
      <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-main)' }}>
        {value}
      </span>
    </div>
  );
}
