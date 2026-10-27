import React from 'react';
import { QrCode, CheckCircle2, Award, Zap } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const TrustAuthenticityBanner: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Visual Trust Banner */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-[#FFF7ED]">
          <img
            src={STORE_CONFIG.trustBannerUrl}
            alt="Santu Hardware - genuine paints and hardware, sourced direct"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>

        {/* 3 Pillars of Santu Hardware's Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          
          <div className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-3">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-gray-900 mb-1.5">
                100% Genuine Stock
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Duplicate wires and thinned paints are a real problem in the market. We buy directly from Asian Paints, JK Maxx, Birla Opus and our other authorised distributors, so what you get is what's on the tin.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#059669]">
              <CheckCircle2 className="w-4 h-4" /> No Duplicate Stock
            </div>
          </div>

          <div className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-gray-900 mb-1.5">
                Same-day Site Delivery
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                When you run out of plumbing tees, primer, or copper cable mid-shift, contractors lose valuable labour hours. Santu Hardware's express dispatch delivers to your site the same day, free within 30 km.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-amber-800">
              <CheckCircle2 className="w-4 h-4" /> Live Dispatch Updates
            </div>
          </div>

          <div className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-gray-900 mb-1.5">
                Wholesale Bulk Tiers &amp; Cashback
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No middlemen margins. Painters and contractors get volume rates on paint, putty, wire and fittings, plus 1% Santu Cash on every order.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-blue-800">
              <CheckCircle2 className="w-4 h-4" /> Transparent Tiered Rates
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
