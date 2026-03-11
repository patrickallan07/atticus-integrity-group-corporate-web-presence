import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { api } from '@/lib/api-client';
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  service: z.enum(['hr', 'financial', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type FormValues = z.infer<typeof formSchema>;
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'general',
      message: '',
    },
  });
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSuccess]);
  const onSubmit = useCallback(async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await api("/api/contact", {
        method: "POST",
        body: JSON.stringify(values)
      });
      setIsSuccess(true);
      toast.success('Inquiry Received', {
        description: "Your inquiry has been sent directly to Patrick McCullough for personal review.",
      });
      form.reset();
    } catch (error) {
      toast.error('Submission Error', {
        description: error instanceof Error ? error.message : 'A technical error occurred. Please call the direct line for immediate assistance.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [form]);
  const handleReset = () => {
    setIsSuccess(false);
    form.reset();
  };
  return (
    <div className="bg-brand-cream min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex items-center justify-center py-24 md:py-36 bg-brand-cream"
          >
            <div className="max-w-xl mx-auto px-4 text-center">
              <motion.div
                initial={{ rotate: -15, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-brand-green/10 text-brand-green mb-10 shadow-glow-lg border border-brand-green/20"
              >
                <CheckCircle2 size={72} className="text-brand-blue" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-green mb-8 tracking-tight">Directly Received</h1>
              <p className="text-brand-slate-light text-xl mb-12 leading-relaxed font-medium">
                Thank you for reaching out. As the principal of Atticus Integrity, I personally review every inquiry to ensure we provide the most effective advisory support. I will be in contact with you shortly to discuss your business requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Button asChild size="lg" className="bg-brand-green text-white px-12 h-16 border-none shadow-xl hover:bg-brand-green/90 hover:scale-[1.03] transition-all w-full sm:w-auto font-bold text-lg">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-brand-green hover:bg-brand-blue/10 h-16 px-10 w-full sm:w-auto font-semibold" onClick={handleReset}>
                  Send Another Inquiry
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-1.5 w-16 bg-brand-blue mb-6 rounded-full" />
                  <h1 className="text-display mb-8">Direct <span className="text-brand-blue">Advisory</span> Inquiry</h1>
                  <p className="text-body max-w-lg mb-10 font-medium">
                    Whether you require a comprehensive HR audit, leadership counsel, or professional bookkeeping, I am ready to personally discuss how Atticus Integrity can bring clarity and integrity to your operations.
                  </p>
                </motion.div>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue transition-all group-hover:text-white shadow-soft">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-widest text-xs">Direct Line</h4>
                      <p className="text-brand-slate-light text-2xl font-bold tracking-tight">1 (888) 757-3770</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="h-14 w-14 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue transition-all group-hover:text-white shadow-soft">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-widest text-xs">Inquiry Email</h4>
                      <p className="text-brand-slate-light text-2xl font-medium">info@atticusintegrity.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 bg-white/70 backdrop-blur-xl rounded-[2rem] border border-brand-slate/10 shadow-soft">
                  <h4 className="font-bold text-brand-green mb-6 flex items-center gap-3">
                    <Clock size={20} className="text-brand-blue" />
                    Professional Availability
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-brand-slate/5">
                      <span className="font-medium text-brand-slate-light">Monday - Friday</span>
                      <span className="text-brand-green font-bold">9:00 AM - 5:30 PM (CST)</span>
                    </div>
                    <div className="flex justify-between items-center italic">
                      <span className="text-brand-slate/50">Saturday - Sunday</span>
                      <span className="text-brand-blue font-bold">By Appointment Only</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-brand-slate/5 relative"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold text-sm">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Full Name" className="bg-brand-cream/40 border-brand-slate/10 focus-visible:ring-brand-blue h-14 text-base" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold text-sm">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@company.com" className="bg-brand-cream/40 border-brand-slate/10 focus-visible:ring-brand-blue h-14 text-base" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold text-sm">Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="1 (888) 000-0000" className="bg-brand-cream/40 border-brand-slate/10 focus-visible:ring-brand-blue h-14 text-base" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold text-sm">Advisory Area</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-brand-cream/40 border-brand-slate/10 h-14 text-base">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hr">HR Advisory & Culture</SelectItem>
                                <SelectItem value="financial">Financial Services</SelectItem>
                                <SelectItem value="general">General Professional Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-green font-bold text-sm">Brief Description of Needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your current workplace or financial challenges..."
                              className="min-h-[180px] bg-brand-cream/40 border-brand-slate/10 focus-visible:ring-brand-blue resize-none text-base p-5 leading-relaxed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-18 bg-brand-green hover:bg-brand-green/95 hover:scale-[1.01] active:scale-[0.98] transition-all text-white text-xl font-bold border-none shadow-glow-lg py-8"
                    >
                      {isSubmitting ? (
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      ) : (
                        <Send className="mr-3 h-6 w-6" />
                      )}
                      {isSubmitting ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    </Button>
                    <p className="text-center text-xs text-brand-slate/50 mt-6 leading-relaxed">
                      By submitting this inquiry, you agree to our privacy policy. Your information is treated with absolute integrity and is used solely for the purpose of professional advisory contact.
                    </p>
                  </form>
                </Form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}