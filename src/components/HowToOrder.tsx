import React from 'react';
import { Send, BadgeCheck, PackageCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Send Your Requirement',
      description: 'Call or WhatsApp us with the list of products, paint shades, or plumbing fittings you need.',
      icon: Send,
    },
    {
      num: '02',
      title: 'Get Price & Availability',
      description: 'Our store team quickly confirms current rates, availability, and applicable special brand discounts.',
      icon: BadgeCheck,
    },
    {
      num: '03',
      title: 'Get It Delivered',
      description: 'Eligible orders can receive convenient free delivery within our 30 KM service radius.',
      icon: PackageCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            How to Order
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            No complicated online checkouts or account logins. Just direct, fast local service.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl sm:text-4xl text-brand-600">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <a
            href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to start my order and send my product requirements.")}
            target="_blank"
            rel="noopener noreferrer"
            id="how-to-order-cta"
            className="touch-target inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-whatsapp hover:bg-emerald-600 text-white font-extrabold text-base shadow-soft-md hover:shadow-whatsapp active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start Your Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
