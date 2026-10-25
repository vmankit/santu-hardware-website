import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/storeData';
import { SERVICEABLE_PINCODES, STORE_CONFIG } from '../data/storeData';

export interface CartItem {
  product: Product;
  quantity: number;
  unitPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  regularTotal: number;
  totalSavings: number;
  cashbackEarned: number;
  freeDeliveryThreshold: number;
  freeDeliveryRemaining: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  selectedPincode: string;
  deliveryTime: string;
  isServiceable: boolean;
  changePincode: (pin: string) => { serviceable: boolean; time: string };
  isPincodeModalOpen: boolean;
  openPincodeModal: () => void;
  closePincodeModal: () => void;
  isWalletModalOpen: boolean;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isCalculatorOpen: boolean;
  openCalculator: () => void;
  closeCalculator: () => void;
  selectedVideo: { url: string; title: string; quote: string } | null;
  openVideoModal: (video: { url: string; title: string; quote: string }) => void;
  closeVideoModal: () => void;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const defaultContextValue: CartContextType = {
  cart: [],
  isCartOpen: false,
  selectedPincode: STORE_CONFIG.defaultPincode,
  deliveryTime: STORE_CONFIG.expressTime,
  isServiceable: true,
  isPincodeModalOpen: false,
  isWalletModalOpen: false,
  isLoginModalOpen: false,
  isCalculatorOpen: false,
  selectedVideo: null,
  activeCategory: null,
  searchQuery: '',
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  openPincodeModal: () => {},
  closePincodeModal: () => {},
  openWalletModal: () => {},
  closeWalletModal: () => {},
  openLoginModal: () => {},
  closeLoginModal: () => {},
  openCalculator: () => {},
  closeCalculator: () => {},
  openVideoModal: () => {},
  closeVideoModal: () => {},
  changePincode: () => ({ serviceable: true, time: STORE_CONFIG.expressTime }),
  setActiveCategory: () => {},
  setSearchQuery: () => {},
  totalItems: 0,
  subtotal: 0,
  regularTotal: 0,
  totalSavings: 0,
  cashbackEarned: 0,
  freeDeliveryThreshold: STORE_CONFIG.freeDeliveryMinOrder,
  freeDeliveryRemaining: 0,
};

const CartContext = createContext<CartContextType>(defaultContextValue);

// Calculate tiered price based on quantity
function getEffectiveUnitPrice(product: Product, quantity: number): number {
  if (!product.tiers || product.tiers.length === 0) {
    return product.basePrice;
  }
  // Sort tiers descending by quantity
  const sorted = [...product.tiers].sort((a, b) => b.quantity - a.quantity);
  for (const tier of sorted) {
    if (quantity >= tier.quantity) {
      return tier.price;
    }
  }
  return product.basePrice;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('santuhardware_cart') || localStorage.getItem('homerun_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPincode, setSelectedPincode] = useState(() => {
    try {
      return localStorage.getItem('santuhardware_pincode') || localStorage.getItem('homerun_pincode') || STORE_CONFIG.defaultPincode;
    } catch {
      return STORE_CONFIG.defaultPincode;
    }
  });
  const [deliveryTime, setDeliveryTime] = useState(STORE_CONFIG.expressTime);
  const [isServiceable, setIsServiceable] = useState(true);

  // Modals
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; quote: string } | null>(null);

  // Filters
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('santuhardware_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  // Check pincode serviceability against the shop's confirmed delivery area
  const checkPincodeTime = (pin: string) => {
    const clean = pin.trim();
    if (SERVICEABLE_PINCODES.includes(clean)) return { serviceable: true, time: "Same day" };
    return { serviceable: false, time: "Confirm on WhatsApp" };
  };

  const changePincode = (pin: string) => {
    const result = checkPincodeTime(pin);
    setSelectedPincode(pin);
    setDeliveryTime(result.time);
    setIsServiceable(result.serviceable);
    try {
      localStorage.setItem('santuhardware_pincode', pin);
    } catch {}
    return result;
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        const newQty = existing.quantity + quantity;
        const newUnitPrice = getEffectiveUnitPrice(product, newQty);
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQty, unitPrice: newUnitPrice }
            : item
        );
      } else {
        const unitPrice = getEffectiveUnitPrice(product, quantity);
        return [...prev, { product, quantity, unitPrice }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const newUnitPrice = getEffectiveUnitPrice(item.product, quantity);
          return { ...item, quantity, unitPrice: newUnitPrice };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const regularTotal = cart.reduce((acc, item) => {
    const regPrice = item.product.compareAtPrice || item.product.basePrice;
    return acc + regPrice * item.quantity;
  }, 0);
  const totalSavings = Math.max(0, regularTotal - subtotal);
  const cashbackEarned = Math.round(subtotal * 0.01);
  const freeDeliveryThreshold = STORE_CONFIG.freeDeliveryMinOrder;
  const freeDeliveryRemaining = Math.max(0, freeDeliveryThreshold - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        regularTotal,
        totalSavings,
        cashbackEarned,
        freeDeliveryThreshold,
        freeDeliveryRemaining,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        selectedPincode,
        deliveryTime,
        isServiceable,
        changePincode,
        isPincodeModalOpen,
        openPincodeModal: () => setIsPincodeModalOpen(true),
        closePincodeModal: () => setIsPincodeModalOpen(false),
        isWalletModalOpen,
        openWalletModal: () => setIsWalletModalOpen(true),
        closeWalletModal: () => setIsWalletModalOpen(false),
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),
        isCalculatorOpen,
        openCalculator: () => setIsCalculatorOpen(true),
        closeCalculator: () => setIsCalculatorOpen(false),
        selectedVideo,
        openVideoModal: (v) => setSelectedVideo(v),
        closeVideoModal: () => setSelectedVideo(null),
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context || defaultContextValue;
};
