import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export function HomePage() {
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center bg-brand-cream overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={logoUrl}
            alt=""
            className="absolute -top-10 -right-20 w-[800px] aspect-[3/2] object-cover object-center opacity-[0.04] rotate-12 grayscale scale-75"
          />
          <img
            src={logoUrl}
            alt=""
            className="absolute -bottom-20 -left-20 w-[1000px] aspect-[3/2] object-cover object-center opacity-[0.04] -rotate-12 grayscale scale-75"
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
              Independent Professional Advisory
            </div>
            <h1 className="text-display mb-6 md:mb-8">
              Greater Levels of <span className="text-brand-blue">Effectiveness & Culture</span>
            </h1>
            <p className="text-body max-w-2xl mb-10">
              Atticus Integrity is an independent human resources and workplace advisory firm offering comprehensive HR consulting and financial bookkeeping services. Atticus Integrity partners with organizations to enhance operational efficiency, ensure compliance, and cultivate strong, high-performing workplace cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 hover:scale-[1.02] transition-all text-white font-bold h-14 px-10 border-none shadow-soft">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-blue/30 text-brand-green hover:bg-brand-blue/5 h-14 px-10">
                <Link to="/about">About the Firm</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="divisions" className="py-24 bg-white border-y border-brand-slate/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-green mb-4">Practice Areas</h2>
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
                      Specialized counsel in employee relations, workplace compliance, and leadership effectiveness to build high-performance cultures.
                    </p>
                    <div className="flex items-center text-brand-green font-bold group-hover:text-brand-blue transition-colors">
                      Explore Services <ChevronRight size={18} className="ml-1" />
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
                      src="https://images.pexels.com/photos/394372/pexels-photo-394372.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop"
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
                      Precision bookkeeping and structured financial management services to provide absolute clarity over business performance.
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
    </>
  );
}