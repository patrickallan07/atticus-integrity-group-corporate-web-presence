import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'HR', href: '/hr-advisory' },
  { name: 'Financial Services', href: '/financial-services' },
  { name: 'About', href: '/about' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-slate/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 md:h-40 items-center transition-all duration-500 ease-in-out relative">
          <div className="flex items-center h-full overflow-visible relative">
            <Link
              to="/"
              className="flex items-center transition-transform hover:scale-[1.02] active:scale-95 z-10"
            >
              <img
                src={logoUrl}
                alt="Atticus Integrity"
                className="h-40 md:h-48 w-auto transition-all duration-500 object-contain drop-shadow-sm"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm lg:text-base font-bold tracking-tight transition-colors hover:text-brand-blue relative py-2",
                    location.pathname === link.href
                      ? "text-brand-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-blue after:rounded-full"
                      : "text-brand-slate"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-8 w-px bg-brand-slate/10 mx-2" />
            <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white border-none shadow-soft hover:shadow-glow px-8 h-12 text-sm font-bold transition-all">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green hover:text-brand-blue transition-all p-3 rounded-xl bg-brand-cream/50 active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-slate/10 animate-in slide-in-from-top duration-300 absolute top-full left-0 w-full shadow-2xl z-[60] overflow-y-auto max-h-[calc(100vh-8rem)]">
          <div className="px-6 pt-4 pb-12 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-4 rounded-xl text-lg font-bold transition-colors",
                  location.pathname === link.href
                    ? "bg-brand-green/5 text-brand-blue"
                    : "text-brand-slate hover:bg-brand-green/5 hover:text-brand-green"
                )}
              >
                {link.name}
                <ChevronRight size={20} className={location.pathname === link.href ? "text-brand-blue" : "text-brand-slate/20"} />
              </Link>
            ))}
            <div className="pt-6 px-4">
              <Button asChild className="w-full bg-brand-green text-white border-none h-14 text-lg font-bold shadow-lg" onClick={() => setIsOpen(false)}>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}