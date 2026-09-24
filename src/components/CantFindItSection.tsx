import React from 'react';
import { Phone, MessageSquare, HelpCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const CantFindItSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-soft-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Custom Products &amp; Unlisted Items</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                Can't Find What You Need?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium mb-6 max-w-xl">
                Just ask us. We stock hundreds of hardware fittings, rare pipe sizes, specialized tools, and paint variants that aren't listed on the website.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I am looking for a product that isn't listed on your website. Do you have it?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cant-find-whatsapp-btn"
                  className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-whatsapp active:scale-95 transition-all"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={STORE_CONFIG.phoneTel}
                  id="cant-find-call-btn"
                  className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Call {STORE_CONFIG.phoneShort}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden sm:block">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src={STORE_CONFIG.images.hardwareTools}
                  alt="Specialized hardware and plumbing supplies"
                  className="w-full h-48 sm:h-56 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-bold text-slate-300">
                    Full Hardware, Plumbing &amp; Electrical Stocks
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
