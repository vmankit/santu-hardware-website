import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Camera } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const SpecialDeals: React.FC = () => {
  const dealsData = [
    {
      id: 'jk-maxx',
      brand: 'JK MAXX PAINTS',
      tagline: 'Special deals available',
      description: 'Known for high whiteness, smooth wall coverage, and durable primers & wall putty for residential and commercial sites.',
      cta: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for JK Maxx Paints.",
      accentClass: 'border-l-4 border-l-amber-500',
      badgeText: 'Special Deal',
      highlights: [
        'JK Maxx Wall Putty (20kg / 40kg bags)',
        'Water-resistant Exterior Primers',
        'Interior Acrylic Emulsions',
        'Bulk contractor and painter rates',
      ],
    },
    {
      id: 'birla-opus',
      brand: 'BIRLA OPUS',
      tagline: 'Explore interior and exterior paint solutions',
      description: 'Next-generation interior emulsions, durable weather-shield exterior coatings, and premium gloss finishes.',
      cta: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Birla Opus paints.",
      accentClass: 'border-l-4 border-l-blue-600',
      badgeText: 'Trending Choice',
      highlights: [
        'Luxury Interior Wall Finishes',
        'All-Weather Exterior Protection',
        'High-coverage Base Primers',
        'Direct store pricing on request',
      ],
    },
    {
      id: 'asian-paints',
      brand: 'ASIAN PAINTS',
      tagline: 'Wide range of paint products available',
      description: 'Complete range of interior and exterior emulsions, enamel gloss paints, SmartCare waterproofing, and distempers.',
      cta: 'Enquire Now →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Asian Paints.",
      accentClass: 'border-l-4 border-l-rose-600',
      badgeText: 'Widest Range',
      highlights: [
        'Tractor & Apcolite Emulsions',
        'Apex & Ultima Exterior Ranges',
        'SmartCare Damp Proof Waterproofing',
        'Computerized shade availability',
      ],
    },
  ];

  return (
    <section id="special-deals" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Special Paint Deals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Great prices on leading paint brands. Contact us for today's price and availability.
          </p>
        </div>

        {/* 3 Brand Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dealsData.map((deal) => (
            <div
              key={deal.id}
              className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between ${deal.accentClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {deal.badgeText}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Fresh Stock
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mb-1">
                  {deal.brand}
                </h3>

                <p className="text-sm font-bold text-slate-800 mb-2">
                  {deal.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                  {deal.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  {deal.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(deal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`deal-whatsapp-${deal.id}`}
                  className="touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm shadow-sm active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>{deal.cta}</span>
                </a>

                <a
                  href={STORE_CONFIG.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Call store: {STORE_CONFIG.phoneShort}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Human contractor slip banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base text-slate-900">
                Need buckets or putty delivered to your construction site?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Send your mistri or painter's requirement list on WhatsApp for direct trade rates and free delivery within 30 KM.
              </p>
            </div>
          </div>

          <a
            href={STORE_CONFIG.getSlipWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shrink-0 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-whatsapp" />
            <span>Send List on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
