'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingGate({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(10px)',
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary-light)_0%,transparent_60%)] opacity-5"
              animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.img
                src="https://twfik.com/pplogo.png"
                alt="Platinum Pharma Logo"
                className="w-72 md:w-[400px] h-auto mb-12 object-contain"
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                referrerPolicy="no-referrer"
              />
              <div className="w-56 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary-dark to-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
                />
              </div>
              <motion.div
                className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Initializing
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
