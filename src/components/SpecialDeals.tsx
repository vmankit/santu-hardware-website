import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Camera, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const SpecialDeals: React.FC = () => {
  const dealsData = [
    {
      id: 'jk-maxx',
      brand: 'JK Maxx Paints',
      description: 'Known for high whiteness, smooth wall coverage, and durable primers & wall putty for residential and commercial sites.',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for JK Maxx Paints.",
      warranty: { url: 'https://jkmaxxpaints.com/warranty-card/', label: 'Warranty certificates' },
      highlights: [
        'JK Maxx Wall Putty (20kg / 40kg bags)',
        'Water-resistant Exterior Primers',
        'Interior Acrylic Emulsions',
        'Bulk contractor and painter rates',
      ],
    },
    {
      id: 'birla-opus',
      brand: 'Birla Opus',
      description: 'Next-generation interior emulsions, durable weather-shield exterior coatings, and premium gloss finishes.',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Birla Opus paints.",
      warranty: { url: 'https://www.birlaopus.com/warranty', label: 'Register your warranty' },
      highlights: [
        'Luxury Interior Wall Finishes',
        'All-Weather Exterior Protection',
        'High-coverage Base Primers',
        'Direct store pricing on request',
      ],
    },
    {
      id: 'asian-paints',
      brand: 'Asian Paints',
      description: 'Complete range of interior and exterior emulsions, enamel gloss paints, SmartCare waterproofing, and distempers.',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Asian Paints.",
      highlights: [
        'Tractor & Apcolite Emulsions',
        'Apex & Ultima Exterior Ranges',
        'SmartCare Damp Proof Waterproofing',
        'Computerized shade availability',
      ],
    },
  ];

  return (
    <section id="special-deals" className="py-10 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            The paints we stock
          </h2>
          <p className="text-lg text-slate-600 leading-[1.6]">
            We&rsquo;re an authorised retailer for all three. Prices move with the market, so call or WhatsApp
            and we&rsquo;ll tell you today&rsquo;s rate and what&rsquo;s on the shelf.
          </p>
        </div>

        {/* Brand rows */}
        <div className="divide-y divide-stoneWarm-200 border-y border-stoneWarm-200 mb-12">
          {dealsData.map((deal) => (
            <div key={deal.id} className="py-8 grid gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <img
                  src={`/images/brands/${deal.id}.png`}
                  alt={deal.brand}
                  className="max-h-9 w-auto max-w-[180px] object-contain object-left mb-4"
                  loading="lazy"
                />
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-stoneWarm-100 border border-stoneWarm-200 text-slate-700">
                    Free delivery in 30 km
                  </span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-stoneWarm-100 border border-stoneWarm-200 text-slate-700">
                    Pay on delivery
                  </span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-stoneWarm-100 border border-stoneWarm-200 text-slate-700">
                    Same-day dispatch
                  </span>
                </div>

                <p className="text-[15px] text-slate-600 leading-[1.65]">
                  {deal.description}
                </p>

                {deal.warranty && (
                  <a
                    href={deal.warranty.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[15px] text-orange-700 hover:underline"
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{deal.warranty.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                )}
              </div>

              <div className="md:col-span-5">
                <ul className="space-y-2">
                  {deal.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-1 text-orange-600 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3 flex flex-col gap-2 md:items-end">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(deal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`deal-whatsapp-${deal.id}`}
                  className="btn-tactile-brand touch-target inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-md text-[15px]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Ask for a price</span>
                </a>
                <a
                  href={STORE_CONFIG.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 py-2 text-[15px] text-slate-600 hover:text-orange-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{STORE_CONFIG.phoneShort}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Human contractor slip banner with tactile styling */}
        <div className="bg-white rounded-lg border border-stoneWarm-200 shadow-md p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-md bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className=" font-semibold text-base sm:text-lg text-slate-900">
                Need buckets or putty delivered to your construction site?
              </h4>
              <p className="text-[15px] text-slate-500 font-medium mt-0.5">
                Send your mistri or painter's requirement list on WhatsApp for direct trade rates and free delivery within 30 KM.
              </p>
            </div>
          </div>

          <a
            href={STORE_CONFIG.getSlipWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile-dark touch-target inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-[15px] font-semibold shrink-0 transition-transform active:scale-95 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-whatsapp" />
            <span>Send the list on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
