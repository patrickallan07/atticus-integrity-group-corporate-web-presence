import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, User, Quote } from 'lucide-react';
export function AboutPage() {
  const logoUrl = 'https://media.licdn.com/dms/image/v2/D560BAQEVVrYn60iyEA/company-logo_200_200/B56Zzbr8C2IcAI-/0/1773212255196/atticus_integrity_logo?e=1775088000&v=beta&t=os5WqGOOk_ZynAh-ZLf7CPzYUIfMuJaFjH531pIqMJg';
  const founderImageUrl = 'https://media.licdn.com/dms/image/v2/D5603AQEWmSSUztvCGQ/profile-displayphoto-scale_200_200/B56ZuafSA5IcAg-/0/1767823450870?e=1775088000&v=beta&t=HaWw9j7erA-u-6wsjFtYkCcCSEtAm9Dzw0HQO44OMPs';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-20 bg-brand-blue mb-8 rounded-full" />
            <h1 className="text-display mb-6">The Practice</h1>
            <p className="text-body max-w-3xl font-medium">
              Atticus Integrity is an independent HR and workplace advisory practice and financial bookkeeping service dedicated to helping organizations achieve greater levels of effectiveness and culture through objective, expert counsel.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-6">Professional Ethos</h2>
                <p className="text-brand-slate-light leading-relaxed text-lg font-medium">
                  Atticus Integrity believes that organizational success is inextricably linked to the integrity of its people systems and the clarity of its financial performance. As an independent firm, the practice provides objective, high-stakes counsel that balances cultural health with commercial reality.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { icon: Shield, title: "Independence", text: "Unbiased advisory focused solely on the organization's best interests." },
                  { icon: Target, title: "Precision", text: "Tailored strategies that address the root causes of workplace and financial friction." },
                  { icon: Award, title: "Integrity", text: "A commitment to ethical practice in every engagement and interaction." },
                  { icon: User, title: "Experience", text: "Direct access to senior-level expertise without traditional firm overhead." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 text-brand-blue font-bold tracking-tight">
                      <div className="p-2 bg-brand-blue/10 rounded-lg">
                        <item.icon size={20} />
                      </div>
                      {item.title}
                    </div>
                    <p className="text-sm text-brand-slate-light leading-relaxed font-medium pl-1">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-cream/30 p-8 md:p-14 rounded-[2.5rem] border border-brand-slate/5 shadow-soft relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote size={120} className="text-brand-blue" />
              </div>
              <div className="flex flex-col items-center text-center space-y-8 relative z-10">
                <div className="relative">
                  <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-xl overflow-hidden ring-4 ring-brand-blue/5">
                    <img
                      src={founderImageUrl}
                      alt="Patrick McCullough - Founder & Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-blue text-white p-2.5 rounded-full shadow-lg border-4 border-brand-cream">
                    <Award size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-brand-blue font-bold uppercase tracking-[0.2em] text-[11px] mb-2">Founder & Principal</p>
                  <h3 className="text-3xl font-display font-bold text-brand-green mb-1">Patrick McCullough</h3>
                  <p className="text-brand-slate-light font-bold text-sm">Strategic Workplace & Financial Advisor</p>
                </div>
                <div className="h-[2px] w-24 bg-brand-blue/20 rounded-full" />
                <div className="space-y-6">
                  <p className="text-brand-slate-light text-base leading-relaxed max-w-sm font-medium">
                    With years of experience navigating the complexities of HR compliance and business operations, Patrick McCullough established Atticus Integrity to provide a personalized, integrity-driven approach to corporate advisory.
                  </p>
                  <p className="text-brand-green text-lg leading-relaxed max-w-md italic font-display font-semibold">
                    &ldquo;The mission is to bring clarity to the workplace, ensuring that both the business and its people can thrive in an environment of mutual respect and operational excellence.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white leading-tight">
              Where Integrity Guides <br className="hidden md:block" /> Every Decision
            </h2>
            <div className="max-w-2xl mx-auto text-brand-cream/80 leading-relaxed text-lg font-medium">
              <p>
                Whether the engagement involves a deep-dive HR audit, precision bookkeeping, or sensitive leadership counsel, the work of Atticus Integrity is defined by a single, unwavering standard: Professional Integrity.
              </p>
            </div>
            <div className="mt-12">
              <div className="h-1 w-24 bg-brand-blue mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}