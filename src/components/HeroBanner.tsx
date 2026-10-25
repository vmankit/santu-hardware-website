import React, { useState } from 'react';
import { Zap, ShieldCheck, Tag, Truck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../data/storeData';

export const HeroBanner: React.FC = () => {
  const { changePincode, selectedPincode, setActiveCategory } = useCart();
  const [inputPin, setInputPin] = useState(selectedPincode);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPin.length === 6) {
      const res = changePincode(inputPin);
      if (res.serviceable) {
        setFeedback(`⚡ ${res.time} delivery available at ${inputPin}!`);
      } else {
        setFeedback(`Pincode ${inputPin} currently outside standard 60-min express zone. Same-day available.`);
      }
    }
  };

  const quickChips = [
    { label: 'Fevicol SH', cat: 'Fevicol' },
    { label: 'JK Maxx Putty', cat: 'Painting' },
    { label: 'Asian Paints', cat: 'Painting' },
    { label: 'Birla Opus', cat: 'Painting' },
    { label: 'KEI Wires', cat: 'Wires & MCBs' },
    { label: 'Astral CPVC', cat: 'CPVC & Water Tanks' },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-3 md:py-6">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Main Banner Visual */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-[#FFFBEA]">
          <img
            src={STORE_CONFIG.heroBannerUrl}
            alt="Santu Hardware — paints, hardware, electrical and bathroom fittings"
            className="w-full h-auto object-cover block"
            loading="eager"
          />

          {/* Overlay info box on desktop */}
          <div className="md:absolute md:bottom-6 md:left-6 md:max-w-lg bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 m-3 md:m-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#059669] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> FREE DELIVERY
              </span>
              <span className="text-gray-500 text-xs font-semibold">Within 30 km</span>
            </div>

            <h1 className="text-base md:text-xl font-extrabold text-gray-900 leading-tight">
              Genuine Paints, Hardware, Electrical &amp; Bathroom Fittings
            </h1>
            <p className="text-xs text-gray-600 mt-1">
              100% genuine materials at wholesale bulk pricing. No minimum order required.
            </p>

            {/* Quick Pincode checker form */}
            <form onSubmit={handleCheck} className="mt-3 flex items-center gap-1.5">
              <input
                type="text"
                maxLength={6}
                value={inputPin}
                onChange={(e) => {
                  setInputPin(e.target.value.replace(/\D/g, ''));
                  setFeedback(null);
                }}
                placeholder="Enter 6-digit Pincode"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-gray-900 outline-none focus:border-[#059669]"
              />
              <button
                type="submit"
                className="bg-[#111827] hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0"
              >
                Check Slot
              </button>
            </form>

            {feedback && (
              <p className="text-[11px] font-bold text-[#059669] mt-1.5 flex items-center gap-1 animate-in fade-in">
                <Check className="w-3 h-3" /> {feedback}
              </p>
            )}

            {/* Quick Chips */}
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fast Buy:</span>
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(chip.cat);
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[11px] font-semibold bg-gray-100 hover:bg-[#F8C200]/30 hover:border-[#F8C200] border border-transparent text-gray-700 px-2 py-0.5 rounded-md transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Trust Value Props Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 mt-3 md:mt-5">
          <div className="bg-white p-3 md:p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="size-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">Same-day delivery</h3>
              <p className="text-[10px] md:text-[11px] text-gray-500">Zero site downtime</p>
            </div>
          </div>

          <div className="bg-white p-3 md:p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="size-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">100% Genuine</h3>
              <p className="text-[10px] md:text-[11px] text-gray-500">Direct from authorised brands</p>
            </div>
          </div>

          <div className="bg-white p-3 md:p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="size-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">Bulk Price Tiers</h3>
              <p className="text-[10px] md:text-[11px] text-gray-500">Up to 25% volume off</p>
            </div>
          </div>

          <div className="bg-white p-3 md:p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="size-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">Free Delivery &gt; ₹500</h3>
              <p className="text-[10px] md:text-[11px] text-gray-500">Pay on site delivery</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
