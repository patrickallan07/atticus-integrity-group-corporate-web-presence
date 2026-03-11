import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, FileCheck, Heart, GraduationCap, Gavel, ShieldAlert } from 'lucide-react';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
const services = [
  {
    title: "Workplace Advisory",
    description: "Strategic guidance on organizational structure, workforce planning, and change management initiatives.",
    icon: Users
  },
  {
    title: "Employee Relations",
    description: "Expert assistance with performance management, dispute resolution, and maintaining positive workplace cultures.",
    icon: Heart
  },
  {
    title: "HR Compliance",
    description: "Ensuring your business meets all Modern Award requirements, Fair Work Act standards, and safety regulations.",
    icon: FileCheck
  },
  {
    title: "Leadership Coaching",
    description: "Tailored development programs for executives and middle management to build high-performance teams.",
    icon: GraduationCap
  },
  {
    title: "Policy Development",
    description: "Drafting comprehensive employment contracts, handbooks, and specialized workplace policies.",
    icon: Gavel
  },
  {
    title: "Risk Mitigation",
    description: "Auditing HR practices to identify potential legal vulnerabilities and implementing corrective actions.",
    icon: ShieldAlert
  }
];
export function HRServicesPage() {
  return (
    <CorporateLayout>
      <section className="bg-brand-cream/50 py-16 md:py-24 border-b border-brand-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">
              Atticus Integrity <span className="text-brand-blue">HR Advisory</span>
            </h1>
            <p className="text-body max-w-2xl mb-8">
              People are your greatest asset. We help you manage, protect, and empower your workforce through professional advisory services that blend empathy with legal precision.
            </p>
            <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-green/90 h-12 shadow-sm">
              <Link to="/contact">Request an HR Audit</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-brand-slate/10 bg-brand-cream/10">
                  <CardHeader>
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-green mb-2">
                      <service.icon size={24} className="text-brand-blue" />
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
      <section className="py-20 bg-gradient-signature text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Optimize Your Workplace?</h2>
          <p className="text-brand-cream/80 mb-10 text-lg">
            Our advisors are ready to help you navigate complex employee situations with confidence and integrity.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-green hover:bg-brand-cream hover:scale-105 transition-transform h-14 px-10 font-bold border-none">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </CorporateLayout>
  );
}