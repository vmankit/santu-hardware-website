import React from 'react';
import { Home, Grid, ShoppingBag, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/storeData';

export const MobileBottomBar: React.FC = () => {
  const { totalItems, openCart, setActiveCategory } = useCart();

  const scrollToCategories = () => {
    setActiveCategory(null);
    document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsAppUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi Santu Hardware! I need some items delivered. Can you share availability and prices?'
  )}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-1 py-1.5 safe-area-pb">
      <div className="grid grid-cols-5 items-end text-center">
        <button
          onClick={() => {
            setActiveCategory(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-0.5 text-gray-700 py-1"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button
          onClick={scrollToCategories}
          className="flex flex-col items-center gap-0.5 text-gray-700 py-1"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold">Shop</span>
        </button>

        {/* Cart — centre, raised */}
        <button
          onClick={openCart}
          className="flex flex-col items-center gap-0.5 text-gray-900 py-1"
        >
          <span className="relative -mt-4 size-11 rounded-full bg-[#F8C200] flex items-center justify-center shadow-md border-4 border-white">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#111827] text-white text-[9px] font-extrabold size-4 rounded-full flex items-center justify-center font-mono">
                {totalItems}
              </span>
            )}
          </span>
          <span className="text-[10px] font-bold">Cart</span>
        </button>

        <a
          href={`tel:${STORE_CONFIG.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center gap-0.5 text-gray-700 py-1"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center gap-0.5 text-[#25D366] py-1"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
