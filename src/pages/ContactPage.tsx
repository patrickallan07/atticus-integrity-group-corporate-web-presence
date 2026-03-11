import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
  const onSubmit = useCallback(async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await api("/api/contact", {
        method: "POST",
        body: JSON.stringify(values)
      });
      setIsSuccess(true);
      toast.success('Inquiry Received', {
        description: "Your inquiry has been logged. I will review the details and respond personally within one business day.",
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
  if (isSuccess) {
    return (
      <div className="bg-brand-cream min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto px-4 text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-display font-bold text-brand-green mb-4">Inquiry Received</h1>
          <p className="text-brand-slate-light text-lg mb-10 leading-relaxed">
            Thank you for reaching out. I have received your information and will personally review the requirements to ensure the best possible advisory support. Expect a response shortly.
          </p>
          <Button asChild size="lg" className="bg-brand-green text-white px-8">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-display mb-6">Get in <span className="text-brand-blue">Touch</span></h1>
              <p className="text-body max-w-lg mb-8">
                Whether you require a comprehensive HR audit, specialized recruitment support, or professional bookkeeping, Atticus Integrity is ready to discuss how to bring clarity to your business operations.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Direct Line</h4>
                  <p className="text-brand-slate-light text-lg font-semibold tracking-tight">1 (888) 757-3770</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Email Inquiry</h4>
                  <p className="text-brand-slate-light text-lg">info@atticusintegrity.com</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-brand-slate/10">
              <h4 className="font-bold text-brand-green mb-2">Service Availability</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-brand-slate-light">
                <span>Mon - Fri:</span>
                <span className="text-brand-green font-semibold">9:00 AM - 5:30 PM (CST)</span>
                <span>Sat - Sun:</span>
                <span className="text-brand-green font-semibold">Closed</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-brand-slate/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-green">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-green" {...field} />
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
                        <FormLabel className="text-brand-green">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-green" {...field} />
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
                        <FormLabel className="text-brand-green">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1 (888) 000-0000" className="bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-green" {...field} />
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
                        <FormLabel className="text-brand-green">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-brand-cream/30 border-brand-slate/10 focus:ring-brand-green">
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
                      <FormLabel className="text-brand-green">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can Atticus Integrity assist your business today?"
                          className="min-h-[150px] bg-brand-cream/30 border-brand-slate/10 focus-visible:ring-brand-green resize-none"
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
                  className="w-full h-14 bg-brand-green hover:bg-brand-green/90 hover:scale-[1.01] transition-all text-white text-lg font-bold border-none"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}