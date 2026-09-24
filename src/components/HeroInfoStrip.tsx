import React from 'react';
import { Palette, Truck, MessageSquare } from 'lucide-react';

export const HeroInfoStrip: React.FC = () => {
  const stripCards = [
    {
      id: 'wide-range',
      icon: Palette,
      title: 'Wide Product Range',
      subtitle: 'Paints, hardware, plumbing & electrical',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'free-delivery',
      icon: Truck,
      title: 'Free Local Delivery',
      subtitle: 'Within 30 KM service area',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'easy-ordering',
      icon: MessageSquare,
      title: 'Quick Ordering',
      subtitle: 'Call or WhatsApp your list',
      iconBg: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8 sm:mb-12 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stripCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-slate-300 transition-colors"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${card.iconBg}`}
              >
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
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
