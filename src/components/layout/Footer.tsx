import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://placehold.co/400x100/1F4A38/FFFFFF?text=ATTICUS+INTEGRITY" 
                alt="Atticus Integrity Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-display font-bold tracking-tight text-white">
                ATTICUS <span className="text-brand-blue">INTEGRITY</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Providing premium advisory and financial services with integrity and excellence at our core. Your partner in professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-brand-green rounded-full hover:bg-brand-blue transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">HR Advisory</h4>
            <ul className="space-y-4">
              {['Workplace Advisory', 'Recruiting', 'HR Compliance', 'Culture & Engagement'].map((item) => (
                <li key={item}>
                  <Link to="/hr-advisory" className="text-slate-300 hover:text-brand-blue transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-blue" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">Financial Services</h4>
            <ul className="space-y-4">
              {['Full-Cycle Bookkeeping', 'Payroll Processing', 'BAS/IAS Preparation', 'Management Reporting'].map((item) => (
                <li key={item}>
                  <Link to="/financial-services" className="text-slate-300 hover:text-brand-blue transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-blue" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-blue font-bold text-sm tracking-widest uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span>1 (888) 757-3770</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span>info@atticusintegrity.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Atticus Integrity Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}