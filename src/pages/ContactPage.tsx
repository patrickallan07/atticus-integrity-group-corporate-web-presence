import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';
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
        description: "I have received your information and will personally review the details to respond within one business day.",
      });
      form.reset();
    } catch (error) {
      toast.error('Submission Error', {
        description: error instanceof Error ? error.message : 'A technical error occurred. Please try again or call the direct line.'
      });
      console.error('Contact submission error:', error);
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
            className="flex-1 flex items-center justify-center py-20 md:py-32 bg-brand-cream"
          >
            <div className="max-w-xl mx-auto px-4 text-center">
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-brand-green/10 text-brand-green mb-10 shadow-glow"
              >
                <CheckCircle2 size={64} className="text-brand-blue" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-green mb-6 tracking-tight">Inquiry Received</h1>
              <p className="text-brand-slate-light text-lg mb-12 leading-relaxed font-medium">
                Thank you for reaching out. As the principal of Atticus Integrity, I personally review every inquiry to ensure we provide the most effective advisory support. I will be in contact with you shortly to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                <Button asChild size="lg" className="bg-brand-green text-white px-12 h-14 border-none shadow-lg hover:bg-brand-green/90 hover:scale-[1.03] transition-all w-full sm:w-auto font-bold">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-brand-green hover:bg-brand-blue/10 h-14 px-10 w-full sm:w-auto font-semibold" onClick={handleReset}>
                  Send Another Message
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
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-display mb-6">Get in <span className="text-brand-blue">Touch</span></h1>
                  <p className="text-body max-w-lg mb-8 font-medium">
                    Whether you require a comprehensive HR audit, specialized recruitment support, or professional bookkeeping, I am ready to discuss how Atticus Integrity can bring clarity to your business operations.
                  </p>
                </motion.div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue transition-all group-hover:text-white shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-wider text-xs">Direct Line</h4>
                      <p className="text-brand-slate-light text-xl font-bold tracking-tight">1 (888) 757-3770</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue transition-all group-hover:text-white shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-wider text-xs">Email Inquiry</h4>
                      <p className="text-brand-slate-light text-xl font-medium">info@atticusintegrity.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-brand-slate/10 shadow-soft">
                  <h4 className="font-bold text-brand-green mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                    Service Availability
                  </h4>
                  <div className="grid grid-cols-2 gap-y-3 text-sm text-brand-slate-light">
                    <span className="font-medium">Mon - Fri:</span>
                    <span className="text-brand-green font-bold text-right">9:00 AM - 5:30 PM (CST)</span>
                    <span className="font-medium">Sat - Sun:</span>
                    <span className="text-brand-slate/40 font-bold text-right italic">By Appointment</span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-slate/5"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue h-12" {...field} />
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
                            <FormLabel className="text-brand-green font-bold">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="1 (888) 000-0000" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue h-12" {...field} />
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
                            <FormLabel className="text-brand-green font-bold">Service Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-brand-cream/30 border-brand-slate/10 focus:ring-brand-blue h-12">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hr">HR Advisory / Recruiting</SelectItem>
                                <SelectItem value="financial">Financial Services</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
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
                          <FormLabel className="text-brand-green font-bold">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can I assist your business today?"
                              className="min-h-[160px] bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue resize-none text-base p-4"
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
                      className="w-full h-16 bg-brand-green hover:bg-brand-green/95 hover:scale-[1.01] active:scale-[0.98] transition-all text-white text-lg font-bold border-none shadow-glow"
                    >
                      {isSubmitting ? (
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      ) : (
                        <Send className="mr-3 h-5 w-5" />
                      )}
                      {isSubmitting ? 'Submitting Inquiry...' : 'Send Message'}
                    </Button>
                    <p className="text-center text-xs text-brand-slate/40 mt-4">
                      By submitting this form, you agree to our privacy policy. We value your privacy and handle all data with absolute integrity.
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