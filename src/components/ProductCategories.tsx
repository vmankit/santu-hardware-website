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
        return <Paintbrush className="w-6 h-6 text-brand-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-sky-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-rose-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-emerald-600" />;
      default:
        return <Wrench className="w-6 h-6 text-brand-600" />;
    }
  };

  const getCategoryColor = (id: string) => {
    switch (id) {
      case 'paints':
        return 'from-blue-50 to-indigo-50/40 border-blue-200/80 hover:border-blue-400';
      case 'hardware':
        return 'from-amber-50 to-orange-50/40 border-amber-200/80 hover:border-amber-400';
      case 'plumbing':
        return 'from-sky-50 to-cyan-50/40 border-sky-200/80 hover:border-sky-400';
      case 'electrical':
        return 'from-yellow-50 to-amber-50/40 border-yellow-200/80 hover:border-yellow-400';
      case 'tools':
        return 'from-rose-50 to-red-50/40 border-rose-200/80 hover:border-rose-400';
      case 'home-improvement':
        return 'from-emerald-50 to-teal-50/40 border-emerald-200/80 hover:border-emerald-400';
      default:
        return 'from-slate-50 to-white border-slate-200 hover:border-brand-400';
    }
  };

  const handleCardClick = (cat: CategoryItem) => {
    setSelectedCategory(cat);
  };

  return (
    <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Complete Store Catalog</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Tap any category to view available products, fittings, and accessories. Send your list directly to WhatsApp for prompt pricing and delivery confirmation.
          </p>
        </div>

        {/* Category Grid: 2-column on mobile, 3-column on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 mb-10">
          {STORE_CONFIG.categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              className={`cursor-pointer bg-gradient-to-br ${getCategoryColor(
                cat.id
              )} rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 active:scale-[0.98] flex flex-col justify-between group relative`}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-1 mb-2.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-soft-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(cat.iconName)}
                  </div>
                  {cat.badge && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-600 text-white">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="font-display font-black text-base sm:text-xl text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {cat.name}
                </h3>

                {/* Short description */}
                <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {cat.shortDescription}
                </p>
              </div>

              {/* Tap to view prompt */}
              <div className="pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-700 group-hover:text-brand-600">
                <span>{cat.items.length} Products</span>
                <span className="text-brand-600 font-extrabold">View →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Expandable Category Accordion for Full Overview on all devices */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-8 shadow-soft-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                Detailed Product Inventory Breakdown
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Browse our complete product lines across all six departments
              </p>
            </div>
            <a
              href={STORE_CONFIG.getWhatsAppUrl("Hi Santu Hardware, I want to check availability for a specific item.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors self-start sm:self-auto"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask for custom item</span>
            </a>
          </div>

          <div className="space-y-3">
            {STORE_CONFIG.categories.map((cat) => {
              const isExpanded = expandedId === cat.id;
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                        {getIcon(cat.iconName)}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                          {cat.name}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">
                          {cat.items.length} Subcategories
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-brand-600 hidden sm:inline">
                        {isExpanded ? 'Hide' : 'Show items'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-6 bg-white border-t border-slate-100">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5">
                        {cat.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                        <span className="text-xs text-slate-500 font-medium">
                          Need wholesale or site delivery for {cat.name.toLowerCase()}?
                        </span>
                        <a
                          href={STORE_CONFIG.getWhatsAppUrl(cat.inquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Enquire {cat.name} on WhatsApp</span>
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
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
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
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {selectedCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                className="w-full py-3 px-4 rounded-xl bg-whatsapp hover:bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask for Price on WhatsApp</span>
              </a>

              <a
                href={STORE_CONFIG.phoneTel}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Call Store: {STORE_CONFIG.phoneShort}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
