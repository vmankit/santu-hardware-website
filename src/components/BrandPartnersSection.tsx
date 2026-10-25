import React from 'react';
import { POPULAR_BRANDS } from '../data/storeData';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PAINT_BRANDS = [
  { name: 'Asian Paints', logo: '/images/brands/asian-paints.png', note: 'Interior, exterior, enamel & waterproofing' },
  { name: 'JK Maxx Paints', logo: '/images/brands/jk-maxx.png', note: 'Emulsions, primers & wall putty' },
  { name: 'Birla Opus', logo: '/images/brands/birla-opus.png', note: 'Interior & exterior emulsions' },
];

export const BrandPartnersSection: React.FC = () => {
  const { setSearchQuery } = useCart();

  const handleBrandClick = (brandName: string) => {
    setSearchQuery(brandName);
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>Paint, Hardware &amp; Electrical</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
            Genuine brands, sourced direct
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">
            We're an authorised retailer. Tap a brand to see what we stock.
          </p>
        </div>

        {/* Paint brand logos — the three we're authorised for */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
          {PAINT_BRANDS.map((brand) => (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className="group rounded-2xl border border-gray-200 bg-white hover:border-[#F8C200] hover:shadow-md transition-all p-5 flex flex-col items-center text-center"
            >
              <div className="h-14 flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 w-auto max-w-[170px] object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-extrabold text-sm text-gray-900">{brand.name}</h3>
              <p className="text-[11px] text-gray-500 mt-0.5">{brand.note}</p>
            </button>
          ))}
        </div>

        {/* Other brands we carry */}
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">
          Also in stock
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {POPULAR_BRANDS.filter((b) => !PAINT_BRANDS.some((p) => p.name === b.name)).map((brand, idx) => (
            <button
              key={idx}
              onClick={() => handleBrandClick(brand.name)}
              className="group p-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-[#F8C200] hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold text-[#059669] bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-wider inline-block mb-1">
                  {brand.tag}
                </span>
                <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-black">
                  {brand.name}
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 mt-2 font-medium">
                {brand.category}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
