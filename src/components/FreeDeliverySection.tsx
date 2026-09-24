import React, { useState } from 'react';
import { Truck, Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const FreeDeliverySection: React.FC = () => {
  const [locationQuery, setLocationQuery] = useState('');

  const getCustomDeliveryWhatsAppUrl = () => {
    const trimmed = locationQuery.trim();
    if (trimmed) {
      const msg = `Hi Santu Hardware, I want to check whether free delivery is available at my location: ${trimmed}.`;
      return STORE_CONFIG.getWhatsAppUrl(msg);
    }
    return STORE_CONFIG.getWhatsAppUrl('Hi Santu Hardware, I want to check whether free delivery is available at my location.');
  };

  return (
    <section id="delivery" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Details & Interactive Checker */}
          <div className="lg:col-span-7">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Direct to Site or Home</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              FREE DELIVERY WITHIN{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                30 KM
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-medium max-w-2xl">
              {STORE_CONFIG.deliveryDescription}
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy paint buckets &amp; wall putty delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pipes, fittings &amp; electrical bulk bundles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Doorstep delivery for painters &amp; contractors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available within 30 KM radius of store</span>
              </div>
            </div>

            {/* Interactive Location Availability Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-6">
              <label htmlFor="location-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Check Your Location Availability
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="location-input"
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Enter your town, village, or area..."
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  />
                </div>

                <a
                  href={getCustomDeliveryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="check-delivery-btn"
                  className="touch-target inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 active:scale-98 transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check Delivery Availability</span>
                </a>
              </div>
            </div>

            {/* Call Action Display */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={STORE_CONFIG.phoneTel}
                id="delivery-call-btn"
                className="touch-target inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Store: {STORE_CONFIG.phoneDisplay}</span>
              </a>
              <span className="text-xs text-slate-400 font-medium">
                Verify delivery eligibility in 1 minute on phone
              </span>
            </div>

          </div>

          {/* Right Column: High Quality Delivery Vehicle Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
              <img
                src={STORE_CONFIG.images.deliveryService}
                alt="Santu Hardware Free 30 KM Delivery Service Vehicle"
                className="w-full h-72 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge on Delivery Image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black">Free Delivery Area</div>
                      <div className="text-[11px] text-slate-300">Up to 30 KM radius</div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                    ₹0 Extra
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
