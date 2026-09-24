import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      id="mobile-bottom-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-10px_30px_rgba(15,23,42,0.1)] px-3 py-2 pb-safe"
      role="navigation"
      aria-label="Mobile Quick Actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={STORE_CONFIG.phoneTel}
          id="mobile-bar-call"
          className="touch-target flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-terracotta-600 active:bg-terracotta-700 text-white font-extrabold text-[11px] tracking-tight transition-transform active:scale-95 shadow-terracotta border border-terracotta-500"
          aria-label="Call 9097441600"
        >
          <Phone className="w-4 h-4 text-white mb-0.5" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={STORE_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="touch-target flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-whatsapp active:bg-emerald-600 text-white font-extrabold text-[11px] tracking-tight transition-transform active:scale-95 shadow-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Directions Button */}
        <a
          href={STORE_CONFIG.getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="touch-target flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 font-extrabold text-[11px] tracking-tight transition-transform active:scale-95 border border-slate-300"
          aria-label="Get Directions / Store Location"
        >
          <MapPin className="w-4 h-4 text-brand-700 mb-0.5" />
          <span>DIRECTIONS</span>
        </a>

      </div>
    </div>
  );
};
