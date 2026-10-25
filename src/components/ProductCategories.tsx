import React, { useState } from 'react';
import {
  Paintbrush,
  Wrench,
  Droplets,
  Zap,
  Hammer,
  Home,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  X,
  Phone,
} from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import type { CategoryItem } from '../data/storeConfig';

export const ProductCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>('paints');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush className="w-4 h-4 text-slate-900" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-slate-900" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-slate-900" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-slate-900" />;
      case 'Hammer':
        return <Hammer className="w-4 h-4 text-slate-900" />;
      case 'Home':
        return <Home className="w-4 h-4 text-slate-900" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-900" />;
    }
  };

  return (
    <section id="categories" className="py-10 sm:py-12 bg-white border-t border-stoneWarm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <div className="inline-block text-xs font-semibold text-slate-500 mb-2">
            Store Inventory &amp; Departments
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Everything you need, in one shop
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Explore our six core departments. Tap any category card to see the full list of products and fittings.
          </p>
        </div>

        {/* Dense department tiles */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {STORE_CONFIG.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className="group text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stoneWarm-100 border border-stoneWarm-200 group-hover:border-orange-500 transition-colors">
                <img
                  src={cat.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width="300"
                  height="300"
                />
                {cat.badge && (
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-gold-500 text-slate-900">
                    {cat.badge}
                  </span>
                )}
              </div>

              <div className="mt-2 text-[13px] sm:text-sm font-medium text-slate-800 leading-snug group-hover:text-orange-700 transition-colors">
                {cat.name}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500">
                {cat.items.length} items
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Product Inventory Breakdown Accordion */}
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
            <div>
              <h3 className=" font-semibold text-base sm:text-lg text-slate-900">
                What each department stocks
              </h3>
              <p className="text-xs text-slate-500">
                Quick checklist of pipes, valves, wires, putty &amp; fittings stocked at our store
              </p>
            </div>
            <a
              href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to check availability for a specific hardware item.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors self-start sm:self-auto"
            >
              <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
              <span>Ask for unlisted item</span>
            </a>
          </div>

          <div className="space-y-2.5">
            {STORE_CONFIG.categories.map((cat) => {
              const isExpanded = expandedId === cat.id;
              return (
                <div
                  key={cat.id}
                  className="rounded-md border border-slate-200 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                        {getIcon(cat.iconName)}
                      </div>
                      <span className=" font-semibold text-base text-slate-900">
                        {cat.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400">
                        {cat.items.length} items
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-slate-50 border-t border-slate-100">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                        {cat.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-slate-500">
                          Need bulk rates on {cat.name.toLowerCase()}?
                        </span>
                        <a
                          href={STORE_CONFIG.getWhatsAppUrl(cat.inquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-whatsapp hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp Quote</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Modal Dialog when tapping a card */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60" role="dialog" aria-modal="true">
          <div className="bg-white rounded-lg max-w-md w-full shadow-xl border border-slate-200 relative max-h-[90vh] overflow-y-auto overflow-hidden">
            {/* Modal Image Header */}
            <div className="relative h-44 w-full bg-slate-100">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => setSelectedCategory(null)}
                className="touch-target absolute top-3 right-3 p-1.5 text-white bg-slate-900/70 hover:bg-slate-900 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-slate-900/80 mb-1">
                  Department
                </span>
                <h3 className=" font-semibold text-2xl drop-shadow">
                  {selectedCategory.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              <p className="text-xs text-slate-500 font-medium mb-3">
                {selectedCategory.shortDescription}
              </p>

              <p className="text-sm text-slate-500 mb-2">
                Available in Store
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {selectedCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <a
                  href={STORE_CONFIG.getWhatsAppUrl(selectedCategory.inquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md bg-whatsapp hover:bg-emerald-600 text-white font-semibold text-sm text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask for Price on WhatsApp</span>
                </a>

                <a
                  href={STORE_CONFIG.phoneTel}
                  className="w-full py-2 px-4 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Call Store: {STORE_CONFIG.phoneShort}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
