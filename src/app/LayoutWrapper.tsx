"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Conditionally remove Chrome (Sidebar + margins) for public links
  const isPublicRoute = pathname?.startsWith('/share/');

  if (!mounted) {
    return <div style={{ minHeight: '100vh', background: 'var(--background)' }} />;
  }

  if (isPublicRoute) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--background)', width: '100%' }}>
        {children}
      </main>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', marginLeft: '260px' }}>
        {children}
      </main>
    </div>
  );
}
