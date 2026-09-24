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
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Find Your Perfect Colour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore popular shade families for interior and exterior walls. Tap any swatch to preview the shade or ask for computerized mixing.
          </p>
        </div>

        {/* Category Pills Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 sm:mb-8 justify-start sm:justify-center">
          {STORE_CONFIG.colorCategories.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => handleCategoryChange(idx)}
              className={`touch-target px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold shrink-0 transition-colors ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Authentic Color Deck Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Big Swatch Preview */}
            <div className="lg:col-span-5 flex flex-col">
              <div
                className="w-full h-48 sm:h-56 rounded-xl p-5 shadow-sm flex flex-col justify-between transition-colors duration-300 border border-slate-200"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/90 text-slate-900 shadow-sm">
                    {activeCategory.name}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white/95 shadow-sm flex items-center justify-between text-slate-900">
                  <div>
                    <div className="font-display font-black text-base">
                      {selectedColor.name}
                    </div>
                    <div className="text-xs font-mono text-slate-500 font-bold">
                      Code: {selectedColor.code}
                    </div>
                  </div>
                  <div
                    className="w-7 h-7 rounded border border-slate-300 shadow-sm"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
              </div>

              {/* Action Button for Selected Swatch */}
              <div className="mt-3">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(
                    `Hi Santu Hardware, I am interested in ${selectedColor.name} (${selectedColor.code}) paint shade from ${activeCategory.name}. Please let me know price and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire {selectedColor.name} on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Swatches Grid */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                  Available {activeCategory.name} Shades
                </h3>
                <span className="text-xs text-slate-400">
                  Tap to preview
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
                      className={`text-left p-2.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-slate-900 bg-white shadow-sm ring-1 ring-slate-900'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div
                        className="w-full h-14 sm:h-16 rounded-lg mb-2 border border-slate-200 flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shadow">
                            <Check className="w-3 h-3 stroke-[3]" />
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

              {/* Consultation Callout */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    Need help choosing a colour?
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    We can guide you on primers, coats, and calculate total litres for your rooms.
                  </p>
                </div>
                <a
                  href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I need help choosing paint and colours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors"
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
