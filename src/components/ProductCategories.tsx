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
        return <Paintbrush className="w-5 h-5 text-slate-800" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-slate-800" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-slate-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-slate-800" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-slate-800" />;
      case 'Home':
        return <Home className="w-5 h-5 text-slate-800" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Browse our core departments. Tap any category to view available fittings and products.
          </p>
        </div>

        {/* Category Grid: 2-column on mobile, 3-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mb-10">
          {STORE_CONFIG.categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="cursor-pointer bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category Item Count */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">
                    {cat.items.length} items
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-1 group-hover:text-brand-700 transition-colors">
                  {cat.name}
                </h3>

                {/* Short description */}
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {cat.shortDescription}
                </p>
              </div>

              {/* Tap to view */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-brand-700">
                <span>View Products</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Product Inventory Breakdown */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900">
                Full Department Inventory
              </h3>
              <p className="text-xs text-slate-500">
                Subcategories and fittings available for instant dispatch
              </p>
            </div>
            <a
              href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to check availability for a specific hardware item.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors self-start sm:self-auto"
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
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden"
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
                      <span className="font-display font-bold text-sm sm:text-base text-slate-900">
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
                          Looking for bulk rates on {cat.name.toLowerCase()}?
                        </span>
                        <a
                          href={STORE_CONFIG.getWhatsAppUrl(cat.inquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-whatsapp hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="touch-target absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                {getIcon(selectedCategory.iconName)}
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-slate-900">
                  {selectedCategory.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedCategory.shortDescription}
                </p>
              </div>
            </div>

            {/* Products list */}
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Available in Store
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {selectedCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2"
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
                className="w-full py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask for Price on WhatsApp</span>
              </a>

              <a
                href={STORE_CONFIG.phoneTel}
                className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Store: {STORE_CONFIG.phoneShort}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
