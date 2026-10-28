import React, { useMemo, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/storeData';
import type { Product } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { Filter, X, Search, ChevronDown } from 'lucide-react';

const PAGE_SIZE = 24;

// Everything a product can be found by: name, brand, category and pack size.
const baseText = (p: Product) =>
  `${p.title} ${p.brand ?? ''} ${p.category} ${p.unit}`.toLowerCase();

// `3/4"` is also indexed as `3/4 inch` for the literal pass, since people type
// it both ways. It stays out of the fuzzy token list on purpose: "inch" is
// short and sits on nearly every fitting, so as a fuzzy target it matches
// half the catalogue for unrelated queries like "anchr".
const strictMatch = (p: Product, query: string) =>
  baseText(p).replace(/"/g, ' inch ').includes(query);

const wordsOf = (p: Product) => baseText(p).split(/[^a-z0-9./]+/).filter(Boolean);

// Damerau-Levenshtein — counts a swap ("swtich") as one slip rather than two,
// which is the typo people actually make.
function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const d: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[m][n];
}

const allowedTypos = (word: string) => (word.length <= 4 ? 1 : 2);

// Also try the target's prefix, so "swtich" can still reach "switches".
function wordDistance(q: string, w: string): number {
  const full = editDistance(q, w);
  if (w.length <= q.length) return full;
  return Math.min(full, editDistance(q, w.slice(0, q.length)));
}

// Total slips across the whole query, or Infinity if any word matches nothing.
// Lower is a closer match, so results can be ranked by it.
function fuzzyScore(words: string[], queryWords: string[]): number {
  let total = 0;
  for (const q of queryWords) {
    const budget = allowedTypos(q);
    let best = Infinity;
    for (const w of words) {
      if (w.length + budget < q.length) continue;
      const d = wordDistance(q, w);
      if (d < best) best = d;
      if (best === 0) break;
    }
    if (best > budget) return Infinity;
    total += best;
  }
  return total;
}

export const CatalogSection: React.FC = () => {
  const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useCart();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const { filteredProducts, didYouMean } = useMemo(() => {
    const inCategory = PRODUCTS.filter(
      (p) => !activeCategory || p.category.toLowerCase() === activeCategory.toLowerCase()
    );

    const query = searchQuery.trim().toLowerCase().replace(/"/g, ' inch ');
    if (!query) return { filteredProducts: inCategory, didYouMean: false };

    const exact = inCategory.filter((p) => strictMatch(p, query));
    if (exact.length > 0) return { filteredProducts: exact, didYouMean: false };

    // Nothing matched as typed — retry allowing for spelling slips, so
    // "swtich" / "comode" / "asain paints" still find something. Short words
    // are left out: at 3 characters almost anything is within a typo of
    // anything else.
    const queryWords = query.split(/[^a-z0-9./]+/).filter((w) => w.length >= 4);
    if (queryWords.length === 0) return { filteredProducts: [], didYouMean: false };

    const scored: { product: Product; score: number }[] = [];
    for (const p of inCategory) {
      const score = fuzzyScore(wordsOf(p), queryWords);
      if (score !== Infinity) scored.push({ product: p, score });
    }
    scored.sort((a, b) => a.score - b.score);

    return {
      filteredProducts: scored.map((s) => s.product),
      didYouMean: scored.length > 0,
    };
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
            {didYouMean && (
              <p className="text-xs md:text-sm text-amber-700 font-semibold mt-1">
                No exact match for "{searchQuery}" — showing closest results.
              </p>
            )}
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
