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
    <section id="delivery" className="py-14 sm:py-20 bg-orange-700 text-white relative overflow-hidden">
      {/* Precision Dark Hardware Grid Pattern */}
      <div className="absolute inset-0 hardware-grid-dark opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Details & Interactive Checker */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 text-orange-100 text-sm mb-4">
              <Truck className="w-4 h-4" />
              <span>We deliver ourselves</span>
            </div>

            {/* Large Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-[1.14] mb-4 max-w-[16ch]">
              Free delivery within{' '}
              <span className="text-orange-200">30 km</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-orange-50 text-base sm:text-lg leading-[1.65] mb-6 max-w-[58ch]">
              {STORE_CONFIG.deliveryDescription}
            </p>

            {/* Practical delivery items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-[15px] text-white">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-orange-800/50 border border-orange-500/40">
                <CheckCircle2 className="w-4 h-4 text-orange-200 shrink-0" />
                <span>Heavy paint buckets &amp; wall putty bags</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-orange-800/50 border border-orange-500/40">
                <CheckCircle2 className="w-4 h-4 text-orange-200 shrink-0" />
                <span>PVC / CPVC pipes &amp; long bundles</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-orange-800/50 border border-orange-500/40">
                <CheckCircle2 className="w-4 h-4 text-orange-200 shrink-0" />
                <span>Electrical wires &amp; lighting fixtures</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-orange-800/50 border border-orange-500/40">
                <CheckCircle2 className="w-4 h-4 text-orange-200 shrink-0" />
                <span>Direct delivery to home or site</span>
              </div>
            </div>

            {/* Interactive Location Availability Box with CSS Focus Ring */}
            <div className="p-4 sm:p-5 rounded-lg bg-white border border-orange-200 mb-6">
              <label htmlFor="location-input" className="block text-sm text-slate-700 mb-2">
                Check if we deliver to you
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="location-input"
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Enter your town, village, or colony..."
                    className="w-full pl-10 pr-3 py-3 rounded-md bg-white border border-orange-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>

                <a
                  href={getCustomDeliveryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="check-delivery-btn"
                  className="btn-tactile-whatsapp touch-target inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-[15px] font-semibold shrink-0 transition-transform active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check delivery on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Call Action Display */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STORE_CONFIG.phoneTel}
                id="delivery-call-btn"
                className="touch-target inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white hover:bg-orange-50 text-orange-800 font-semibold text-[15px] border border-orange-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-700" />
                <span>Call {STORE_CONFIG.phoneDisplay}</span>
              </a>
              <span className="text-sm text-orange-100">
                Confirm order &amp; delivery slot over phone
              </span>
            </div>

          </div>

          {/* Right Column: Clean Logistics Badge Card with CSS Depth */}
          <div className="lg:col-span-5">
            <div className="rounded-lg p-6 sm:p-8 bg-white border border-orange-200 text-left relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-orange-800 bg-orange-100 px-2.5 py-1 rounded border border-orange-200">
                  Store dispatch
                </span>
                <span className="text-xs text-slate-500">                  Local service
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-2 ">
                30 KM <span className="text-base sm:text-lg font-semibold text-orange-600">Radius</span>
              </div>

              <p className="text-[15px] text-slate-600 leading-[1.65] mb-6">
                Whether you need 2 cans of paint for a touch-up or 20 buckets of emulsion with putty and pipes for a whole building, we deliver locally without delivery charges.
              </p>

              <div className="space-y-3 pt-4 border-t border-orange-200 text-[15px] text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5 border border-orange-200">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Call or WhatsApp list:</span> Share your order items or send mistri slip.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5 border border-orange-200">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Verify address:</span> We confirm your location falls in the 30 KM zone.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5 border border-orange-200">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Fast dispatch:</span> Goods packed safely and delivered right to your door.
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
