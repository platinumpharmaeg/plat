'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Users, Building2, Truck, TrendingUp, Award } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

export default function WhyUs() {
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
              The Platinum Advantage
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">Platinum Pharma</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            We offer unparalleled market access, robust compliance, and a proven track record of successful commercialization in Egypt.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, stat: '950+', label: 'Doctors Reached', desc: 'Extensive network of healthcare professionals across specialties.' },
              { icon: Building2, stat: '300+', label: 'Active Accounts', desc: 'Strong relationships with key pharmacies and hospitals.' },
              { icon: Truck, stat: '2', label: 'Central Warehouses', desc: 'State-of-the-art facilities ensuring product integrity.' },
              { icon: ShieldCheck, stat: '100%', label: 'Sector Coverage', desc: 'Full access to both private and public healthcare sectors.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white/80 text-center hover:bg-white/80 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent rounded-bl-full opacity-50" />
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md mb-8 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                  <item.icon size={36} strokeWidth={2} />
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight relative z-10">{item.stat}</h3>
                <p className="text-lg md:text-xl font-bold text-slate-800 mb-4 relative z-10">{item.label}</p>
                <p className="text-sm md:text-base font-medium text-slate-600 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary-dark/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10">
              <SectionTitle title="Our Core Pillars" dark />
              <div className="text-center max-w-3xl mx-auto mb-16 -mt-8">
                <p className="text-slate-300 text-base md:text-xl font-medium">
                  The foundation of our success and the reason global partners trust us with their most valuable assets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Compliance-Driven',
                    desc: 'We operate with the highest ethical standards, mirroring the compliance requirements of our multinational partners. Transparency and integrity are at our core.'
                  },
                  {
                    icon: Award,
                    title: 'Strong Medical Team',
                    desc: 'Our sales and marketing teams are highly trained professionals, capable of engaging in deep, scientific discussions with key opinion leaders.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Reliable Supply Chain',
                    desc: 'End-to-end visibility and control. Our GDP-certified warehouses and logistics network ensure products reach patients safely and on time.'
                  }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <pillar.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4">{pillar.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
