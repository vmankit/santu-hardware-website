import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const msg = `Hi Santu Hardware! I need some materials delivered to my site. Can you please help with price and availability?`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        aria-label="Contact Santu Hardware on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F8C200]"></span>
          </span>
        </div>

        <div className="text-left">
          <p className="text-xs font-extrabold leading-none">Instant Site Support</p>
          <p className="text-[10px] text-white/90 leading-tight flex items-center gap-0.5 mt-0.5">
            <Zap className="w-2.5 h-2.5 fill-current text-[#F8C200]" /> Same-day dispatch
          </p>
        </div>
      </button>
    </div>
  );
};
