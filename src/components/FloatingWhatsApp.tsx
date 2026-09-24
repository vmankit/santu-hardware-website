import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-end flex-col gap-2">
      {/* Small Dismissable Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 animate-fade-in">
          <span>Need price or stock info? Chat now</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to enquire about a product.")}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-whatsapp hover:bg-emerald-600 text-white flex items-center justify-center shadow-whatsapp hover:scale-105 active:scale-95 transition-all duration-200 relative group"
        aria-label="Chat with Santu Hardware on WhatsApp"
        title="Chat on WhatsApp: +91 9097441600"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
