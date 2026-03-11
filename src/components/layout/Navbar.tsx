import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'HR Advisory', href: '/hr-advisory' },
  { name: 'Financial Services', href: '/financial-services' },
  { name: 'Contact', href: '/contact' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <path d="M5 35 L20 5 L35 35 Z" fill="#1F4A38" opacity="0.8" />
                  <path d="M10 35 L20 15 L30 35 Z" fill="#1F4A38" />
                  <text x="20" y="32" textAnchor="middle" fill="#007BA7" fontSize="14" fontWeight="bold" fontFamily="Inter">A</text>
                </svg>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-brand-green hidden sm:block">
                ATTICUS <span className="text-brand-blue">INTEGRITY</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-blue",
                  location.pathname === link.href ? "text-brand-blue" : "text-brand-slate"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white border-none shadow-soft hover:shadow-glow transition-all">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green hover:text-brand-blue transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-slate/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3 py-4 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-brand-green/10 text-brand-blue"
                    : "text-brand-slate hover:bg-brand-green/5 hover:text-brand-green"
                )}
              >
                {link.name}
                <ChevronRight size={16} />
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full bg-brand-green text-white border-none" onClick={() => setIsOpen(false)}>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}