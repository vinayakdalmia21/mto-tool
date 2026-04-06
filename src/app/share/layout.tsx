import Image from 'next/image';
import Link from 'next/link';

export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F4F1EE] flex flex-col items-center py-12 px-4 selection:bg-[#C5A059]/30">
      <header className="mb-12 flex flex-col items-center">
        <div className="relative group">
          <Image 
            src="/veda-logo.png" 
            alt="VEDA Silver | Gold | Diamonds" 
            width={280} 
            height={280} 
            className="mb-6 drop-shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
      </header>
      
      <main className="w-full max-w-4xl">
        {children}
      </main>
      
      <footer className="mt-16 pb-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} VEDA Silver | Gold | Diamonds. All rights reserved.</p>
        <p className="mt-1">Crafting Excellence in Every Detail.</p>
      </footer>
    </div>
  );
}
