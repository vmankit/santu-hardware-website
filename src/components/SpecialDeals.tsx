import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Camera, ArrowRight } from 'lucide-react';
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
      accentTop: 'bg-gradient-to-r from-amber-500 to-amber-600',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
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
      accentTop: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
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
      accentTop: 'bg-gradient-to-r from-rose-600 to-red-600',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
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
    <section id="special-deals" className="py-12 sm:py-16 bg-stoneWarm-100 border-b border-stoneWarm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-terracotta-700 bg-terracotta-50 border border-terracotta-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            <span>Authorised Retailer</span>
            <span>•</span>
            <span>Direct Sourcing</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Special Paint Deals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Best prices on leading paint brands. Inquire on WhatsApp or call for today's price and stock availability.
          </p>
        </div>

        {/* 3 Brand Deal Cards with Top Accent Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {dealsData.map((deal) => (
            <div
              key={deal.id}
              className="card-retail-premium rounded-2xl flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Brand Top Color Accent Bar */}
              <div className={`h-2.5 w-full ${deal.accentTop}`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded border ${deal.badgeColor}`}>
                      {deal.badgeText}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Fresh Stock
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-slate-900 mb-1 tracking-tight">
                    {deal.brand}
                  </h3>

                  <p className="text-sm font-bold text-slate-800 mb-2">
                    {deal.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {deal.description}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {deal.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <a
                    href={STORE_CONFIG.getWhatsAppUrl(deal.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`deal-whatsapp-${deal.id}`}
                    className="btn-tactile-whatsapp touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>{deal.cta}</span>
                  </a>

                  <a
                    href={STORE_CONFIG.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-slate-600 hover:text-terracotta-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Call store: {STORE_CONFIG.phoneShort}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Human contractor slip banner with tactile styling */}
        <div className="bg-white rounded-2xl border border-stoneWarm-200 shadow-md p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-terracotta-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                Need buckets or putty delivered to your construction site?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Send your mistri or painter's requirement list on WhatsApp for direct trade rates and free delivery within 30 KM.
              </p>
            </div>
          </div>

          <a
            href={STORE_CONFIG.getSlipWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-dark touch-target inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-transform active:scale-95 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-whatsapp" />
            <span>Send List on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
