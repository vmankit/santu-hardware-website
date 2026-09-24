import React from 'react';
import { MessageSquare } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const BrandsSection: React.FC = () => {
  const brandImages: Record<string, string> = {
    'jk-maxx': '/images/cat-paints.jpg',
    'birla-opus': '/images/paint-deals.jpg',
    'asian-paints': '/images/hero-clean.jpg',
  };

  return (
    <section id="brands" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Genuine Products &amp; Direct Sourcing
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Trusted Brands. Genuine Products.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium mt-1">
              We stock authentic paints and construction supplies from industry leaders. Inquire for current batch rates.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
            <span>← Swipe brands on mobile →</span>
          </div>
        </div>

        {/* Brand Cards with Images and CSS Hover Polish */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 no-scrollbar pb-3 md:grid md:grid-cols-3 md:overflow-visible">
          {STORE_CONFIG.brands.map((brand) => (
            <div
              key={brand.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-start flex-1 bg-white rounded-2xl border border-slate-200 card-retail flex flex-col justify-between group overflow-hidden shadow-sm"
            >
              {/* Brand Visual Image Header */}
              <div className="relative h-40 sm:h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={brandImages[brand.id] || '/images/cat-paints.jpg'}
                  alt={`${brand.name} solutions at Santu Hardware`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/90 text-white shadow-sm">
                    {brand.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                    {brand.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black drop-shadow-sm">
                    {brand.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {brand.description}
                </p>

                {/* Action Button */}
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(`Hi Santu Hardware, I want to inquire about ${brand.name} products and current pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-whatsapp hover:text-white text-white font-bold text-xs sm:text-sm transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-whatsapp group-hover:text-white" />
                  <span>Enquire {brand.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Note */}
        <div className="mt-6 text-center text-xs text-slate-500 font-normal">
          Genuine products sourced directly. All trademarks and brand names belong to their respective owners.
        </div>

      </div>
    </section>
  );
};
