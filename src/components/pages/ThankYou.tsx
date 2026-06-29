'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { CheckCircle2, Home, ArrowLeft, Mail } from 'lucide-react';

const content = {
  careers: {
    badge: 'Application Submitted',
    title: 'Thank You for Applying',
    message:
      'Your CV and application details have been received successfully. Our recruitment team will review your profile against current and future opportunities.',
    backHref: '/careers',
    backLabel: 'Back to Careers',
  },
  contact: {
    badge: 'Message Sent',
    title: 'Thank You for Contacting Us',
    message:
      'Your message has been sent successfully. Our team aims to respond to all inquiries within 24 business hours.',
    backHref: '/contact',
    backLabel: 'Back to Contact',
  },
} as const;

export default function ThankYou() {
  const searchParams = useSearchParams();
  const formType = searchParams.get('form') === 'contact' ? 'contact' : 'careers';
  const email = searchParams.get('email')?.trim() ?? '';
  const page = content[formType];

  return (
    <div className="flex flex-col pb-24">
      <section className="pt-10 md:pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8"
          >
            <CheckCircle2 size={40} strokeWidth={1.5} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide shadow-sm"
          >
            {page.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="page-title mb-6"
          >
            {page.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/80 shadow-xl p-8 md:p-10 text-left space-y-5"
          >
            <p className="content-text">{page.message}</p>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/10 border border-primary/15">
              <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Confirmation email sent</p>
                <p className="content-text !mb-0">
                  {email ? (
                    <>
                      A confirmation email has been sent to{' '}
                      <span className="font-bold text-slate-800">{email}</span>. Please check your inbox
                      and spam folder.
                    </>
                  ) : (
                    <>A confirmation email has been sent to your email address. Please check your inbox and spam folder.</>
                  )}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white font-semibold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] transition-all"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href={page.backHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-white/80 hover:bg-white transition-all"
            >
              <ArrowLeft size={18} />
              {page.backLabel}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
