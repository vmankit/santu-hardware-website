import React from 'react';
import { Layers, ShieldCheck, Tag, Truck, PhoneCall, HeartHandshake } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const WhySantuHardware: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-slate-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-slate-800" />;
      case 'Tag':
        return <Tag className="w-5 h-5 text-slate-800" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-slate-800" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-slate-800" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-slate-800" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Why Santu Hardware
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Your trusted local partner for home construction, renovation, painting, and maintenance needs.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {STORE_CONFIG.whyChooseUs.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3">
                {getIcon(card.icon)}
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
