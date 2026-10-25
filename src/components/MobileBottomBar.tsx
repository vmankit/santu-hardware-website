import React from 'react';
import { Home, Grid, Calculator, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../data/storeData';

export const MobileBottomBar: React.FC = () => {
  const { totalItems, openCart, openCalculator, setActiveCategory } = useCart();

  const scrollToCategories = () => {
    setActiveCategory(null);
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = `Hi Santu Hardware! I need some items delivered. Can you share availability and prices?`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-2 py-1.5 safe-area-pb">
      <div className="grid grid-cols-5 items-center justify-around text-center">
        
        {/* Home */}
        <a
          href="#"
          onClick={() => {
            setActiveCategory(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-black py-1"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </a>

        {/* Categories */}
        <button
          onClick={scrollToCategories}
          className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-black py-1"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold">Categories</span>
        </button>

        {/* Calculator */}
        <button
          onClick={openCalculator}
          className="flex flex-col items-center gap-0.5 text-[#059669] hover:text-[#047857] py-1"
        >
          <div className="size-6 rounded-lg bg-emerald-50 flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold">Calculator</span>
        </button>

        {/* Cart */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center gap-0.5 text-gray-700 hover:text-black py-1"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2.5 bg-[#F8C200] text-black text-[9px] font-extrabold size-4 rounded-full flex items-center justify-center font-mono">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Cart</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center gap-0.5 text-[#25D366] hover:text-[#128C7E] py-1"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </button>

      </div>
    </div>
  );
};
