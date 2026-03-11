import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-navy font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                ATTICUS <span className="text-brand-gold">INTEGRITY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing premium advisory and financial services with integrity and excellence at our core. Your partner in professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-gold transition-colors text-white hover:text-brand-navy">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold text-sm tracking-widest uppercase">HR Advisory</h4>
            <ul className="space-y-4">
              <li><Link to="/hr-advisory" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Workplace Advisory</Link></li>
              <li><Link to="/hr-advisory" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Employee Relations</Link></li>
              <li><Link to="/hr-advisory" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> HR Compliance</Link></li>
              <li><Link to="/hr-advisory" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Culture & Engagement</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold text-sm tracking-widest uppercase">Financial Services</h4>
            <ul className="space-y-4">
              <li><Link to="/financial-services" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Full-Cycle Bookkeeping</Link></li>
              <li><Link to="/financial-services" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Payroll Processing</Link></li>
              <li><Link to="/financial-services" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> BAS/IAS Preparation</Link></li>
              <li><Link to="/financial-services" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-brand-gold" /> Management Reporting</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold text-sm tracking-widest uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Level 12, Corporate Tower<br />Sydney, NSW 2000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>1300 ATTICUS</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@atticusintegrity.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
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