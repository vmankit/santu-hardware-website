import React from 'react';
import { Sparkles, MessageSquare, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const SpecialDeals: React.FC = () => {
  const dealsData = [
    {
      id: 'jk-maxx',
      brand: 'JK MAXX PAINTS',
      tagline: 'Special deals available',
      description: 'Superior coverage, whiteness & durable exterior/interior wall finishes for residential and commercial spaces.',
      cta: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for JK Maxx Paints.",
      badge: 'Special Deal',
      colorBadge: 'bg-amber-100 text-amber-900 border-amber-300',
      accentBorder: 'border-amber-200 hover:border-amber-400',
      accentGlow: 'hover:shadow-amber-100',
      highlights: [
        'Premium Wall Putty & Primers',
        'High-durability Interior Emulsions',
        'Weather-resistant Exterior Coatings',
        'Contractor & Bulk Order Rates',
      ],
    },
    {
      id: 'birla-opus',
      brand: 'BIRLA OPUS',
      tagline: 'Explore interior and exterior paint solutions',
      description: 'Next-generation luxury emulsions, weather-shield exterior coatings, and high-performance base coats.',
      cta: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Birla Opus paints.",
      badge: 'Trending Brand',
      colorBadge: 'bg-blue-100 text-blue-900 border-blue-300',
      accentBorder: 'border-blue-200 hover:border-blue-400',
      accentGlow: 'hover:shadow-blue-100',
      highlights: [
        'Luxury Interior Finishes',
        'Weather-Shield Exterior Protection',
        'High Sheen & Matte Options',
        'Direct Store Pricing On Demand',
      ],
    },
    {
      id: 'asian-paints',
      brand: 'ASIAN PAINTS',
      tagline: 'Wide range of paint products available',
      description: 'India’s trusted paint brand with extensive shade availability across primers, emulsions, enamels & waterproofing.',
      cta: 'Enquire Now →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Asian Paints.",
      badge: 'Widest Range',
      colorBadge: 'bg-rose-100 text-rose-900 border-rose-300',
      accentBorder: 'border-rose-200 hover:border-rose-400',
      accentGlow: 'hover:shadow-rose-100',
      highlights: [
        'Tractor & Apcolite Emulsions',
        'Apex & Ultima Exterior Ranges',
        'SmartCare Waterproofing Solutions',
        'All Shade Matchings Available',
      ],
    },
  ];

  return (
    <section id="special-deals" className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Featured Brand Deals</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Special Paint Deals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Great prices on leading paint brands. Contact us for today's price and availability.
          </p>
        </div>

        {/* 3 Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {dealsData.map((deal) => (
            <div
              key={deal.id}
              className={`flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border-2 ${deal.accentBorder} shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 group relative`}
            >
              <div>
                {/* Card Top: Brand Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${deal.colorBadge}`}
                  >
                    {deal.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Genuine Stock
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1.5 group-hover:text-brand-600 transition-colors">
                  {deal.brand}
                </h3>

                <p className="text-sm font-bold text-slate-800 mb-3 text-brand-700">
                  {deal.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {deal.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {deal.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(deal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`deal-whatsapp-${deal.id}`}
                  className="touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>{deal.cta}</span>
                </a>

                <a
                  href={STORE_CONFIG.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Ask price on call: {STORE_CONFIG.phoneShort}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Paint Showcase Strip */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 max-w-xs shrink-0 rounded-2xl overflow-hidden shadow-soft-md border-2 border-white">
            <img
              src={STORE_CONFIG.images.paintDeals}
              alt="Paint cans and roller colors"
              className="w-full h-48 md:h-52 object-cover object-center"
              loading="lazy"
              width="400"
              height="300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-100/70 text-brand-800 text-xs font-bold mb-2">
              <span>Fresh Stock &amp; Best Rates</span>
            </div>
            <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 mb-2">
              Looking for specific paint shades or wall putty quantities?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              We carry primers, emulsions, enamel paints, distempers, waterproof coatings, and application tools for painters, contractors, and home owners. Contact us for current availability and bulk discounts.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to inquire about paint shades and bulk rates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
              >
                <span>Ask on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-slate-500 font-medium">
                Free delivery within 30 KM on eligible orders
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
