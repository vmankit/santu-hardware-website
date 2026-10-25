import React from 'react';
import { CURATED_COLLECTIONS } from '../data/storeData';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CuratedCollections: React.FC = () => {
  const { setActiveCategory } = useCart();

  const handleCardClick = (linkCategory: string) => {
    setActiveCategory(linkCategory);
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 md:py-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5 md:mb-7">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#059669] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated For Trade</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
              Featured Contractor Collections
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              Bulk packs, matching fittings &amp; chemical combos for turn-key projects
            </p>
          </div>
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CURATED_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => handleCardClick(col.title)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white flex flex-col"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                  {col.tag}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900 group-hover:text-[#059669] transition-colors leading-snug">
                    {col.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {col.subtitle}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#059669]">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
