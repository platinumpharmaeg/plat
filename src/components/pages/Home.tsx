'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Building2, Truck, Activity } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { siteImages } from '@/lib/images';

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 md:pb-10 overflow-hidden">
        {/* Background Image */}
        <motion.div className="absolute inset-0 z-0 overflow-hidden">
          {/* Desktop Background */}
          <motion.img 
            src={siteImages.homeBackground} 
            alt="Hero Background Desktop" 
            className="hidden md:block w-full h-full object-cover origin-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            referrerPolicy="no-referrer"
          />
          {/* Mobile Background */}
          <motion.img 
            src={siteImages.homeBackground} 
            alt="Hero Background Mobile" 
            className="block md:hidden w-full h-full object-cover origin-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25, delayChildren: 0.3 }
                }
              }}
              className="flex flex-col items-start"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide mb-6 shadow-sm"
              >
                <Activity size={16} className="text-primary" />
                Premium Healthcare Standard
              </motion.div>
              
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="page-title leading-[1.1] mb-6"
              >
                Trusted Healthcare <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary-dark to-primary bg-[length:200%_auto]">Partner in Egypt</span>
              </motion.h1>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="page-lead mb-8 max-w-lg"
              >
                Local commercialization partner for international pharma companies. We bridge global innovation with local execution.
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95, filter: 'blur(12px)' },
                  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/70 backdrop-blur-md text-slate-800 text-sm font-semibold hover:bg-white transition-all duration-300 shadow-sm border border-white/80 hover:shadow-md hover:-translate-y-0.5"
                >
                  Our Products
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Cards Navigation Section */}
      <section className="relative z-10 w-full bg-slate-50 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Us Card */}
            <Link 
              href="/about" 
              className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/10 border border-slate-100 transition-all duration-300 flex flex-col h-[280px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <h3 className="card-heading mb-4">About Us</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Learn about our journey, vision, and the core values that drive Platinum Pharma forward in the healthcare sector.
              </p>
              <div className="mt-auto flex justify-center w-full absolute bottom-8 left-0 right-0">
                <div className="w-12 h-12 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Why Us Card */}
            <Link 
              href="/why-us" 
              className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-secondary-dark/10 border border-slate-100 transition-all duration-300 flex flex-col h-[280px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-dark/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <h3 className="card-heading mb-4">Why Us</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Discover why leading global pharmaceutical companies trust us as their main commercialization partner in Egypt.
              </p>
              <div className="mt-auto flex justify-center w-full absolute bottom-8 left-0 right-0">
                <div className="w-12 h-12 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-secondary-dark group-hover:bg-secondary-dark group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Products Card */}
            <Link 
              href="/products" 
              className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-accent1/10 border border-slate-100 transition-all duration-300 flex flex-col h-[280px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent1/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <h3 className="card-heading mb-4">Products</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Explore our comprehensive portfolio of high-quality products across multiple therapeutic areas.
              </p>
              <div className="mt-auto flex justify-center w-full absolute bottom-8 left-0 right-0">
                <div className="w-12 h-12 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-accent1 group-hover:bg-accent1 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
