import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Outlet } from 'react-router-dom';
/**
 * The primary layout wrapper for the Atticus Integrity Group web presence.
 * Features a sticky navbar, footer, and automatic scroll-to-top functionality.
 * Standardizes the selection colors to the brand-specific Cerulean/Hunter Green scheme.
 */
export function CorporateLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-brand-blue/30 selection:text-brand-green">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}