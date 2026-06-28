'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(params?.id));
  const [isMedicalInfoOpen, setIsMedicalInfoOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h1>
        <Link href="/products" className="text-primary hover:text-primary-dark font-medium">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 pb-24 text-slate-800">
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 font-medium">
            <span className="mr-2">←</span> Back to Portfolio
          </Link>

          <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/80 p-8 md:p-16 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              
              <div className="sticky top-24">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 flex items-center justify-center h-[400px] md:h-[500px]"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col flex-start"
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm tracking-wide">
                    {product.area}
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm tracking-wide">
                    {product.form}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{product.name}</h1>
                <p className="text-lg md:text-xl font-bold text-slate-500 mb-8">By {product.partner}</p>
                
                <p className="content-text mb-10">
                  {product.description}
                </p>

                {/* Medical Information Accordion */}
                <div className="mb-10 border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setIsMedicalInfoOpen(!isMedicalInfoOpen)}
                    className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-bold text-slate-900">
                      Medical Information{product.brochureUrl ? ' & Brochure' : ''}
                    </span>
                    <motion.div
                      animate={{ rotate: isMedicalInfoOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isMedicalInfoOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-slate-100">
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-6">{product.medicalInfo}</p>
                          
                          {product.brochureUrl && (
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6">
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold text-slate-900">Product Brochure (PDF)</p>
                                <p className="text-xs text-slate-500">Download for full prescribing information</p>
                              </div>
                            </div>
                              <a
                                href={product.brochureUrl}
                                download={`${product.name}-brochure.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto shrink-0 text-center text-sm font-bold text-primary hover:text-primary-dark transition-colors px-3 py-2.5 sm:py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow"
                              >
                                Download
                              </a>
                          </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Interested in {product.name}?</h3>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white font-bold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact for more info
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
