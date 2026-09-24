import React from 'react';
import { Phone, MessageSquare, Truck, ShieldCheck, Camera, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-4 pb-8 sm:pt-8 sm:pb-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Retail Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Store Type & Service Area Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                Paints • Hardware • Plumbing • Electrical
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{STORE_CONFIG.deliveryHighlight}</span>
              </span>
            </div>

            {/* Main Headline - Bold, grounded, human */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Paint. Hardware.{' '}
              <span className="text-brand-700 block sm:inline">
                Everything You Need.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-2xl font-normal">
              {STORE_CONFIG.supportingText}
            </p>

            {/* Prominent Offer Highlight Card */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/80 mb-5 text-left">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
                Featured Brand Offers
              </div>
              <div className="text-sm sm:text-base md:text-lg font-black text-slate-900">
                {STORE_CONFIG.featuredOfferText}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-1">
                Direct store rates • Call or WhatsApp for today's best price &amp; availability
              </div>
            </div>

            {/* Primary Action Buttons (Thumb-friendly, solid, readable) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <a
                href={STORE_CONFIG.phoneTel}
                id="hero-call-btn"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-base font-bold active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white text-base font-bold active:scale-[0.98] transition-all shadow-sm"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Human Retail Touch: Handwritten Mistri Slip Box */}
            <a
              href={STORE_CONFIG.getSlipWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    Got a handwritten slip from your painter or contractor?
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500">
                    Snap a photo &amp; send on WhatsApp for quick stock &amp; total estimate
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={STORE_CONFIG.images.heroStore}
                  alt="Santu Hardware authentic paint buckets, brushes, pipes and tools"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width="800"
                  height="550"
                />
              </div>

              {/* Clean store reassurance strip */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>100% Genuine Brands</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free 30 KM Delivery</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
