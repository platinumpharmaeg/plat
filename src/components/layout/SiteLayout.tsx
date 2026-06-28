'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-slate-50">
      <Navbar />
      <main className={`flex-grow pb-12 ${pathname === '/' ? '' : 'pt-24'}`}>{children}</main>
      <Footer />
    </div>
  );
}
