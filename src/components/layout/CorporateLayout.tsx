import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
interface CorporateLayoutProps {
  children: React.ReactNode;
}
export function CorporateLayout({ children }: CorporateLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-brand-blue/30 selection:text-brand-green">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}