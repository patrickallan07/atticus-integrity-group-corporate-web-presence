import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, FileCheck, Heart, GraduationCap, Gavel, ShieldAlert, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
const services = [
  {
    title: "Employee Relations",
    description: "Expert counsel on performance management, dispute resolution, and building cohesive, high-trust workplace environments.",
    icon: Heart
  },
  {
    title: "HR Compliance",
    description: "Ensuring organizational adherence to Modern Awards, the Fair Work Act, and all regulatory workplace standards.",
    icon: FileCheck
  },
  {
    title: "Leadership Counsel",
    description: "Strategic advisory for executives and management teams on organizational design and effective leadership practices.",
    icon: GraduationCap
  },
  {
    title: "Workplace Advisory",
    description: "Comprehensive guidance on organizational structure, change management, and workforce effectiveness initiatives.",
    icon: Users
  },
  {
    title: "Talent Strategy",
    description: "Building sustainable pipelines through professional recruitment strategies and optimized onboarding experiences.",
    icon: Briefcase
  },
  {
    title: "Policy & Governance",
    description: "Development of robust employment frameworks, including contracts, handbooks, and specialized workplace policies.",
    icon: Gavel
  },
  {
    title: "Operational Risk",
    description: "Strategic audits to identify people-related risks and implementation of preventative compliance measures.",
    icon: ShieldAlert
  }
];
export function HRServicesPage() {
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  return (
    <>
      <section className="relative bg-brand-cream/50 py-16 md:py-24 border-b border-brand-slate/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={logoUrl}
            alt=""
            className="absolute -top-12 -right-12 w-[600px] aspect-[3/2] object-cover object-center opacity-[0.04] rotate-12 grayscale scale-75"
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
              Atticus Integrity <span className="text-brand-blue">HR</span>
            </h1>
            <p className="text-body max-w-2xl mb-8">
              Atticus Integrity provides independent human resources consulting and workplace advisory services focused on organizational effectiveness, employee engagement, culture development, and HR compliance. This strategic approach helps align people, processes, and performance with business objectives to drive sustainable growth and a high-performing workplace.
            </p>
            <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-green/90 h-12 shadow-sm border-none">
              <Link to="/contact">Discuss Requirements</Link>
            </Button>
          </motion.div>
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
    </>
  );
}