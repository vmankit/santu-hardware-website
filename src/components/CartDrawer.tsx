import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Zap, 
  Truck, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck
} from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    subtotal, 
    totalSavings, 
    cashbackEarned,
    freeDeliveryThreshold,
    freeDeliveryRemaining,
    selectedPincode,
    deliveryTime
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState('');

  if (!isCartOpen) return null;

  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery || cart.length === 0 ? 0 : 49;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    let text = `*New Order - Santu Hardware*\n`;
    text += `📍 Delivery Pincode: ${selectedPincode} (${deliveryTime} delivery)\n`;
    if (address) text += `🏠 Address: ${address}\n`;
    text += `\n*Order Items:*\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.title}\n   Qty: ${item.quantity} × ₹${item.unitPrice} = ₹${item.quantity * item.unitPrice}\n`;
    });
    text += `\n*Subtotal:* ₹${subtotal}`;
    if (totalSavings > 0) text += `\n*Bulk Savings:* ₹${totalSavings}`;
    text += `\n*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}`;
    text += `\n*Total Payable:* ₹${grandTotal}`;
    text += `\n*Cashback Earned:* ₹${cashbackEarned}`;
    text += `\n\nPlease confirm availability and dispatch for express site delivery.`;

    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleInstantPayOnDelivery = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      // Keep open to show success state
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-xs"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#059669]" />
              <h2 className="font-extrabold text-base text-gray-900">Your Santu Hardware Cart</h2>
              <span className="bg-emerald-50 text-[#059669] text-xs font-bold px-2 py-0.5 rounded-full font-mono">
                {cart.length} item{cart.length !== 1 ? 's' : ''}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery & Pincode Strip */}
          <div className="bg-emerald-50/70 border-b border-emerald-100 px-4 py-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-gray-700">
              <Zap className="w-4 h-4 text-[#059669] fill-current" />
              <span>Delivering to <strong>{selectedPincode}</strong> in <strong>{deliveryTime}</strong></span>
            </div>
            <span className="text-[#059669] font-bold">Express Slot</span>
          </div>

          {/* Free Delivery Progress Bar */}
          {cart.length > 0 && (
            <div className="bg-gray-50 p-3 border-b border-gray-200/80">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="flex items-center gap-1 text-gray-700">
                  <Truck className="w-3.5 h-3.5 text-[#059669]" />
                  {isFreeDelivery ? (
                    <span className="text-[#059669] font-bold">🎉 Free Delivery Unlocked!</span>
                  ) : (
                    <span>Add <strong className="text-gray-900 font-mono">₹{freeDeliveryRemaining}</strong> more for Free Delivery</span>
                  )}
                </span>
                <span className="text-[11px] text-gray-400 font-mono">Min ₹{freeDeliveryThreshold}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#059669] transition-all duration-300 rounded-full"
                  style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {orderPlaced ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="size-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-extrabold text-xl text-gray-900">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Your materials are being dispatched from Santu Hardware and will arrive on-site within <strong>{deliveryTime}</strong>.
                </p>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-mono text-left space-y-1">
                  <p>Order ID: SH-ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p>Payment Mode: Pay on Delivery (Cash / UPI on Site)</p>
                  <p>Total: ₹{grandTotal}</p>
                </div>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderPlaced(false);
                    closeCart();
                  }}
                  className="w-full bg-[#111827] text-white font-bold text-xs py-3 rounded-xl hover:bg-black transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="size-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-base text-gray-900 mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-gray-500 mb-6 max-w-xs mx-auto">
                  Explore genuine paints, hardware, electrical &amp; bathroom fittings. Free delivery within 30 km.
                </p>
                <button
                  onClick={closeCart}
                  className="bg-[#F8C200] hover:bg-[#E5B200] text-gray-900 font-extrabold text-xs px-6 py-2.5 rounded-full transition-colors shadow-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-white rounded-2xl border border-gray-100 shadow-xs"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="size-16 rounded-xl object-contain bg-gray-50 p-1 border border-gray-100 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-gray-900 leading-snug line-clamp-2">
                      {item.product.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.product.unit}</p>

                    {/* Price and quantity stepper */}
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <span className="font-extrabold text-xs sm:text-sm text-gray-900 font-mono">
                          ₹{item.unitPrice * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-gray-400 font-mono ml-1">
                            (₹{item.unitPrice}/u)
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-0.5 font-mono">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="size-4 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-200"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="size-4 rounded-full bg-[#F8C200] text-black flex items-center justify-center hover:bg-[#E5B200]"
                        >
                          <Plus className="w-2.5 h-2.5 stroke-[3]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-300 hover:text-red-600 self-start p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Billing & Checkout Actions */}
          {cart.length > 0 && !orderPlaced && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/70 space-y-3">
              
              {/* Optional site address note */}
              <div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Site / Flat address or landmark (optional)"
                  className="w-full bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-900 placeholder-gray-400 outline-none focus:border-[#059669]"
                />
              </div>

              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-gray-600 font-medium">
                <div className="flex justify-between">
                  <span>Items Subtotal:</span>
                  <span className="font-mono font-bold text-gray-900">₹{subtotal}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-[#059669] font-bold">
                    <span>Direct Bulk Savings:</span>
                    <span className="font-mono">-₹{totalSavings}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span className="font-mono font-bold">
                    {deliveryFee === 0 ? (
                      <span className="text-[#059669]">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-[#059669] font-bold pt-1 border-t border-gray-200/60">
                  <span>Santu Cash Earned:</span>
                  <span className="font-mono">+₹{cashbackEarned} Cash</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-gray-950 pt-1 border-t border-gray-200">
                  <span>Grand Total:</span>
                  <span className="font-mono text-base">₹{grandTotal}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleInstantPayOnDelivery}
                  className="flex items-center justify-center gap-1.5 bg-[#111827] hover:bg-black text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4 text-[#F8C200]" />
                  <span>Pay on Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="flex items-center justify-center gap-1.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400">
                🔒 100% genuine, sourced directly from authorised brands
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
