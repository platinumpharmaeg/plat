'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, AlignRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { siteImages } from '@/lib/images';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Partners', path: '/partners' },
  { name: 'Products', path: '/products' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled ? 'bg-white/70 backdrop-blur-xl py-2' : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 z-50">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={siteImages.logo}
              alt="Platinum Pharma Logo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/60 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-primary relative',
                  pathname === link.path ? 'text-primary' : 'text-slate-600'
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(89,167,167,0.8)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 z-50">
            <Link
              href="/contact"
              className="px-3 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white text-xs md:text-sm font-bold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] hover:-translate-y-0.5 transition-all duration-300 border border-white/20 whitespace-nowrap"
            >
              Partner With Us
            </Link>

            <button
              className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-sm"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <AlignRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            key="mobile-menu"
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  x: 0,
                  transition: { type: 'spring', damping: 25, stiffness: 200, staggerChildren: 0.08, delayChildren: 0.1 }
                },
                closed: {
                  x: '100%',
                  transition: { type: 'spring', damping: 25, stiffness: 200, staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col"
            >
              <motion.div 
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 }
                }}
                className="p-6 flex justify-between items-center border-b border-slate-100"
              >
                <img src={siteImages.logo} alt="Platinum Pharma" className="h-12 object-contain" />
                <button
                  className="p-2 text-slate-500 hover:text-primary transition-colors bg-slate-100/50 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </motion.div>

              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link
                      href={link.path}
                      className={cn(
                        'block text-lg font-bold px-4 py-4 rounded-2xl transition-all',
                        pathname === link.path
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 }
                }}
                className="p-6 border-t border-slate-100"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary-dark text-white text-base font-bold shadow-lg shadow-primary/20"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
