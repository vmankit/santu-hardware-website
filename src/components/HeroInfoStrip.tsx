import React from 'react';
import { Palette, Truck, MessageSquare } from 'lucide-react';

export const HeroInfoStrip: React.FC = () => {
  const stripCards = [
    {
      id: 'wide-range',
      icon: Palette,
      title: 'Wide Range',
      subtitle: 'Paints, hardware & more',
      color: 'bg-brand-50 text-brand-600 border-brand-200/80',
      badge: 'All in One',
    },
    {
      id: 'free-delivery',
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'Within 30 KM radius',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      badge: 'Zero Charge',
    },
    {
      id: 'easy-ordering',
      icon: MessageSquare,
      title: 'Easy Ordering',
      subtitle: 'Call or WhatsApp',
      color: 'bg-amber-50 text-amber-600 border-amber-200/80',
      badge: 'Instant Quote',
    },
  ];

  return (
    <div className="relative -mt-2 sm:-mt-4 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stripCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 flex items-center gap-4 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${card.color} group-hover:scale-105 transition-transform duration-200`}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                  <h3 className="font-display font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 leading-tight">
                    {card.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                    {card.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-normal">
                  {card.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
