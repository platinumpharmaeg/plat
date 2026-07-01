'use client';

import { motion } from 'motion/react';
import SectionTitle from '../shared/SectionTitle';
import { siteImages } from '@/lib/images';

const partners = [
  {
    name: 'Anika',
    logo: siteImages.partners.anikaLogo,
    productImage: siteImages.partners.anikaProducts,
  },
  {
    name: 'Desma',
    logo: siteImages.partners.desmaLogo,
    productImage: siteImages.partners.desmaProducts,
  }
];

export default function Partners() {
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
              Global Network
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">Partners</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            We are proud to be the trusted commercialization arm for some of the world's most innovative healthcare companies.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Partners" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-xl border border-white/80 flex flex-col items-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="h-20 md:h-28 w-full flex items-center justify-center mb-10">
                  <img src={partner.logo} alt={`${partner.name} Logo`} className="h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full rounded-[2rem] overflow-hidden bg-white/40 border border-white/60 p-6 shadow-inner">
                  <img src={partner.productImage} alt={`${partner.name} Products`} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
