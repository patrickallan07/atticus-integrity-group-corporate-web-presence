import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export function HomePage() {
  // Persistent SVG brand logo (light: hunter green on cream for watermarks)
  const logoUrl = `data:image/svg+xml,%3Csvg viewBox='0 0 12 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='12' height='4' rx='0.24' fill='%23F5F5F0'/%3E%3Ctext x='6' y='2.2' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='800' font-size='0.8' letter-spacing='0.01em' fill='%231F4A38'%3EATTICUS INTEGRITY%3C/text%3E%3C/svg%3E`;
  return (
    <CorporateLayout>
      <section className="relative min-h-[85vh] flex items-center bg-brand-cream overflow-hidden">
        {/* Brand Watermark Background Elements - Consolidated Identity */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={logoUrl}
            alt=""
            className="absolute -top-10 -right-20 w-[600px] opacity-[0.03] rotate-12 grayscale"
          />
          <img
            src={logoUrl}
            alt=""
            className="absolute -bottom-20 -left-20 w-[800px] opacity-[0.03] -rotate-12 grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-1.5 rounded-full text-brand-green text-xs font-bold uppercase tracking-widest mb-8 border border-brand-green/20">
              <ShieldCheck size={14} className="text-brand-blue" />
              Professional Integrity, Measured Success
            </div>
            <h1 className="text-display mb-8">
              Navigating Business with <span className="text-brand-blue">Unwavering Integrity</span>
            </h1>
            <p className="text-body mb-10 max-w-2xl">
              Atticus Integrity provides premium HR Advisory and Financial Services designed to foster trust, clarity, and sustainable growth for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 hover:scale-[1.02] transition-all text-white font-bold h-14 px-10 border-none shadow-soft">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-blue/30 text-brand-green hover:bg-brand-blue/5 h-14 px-10">
                <a href="#divisions">Explore Divisions</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="divisions" className="py-24 bg-white border-y border-brand-slate/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-4">Service Divisions</h2>
            <div className="h-1.5 w-20 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Link to="/hr-advisory">
                <Card className="h-full border-brand-slate/10 bg-brand-cream/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="h-64 bg-brand-green relative">
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
                      alt="HR Advisory"
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-8">
                      <div className="p-3 bg-brand-blue text-white inline-block rounded-lg mb-4">
                        <Users size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">HR Advisory</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-brand-slate-light mb-6 leading-relaxed">
                      Strategic advisory on employee relations, compliance, and workplace culture to protect and empower the workforce.
                    </p>
                    <div className="flex items-center text-brand-green font-bold group-hover:text-brand-blue transition-colors">
                      Learn More <ChevronRight size={18} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Link to="/financial-services">
                <Card className="h-full border-brand-slate/10 bg-brand-cream/30 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="h-64 bg-brand-green relative">
                    <img
                      src="https://images.unsplash.com/photo-1454165833767-027ffea10c3b?q=80&w=800&auto=format&fit=crop"
                      alt="Financial Services"
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-8">
                      <div className="p-3 bg-brand-blue text-white inline-block rounded-lg mb-4">
                        <TrendingUp size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Financial Services</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-brand-slate-light mb-6 leading-relaxed">
                      Precision bookkeeping and financial reporting services to provide absolute clarity over operational performance.
                    </p>
                    <div className="flex items-center text-brand-green font-bold group-hover:text-brand-blue transition-colors">
                      Learn More <ChevronRight size={18} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-8">
                Why Industry Leaders Choose <span className="text-brand-blue">Atticus Integrity</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Bespoke Solutions", text: "Every strategy is tailored to the unique business context, rejecting one-size-fits-all approaches." },
                  { title: "Uncompromising Ethics", text: "Integrity is the foundation of every professional interaction and advisory engagement." },
                  { title: "Data-Driven Insights", text: "Advisory insights are backed by rigorous data analysis and industry benchmarking." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 h-8 w-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-2">{item.title}</h4>
                      <p className="text-brand-slate-light text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-green p-8 rounded-xl shadow-xl hidden md:block max-w-[280px]">
                <p className="text-white font-display font-bold text-xl italic mb-4">
                  "Excellence is never an accident; it is always the result of high intention."
                </p>
                <div className="h-1 w-12 bg-brand-blue mb-2" />
                <p className="text-brand-cream/80 text-xs font-bold uppercase tracking-widest">Expert Insight</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CorporateLayout>
  );
}