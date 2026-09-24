import React, { useState } from 'react';
import { Palette, MessageSquare, Info, Check } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import type { ColorSwatch } from '../data/storeConfig';

export const PaintColorSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = STORE_CONFIG.colorCategories[activeCategoryIndex];
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(activeCategory.colors[0]);

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
    setSelectedColor(STORE_CONFIG.colorCategories[index].colors[0]);
  };

  return (
    <section id="paint-colours" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>Inspiration Palette</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Find Your Perfect Colour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Explore popular shade families for interior and exterior walls. Tap any swatch to preview the finish or inquire for exact matching and bucket sizes.
          </p>
        </div>

        {/* Category Pills Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 mb-6 sm:mb-8 justify-start sm:justify-center">
          {STORE_CONFIG.colorCategories.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => handleCategoryChange(idx)}
              className={`touch-target px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-150 ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 text-white shadow-soft-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Interactive Colour Studio Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-8 shadow-soft-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Live Wall Preview Box */}
            <div className="lg:col-span-5 flex flex-col">
              <div
                className="w-full h-56 sm:h-64 rounded-2xl p-6 shadow-inner flex flex-col justify-between transition-colors duration-500 relative overflow-hidden border border-slate-200"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {/* Simulated Room Lighting Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/25 pointer-events-none" />

                {/* Wall Tag */}
                <div className="relative z-10">
                  <span
                    className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#0f172a',
                    }}
                  >
                    Wall Preview • {activeCategory.name}
                  </span>
                </div>

                {/* Color Shade Info Box */}
                <div
                  className="relative z-10 p-3 rounded-xl backdrop-blur-md shadow-sm flex items-center justify-between"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: '#0f172a',
                  }}
                >
                  <div>
                    <h4 className="font-display font-black text-sm sm:text-base text-slate-900">
                      {selectedColor.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Code: {selectedColor.code}
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-lg border border-slate-300 shadow-sm"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
              </div>

              {/* Action Button for Selected Swatch */}
              <div className="mt-4">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(
                    `Hi Santu Hardware, I am interested in ${selectedColor.name} (${selectedColor.code}) paint shade from ${activeCategory.name}. Please let me know price and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire {selectedColor.name} on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Swatch Selection Grid */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                  Select {activeCategory.name} Shade
                </h3>
                <span className="text-xs text-slate-400 font-semibold">
                  Tap to preview
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {activeCategory.colors.map((color) => {
                  const isSelected = selectedColor.code === color.code;
                  return (
                    <button
                      key={color.code}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`text-left p-3 rounded-2xl border-2 transition-all duration-200 relative ${
                        isSelected
                          ? 'border-slate-900 shadow-soft-md scale-[1.02]'
                          : 'border-slate-200/80 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div
                        className="w-full h-16 sm:h-20 rounded-xl mb-2.5 shadow-inner border border-slate-200/50 flex items-center justify-center relative"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-xs text-slate-900 truncate">
                        {color.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        {color.code}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Need Help Choosing Callout */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    Need help choosing a colour?
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Bring your room dimensions or photo, and we'll help you calculate exact litres and primers.
                  </p>
                </div>
                <a
                  href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I need help choosing paint and colours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Talk to Us on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Small Disclaimer Note (Mandatory requirement) */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-medium">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            Actual paint colours may vary depending on lighting, screen and product finish.
          </span>
        </div>

      </div>
    </section>
  );
};
