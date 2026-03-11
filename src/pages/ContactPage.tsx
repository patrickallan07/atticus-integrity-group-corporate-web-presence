import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { CorporateLayout } from '@/components/layout/CorporateLayout';
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
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  service: z.enum(['hr', 'financial', 'general'], {
    required_error: "Please select a service interest",
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'general',
      message: '',
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log('Form values:', values);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success('Message Sent Successfully', {
      description: "We have received your inquiry and will be in touch shortly.",
    });
    form.reset();
  }
  return (
    <CorporateLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-display text-brand-navy mb-6">Get in <span className="text-brand-gold">Touch</span></h1>
              <p className="text-body max-w-lg mb-8">
                Whether you need a full HR audit or just basic bookkeeping support, our team is ready to discuss how we can bring integrity and clarity to your business.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Our Headquarters</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Level 12, Corporate Tower<br />Sydney, NSW 2000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm">1300 ATTICUS</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Email Inquiry</h4>
                  <p className="text-muted-foreground text-sm">info@atticusintegrity.com</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-brand-navy mb-2">Office Hours</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
                <span>Mon - Fri:</span>
                <span className="text-brand-navy font-medium">9:00 AM - 5:30 PM</span>
                <span>Sat - Sun:</span>
                <span className="text-brand-navy font-medium">Closed</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-slate-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 focus-visible:ring-brand-gold" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus-visible:ring-brand-gold" {...field} />
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0400 000 000" className="bg-slate-50 border-slate-200 focus-visible:ring-brand-gold" {...field} />
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
                        <FormLabel>Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-brand-gold">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hr">HR Advisory</SelectItem>
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help your business today?" 
                          className="min-h-[150px] bg-slate-50 border-slate-200 focus-visible:ring-brand-gold resize-none" 
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
                  className="w-full h-14 bg-brand-navy hover:bg-brand-navy/90 text-white text-lg font-bold"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}