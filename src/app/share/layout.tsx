import Image from 'next/image';

export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center py-12 px-4 selection:bg-[#631E32]/20"
      style={{ 
        backgroundColor: '#FDF8F0', 
        color: '#631E32', // Unified Brand Maroon for primary text
        fontFamily: "'Playfair Display', 'Georgia', serif",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Google Fonts for Serif elegance */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <header style={{ 
        marginBottom: '3rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1000px', 
        textAlign: 'center' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%', 
          marginBottom: '1rem',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.6) brightness(1.15) saturate(1.05)' 
        }}>
          <Image 
            src="/veda-logo.png" 
            alt="VEDA Silver | Gold | Diamonds" 
            width={320} 
            height={120} 
            style={{ 
              display: 'block',
              maxWidth: '100%',
              height: 'auto'
            }}
            priority
            unoptimized
          />
        </div>
        
        {/* Elegant Maroon/Gold Divider */}
        <div className="flex items-center gap-3 mb-10 opacity-80" style={{ color: '#631E32' }}>
          <div style={{ height: '1px', width: '30px', backgroundColor: '#631E32' }}></div>
          <p className="text-sm tracking-[0.3em] uppercase whitespace-nowrap">Ancient Wisdom • Enduring Elegance</p>
          <div style={{ height: '1px', width: '30px', backgroundColor: '#631E32' }}></div>
        </div>
      </header>
      
      <main className="w-full max-w-4xl" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </main>
      
      <footer className="mt-20 pb-12 text-center text-[#631E32]/60 text-xs italic">
        <div className="w-16 h-[1px] bg-[#631E32]/20 mx-auto mb-6" />
        <p>© {new Date().getFullYear()} VEDA Silver | Gold | Diamonds. All rights reserved.</p>
        <p className="mt-2 tracking-wide">Crafting Excellence in Every Detail.</p>
      </footer>
    </div>
  );
}
