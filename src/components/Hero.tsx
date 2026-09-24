import React from 'react';
import { Phone, MessageSquare, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-8 sm:pt-8 sm:pb-14 lg:py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100/60">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/50 via-sky-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Top Quick Category Identifier (Mobile First Understanding in 5 seconds) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] sm:text-xs font-bold tracking-wide w-fit mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>PAINTS • HARDWARE • PLUMBING • ELECTRICAL</span>
            </div>

            {/* Delivery Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300/80 text-emerald-800 text-xs sm:text-sm font-extrabold w-fit mb-3.5 shadow-soft-sm">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{STORE_CONFIG.deliveryHighlight}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4">
              Paint. Hardware.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-600 to-indigo-600">
                Everything You Need.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl font-medium">
              {STORE_CONFIG.supportingText}
            </p>

            {/* Prominent Offer Highlight Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-rose-500/10 border border-amber-300/70 mb-6 shadow-soft-sm">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-900">
                  Featured Offers
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 tracking-tight">
                {STORE_CONFIG.featuredOfferText}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 font-medium">
                Direct store rates • Check today's best price &amp; availability on call or WhatsApp
              </p>
            </div>

            {/* Primary Action Buttons (Large, high contrast, easy touch targets) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href={STORE_CONFIG.phoneTel}
                id="hero-call-btn"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white hover:bg-slate-800 text-base font-bold shadow-soft-md hover:shadow-soft-lg active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white text-base font-bold shadow-whatsapp hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick trust micro-points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                Genuine Brands Only
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Free 30 KM Delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Best Daily Deals
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Image */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={STORE_CONFIG.images.heroStore}
                  alt="Santu Hardware Store Interior with Paints and Hardware Supplies"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  width="800"
                  height="600"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* In-image caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20">
                    <p className="text-xs font-extrabold tracking-tight">Santu Hardware Store</p>
                    <p className="text-[11px] text-slate-300 font-medium">
                      Paints • Hardware • Plumbing • Electrical
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Free Delivery */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-soft-lg border border-slate-100 flex items-center gap-2.5 animate-bounce-subtle">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Local Delivery</div>
                  <div className="text-xs font-black text-slate-900">Free within 30 KM</div>
                </div>
              </div>

              {/* Floating Badge 2: Brand Deals */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-soft-lg border border-slate-100 items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Brands</div>
                  <div className="text-xs font-black text-slate-900">JK Maxx • Birla • Asian</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
