import { motion } from 'motion/react';
import { HeartHandshake, Building2, ShieldCheck, PackageCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: HeartHandshake,
    title: 'Trusted Global\nPartnerships',
    iconColor: 'text-accent1',
  },
  {
    icon: Building2,
    title: 'Strong Local\nExpertise',
    iconColor: 'text-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Medical & Regulatory\nSupport',
    iconColor: 'text-primary',
  },
  {
    icon: PackageCheck,
    title: 'Reliable Supply\n& Service',
    iconColor: 'text-accent1',
  }
];

export default function WhyChooseUsStrip() {
  return (
    <section className="relative py-16 bg-white/80 backdrop-blur-xl overflow-hidden border-t border-white shadow-[0_-10px_40px_rgba(0,0,0,0.02)] z-20">
      {/* Abstract Wavy Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[200%] bg-gradient-to-br from-primary/10 to-transparent rounded-[100%] blur-3xl transform -rotate-12" />
        <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[200%] bg-gradient-to-tl from-secondary/20 to-transparent rounded-[100%] blur-3xl transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <SectionTitle title="Why Choose Platinum Pharma" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center text-center px-4 group ${
                index !== features.length - 1 ? 'lg:border-r lg:border-slate-200' : ''
              } ${
                index % 2 === 0 ? 'sm:border-r sm:border-slate-200 lg:border-r' : ''
              }`}
            >
              <div className={`mb-6 p-5 rounded-3xl bg-white shadow-lg border border-slate-100 ${feature.iconColor} group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative`}>
                <div className="absolute inset-0 bg-current opacity-5 rounded-3xl" />
                <feature.icon size={48} strokeWidth={1.5} className="relative z-10 drop-shadow-sm" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-primary-dark whitespace-pre-line leading-snug group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
