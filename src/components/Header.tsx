import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart, 
  Menu, 
  X, 
  Calculator, 
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG, CATEGORIES } from '../data/storeData';

export const Header: React.FC = () => {
  const { 
    totalItems, 
    openCart, 
    selectedPincode, 
    deliveryTime, 
    openPincodeModal, 
    openWalletModal, 
    openLoginModal, 
    openCalculator,
    searchQuery,
    setSearchQuery,
    setActiveCategory
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Animated search rotating keywords
  const searchKeywords = ['Asian Paints', 'Wall putty', 'KEI wire', 'LED bulb', 'CPVC pipe', 'Door lock', 'Fevicol'];
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % searchKeywords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Home', link: '#' },
    {
      name: 'Paints & Interiors',
      submenu: [
        { name: 'Tiling', slug: 'tiling' },
        { name: 'Fevicol Adhesives', slug: 'fevicol' },
        { name: 'Waterproofing', slug: 'waterproofing' },
        { name: 'Painting & Primer', slug: 'painting' },
      ]
    },
    {
      name: 'Furniture & Hardware',
      submenu: [
        { name: 'Hinges, Channels & Handles', slug: 'hinges-channels-handles' },
        { name: 'Kitchen Systems & Baskets', slug: 'kitchen-systems-accessories' },
        { name: 'Wardrobe & Bed Fittings', slug: 'wardrobe-bed-fittings' },
        { name: 'Door Locks & Security', slug: 'door-locks-hardware' },
        { name: 'Glass Door Hardware', slug: 'glass-hardware' },
      ]
    },
    {
      name: 'Electrical',
      submenu: [
        { name: 'Wires, MCB & Distribution', slug: 'wires' },
        { name: 'Switches & Sockets', slug: 'switches-sockets' },
        { name: 'Electrical Conduits & GI', slug: 'electrical-conduit-pipes' },
        { name: 'LED & Architectural Lighting', slug: 'lighting' },
        { name: 'Ceiling Fans & Exhaust', slug: 'ceilingfans-exhaust' },
      ]
    },
    {
      name: 'Plumbing & Bath',
      submenu: [
        { name: 'CPVC Pipes & Overhead Tanks', slug: 'plumbing' },
        { name: 'Sanitary & Bath Fittings', slug: 'sanitary-bath-fittings' },
        { name: 'Kitchen Sinks & Faucets', slug: 'kitchen-sinks-faucets' },
      ]
    },
    {
      name: 'New Launches',
      badge: 'New',
      submenu: [
        { name: 'Geysers & Water Heaters', slug: 'geysers-water-heaters' },
        { name: 'Bosch Power Tools', slug: 'power-tools-accessories' },
      ]
    },
    {
      name: 'Tools & Calculator',
      isTool: true,
      onClick: openCalculator,
      badge: 'Free'
    }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Banner Notice */}
      <div className="bg-[#111827] text-white text-[11px] md:text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-[#F8C200] text-black font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wide uppercase">Free 30 km delivery</span>
            <span className="text-gray-300 hidden sm:inline">⚡ Free delivery within 30 km on 100% Genuine Construction Materials &amp; Hardware</span>
            <span className="text-gray-300 sm:hidden">Free same-day delivery within 30 km</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 shrink-0">
            <a href={`tel:${STORE_CONFIG.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-[#F8C200] transition-colors">
              <PhoneCall className="w-3 h-3 text-[#F8C200]" />
              <span className="hidden md:inline font-mono">{STORE_CONFIG.phone} / {STORE_CONFIG.secondaryPhone}</span>
              <span className="md:hidden font-mono">{STORE_CONFIG.phone}</span>
            </a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#10B981] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Materials
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Mobile Hamburger & Logo */}
          <div className="flex items-center gap-2 lg:gap-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-1.5 text-gray-700 hover:text-black rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>

            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="size-10 md:size-11 rounded-xl bg-[#F8C200] text-gray-950 flex items-center justify-center font-extrabold text-base md:text-lg shadow-xs border border-amber-300 tracking-tight">
                SH
              </div>
              <div>
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-gray-900 block leading-none">
                  Santu <span className="text-[#059669]">Hardware</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 block mt-0.5">
                  Paints, hardware &amp; materials — same day
                </span>
              </div>
            </a>
          </div>

          {/* Delivery Location Selector Pill */}
          <button
            onClick={openPincodeModal}
            className="flex items-center gap-2 md:gap-3 py-1 px-2 md:pl-4 md:pr-3 rounded-xl border border-gray-200 hover:border-gray-400 bg-gray-50/50 hover:bg-gray-50 transition-all text-left shrink-0"
          >
            <div className="flex size-7 md:size-8 shrink-0 items-center justify-center rounded-lg bg-[#059669] text-white">
              <div className="text-center text-[9px] md:text-[10px] font-extrabold leading-tight">
                <div>{deliveryTime.split(' ')[0]}</div>
                <div>{deliveryTime.split(' ')[1] || 'Mins'}</div>
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-gray-500 leading-none">Deliver To</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#059669] shrink-0" />
                <span className="font-bold text-xs md:text-sm text-gray-900 font-mono">{selectedPincode}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </button>

          {/* Animated Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative flex items-center h-11 w-full rounded-full border border-gray-200 bg-gray-50/70 focus-within:bg-white focus-within:border-[#F8C200] focus-within:ring-2 focus-within:ring-[#F8C200]/30 transition-all px-4 shadow-inner">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search for "${searchKeywords[keywordIndex]}"...`}
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full size-4 flex items-center justify-center mr-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons: Wallet, Login, Cart */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Wallet / Santu Cash Button */}
            <div className="relative group">
              <button
                onClick={openWalletModal}
                className="relative flex h-9 items-center overflow-hidden rounded-full bg-[linear-gradient(250deg,#095e3d,#06331f)] p-0.5 shadow-sm hover:shadow transition-transform active:scale-95"
              >
                <div className="relative flex items-center gap-1.5 rounded-full border border-[#388468] py-1 px-3">
                  <img
                    src={STORE_CONFIG.walletIconUrl}
                    alt="Wallet"
                    className="w-5 h-4 object-contain animate-coin"
                  />
                  <span className="text-xs font-bold leading-none text-white tracking-wide">Wallet</span>
                  <span className="hidden lg:inline text-[10px] bg-[#F8C200] text-black font-extrabold px-1.5 py-0.2 rounded-full ml-0.5">
                    1% Cash
                  </span>
                </div>
              </button>

              {/* Hover preview tooltip */}
              <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-40 w-72">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3.5 text-left text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-bold text-gray-900">Santu Cash</span>
                    <span className="text-[#059669] font-bold">1% on every order</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-[11px] leading-relaxed">
                    Earn Santu Cash on all purchases. Redeem directly on your next order above ₹500!
                  </p>
                  <button
                    onClick={openWalletModal}
                    className="mt-2.5 w-full bg-[#111827] text-white font-semibold py-1.5 rounded-lg text-center hover:bg-black transition-colors"
                  >
                    View Wallet Details
                  </button>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={openLoginModal}
              className="flex items-center gap-1.5 text-gray-700 hover:text-black font-semibold text-sm px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <User className="w-5 h-5 text-gray-700" />
              <span className="hidden sm:inline">Login</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              aria-label="Shopping Cart"
              className="relative flex items-center gap-2 bg-[#F8C200] hover:bg-[#E5B200] text-gray-900 font-bold px-3 md:px-4 py-2 rounded-full transition-all shadow-sm active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline text-xs font-extrabold">Cart</span>
              {totalItems > 0 && (
                <span className="bg-[#111827] text-white text-[11px] font-extrabold size-5 rounded-full flex items-center justify-center font-mono">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-2.5 md:hidden">
          <div className="relative flex items-center h-10 w-full rounded-full border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-[#F8C200] px-3.5 shadow-inner">
            <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search "${searchKeywords[keywordIndex]}"...`}
              className="w-full bg-transparent text-xs text-gray-900 placeholder-gray-400 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full size-4 flex items-center justify-center mr-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links Strip */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-1 text-[13px] font-semibold text-gray-700">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative py-2.5 px-3"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.onClick) item.onClick();
                  else if (item.name === 'Home') setActiveCategory(null);
                }}
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="bg-[#059669] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
                {item.submenu && <ChevronDown className="w-3.5 h-3.5 text-gray-400 transition-transform group-hover:rotate-180" />}
              </button>

              {/* Submenu Dropdown */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-40 animate-in fade-in slide-in-from-top-1 duration-150">
                  {item.submenu.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => {
                        setActiveCategory(sub.name);
                        setActiveDropdown(null);
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-200">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#F8C200] text-gray-950 flex items-center justify-center font-extrabold text-sm border border-amber-300">
                  SH
                </div>
                <span className="font-extrabold text-base">Santu Hardware Menu</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-gray-500 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Paint Calculator Quick Banner */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalculator();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-left"
              >
                <div className="size-10 rounded-lg bg-[#F8C200] flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Paint Calculator</h4>
                  <p className="text-[10px] text-gray-600">Estimate how much paint you need</p>
                </div>
              </button>

              {/* Categories list */}
              <div>
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Browse All Categories
                </h5>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setMobileMenuOpen(false);
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-left text-xs font-semibold text-gray-800"
                    >
                      <img src={cat.image} alt="" className="size-7 rounded object-cover bg-[#E5F3F3]" />
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-600 space-y-2">
              <p className="font-bold text-gray-900">Santu Hardware Support</p>
              <p>{STORE_CONFIG.address}</p>
              <p className="font-mono">Phone: {STORE_CONFIG.phone} / {STORE_CONFIG.secondaryPhone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
