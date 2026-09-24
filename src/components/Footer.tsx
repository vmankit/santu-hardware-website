import React from 'react';
import { Phone, MessageSquare, Truck, ArrowUp } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Paints', href: '#special-deals' },
    { label: 'Hardware', href: '#categories' },
    { label: 'Brands', href: '#brands' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-extrabold font-display">
                S
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                {STORE_CONFIG.businessName}
              </span>
            </div>
            
            <p className="text-xs font-bold uppercase tracking-wider text-brand-400">
              Paints • Hardware • Plumbing • Electrical
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {STORE_CONFIG.mainSellingMessage}. Your local destination for genuine paints and hardware supplies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={STORE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-mono font-bold"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{STORE_CONFIG.phoneShort}</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-whatsapp" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li className="text-xs text-slate-400">
                {STORE_CONFIG.address || STORE_CONFIG.addressDisplay}
              </li>
            </ul>
          </div>

          {/* Delivery & Assurance */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-200 mb-4">
              Delivery
            </h4>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs">
                <Truck className="w-4 h-4" />
                <span>{STORE_CONFIG.deliveryHighlight}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Eligible orders for paints, putty, pipes and hardware delivered free within 30 KM.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} {STORE_CONFIG.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              JK Maxx • Birla Opus • Asian Paints
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
