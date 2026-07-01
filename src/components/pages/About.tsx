'use client';

import { motion } from 'motion/react';
import { Target, Compass, Shield, Map, Activity, TrendingUp, Download } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { siteImages } from '@/lib/images';

const COMPANY_PROFILE_URL = '/brochure/company-profile-final.pdf';

function ProfileDownloadButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={COMPANY_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white font-bold md:font-extrabold text-sm md:text-base hover:shadow-[0_0_25px_rgba(89,167,167,0.5)] transition-all duration-300 hover:-translate-y-1 border border-white/20 ${className}`}
    >
      <Download size={16} className="md:w-5 md:h-5" />
      Download Company Profile
    </a>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-10 md:gap-24 pb-24">
      {/* Header */}
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide shadow-sm">
              Our Story
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[1.65rem] sm:text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">Platinum Pharma</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            We are the premier commercialization partner for multinational pharmaceutical companies in Egypt, dedicated to elevating healthcare standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 md:mt-8 flex justify-center"
          >
            <ProfileDownloadButton />
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-xl border border-white/80 p-8 md:p-12 overflow-hidden relative"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[350px]">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={siteImages.ceo} 
                      alt="Dr. Ashraf Abdelaziz, Chief Executive Officer of Platinum Pharma" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-5 text-center md:text-left">
                    <p className="font-bold text-xl md:text-2xl tracking-tight leading-tight text-slate-900">Dr. Ashraf Abdelaziz</p>
                    <p className="text-slate-600 font-medium text-sm mt-1">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <h3 className="section-heading mb-6">A Message from our Leadership</h3>
                
                <p className="content-text mb-8 italic">
                  "We believe that trust is the foundation of healthcare. Through integrity, scientific responsibility, disciplined execution, and strong partnerships, Platinum Pharma is committed to building a professional organization that creates lasting value for patients, partners, and stakeholders."
                </p>
                
                <div className="border-l-4 border-primary pl-6">
                  <p className="font-extrabold text-slate-900 tracking-wide">Dr. Ashraf Abdelaziz</p>
                  <p className="text-slate-600 font-medium mt-1">Chief Executive Officer</p>
                  <p className="text-primary-dark font-bold mt-1">Platinum Pharma</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Who We Are" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[3rem] shadow-xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="content-text mb-6">
                Platinum Pharma is an Egyptian pharmaceutical company built on multinational standards. We serve as the trusted local arm for global healthcare corporations, ensuring their innovative therapies reach the patients who need them.
              </p>
              <p className="content-text">
                Our team comprises industry veterans with extensive experience in multinational pharma environments, bringing a culture of compliance, excellence, and strategic execution to the local market.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center p-8 min-h-[400px]"
            >
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-10 bg-secondary-dark/10 rounded-full blur-[60px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              />
              <img 
                src={siteImages.logo}
                alt="Platinum Pharma Logo" 
                className="relative z-10 w-full h-auto max-h-[550px] object-contain drop-shadow-[0_20px_50px_rgba(89,167,167,0.4)] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <SectionTitle title="What We Do" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[3rem] shadow-xl mb-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <ul className="space-y-6">
                {[
                  { title: 'Promotion & Marketing', desc: 'Scientific, ethical promotion to healthcare professionals.' },
                  { title: 'Market Access', desc: 'Navigating regulatory landscapes and pricing strategies.' },
                  { title: 'Supply Chain', desc: 'End-to-end logistics ensuring product integrity.' },
                  { title: 'Tender Management', desc: 'Strategic participation in public sector procurement.' }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="content-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1 relative flex justify-center items-center min-h-[400px] lg:min-h-[600px]"
            >
              {/* Main Icon Container */}
              <motion.div
                initial={{ clipPath: 'inset(100% 100% 0 0)', opacity: 0 }}
                whileInView={{ clipPath: 'inset(0% 0% 0 0)', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ 
                    y: [-15, 5, -15],
                    x: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <TrendingUp className="w-48 h-48 md:w-64 md:h-64 text-primary drop-shadow-[0_20px_50px_rgba(89,167,167,0.4)]" strokeWidth={1} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work & Where We Operate */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] shadow-xl border border-white/80 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
              <Shield className="w-16 h-16 text-primary mb-8 relative z-10" />
              <p className="content-text mb-8 relative z-10">
                Our operations are underpinned by a strict adherence to international compliance standards. We believe that ethical conduct is non-negotiable.
              </p>
              <ul className="space-y-4 text-slate-800 font-bold relative z-10">
                <li className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(89,167,167,0.8)]" /> Ethical Promotion
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(89,167,167,0.8)]" /> Transparent Reporting
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(89,167,167,0.8)]" /> Execution-Focused Culture
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] shadow-xl border border-white/80 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
              <Map className="w-16 h-16 text-secondary-dark mb-8 relative z-10" />
              <h3 className="section-heading mb-6 relative z-10">Where We Operate</h3>
              <p className="content-text mb-8 relative z-10">
                We have a comprehensive footprint across the entirety of Egypt, ensuring no patient is left behind.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8 relative z-10">
                <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl text-center border border-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="content-heading mb-2">Private Sector</h3>
                  <p className="text-sm text-slate-600 font-medium">Pharmacies, Private Hospitals, Clinics</p>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl text-center border border-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="content-heading mb-2">Public Sector</h3>
                  <p className="text-sm text-slate-600 font-medium">MOH, Health Insurance, University Hospitals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-xl border border-white/80 p-10 md:p-14"
          >
            <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Learn More About Platinum Pharma
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl mb-8">
              Download our company profile for a comprehensive overview of our mission, capabilities, and partnerships.
            </p>
            <ProfileDownloadButton />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
