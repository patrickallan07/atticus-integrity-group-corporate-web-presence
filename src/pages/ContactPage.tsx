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
        description: "Your inquiry has been sent directly to me for personal review.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Submission Error', {
        description: 'A technical error occurred while routing your inquiry. Please call the direct line for immediate advisory assistance.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);
  const handleReset = () => {
    setIsSuccess(false);
    form.reset({
      name: '',
      email: '',
      phone: '',
      service: 'general',
      message: '',
    });
  };
  return (
    <div className="bg-brand-cream min-h-[calc(100vh-10rem)] flex flex-col">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex items-center justify-center py-20 md:py-32"
          >
            <div className="max-w-xl mx-auto px-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-brand-green text-white mb-10 shadow-glow border-4 border-white"
              >
                <CheckCircle2 size={56} />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-green mb-6 tracking-tight">Directly Received</h1>
              <p className="text-brand-slate-light text-lg mb-12 leading-relaxed font-medium">
                Thank you for reaching out. As the principal of Atticus Integrity, I personally review every inquiry to ensure the most effective advisory alignment. I will be in contact with you shortly to discuss your professional requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-brand-green text-white px-10 h-14 border-none shadow-xl hover:bg-brand-green/90 font-bold">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-brand-blue/30 text-brand-green hover:bg-brand-blue/5 h-14 px-8 font-semibold" onClick={handleReset}>
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
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-1.5 w-12 bg-brand-blue mb-6 rounded-full" />
                  <h1 className="text-display mb-6">Direct <span className="text-brand-blue">Advisory</span> Inquiry</h1>
                  <p className="text-body max-w-lg mb-10 font-medium">
                    Whether you require a comprehensive HR audit, leadership counsel, or professional bookkeeping, I am available to personally discuss how Atticus Integrity can bring clarity and integrity to your operations.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 p-6 bg-white/50 rounded-2xl border border-brand-slate/5 shadow-soft">
                    <div className="h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-widest text-[10px]">Direct Line</h4>
                      <p className="text-brand-slate-light text-lg font-bold">1 (888) 757-3770</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white/50 rounded-2xl border border-brand-slate/5 shadow-soft">
                    <div className="h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1 uppercase tracking-widest text-[10px]">Email</h4>
                      <p className="text-brand-slate-light text-lg font-bold">info@atticusintegrity.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-brand-green text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <Clock className="absolute top-4 right-4 text-brand-blue/30" size={64} />
                  <h4 className="font-bold mb-6 flex items-center gap-3 relative z-10">
                    Professional Availability
                  </h4>
                  <div className="space-y-4 text-sm relative z-10">
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <span className="font-medium text-brand-cream/70">Monday - Friday</span>
                      <span className="font-bold">9:00 AM - 5:30 PM (CST)</span>
                    </div>
                    <div className="flex justify-between items-center italic text-brand-cream/60">
                      <span>Saturday - Sunday</span>
                      <span className="font-bold text-brand-blue">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-brand-slate/5"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-green font-bold text-xs uppercase tracking-wider">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue h-12" {...field} />
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
                            <FormLabel className="text-brand-green font-bold text-xs uppercase tracking-wider">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@company.com" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue h-12" {...field} />
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
                            <FormLabel className="text-brand-green font-bold text-xs uppercase tracking-wider">Contact Number</FormLabel>
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
                            <FormLabel className="text-brand-green font-bold text-xs uppercase tracking-wider">Advisory Area</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-brand-cream/30 border-brand-slate/10 h-12">
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
                          <FormLabel className="text-brand-green font-bold text-xs uppercase tracking-wider">Brief Description of Needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can Atticus Integrity support your business?"
                              className="min-h-[150px] bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-blue resize-none p-4"
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
                      className="w-full h-14 bg-brand-green hover:bg-brand-green/95 hover:scale-[1.01] active:scale-[0.98] transition-all text-white text-lg font-bold border-none shadow-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                    <p className="text-center text-[10px] text-brand-slate/40 mt-4 leading-relaxed uppercase tracking-widest font-bold">
                      All inquiries are treated with absolute professional integrity and discretion.
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