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
    <section id="delivery" className="py-12 sm:py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Details & Interactive Checker */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Direct Store Delivery Service</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              FREE DELIVERY WITHIN{' '}
              <span className="text-emerald-400">
                30 KM
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl">
              {STORE_CONFIG.deliveryDescription}
            </p>

            {/* Practical delivery items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy paint buckets &amp; wall putty bags</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PVC / CPVC pipes &amp; long bundles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Electrical wires &amp; lighting fixtures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct delivery to home or construction site</span>
              </div>
            </div>

            {/* Interactive Location Availability Box */}
            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 mb-6">
              <label htmlFor="location-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Check Your Location Availability
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="location-input"
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Enter your town, village, or colony..."
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>

                <a
                  href={getCustomDeliveryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="check-delivery-btn"
                  className="touch-target inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm active:scale-98 transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check Delivery Availability</span>
                </a>
              </div>
            </div>

            {/* Call Action Display */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STORE_CONFIG.phoneTel}
                id="delivery-call-btn"
                className="touch-target inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Store: {STORE_CONFIG.phoneDisplay}</span>
              </a>
              <span className="text-xs text-slate-400">
                Confirm order &amp; delivery slot over phone
              </span>
            </div>

          </div>

          {/* Right Column: Clean Logistics Badge Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-800/80 border border-slate-700 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Store Dispatch
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Local Service
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white mb-2 font-display">
                30 KM <span className="text-base sm:text-lg font-bold text-emerald-400">Radius</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Whether you need 2 cans of paint for a touch-up or 20 buckets of emulsion with putty and pipes for a whole building, we deliver locally without delivery charges.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-700 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-white">Call or WhatsApp list:</span> Share your order items or send mistri slip.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-white">Verify Address:</span> We confirm your location falls in the 30 KM zone.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-white">Fast Dispatch:</span> Goods packed safely and delivered right to your door.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
