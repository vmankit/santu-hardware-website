import React, { useRef } from 'react';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

export const DealsOfTheWeek: React.FC = () => {
  const deals = PRODUCTS.filter((p) => p.isDealOfTheWeek);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 md:py-10 bg-gray-50/60" id="deals-section">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4 fill-current" />
              <span>Limited Stock Offers</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
              Deals Of The Week
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              {deals.length} products at our lowest ever price with free delivery within 30 km
            </p>
          </div>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="size-8 md:size-9 rounded-full bg-white border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-black shadow-sm transition-colors"
              aria-label="Previous deals"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-8 md:size-9 rounded-full bg-white border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-black shadow-sm transition-colors"
              aria-label="Next deals"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel / Grid */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-3.5 md:gap-5 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth"
        >
          {deals.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[280px] max-w-[280px] snap-start shrink-0 flex"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
