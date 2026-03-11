import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, BarChart3, Landmark, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
const financialServices = [
  {
    title: "Full-Cycle Bookkeeping",
    description: "Immaculate maintenance of general ledger, accounts payable, and accounts receivable systems.",
    icon: Calculator
  },
  {
    title: "Payroll Management",
    description: "End-to-end processing including Superannuation, Single Touch Payroll (STP), and WorkCover compliance.",
    icon: Clock
  },
  {
    title: "Financial Reporting",
    description: "Monthly management reports that provide deep insights into cash flow, P&L, and balance sheet health.",
    icon: BarChart3
  },
  {
    title: "Bank Reconciliation",
    description: "Daily or weekly reconciliation of accounts to ensure financial data is always current and reliable.",
    icon: Landmark
  }
];
export function FinancialServicesPage() {
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  return (
    <>
      <section className="relative bg-brand-slate/5 py-16 md:py-24 border-b border-brand-slate/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={logoUrl}
            alt=""
            className="absolute -top-16 -left-16 w-[700px] aspect-[3/2] object-cover object-center opacity-[0.04] -rotate-12 grayscale scale-75"
          />
          <img
            src={logoUrl}
            alt=""
            className="absolute top-0 right-0 w-[500px] aspect-[3/2] object-cover object-center opacity-[0.04] rotate-45 grayscale scale-75"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-display mb-6">
              Atticus Integrity <span className="text-brand-blue">Financial</span>
            </h1>
            <p className="text-body max-w-2xl mb-8">
              Atticus Integrity provides professional bookkeeping and small business accounting services that deliver accurate, transparent, and timely financial records. Atticus Integrity helps business owners improve cash flow visibility, stay compliant, and use clear financial reporting to make confident, growth-focused decisions.
            </p>
            <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-green/90 h-12 shadow-sm border-none">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-brand-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {financialServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:border-brand-blue/50 hover:shadow-lg transition-all duration-300 border-brand-slate/10 bg-white">
                  <CardHeader>
                    <div className="h-12 w-12 bg-brand-blue rounded-lg flex items-center justify-center text-white mb-2 shadow-sm">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-brand-green font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-green text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Absolute Clarity Over Your Finances</h2>
          <p className="text-brand-cream/80 mb-10 text-lg">
            Replace uncertainty with structured financial reporting and impeccable bookkeeping.
          </p>
          <Button asChild size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/90 hover:scale-105 transition-transform h-14 px-10 font-bold border-none">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}