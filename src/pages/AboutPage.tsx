import React from 'react';
import { motion } from 'framer-motion';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
import { Shield, Target, Award, User } from 'lucide-react';
export function AboutPage() {
  const logoUrl = `data:image/svg+xml,%3Csvg viewBox='0 0 12 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='12' height='4' rx='0.24' fill='%23F5F5F0'/%3E%3Ctext x='6' y='2.2' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='0.8' letter-spacing='0.01em' fill='%231F4A38'%3EATTICUS INTEGRITY%3C/text%3E%3C/svg%3E`;
  const founderImageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop';
  return (
    <CorporateLayout>
      <section className="relative bg-brand-cream/50 py-16 md:py-24 border-b border-brand-slate/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img src={logoUrl} alt="" className="absolute -top-12 -right-12 w-[500px] opacity-[0.03] rotate-12 grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display mb-6">The Practice</h1>
            <p className="text-body max-w-3xl">
              Atticus Integrity is an independent HR and workplace advisory practice dedicated to helping organizations achieve greater levels of organizational effectiveness and culture.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green">Professional Ethos</h2>
              <p className="text-brand-slate-light leading-relaxed">
                Atticus Integrity believes that organizational success is inextricably linked to the integrity of its people systems. As an independent firm, we provide objective, high-stakes counsel that larger consultancies often overlook. Our focus is on the intersection of compliance, culture, and commercial reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Independence", text: "Unbiased advisory focused solely on your organization's best interests." },
                  { icon: Target, title: "Precision", text: "Tailored strategies that address the root causes of workplace friction." },
                  { icon: Award, title: "Integrity", text: "A commitment to ethical practice in every engagement and interaction." },
                  { icon: User, title: "Experience", text: "Direct access to senior-level expertise without the traditional firm overhead." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-brand-blue font-bold">
                      <item.icon size={20} />
                      {item.title}
                    </div>
                    <p className="text-sm text-brand-slate-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-cream/30 p-8 md:p-12 rounded-3xl border border-brand-slate/5">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-soft overflow-hidden">
                  <img
                    src={founderImageUrl}
                    alt="Founder & Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-green">Founder & Principal</h3>
                  <p className="text-brand-blue font-semibold uppercase tracking-widest text-xs mt-1">Strategic Workplace Advisor</p>
                </div>
                <div className="h-px w-20 bg-brand-blue/30" />
                <p className="text-brand-slate-light text-sm leading-relaxed max-w-sm">
                  With years of experience navigating the complexities of HR compliance and organizational design, our founder established Atticus Integrity to provide a more personalized, integrity-driven approach to corporate advisory.
                </p>
                <p className="text-brand-slate-light text-sm leading-relaxed max-w-sm italic">
                  "The mission is to bring clarity to the workplace, ensuring that both the business and its people can thrive in an environment of mutual respect and operational excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Committed to Organizational Effectiveness</h2>
          <div className="max-w-2xl mx-auto text-brand-cream/80 leading-relaxed">
            <p>
              Whether we are conducting a deep-dive HR audit, designing leadership development pathways, or resolving sensitive employee relations matters, our work is defined by a single standard: Integrity.
            </p>
          </div>
        </div>
      </section>
    </CorporateLayout>
  );
}