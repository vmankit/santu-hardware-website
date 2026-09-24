import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Paints', href: '#special-deals' },
    { label: 'Hardware', href: '#categories' },
    { label: 'Categories', href: '#categories' },
    { label: 'Brands', href: '#brands' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Special Deals', href: '#special-deals' },
    { label: 'Paints', href: '#categories' },
    { label: 'Hardware', href: '#categories' },
    { label: 'Plumbing', href: '#categories' },
    { label: 'Electrical', href: '#categories' },
    { label: 'Colour Swatches', href: '#paint-colours' },
    { label: '30 KM Delivery', href: '#delivery' },
    { label: 'Contact Store', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar - Mahakal Hardware inspired */}
      <div className="bg-navy-900 border-b border-navy-800 text-white text-[11px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-terracotta-600 text-white text-[10px] font-black shrink-0">
              🚚
            </span>
            <span className="font-bold text-slate-200 truncate">
              <span className="text-gold-400 font-extrabold uppercase">Free Home Delivery</span> Available Within 30 KM • Direct Store Rates
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 shrink-0 font-semibold">
            <span className="text-slate-400 text-[11px]">Special Deals on JK Maxx • Birla Opus • Asian Paints</span>
            <a
              href={STORE_CONFIG.phoneTel}
              className="font-mono text-terracotta-400 hover:text-white font-bold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{STORE_CONFIG.phoneShort}</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2.5'
            : 'bg-white border-b border-stoneWarm-200 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Santu Hardware Home"
            >
              <div className="w-10 h-10 rounded-xl bg-terracotta-600 border border-terracotta-700 flex items-center justify-center text-white shadow-sm group-hover:bg-terracotta-700 transition-colors">
                <span className="font-extrabold text-xl tracking-tight font-display text-white">S</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-none group-hover:text-terracotta-600 transition-colors">
                    {STORE_CONFIG.businessName}
                  </span>
                  <span className="hidden sm:inline-block text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-terracotta-50 text-terracotta-700 border border-terracotta-200">
                    Retail Store
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                  Paints • Hardware • Plumbing • Electrical
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Call & WhatsApp Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={STORE_CONFIG.phoneTel}
                id="header-call-btn"
                className="btn-tactile-terracotta inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded-xl"
                title="Call 9097441600"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="btn-tactile-whatsapp inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded-xl"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={STORE_CONFIG.phoneTel}
                className="btn-tactile-terracotta sm:hidden inline-flex items-center justify-center p-2 rounded-xl text-white"
                aria-label="Call Store"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="touch-target inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-terracotta-600"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="p-4 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black font-display text-sm">
                    S
                  </div>
                  <span className="font-display font-extrabold text-base text-slate-900">
                    {STORE_CONFIG.businessName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="touch-target p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Delivery Highlight Badge */}
              <div className="mx-4 mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-800">
                  {STORE_CONFIG.deliveryHighlight}
                </span>
              </div>

              {/* Navigation Items */}
              <nav className="p-4 space-y-1" aria-label="Mobile Navigation">
                {mobileNavLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left px-3.5 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-400 text-xs">→</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2.5 pb-safe">
              <a
                href={STORE_CONFIG.phoneTel}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-whatsapp text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
