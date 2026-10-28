import React, { useMemo, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { Filter, X, Search, ChevronDown } from 'lucide-react';

const PAGE_SIZE = 24;

export const CatalogSection: React.FC = () => {
  const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useCart();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (activeCategory && p.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchCat = p.category.toLowerCase().includes(query);
        const matchBrand = p.brand ? p.brand.toLowerCase().includes(query) : false;
        if (!matchTitle && !matchCat && !matchBrand) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // A new filter should start the grid fresh rather than keep whatever
  // page depth the previous (likely much larger or smaller) list was at.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100" id="catalog-section">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              <Filter className="w-3.5 h-3.5 text-[#059669]" />
              <span>Express Delivery Catalog</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
              {activeCategory ? `${activeCategory} Collection` : searchQuery ? `Search results for "${searchQuery}"` : 'All Construction Supplies'}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              Showing {filteredProducts.length} verified products with direct wholesale pricing
            </p>
          </div>

          {/* Active Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {activeCategory && (
              <span className="inline-flex items-center gap-1.5 bg-[#F8C200] text-black font-extrabold text-xs px-3 py-1.5 rounded-full shadow-sm">
                Category: {activeCategory}
                <button onClick={() => setActiveCategory(null)} className="hover:opacity-75">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 bg-gray-900 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:opacity-75">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {hasMore && (
              <div className="flex flex-col items-center mt-8">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm px-6 py-3 rounded-xl border border-gray-200 shadow-sm transition-colors"
                >
                  Show more products
                  <ChevronDown className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-gray-400 mt-2">
                  Showing {visibleProducts.length} of {filteredProducts.length}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center max-w-md mx-auto my-6">
            <div className="size-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-gray-900 mb-1">
              No matching products found
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              We couldn't find items matching your criteria in this filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery('');
              }}
              className="bg-[#111827] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Reset Filters &amp; View All
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
