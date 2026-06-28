'use client';

import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  className?: string;
  dark?: boolean;
}

export default function SectionTitle({ title, className = '', dark = false }: SectionTitleProps) {
  const lineClassLeft = dark 
    ? "h-px bg-gradient-to-r from-transparent via-slate-600 to-slate-600 flex-1 max-w-[250px]"
    : "h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300 flex-1 max-w-[250px]";
  
  const lineClassRight = dark
    ? "h-px bg-gradient-to-l from-transparent via-slate-600 to-slate-600 flex-1 max-w-[250px]"
    : "h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-300 flex-1 max-w-[250px]";

  const textClass = dark ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center justify-center gap-4 md:gap-8 mb-12 ${className}`}>
      <div className={lineClassLeft} />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display text-xl md:text-4xl font-extrabold tracking-tight text-center whitespace-nowrap ${textClass}`}
      >
        {title}
      </motion.h2>
      <div className={lineClassRight} />
    </div>
  );
}
