import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl text-slate-300 py-20 border-t border-white/10 relative overflow-hidden">
      {/* Tech accents */}
      <div className="absolute top-0 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl inline-block border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors duration-500">
              <img 
                src="https://twfik.com/pplogo.png" 
                alt="Platinum Pharma Logo" 
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Trusted healthcare partner in Egypt. Local commercialization partner for international pharma companies, ensuring compliant execution and reliable supply.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Partners', path: '/partners' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-primary transition-all duration-300 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span className="group-hover:text-white transition-colors pt-1 text-slate-400 leading-relaxed">37 Abo El Fawares St. Nasr City, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-4 text-sm group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="group-hover:text-white transition-colors text-slate-400">+201036969969</span>
              </li>
              <li className="flex items-center gap-4 text-sm group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span className="group-hover:text-white transition-colors text-slate-400">info@platinumpharma-eg.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
              Our Location
            </h3>
            <div className="flex-1 min-h-[200px] rounded-2xl overflow-hidden border border-white/10 relative group shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221111.41164996964!2d31.11960251703623!3d30.05961847028784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1713000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%) grayscale(50%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Platinum Pharma. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <Link href="/privacy-policy" className="hover:text-white hover:underline underline-offset-4 transition-all">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white hover:underline underline-offset-4 transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
