import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-stoneWarm-100 border-b border-stoneWarm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-terracotta-700 bg-terracotta-50 border border-terracotta-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            Direct Store Counter
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Visit / Contact Santu Hardware
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Contact us directly for today's price, stock availability, or to arrange delivery.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-stoneWarm-200 shadow-md p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Store Information Details */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Business Name
                </span>
                <h3 className="font-display font-black text-2xl text-slate-900">
                  {STORE_CONFIG.legalName}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Paints • Hardware • Plumbing • Electrical
                </p>
              </div>

              {/* Phone Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-terracotta-50 border border-terracotta-200 flex items-center justify-center text-terracotta-600 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </div>
                  <a
                    href={STORE_CONFIG.phoneTel}
                    className="font-mono text-lg font-bold text-slate-900 hover:text-terracotta-600 transition-colors"
                  >
                    {STORE_CONFIG.phoneShort}
                  </a>
                  <div className="text-[11px] text-slate-500">Tap to call directly</div>
                </div>
              </div>

              {/* WhatsApp Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-whatsapp shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </div>
                  <a
                    href={STORE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg font-bold text-slate-900 hover:text-whatsapp transition-colors"
                  >
                    {STORE_CONFIG.phoneShort}
                  </a>
                  <div className="text-[11px] text-slate-500">Fast price quotes &amp; orders</div>
                </div>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Store Location
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {STORE_CONFIG.address || STORE_CONFIG.addressDisplay}
                  </div>
                  <div className="text-xs text-slate-500">
                    {STORE_CONFIG.addressNote}
                  </div>
                </div>
              </div>

              {/* Free Delivery Radius */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Delivery Service
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    {STORE_CONFIG.deliveryHighlight}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs Panel */}
            <div className="bg-stoneWarm-50 rounded-2xl p-5 border border-stoneWarm-200 space-y-2.5">
              <div className="text-center pb-1">
                <h4 className="font-display font-extrabold text-base text-slate-900">
                  Ready to Order?
                </h4>
                <p className="text-xs text-slate-500">
                  Call or WhatsApp our store directly
                </p>
              </div>

              {/* Call Now Button */}
              <a
                href={STORE_CONFIG.phoneTel}
                id="contact-call-btn"
                className="btn-tactile-terracotta touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-extrabold text-sm active:scale-95 transition-all shadow-terracotta"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now ({STORE_CONFIG.phoneShort})</span>
              </a>

              {/* WhatsApp Now Button */}
              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="btn-tactile-whatsapp touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-extrabold text-sm active:scale-95 transition-all shadow-whatsapp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={STORE_CONFIG.getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-stoneWarm-200 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-terracotta-600" />
                <span>Get Directions / Store Location</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
