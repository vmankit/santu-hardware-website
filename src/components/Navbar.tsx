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

  // Lock body scroll when mobile menu is open
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
    { label: 'Paints', href: '#special-deals' },
    { label: 'Hardware', href: '#categories' },
    { label: 'Plumbing', href: '#categories' },
    { label: 'Electrical', href: '#categories' },
    { label: 'Brands', href: '#brands' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Contact', href: '#contact' },
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
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Santu Hardware Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 flex items-center justify-center text-white shadow-sm shadow-brand-500/30 group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-lg tracking-tight font-display">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                  {STORE_CONFIG.businessName}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                  Paints • Hardware • Electrical
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-150 active:scale-95"
                title="Call 9097441600"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Call Now</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-whatsapp hover:bg-emerald-600 rounded-xl shadow-sm hover:shadow-whatsapp transition-all duration-150 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="touch-target inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="p-4 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold font-display">
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
              <div className="mx-4 mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 flex items-center gap-2.5">
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
                    className="w-full text-left px-3.5 py-3 text-base font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50/60 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-300 text-sm">→</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-2.5 pb-safe">
              <a
                href={STORE_CONFIG.phoneTel}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.99] transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {STORE_CONFIG.phoneShort}</span>
              </a>

              <a
                href={STORE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-whatsapp text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-emerald-600 active:scale-[0.99] transition-all shadow-sm"
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
