'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { productList } from '@/lib/products';

export default function Products() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Header */}
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide shadow-sm">
              Our Portfolio
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title mb-6"
          >
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            Explore our comprehensive range of high-quality pharmaceutical products across various therapeutic areas.
          </motion.p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {productList.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col"
                >
                  <div className="h-56 bg-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                      <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-xs font-extrabold text-primary shadow-sm">
                        {product.area}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 relative">
                    <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100 z-20">
                      <span className="text-xs font-extrabold text-slate-400">{product.form.substring(0,3).toUpperCase()}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-sm font-bold text-slate-500 mb-6">{product.partner}</p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-200/50 flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-600 bg-white/80 px-4 py-2 rounded-xl border border-white shadow-sm relative z-30">
                        {product.form}
                      </span>
                      <span className="text-sm font-extrabold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 group/link">
                        View Details <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                  {/* Full card clickable link */}
                  <Link href={`/products/${product.id}`} className="absolute inset-0 z-20">
                    <span className="sr-only">View {product.name} details</span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
