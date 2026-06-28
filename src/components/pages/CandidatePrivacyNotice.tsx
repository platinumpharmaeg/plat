'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function CandidatePrivacyNotice() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl rounded-[3rem] p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Candidate Privacy Notice
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p>
                Platinum Pharma respects your privacy and is committed to protecting your personal data when
                you apply for a role with us. This notice explains how we collect, use, store, and protect
                candidate information submitted through our careers page or other recruitment channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">2. Data We Collect</h2>
              <p className="mb-3">When you submit your CV or application, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity and contact details (name, email, phone, city/governorate)</li>
                <li>Education and professional background</li>
                <li>Employment history and department of interest</li>
                <li>CV and supporting documents you upload</li>
                <li>Optional information such as LinkedIn profile and field-force experience details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Data</h2>
              <p className="mb-3">We use candidate data solely for legitimate recruitment purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reviewing your application against current and future vacancies</li>
                <li>Contacting you regarding suitable opportunities</li>
                <li>Maintaining a talent pool for future roles</li>
                <li>Complying with applicable employment and data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">4. Data Retention</h2>
              <p>
                We retain candidate information only for as long as necessary for recruitment purposes or as
                required by law. If you wish to withdraw your application or request deletion of your data,
                please contact our recruitment team.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect candidate data
                against unauthorized access, loss, or misuse. Access is limited to authorized HR and
                recruitment personnel.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data, subject to
                applicable legal requirements. To exercise your rights, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">7. Contact Us</h2>
              <p>
                For questions about this notice or your candidate data:
                <br />
                <strong>Email:</strong> info@platinumpharma-eg.com
                <br />
                <strong>Phone:</strong> +201036969969
              </p>
            </section>

            <div className="pt-4">
              <Link href="/careers#submit-cv" className="text-primary font-bold hover:underline">
                ← Back to Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
