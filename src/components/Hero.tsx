import React from 'react';
import { Phone, MessageSquare, Truck, ShieldCheck, Camera, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-6 pb-10 sm:pt-10 sm:pb-16 lg:py-20 bg-white border-b border-slate-200 overflow-hidden">
      {/* Precision Hardware Grid Background */}
      <div className="absolute inset-0 hardware-grid-pattern opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Retail Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Store Type & Service Area Header */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-md shadow-xs">
                Paints • Hardware • Plumbing • Electrical
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300/80 px-3 py-1 rounded-md shadow-xs">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{STORE_CONFIG.deliveryHighlight}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3 sm:mb-4">
              Paint. Hardware.{' '}
              <span className="text-brand-700 block sm:inline">
                Everything You Need.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl font-normal">
              {STORE_CONFIG.supportingText}
            </p>

            {/* Prominent Offer Highlight Card with Shimmer & Border Accent */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 mb-6 text-left shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-900 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Special Paint Deals</span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tight">
                {STORE_CONFIG.featuredOfferText}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Direct store rates • Call or WhatsApp for today's price &amp; availability
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
              <a
                href={STORE_CONFIG.phoneTel}
                id="hero-call-btn"
                className="btn-tactile-dark touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="btn-tactile-whatsapp touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Human Retail Touch: Handwritten Mistri Slip Box with tactile hover */}
            <a
              href={STORE_CONFIG.getSlipWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-between gap-3 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    Got a handwritten slip from your painter or contractor?
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal">
                    Take a photo &amp; send on WhatsApp for instant quote &amp; stock check
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-700 group-hover:translate-x-1 transition-all shrink-0" />
            </a>

          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-[0_12px_36px_rgba(15,23,42,0.08)] bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
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
              <div className="mt-3.5 grid grid-cols-2 gap-3 text-xs font-bold text-slate-700">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>100% Genuine Brands</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5">
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
