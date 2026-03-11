import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
export function Footer() {
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-slate text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <div className="flex items-center">
              <div className="h-24 aspect-[3/2] overflow-hidden rounded-sm bg-white p-1 transition-transform hover:scale-105 duration-500 shadow-lg">
                <img
                  src={logoUrl}
                  alt="Atticus Integrity"
                  className="h-full w-full object-cover object-center scale-75"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-medium text-slate-300 italic">
              Where Integrity Guides Every Decision
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/atticus-integrity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-green/20 rounded-xl hover:bg-brand-blue hover:scale-110 active:scale-95 transition-all text-white border border-white/5 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587582700421"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-green/20 rounded-xl hover:bg-brand-blue hover:scale-110 active:scale-95 transition-all text-white border border-white/5 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/atticusintegrity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-green/20 rounded-xl hover:bg-brand-blue hover:scale-110 active:scale-95 transition-all text-white border border-white/5 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-8 lg:pl-8">
            <h4 className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase">The Practice</h4>
            <ul className="space-y-5">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold">About</Link></li>
              <li><Link to="/hr-advisory" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold">HR</Link></li>
              <li><Link to="/financial-services" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold">Financial</Link></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase">Advisory Areas</h4>
            <ul className="space-y-5">
              {['Employee Relations', 'HR Compliance', 'Leadership Counsel', 'Financial Clarity'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Financial Clarity' ? "/financial-services" : "/hr-advisory"} className="text-slate-300 hover:text-brand-blue transition-all text-sm font-semibold flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-brand-blue transition-transform group-hover:translate-x-1" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase">Direct Contact</h4>
            <ul className="space-y-6 text-sm text-slate-300">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                  <span className="font-bold text-white text-base">1 (888) 757-3770</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Inquiry Email</p>
                  <span className="font-medium text-white">info@atticusintegrity.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-wide text-slate-500 font-bold uppercase">
          <p>© {currentYear} Atticus Integrity Group, LLC. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}