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
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-navy font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-foreground hidden sm:block">
                ATTICUS <span className="text-brand-gold">INTEGRITY</span>
              </span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold",
                  location.pathname === link.href ? "text-brand-gold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-navy hover:bg-brand-navy/90 text-white border-brand-gold border">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-brand-gold transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3 py-4 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.href 
                    ? "bg-accent text-brand-gold" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {link.name}
                <ChevronRight size={16} />
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full bg-brand-navy text-white" onClick={() => setIsOpen(false)}>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}