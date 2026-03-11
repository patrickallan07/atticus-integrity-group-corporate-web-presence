import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, BarChart3, PieChart, Landmark, Clock, FileText } from 'lucide-react';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
const financialServices = [
  {
    title: "Full-Cycle Bookkeeping",
    description: "Immaculate maintenance of your general ledger, accounts payable, and accounts receivable.",
    icon: Calculator
  },
  {
    title: "Payroll Management",
    description: "End-to-end processing including Superannuation, Single Touch Payroll (STP), and WorkCover.",
    icon: Clock
  },
  {
    title: "Financial Reporting",
    description: "Monthly management reports that provide deep insights into cash flow, P&L, and balance sheet health.",
    icon: BarChart3
  },
  {
    title: "BAS & IAS Preparation",
    description: "Timely and accurate preparation and lodgement of Business Activity Statements and Installment Activity Statements.",
    icon: FileText
  },
  {
    title: "Cash Flow Forecasting",
    description: "Strategic projections to help you plan for growth and manage seasonal business cycles.",
    icon: PieChart
  },
  {
    title: "Bank Reconciliation",
    description: "Daily or weekly reconciliation of accounts to ensure your financial data is always current.",
    icon: Landmark
  }
];
export function FinancialServicesPage() {
  return (
    <CorporateLayout>
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-display text-brand-navy-dark mb-6">
              Atticus Integrity <span className="text-brand-cyan">Financial</span>
            </h1>
            <p className="text-body max-w-2xl mb-8">
              Numbers tell the story of your business. We ensure that story is accurate, transparent, and formatted to support informed decision-making at every level.
            </p>
            <Button asChild size="lg" className="bg-brand-teal-deep text-white hover:bg-brand-teal-deep/90 h-12 shadow-sm">
              <Link to="/contact">Get a Bookkeeping Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardHeader>
                    <div className="h-12 w-12 bg-brand-cyan-light rounded-lg flex items-center justify-center text-brand-teal-deep mb-2">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-brand-navy-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Absolute Clarity Over Your Finances</h2>
          <p className="text-brand-cyan-light/70 mb-10 text-lg">
            Stop guessing and start growing with structured financial reporting and impeccable bookkeeping.
          </p>
          <Button asChild size="lg" className="bg-gradient-brand text-white hover:scale-105 transition-transform h-14 px-10 font-bold border-none">
            <Link to="/contact">Schedule a Review</Link>
          </Button>
        </div>
      </section>
    </CorporateLayout>
  );
}