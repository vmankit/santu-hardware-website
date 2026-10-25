import React, { useState } from 'react';
import type { Product } from '../data/storeData';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Zap, Tag, ChevronDown, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [showTiers, setShowTiers] = useState(false);

  // Check if product is in cart
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  // Best tier price
  const lowestTierPrice = product.tiers && product.tiers.length > 0
    ? Math.min(...product.tiers.map((t) => t.price))
    : null;

  const discountPercent = product.compareAtPrice && product.compareAtPrice > product.basePrice
    ? Math.round(((product.compareAtPrice - product.basePrice) / product.compareAtPrice) * 100)
    : null;

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 p-3.5 sm:p-4 h-full">
      
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        {discountPercent ? (
          <span className="bg-red-50 text-red-600 font-extrabold text-[10px] md:text-xs px-2 py-0.5 rounded-full border border-red-100">
            {discountPercent}% OFF
          </span>
        ) : product.badge ? (
          <span className="bg-amber-50 text-amber-700 font-extrabold text-[10px] md:text-xs px-2 py-0.5 rounded-full border border-amber-100">
            {product.badge}
          </span>
        ) : (
          <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded-full">
            100% Genuine
          </span>
        )}

        <div className="flex items-center gap-1 bg-emerald-50 text-[#059669] font-extrabold text-[10px] md:text-xs px-2 py-0.5 rounded-full border border-emerald-100">
          <Zap className="w-3 h-3 fill-current" />
          <span>{product.deliveryTime || 'Same day'}</span>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative w-full aspect-square rounded-xl bg-gray-50/70 p-3 mb-3 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=400&q=80';
          }}
        />
      </div>

      {/* Trust Tag Strip */}
      <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium mb-1.5 flex-wrap">
        <span className="flex items-center gap-0.5 text-gray-600">
          <Check className="w-2.5 h-2.5 text-[#059669]" /> Pay on Delivery
        </span>
        <span>•</span>
        <span className="text-gray-500">Free &gt; ₹500</span>
      </div>

      {/* Product Title */}
      <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug line-clamp-2 mb-1 group-hover:text-black">
        {product.title}
      </h3>

      {/* Unit info */}
      <p className="text-[11px] text-gray-400 font-medium mb-2.5">
        Unit: {product.unit}
      </p>

      {/* Bulk Pricing Tier Pill (if available) */}
      {lowestTierPrice && (
        <div className="mb-3">
          <button
            type="button"
            onClick={() => setShowTiers(!showTiers)}
            className="w-full flex items-center justify-between text-left bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200 text-[#059669] font-bold text-[11px] px-2.5 py-1 rounded-lg transition-colors"
          >
            <span className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              Unlock Bulk: ₹{lowestTierPrice}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTiers ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Tier Table */}
          {showTiers && product.tiers && (
            <div className="mt-1.5 p-2 bg-gray-50 rounded-lg border border-gray-200 text-[10px] space-y-1 animate-in fade-in">
              <p className="font-bold text-gray-700">Volume Wholesale Rates:</p>
              <div className="grid grid-cols-2 gap-1 text-gray-600">
                <div className="flex justify-between border-b border-gray-200 pb-0.5">
                  <span>1 - {product.tiers[0].quantity - 1} units:</span>
                  <span className="font-bold font-mono">₹{product.basePrice}</span>
                </div>
                {product.tiers.map((t, idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-200 pb-0.5">
                    <span>{t.quantity}+ units:</span>
                    <span className="font-extrabold text-[#059669] font-mono">₹{t.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Price & Action Row */}
      <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-extrabold text-gray-900 font-mono">
              ₹ {cartItem ? cartItem.unitPrice : product.basePrice}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.basePrice && (
              <span className="text-[11px] text-gray-400 line-through font-mono">
                ₹{product.compareAtPrice}
              </span>
            )}
          </div>
          <span className="text-[9px] text-[#059669] font-bold block">
            +₹{Math.max(1, Math.round(product.basePrice * 0.01))} Santu Cash
          </span>
        </div>

        {/* Add / Stepper */}
        {quantityInCart === 0 ? (
          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center gap-1 bg-[#F8C200] hover:bg-[#E5B200] active:scale-95 text-gray-900 font-extrabold text-xs px-3.5 py-1.5 rounded-full transition-all shadow-sm"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>Add</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-gray-900 text-white rounded-full px-2 py-1 shadow-sm font-mono">
            <button
              onClick={() => updateQuantity(product.id, quantityInCart - 1)}
              className="size-5 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 text-white" />
            </button>
            <span className="text-xs font-extrabold w-4 text-center">{quantityInCart}</span>
            <button
              onClick={() => updateQuantity(product.id, quantityInCart + 1)}
              className="size-5 rounded-full bg-[#F8C200] hover:bg-[#E5B200] text-black flex items-center justify-center transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 text-black stroke-[3]" />
            </button>
          </div>
        )}
      </div>

    </article>
  );
};
