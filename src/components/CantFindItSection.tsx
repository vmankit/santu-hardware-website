import React from 'react';
import { Phone, MessageSquare, HelpCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const CantFindItSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mahakal Hardware Signature Terracotta CTA Banner */}
        <div className="rounded-lg pp-cta-banner text-white p-7 sm:p-12 text-center max-w-4xl mx-auto shadow-brand relative overflow-hidden">
          {/* Subtle Decorative Circle Pattern */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-black/15 pointer-events-none blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-amber-200 text-xs font-semibold mb-4 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
              <span>Something specific in mind?</span>
            </div>

            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-3">
              Can't find what you need?
            </h2>

            <p className="text-amber-50 text-base md:text-lg font-normal mb-8 max-w-2xl mx-auto leading-[1.65] opacity-95">
              Just call or WhatsApp us. We carry hundreds of specialized CPVC fittings, brass valves, specific wire gauges, wall putty bags, and paint shades in our store counter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={STORE_CONFIG.phoneTel}
                id="cta-call-btn"
                className="touch-target w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-white hover:bg-stoneWarm-50 text-orange-900 font-semibold text-base active:scale-95 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-orange-700 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I am looking for a product that isn't listed on your website. Do you have it in stock?")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-btn"
                className="btn-tactile-whatsapp touch-target w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-white font-semibold text-base active:scale-95 transition-all shadow-whatsapp"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
