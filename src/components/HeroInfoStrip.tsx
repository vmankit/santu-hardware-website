import React from 'react';
import { Truck, Award, Clock, IndianRupee } from 'lucide-react';

export const HeroInfoStrip: React.FC = () => {
  const facts = [
    {
      id: 'delivery',
      label: 'Free delivery within 30 km',
      desc: 'Homes, sites and workshops',
      icon: Truck,
    },
    {
      id: 'brands',
      label: 'Genuine paint brands',
      desc: 'JK Maxx, Birla Opus, Asian Paints',
      icon: Award,
    },
    {
      id: 'dispatch',
      label: 'Same-day dispatch',
      desc: 'Putty, pipes and wire in stock',
      icon: Clock,
    },
    {
      id: 'pricing',
      label: 'Direct store rates',
      desc: 'Retail and contractor volumes',
      icon: IndianRupee,
    },
  ];

  return (
    <div className="bg-stoneWarm-100 border-b border-stoneWarm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {facts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[15px] font-semibold text-slate-900 leading-snug">
                    {item.label}
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
