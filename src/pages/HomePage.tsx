import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export function HomePage() {
  return (
    <CorporateLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-3 py-1 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              Professional Integrity, Measured Success
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
              Navigating Your Business with <span className="text-brand-gold">Unwavering Integrity</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Atticus Integrity Group provides premium HR Advisory and Financial Services designed to foster trust, clarity, and sustainable growth for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold h-14 px-8">
                <Link to="/contact">Discuss Your Strategy</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8">
                <a href="#divisions">Explore Divisions</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Split Pathway Section */}
      <section id="divisions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Core Service Divisions</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* HR Card */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/hr-advisory">
                <Card className="h-full border-none shadow-soft hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="h-64 bg-brand-navy relative">
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" 
                      alt="HR Advisory"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <div className="p-3 bg-brand-gold inline-block rounded-lg mb-4 text-brand-navy">
                        <Users size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">HR Advisory</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Transform your workplace culture with expert advisory on employee relations, compliance, and strategic HR management.
                    </p>
                    <div className="flex items-center text-brand-navy font-bold group-hover:text-brand-gold transition-colors">
                      Learn More <ChevronRight size={18} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
            {/* Financial Card */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/financial-services">
                <Card className="h-full border-none shadow-soft hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="h-64 bg-brand-navy relative">
                    <img 
                      src="https://images.unsplash.com/photo-1454165833767-027ffea10c3b?q=80&w=800&auto=format&fit=crop" 
                      alt="Financial Services"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <div className="p-3 bg-brand-gold inline-block rounded-lg mb-4 text-brand-navy">
                        <TrendingUp size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Financial Services</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Precision bookkeeping and financial reporting services to give you absolute clarity over your business performance.
                    </p>
                    <div className="flex items-center text-brand-navy font-bold group-hover:text-brand-gold transition-colors">
                      Learn More <ChevronRight size={18} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-8">
                Why Industry Leaders Choose <span className="text-brand-gold">Atticus Integrity</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Bespoke Solutions", text: "We don't believe in one-size-fits-all. Every strategy is tailored to your unique business context." },
                  { title: "Uncompromising Ethics", text: "Integrity is not just in our name; it's the foundation of every client interaction we have." },
                  { title: "Data-Driven Insights", text: "Whether HR or Finance, our advice is backed by rigorous data and industry benchmarking." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 h-8 w-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 rounded-xl shadow-xl hidden md:block max-w-[280px]">
                <p className="text-brand-navy font-display font-bold text-xl italic mb-4">
                  "Excellence is never an accident; it is always the result of high intention."
                </p>
                <div className="h-0.5 w-12 bg-brand-navy mb-2" />
                <p className="text-brand-navy/80 text-xs font-bold uppercase tracking-widest">Atticus Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CorporateLayout>
  );
}