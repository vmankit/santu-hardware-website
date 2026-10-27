import React from 'react';
import { CATEGORIES } from '../data/storeData';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const { activeCategory, setActiveCategory } = useCart();

  const handleSelect = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 md:py-10 bg-white" id="categories-section">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5 md:mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#059669] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Store Catalog</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
              Explore Our Categories
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              Select any category to see what we stock — free delivery within 30 km
            </p>
          </div>

          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
            >
              Show All Categories ✕
            </button>
          )}
        </div>

        {/* 24 Category Tiles Grid  */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-x-2.5 gap-y-6 md:gap-x-4 md:gap-y-8">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.name)}
                className="group flex flex-col items-center gap-2 text-center transition-all focus:outline-none"
              >
                {/* Tile Container */}
                <div
                  className={`relative aspect-square w-full rounded-2xl p-2.5 flex items-center justify-center transition-all duration-300 ease-out overflow-hidden ${
                    isSelected
                      ? 'bg-[#F8C200] ring-4 ring-[#F8C200]/40 scale-105 shadow-md'
                      : 'bg-[#E5F3F3] hover:bg-[#D4ECEC] group-hover:shadow-md group-hover:-translate-y-1'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                  
                  {isSelected && (
                    <span className="absolute top-1.5 right-1.5 bg-[#111827] text-white size-4 rounded-full text-[9px] font-bold flex items-center justify-center">
                      ✓
                    </span>
                  )}
                </div>

                {/* Name */}
                <span
                  className={`text-[11px] md:text-xs font-bold leading-tight line-clamp-2 px-1 transition-colors ${
                    isSelected ? 'text-[#059669]' : 'text-gray-900 group-hover:text-black'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
