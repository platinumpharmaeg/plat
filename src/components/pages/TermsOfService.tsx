'use client';

import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl rounded-[3rem] p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed">
            <p className="font-medium text-slate-800">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Platinum Pharma's website for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Platinum Pharma's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">3. Disclaimer</h2>
              <p>
                The materials on Platinum Pharma's website are provided on an 'as is' basis. Platinum Pharma makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">4. Limitations</h2>
              <p>
                In no event shall Platinum Pharma or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Platinum Pharma's website, even if Platinum Pharma or a Platinum Pharma authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">5. Revisions and Errata</h2>
              <p>
                The materials appearing on Platinum Pharma's website could include technical, typographical, or photographic errors. Platinum Pharma does not warrant that any of the materials on its website are accurate, complete or current. Platinum Pharma may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Egypt and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
