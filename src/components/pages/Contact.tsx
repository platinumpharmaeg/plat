'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { getApiUrl } from '@/lib/api-base';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() ?? '',
      company: formData.get('company')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      subject: formData.get('subject')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message right now.');
      }

      router.push(`/thank-you?form=contact&email=${encodeURIComponent(payload.email)}`);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Unable to send your message right now.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide shadow-sm">
              We're Here to Help
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            Whether you are a potential partner, healthcare professional, or seeking information, our team is ready to assist you.
          </motion.p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <SectionTitle title="Contact Information" className="!justify-start mb-6" />
                <p className="content-text mb-8">
                  Reach out to us through any of the channels below. We aim to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="content-heading mb-2">Head Office</h3>
                    <p className="text-slate-600 font-medium">37 Abo El Fawares St. Nasr City, Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="content-heading mb-2">Phone</h3>
                    <p className="text-slate-600 font-medium">+201036969969</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="content-heading mb-2">Email</h3>
                    <p className="text-slate-600 font-medium">info@platinumpharma-eg.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="content-heading mb-2">Working Hours</h3>
                    <p className="text-slate-600 font-medium">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-600 font-medium">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#25D366] text-white font-extrabold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-1">
                <MessageCircle size={24} />
                Chat with us on WhatsApp
              </button>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              
              <SectionTitle title="Send us a Message" className="mb-8 relative z-10" />
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium"
                      placeholder="+201036969969"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select 
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium"
                    defaultValue="Partnership Inquiry"
                  >
                    <option>Partnership Inquiry</option>
                    <option>Product Information</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {submitError && (
                  <p className="text-sm font-medium text-red-500">{submitError}</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary-dark text-white font-extrabold text-lg hover:shadow-[0_0_25px_rgba(89,167,167,0.5)] transition-all duration-300 hover:-translate-y-1 border border-white/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
