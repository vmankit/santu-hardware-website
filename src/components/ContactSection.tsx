import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-10 sm:py-12 bg-white border-t border-stoneWarm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Come and see us
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Contact us directly for today's price, stock availability, or to arrange delivery.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-stoneWarm-200 shadow-md p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Store Information Details */}
            <div className="space-y-5">
              <div>
                <span className="text-sm text-slate-500">
                  Business Name
                </span>
                <h3 className=" font-semibold text-2xl text-slate-900">
                  {STORE_CONFIG.legalName}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Paints • Hardware • Plumbing • Electrical
                </p>
              </div>

              {/* Phone Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    Phone
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {STORE_CONFIG.phoneNumbers.map((line) => (
                      <a
                        key={line.raw}
                        href={line.tel}
                        className="font-mono text-lg font-semibold text-slate-900 hover:text-orange-600 transition-colors"
                      >
                        {line.raw}
                      </a>
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">Tap either number to call</div>
                </div>
              </div>

              {/* WhatsApp Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-whatsapp shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    WhatsApp
                  </div>
                  <a
                    href={STORE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg font-semibold text-slate-900 hover:text-whatsapp transition-colors"
                  >
                    {STORE_CONFIG.phoneShort}
                  </a>
                  <div className="text-xs text-slate-500">Fast price quotes &amp; orders</div>
                </div>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    Store Location
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
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
                  <div className="text-sm text-slate-500">
                    Delivery Service
                  </div>
                  <div className="text-sm font-semibold text-emerald-700">
                    {STORE_CONFIG.deliveryHighlight}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs Panel */}
            <div className="bg-stoneWarm-50 rounded-lg p-5 border border-stoneWarm-200 space-y-2.5">
              <div className="text-center pb-1">
                <h4 className=" font-semibold text-base text-slate-900">
                  Ready to order?
                </h4>
                <p className="text-xs text-slate-500">
                  Call or WhatsApp our store directly
                </p>
              </div>

              {/* Call Now Button */}
              <a
                href={STORE_CONFIG.phoneTel}
                id="contact-call-btn"
                className="btn-tactile-brand touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-white font-semibold text-sm active:scale-95 transition-all shadow-brand"
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
                className="btn-tactile-whatsapp touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-white font-semibold text-sm active:scale-95 transition-all shadow-whatsapp"
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
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-stoneWarm-200 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-600" />
                <span>Get directions to the store</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
