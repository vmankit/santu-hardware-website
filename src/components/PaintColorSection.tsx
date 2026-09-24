import React, { useState } from 'react';
import { MessageSquare, Info, Check } from 'lucide-react';
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
    <section id="paint-colours" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Architectural Shade Studio
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Find Your Perfect Colour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore popular shade families for interior and exterior walls. Tap any swatch to preview the shade or ask for computerized mixing.
          </p>
        </div>

        {/* Category Pills Tab Bar with Refined Active Indicator */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 sm:mb-8 justify-start sm:justify-center">
          {STORE_CONFIG.colorCategories.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => handleCategoryChange(idx)}
              className={`touch-target px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Authentic Color Deck Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Big Swatch Preview with Architectural Card Frame */}
            <div className="lg:col-span-5 flex flex-col">
              <div
                className="w-full h-52 sm:h-60 rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-colors duration-300 border border-black/5 relative overflow-hidden"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md bg-white/95 text-slate-900 shadow-xs backdrop-blur-sm border border-slate-200/50">
                    {activeCategory.name}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/95 shadow-md flex items-center justify-between text-slate-900 border border-slate-200/60 backdrop-blur-sm">
                  <div>
                    <div className="font-display font-black text-base sm:text-lg">
                      {selectedColor.name}
                    </div>
                    <div className="text-xs font-mono text-slate-500 font-bold">
                      Code: {selectedColor.code}
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg border border-slate-300 shadow-xs"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
              </div>

              {/* Action Button for Selected Swatch */}
              <div className="mt-3.5">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(
                    `Hi Santu Hardware, I am interested in ${selectedColor.name} (${selectedColor.code}) paint shade from ${activeCategory.name}. Please let me know price and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile-whatsapp touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire {selectedColor.name} on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Swatches Grid */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                  Available {activeCategory.name} Shades
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  Tap swatch to preview
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                {activeCategory.colors.map((color) => {
                  const isSelected = selectedColor.code === color.code;
                  return (
                    <button
                      key={color.code}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-slate-900 bg-white shadow-md ring-2 ring-slate-900 scale-[1.02]'
                          : 'border-slate-200 hover:border-slate-400 bg-white hover:shadow-xs'
                      }`}
                    >
                      <div
                        className="w-full h-14 sm:h-16 rounded-lg mb-2 border border-slate-200 flex items-center justify-center shadow-inner"
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
                      <div className="text-[11px] font-mono text-slate-500 font-medium">
                        {color.code}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Consultation Callout */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    Need help calculating paint quantity?
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    We guide you on primers, wall putty, and calculate exact bucket sizes for your room area.
                  </p>
                </div>
                <a
                  href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I need help choosing paint and colours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile-dark touch-target inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
                  <span>Talk to Us on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Mandatory Disclaimer Note */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-normal">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            Actual paint colours may vary depending on lighting, screen and product finish.
          </span>
        </div>

      </div>
    </section>
  );
};
