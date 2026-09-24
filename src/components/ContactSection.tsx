import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Truck } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Store Contact</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Visit / Contact Santu Hardware
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
            Reach out directly for today's price, stock confirmation, paint shade calculation, or to arrange delivery.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-soft-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Store Information Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Business Name
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                  {STORE_CONFIG.legalName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Paints • Hardware • Plumbing • Electrical Supplies
                </p>
              </div>

              {/* Phone Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </div>
                  <a
                    href={STORE_CONFIG.phoneTel}
                    className="font-mono text-lg sm:text-xl font-black text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {STORE_CONFIG.phoneShort}
                  </a>
                  <div className="text-[11px] text-slate-500">Tap to call directly</div>
                </div>
              </div>

              {/* WhatsApp Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-whatsapp shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </div>
                  <a
                    href={STORE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg sm:text-xl font-black text-slate-900 hover:text-whatsapp transition-colors"
                  >
                    {STORE_CONFIG.phoneShort}
                  </a>
                  <div className="text-[11px] text-slate-500">Fast quotes &amp; order updates</div>
                </div>
              </div>

              {/* Address Details (Strictly honest, no fake street names) */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Store Location
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-800">
                    {STORE_CONFIG.address || STORE_CONFIG.addressDisplay}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {STORE_CONFIG.addressNote}
                  </div>
                </div>
              </div>

              {/* Free Delivery Radius */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Delivery Service
                  </div>
                  <div className="text-sm sm:text-base font-bold text-emerald-700">
                    {STORE_CONFIG.deliveryHighlight}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs Panel */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-center space-y-3.5">
              <div className="text-center pb-2">
                <h4 className="font-display font-black text-lg text-slate-900">
                  Ready to Order or Enquire?
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Connect with Santu Hardware team instantly
                </p>
              </div>

              {/* Call Now Button */}
              <a
                href={STORE_CONFIG.phoneTel}
                id="contact-call-btn"
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm shadow-soft-sm active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now ({STORE_CONFIG.phoneShort})</span>
              </a>

              {/* WhatsApp Now Button */}
              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-extrabold text-sm shadow-whatsapp active:scale-95 transition-all"
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
                className="touch-target w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all"
              >
                <Navigation className="w-4 h-4 text-brand-600" />
                <span>Get Directions / Store Location</span>
              </a>

              <div className="pt-2 text-center text-[11px] text-slate-400 font-medium">
                Store opens for paint and hardware queries 6 days a week
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
