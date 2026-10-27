import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const msg = `Hi Santu Hardware! I need some materials delivered to my site. Can you please help with price and availability?`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <button
        onClick={handleClick}
        aria-label="Chat with Santu Hardware on WhatsApp"
        className="group flex h-14 items-center rounded-full bg-[#25D366] text-white shadow-lg transition-[background-color,box-shadow] duration-200 hover:bg-[#1FAF52] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95"
      >
        <span className="relative grid size-14 shrink-0 place-items-center">
          <WhatsAppIcon className="size-7" />
        </span>

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[11rem] group-hover:pr-5 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
