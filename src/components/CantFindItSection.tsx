import React from 'react';
import { Phone, MessageSquare, HelpCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const CantFindItSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-10 text-center max-w-4xl mx-auto">
          
          <div className="w-12 h-12 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Can't Find What You Need?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal mb-6 max-w-xl mx-auto leading-relaxed">
            Just ask us. We carry hundreds of hardware fittings, specialized valves, wire gauges, and paint finishes in the store that are not shown on the website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I am looking for a product that isn't listed on your website. Do you have it?")}
              target="_blank"
              rel="noopener noreferrer"
              id="cant-find-whatsapp-btn"
              className="touch-target w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm active:scale-95 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={STORE_CONFIG.phoneTel}
              id="cant-find-call-btn"
              className="touch-target w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Call {STORE_CONFIG.phoneShort}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
