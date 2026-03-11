import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
interface CorporateLayoutProps {
  children: React.ReactNode;
}
export function CorporateLayout({ children }: CorporateLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-brand-blue/30 selection:text-brand-green">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}