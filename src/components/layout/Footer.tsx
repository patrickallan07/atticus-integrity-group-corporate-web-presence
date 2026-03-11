import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
export function Footer() {
  const logoUrl = `data:image/svg+xml,%3Csvg viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='40' rx='2' fill='%23334155'/%3E%3Cpath d='M12 28 L2 38 L22 38 Z' fill='%23FFFFFF'/%3E%3Cpath d='M98 28 L108 38 L88 38 Z' fill='%23FFFFFF'/%3E%3Ctext x='60' y='22' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='7' letter-spacing='0.1em' fill='%23FFFFFF'%3EATTICUS INTEGRITY%3C/text%3E%3C/svg%3E`;
  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={logoUrl}
                alt="Atticus Integrity"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Atticus Integrity is an independent HR and workplace advisory practice dedicated to organizational effectiveness and culture.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/atticus-integrity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-green rounded-full hover:bg-brand-blue transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">The Practice</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white text-sm">The Practice</Link></li>
              <li><Link to="/hr-advisory" className="text-slate-300 hover:text-white text-sm">HR Advisory</Link></li>
              <li><Link to="/financial-services" className="text-slate-300 hover:text-white text-sm">Financial Services</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">HR Advisory</h4>
            <ul className="space-y-4">
              {['Employee Relations', 'HR Compliance', 'Leadership Counsel', 'Workplace Advisory'].map((item) => (
                <li key={item}>
                  <Link to="/hr-advisory" className="text-slate-300 hover:text-brand-blue transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-blue" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span className="font-medium">1 (888) 757-3770</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span>info@atticusintegrity.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2025 Atticus Integrity Group, LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}