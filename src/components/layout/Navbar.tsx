import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'HR', href: '/hr-advisory' },
  { name: 'Financial', href: '/financial-services' },
  { name: 'About', href: '/about' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-lg border-b border-brand-slate/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-32 items-center relative">
          {/* Logo Section - Positioned to overflow slightly for architectural interest */}
          <div className="flex items-center h-full relative w-32 md:w-48">
            <Link
              to="/"
              className="flex items-center group transition-transform duration-500 hover:scale-[1.03] active:scale-95 z-20 absolute top-3 md:top-6 left-0"
            >
              <div className="h-24 md:h-36 aspect-[3/2] overflow-hidden rounded-md bg-white shadow-xl border border-brand-slate/5 ring-4 ring-white/50 flex items-center justify-center transition-shadow group-hover:shadow-glow">
                <img
                  src={logoUrl}
                  alt="Atticus Integrity"
                  className="h-full w-full transition-transform duration-1000 object-cover object-center scale-75 drop-shadow-sm group-hover:scale-[0.8]"
                />
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 h-full">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm lg:text-base font-bold tracking-tight transition-all hover:text-brand-blue relative py-2",
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
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green hover:text-brand-blue transition-all p-2 rounded-lg bg-brand-cream/50 active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-brand-slate/10 animate-in slide-in-from-top-4 duration-300 shadow-2xl z-[110] overflow-hidden">
          <div className="px-6 py-10 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex items-center justify-between px-4 py-4 rounded-xl text-lg font-bold transition-all",
                  location.pathname === link.href
                    ? "bg-brand-green/5 text-brand-blue"
                    : "text-brand-slate hover:bg-brand-green/5 hover:text-brand-green"
                )}
              >
                {link.name}
                <ChevronRight size={20} className={cn("transition-transform", location.pathname === link.href ? "text-brand-blue translate-x-1" : "text-brand-slate/20")} />
              </Link>
            ))}
            <div className="pt-6 px-4">
              <Button asChild className="w-full bg-brand-green text-white border-none h-14 text-lg font-bold shadow-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}