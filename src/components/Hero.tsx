import React from 'react';
import { Phone, MessageSquare, Truck, ShieldCheck, Camera, Sparkles, ChevronRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Hero: React.FC = () => {
  const brandQuickNav = [
    { label: 'JK Maxx Paints', href: '#special-deals', badge: 'Special Deal' },
    { label: 'Birla Opus', href: '#special-deals', badge: 'New' },
    { label: 'Asian Paints', href: '#special-deals', badge: 'Popular' },
    { label: 'Plumbing & CPVC', href: '#categories' },
    { label: 'Electrical Supplies', href: '#categories' },
    { label: 'Hardware & Locks', href: '#categories' },
  ];

  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 pp-hero-bg text-white border-b border-navy-800 overflow-hidden">
      {/* Precision Industrial Grid Background */}
      <div className="absolute inset-0 hardware-grid-dark opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Retail Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Mahakal Inspired Gold Pill Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-500/15 border border-amber-400/40 px-3 py-1 rounded-full shadow-xs backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>★ AUTHORISED RETAIL STORE • FREE DELIVERY WITHIN 30 KM</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-3 sm:mb-4">
              Paint. Hardware.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 via-gold-400 to-terracotta-300 block sm:inline">
                Everything You Need.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl font-normal">
              {STORE_CONFIG.mainSellingMessage}. Genuine Asian Paints, Birla Opus, JK Maxx, CPVC plumbing pipes, electricals and fasteners delivered free within our 30 KM service radius.
            </p>

            {/* Prominent Mahakal Style Offer Highlight Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-navy-900/85 border border-amber-500/40 mb-6 text-left shadow-lg backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Special Paint Deals</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-terracotta-600/90 text-white">
                  Limited Offers
                </span>
              </div>

              <div className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight">
                {STORE_CONFIG.featuredOfferText}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Direct store rates • Call or WhatsApp for today's price &amp; availability
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
              <a
                href={STORE_CONFIG.phoneTel}
                id="hero-call-btn"
                className="btn-tactile-terracotta touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-extrabold shadow-terracotta"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="btn-tactile-whatsapp touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-extrabold shadow-whatsapp"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Mahakal Inspired Horizontal Brand Quick-Nav Pills (.pp-brands-nav) */}
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Quick Category Navigator:
              </div>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {brandQuickNav.map((pill) => (
                  <a
                    key={pill.label}
                    href={pill.href}
                    className="pp-brand-pill"
                  >
                    <span>{pill.label}</span>
                    {pill.badge && (
                      <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-terracotta-500 text-white">
                        {pill.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Human Retail Touch: Handwritten Mistri Slip Box with tactile hover */}
            <a
              href={STORE_CONFIG.getSlipWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-navy-900/70 hover:bg-navy-850 border border-slate-700/80 shadow-md transition-all flex items-center justify-between gap-3 group cursor-pointer backdrop-blur-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-terracotta-600/20 border border-terracotta-500/40 text-terracotta-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Camera className="w-5 h-5 text-terracotta-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    Got a handwritten slip from your painter or contractor?
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-normal">
                    Take a photo &amp; send on WhatsApp for instant quote &amp; stock check
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all shrink-0" />
            </a>

          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden border-2 border-slate-700 shadow-[0_16px_40px_rgba(0,0,0,0.5)] bg-slate-900 aspect-[4/3] sm:aspect-[16/11] relative group">
                <img
                  src={STORE_CONFIG.images.heroStore}
                  alt="Santu Hardware authentic paint buckets, brushes, pipes and tools"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                  width="800"
                  height="550"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">
                    Santu Hardware Workshop &amp; Counter
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-terracotta-600 text-white">
                    Direct Stock
                  </span>
                </div>
              </div>

              {/* Clean store reassurance strip */}
              <div className="mt-3.5 grid grid-cols-2 gap-3 text-xs font-bold text-slate-200">
                <div className="p-3 rounded-xl bg-navy-900/90 border border-slate-700 shadow-sm flex items-center gap-2.5 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>100% Genuine Brands</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/90 border border-slate-700 shadow-sm flex items-center gap-2.5 backdrop-blur-sm">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
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
