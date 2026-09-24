import React from 'react';
import { ShieldCheck, MessageSquare, Award } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              <span>Genuine Quality Products</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Trusted Brands. Genuine Products.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium mt-2">
              We stock authentic paints and construction hardware from industry leaders. Inquire for current rates and bulk batch availability.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
            <span>← Swipe brands on mobile →</span>
          </div>
        </div>

        {/* Brand Cards: Horizontally scrollable snap cards on mobile, 3-column on tablet/desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 no-scrollbar pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {STORE_CONFIG.brands.map((brand) => (
            <div
              key={brand.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-start flex-1 bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Brand Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-white">
                    {brand.tag}
                  </span>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>

                <h3 className="font-display text-2xl font-black text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {brand.name}
                </h3>

                <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-3">
                  {brand.category}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={STORE_CONFIG.getWhatsAppUrl(`Hi Santu Hardware, I want to inquire about ${brand.name} products and current pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-whatsapp hover:text-white text-slate-800 font-bold text-xs sm:text-sm transition-all duration-200 group-hover:bg-slate-900 group-hover:text-white"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire {brand.name}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Small Trust Note */}
        <div className="mt-8 text-center text-xs text-slate-500 font-medium">
          Genuine products sourced directly. All trademarks and brand names belong to their respective owners.
        </div>

      </div>
    </section>
  );
};
