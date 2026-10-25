import React from 'react';
import { Phone, MessageSquare, Truck, ShieldCheck, Camera, ChevronRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 bg-white border-b border-stoneWarm-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Authentic Retail Content */}
          <div className="lg:col-span-7 flex flex-col text-left">

            {/* Main Headline */}
            <h1 className=" text-[2rem] sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-[1.12] mb-5 max-w-[18ch]">
              Paint, hardware and plumbing &mdash;{' '}
              <span className="text-orange-600">all under one roof.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-600 text-lg leading-[1.65] mb-7 max-w-[54ch]">
              Asian Paints, Birla Opus and JK Maxx, plus CPVC pipes, electricals and fasteners.
              Tell us what you need on WhatsApp and we&rsquo;ll deliver it free anywhere within 30 km.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
              <a
                href={STORE_CONFIG.phoneTel}
                id="hero-call-btn"
                className="btn-tactile-brand touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-base font-semibold shadow-brand"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="btn-tactile-whatsapp touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-base font-semibold shadow-whatsapp"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Handwritten mistri slip shortcut */}
            <a
              href={STORE_CONFIG.getSlipWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md bg-stoneWarm-100 hover:bg-stoneWarm-200 border border-stoneWarm-200 transition-colors flex items-center justify-between gap-3 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-white border border-stoneWarm-200 flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5 text-orange-700" />
                </div>
                <div className="text-left">
                  <div className="text-base text-slate-900">
                    Got a handwritten slip from your painter or mistri?
                  </div>
                  <div className="text-sm text-slate-600">
                    Send a photo on WhatsApp &mdash; we&rsquo;ll quote it and check stock.
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-orange-600 shrink-0" />
            </a>

          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="rounded-lg overflow-hidden border border-stoneWarm-200 bg-slate-900 aspect-[4/3] sm:aspect-[16/11] relative">
                <img
                  src={STORE_CONFIG.images.heroStore}
                  alt="Santu Hardware authentic paint buckets, brushes, pipes and tools"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width="800"
                  height="550"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-sm text-slate-200">
                    Our workshop &amp; counter
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-orange-600 text-white">
                    Direct stock
                  </span>
                </div>
              </div>

              {/* Clean store reassurance strip */}
              <div className="mt-3.5 grid grid-cols-2 gap-3 text-sm text-slate-800">
                <div className="p-3 rounded-md bg-stoneWarm-100 border border-stoneWarm-200 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Genuine brands only</span>
                </div>
                <div className="p-3 rounded-md bg-stoneWarm-100 border border-stoneWarm-200 flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Free delivery in 30 km</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
