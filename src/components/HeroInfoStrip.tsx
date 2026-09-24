import React from 'react';
import { Truck, Award, Clock, IndianRupee } from 'lucide-react';

export const HeroInfoStrip: React.FC = () => {
  const stats = [
    {
      id: 'delivery',
      stat: '30 KM',
      label: 'Free Local Delivery',
      desc: 'Homes, sites & workshops',
      icon: Truck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: 'brands',
      stat: 'Top 3',
      label: 'Leading Paint Brands',
      desc: 'JK Maxx • Birla Opus • Asian Paints',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200',
    },
    {
      id: 'dispatch',
      stat: 'Same Day',
      label: 'Dispatch Available',
      desc: 'Ready stock of putty, pipes & wire',
      icon: Clock,
      color: 'text-terracotta-600',
      bgColor: 'bg-terracotta-50 border-terracotta-200',
    },
    {
      id: 'pricing',
      stat: 'Direct',
      label: 'Store Rates',
      desc: 'Retail & contractor volume rates',
      icon: IndianRupee,
      color: 'text-navy-900',
      bgColor: 'bg-slate-100 border-slate-200',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8 sm:mb-12 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3.5 sm:p-5 border border-stoneWarm-200 shadow-md hover:border-terracotta-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                  {item.stat}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${item.bgColor}`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-xs sm:text-sm text-slate-800 leading-snug">
                  {item.label}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
