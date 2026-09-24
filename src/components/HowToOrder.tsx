import React from 'react';
import { Send, BadgeCheck, PackageCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Send Your Requirement',
      description: 'Call, WhatsApp, or take a photo of your contractor/mistri slip and send it to 9097441600.',
      icon: Send,
    },
    {
      num: '02',
      title: 'Get Price & Availability',
      description: 'Our team confirms current daily rates, brand options, and applicable trade discounts.',
      icon: BadgeCheck,
    },
    {
      num: '03',
      title: 'Get It Delivered',
      description: 'Eligible orders for paints, putty, pipes, or hardware are delivered free within 30 KM.',
      icon: PackageCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            How to Order
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Fast, simple ordering without account logins or complex forms.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-3xl text-slate-900">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-lg text-slate-900 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to start my order and send my product requirements.")}
            target="_blank"
            rel="noopener noreferrer"
            id="how-to-order-cta"
            className="touch-target inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm sm:text-base active:scale-95 transition-all shadow-sm"
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
