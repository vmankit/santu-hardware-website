import React from 'react';
import { Layers, ShieldCheck, Tag, Truck, PhoneCall, HeartHandshake } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const WhySantuHardware: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-amber-500" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-blue-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-rose-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-teal-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Why Santu Hardware
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Your trusted local partner for home construction, renovation, painting, and maintenance needs.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {STORE_CONFIG.whyChooseUs.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 border border-slate-200/80 hover:border-brand-300 hover:bg-white shadow-soft-sm hover:shadow-soft-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                {getIcon(card.icon)}
              </div>
              <h3 className="font-display font-black text-lg text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
