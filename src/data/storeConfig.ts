// Central configuration for Santu Hardware
// Easily edit business details, categories, deals, and delivery settings from here.

export interface DealItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  image?: string;
  colorTheme: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  badge?: string;
  items: string[];
  inquiryMessage: string;
}

export interface ColorSwatch {
  name: string;
  code: string;
  hex: string;
  category?: string;
  textColor?: string;
}

export const STORE_CONFIG = {
  businessName: 'SANTU HARDWARE',
  legalName: 'Santu Hardware',
  tagline: 'Paint. Hardware. Everything You Need.',
  mainSellingMessage: 'Everything for Paint & Hardware — Under One Roof',
  supportingText: 'Premium paints, hardware, plumbing, electrical supplies and more — all available at Santu Hardware.',
  featuredOfferText: 'SPECIAL DEALS ON JK MAXX • BIRLA OPUS • ASIAN PAINTS',
  
  // Contact details
  phoneRaw: '9097441600',
  phoneDisplay: '+91 9097441600',
  phoneShort: '9097441600',
  phoneTel: 'tel:+919097441600',
  whatsappNumber: '919097441600',
  
  // Delivery details
  deliveryRadius: '30 KM',
  deliveryHighlight: 'FREE DELIVERY WITHIN 30 KM',
  deliveryDescription: 'Order your paints, hardware and other products from Santu Hardware and get free delivery within our 30 KM service area.',
  
  // Images
  images: {
    heroStore: '/images/hero-store.jpg',
    paintDeals: '/images/paint-deals.jpg',
    hardwareTools: '/images/hardware-tools.jpg',
    deliveryService: '/images/delivery-service.jpg',
  },

  // Address & Hours (Configurable without fake data)
  address: null as string | null, // Displays 'Address coming soon' if null
  addressDisplay: 'Address coming soon',
  addressNote: 'Call or WhatsApp for store location & directions',
  openingHours: null as string | null, // Displays 'Contact store for hours' if null
  
  // Quick pre-filled WhatsApp helper
  getWhatsAppUrl: (message?: string) => {
    const defaultMsg = 'Hi Santu Hardware, I want to enquire about a product.';
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/919097441600?text=${text}`;
  },
  
  // Directions action helper (opens WhatsApp asking for store location if address is pending)
  getDirectionsUrl: () => {
    const msg = encodeURIComponent("Hi Santu Hardware, please share your store's exact location and directions.");
    return `https://wa.me/919097441600?text=${msg}`;
  },
  
  // Top Hero Information Strip
  heroStrip: [
    {
      id: 'wide-range',
      icon: 'Palette',
      title: 'Wide Range',
      subtitle: 'Paints, hardware & more',
    },
    {
      id: 'free-delivery',
      icon: 'Truck',
      title: 'Free Delivery',
      subtitle: 'Within 30 KM radius',
    },
    {
      id: 'easy-ordering',
      icon: 'MessageSquare',
      title: 'Easy Ordering',
      subtitle: 'Call or WhatsApp',
    },
  ],

  // Special Deals
  specialDeals: [
    {
      id: 'jk-maxx',
      name: 'JK MAXX PAINTS',
      badge: 'Special Deal',
      tagline: 'Special deals available',
      description: 'Engineered for smooth coverage, maximum durability, and vibrant wall finishes for homes and commercial spaces.',
      ctaText: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for JK Maxx Paints.",
      colorTheme: 'from-amber-500/10 via-amber-500/5 to-transparent border-amber-200',
      accentColor: '#d97706',
    },
    {
      id: 'birla-opus',
      name: 'BIRLA OPUS',
      badge: 'Trending Brand',
      tagline: 'Explore interior and exterior paint solutions',
      description: 'Next-generation luxury emulsions, weather-shield exterior coatings, and high-performance primers.',
      ctaText: 'Get Best Price →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Birla Opus paints.",
      colorTheme: 'from-blue-500/10 via-blue-500/5 to-transparent border-blue-200',
      accentColor: '#2563eb',
    },
    {
      id: 'asian-paints',
      name: 'ASIAN PAINTS',
      badge: 'Most Popular',
      tagline: 'Wide range of paint products available',
      description: 'Complete interior, exterior, enamel, waterproof and wood finish solutions trusted by millions.',
      ctaText: 'Enquire Now →',
      whatsappMessage: "Hi Santu Hardware, I want to know today's best price and available offers for Asian Paints.",
      colorTheme: 'from-rose-500/10 via-rose-500/5 to-transparent border-rose-200',
      accentColor: '#e11d48',
    },
  ],

  // Product Categories
  categories: [
    {
      id: 'paints',
      name: 'Paints',
      iconName: 'Paintbrush',
      badge: 'Featured',
      shortDescription: 'Interior, exterior, primers & finishes',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Paints and available products.',
      items: [
        'Interior Paints',
        'Exterior Paints',
        'Primers',
        'Wall Putty',
        'Enamel Paints',
        'Waterproofing',
        'Wood Finishes',
        'Paint Accessories',
      ],
    },
    {
      id: 'hardware',
      name: 'Hardware',
      iconName: 'Wrench',
      shortDescription: 'Locks, fasteners, hinges & fittings',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Hardware products and fittings.',
      items: [
        'General Hardware',
        'Door Hardware',
        'Locks',
        'Nails & Screws',
        'Fasteners',
        'Tools',
        'Adhesives',
        'Construction Hardware',
      ],
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      iconName: 'Droplets',
      shortDescription: 'Pipes, fittings, valves & taps',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Plumbing pipes and fittings.',
      items: [
        'PVC Pipes',
        'CPVC Pipes',
        'Pipe Fittings',
        'Taps',
        'Valves',
        'Bathroom Fittings',
        'Water Accessories',
        'Plumbing Accessories',
      ],
    },
    {
      id: 'electrical',
      name: 'Electrical',
      iconName: 'Zap',
      shortDescription: 'Cables, switches, sockets & LEDs',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Electrical supplies and lighting.',
      items: [
        'Wires & Cables',
        'Switches',
        'Sockets',
        'LED Lights',
        'Electrical Accessories',
      ],
    },
    {
      id: 'tools',
      name: 'Tools',
      iconName: 'Hammer',
      shortDescription: 'Hand tools, measuring & power accessories',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Tools and accessories.',
      items: [
        'Hand Tools',
        'Cutting Tools',
        'Measuring Tools',
        'Power Tool Accessories',
        'General Tools',
      ],
    },
    {
      id: 'home-improvement',
      name: 'Home Improvement',
      iconName: 'Home',
      shortDescription: 'Repair products & construction fittings',
      inquiryMessage: 'Hi Santu Hardware, I want to enquire about Home Improvement and repair products.',
      items: [
        'Fittings',
        'Accessories',
        'Repair Products',
        'Construction Products',
      ],
    },
  ],

  // Brands
  brands: [
    {
      id: 'jk-maxx',
      name: 'JK Maxx Paints',
      category: 'Paints & Wall Finishes',
      description: 'Premium quality wall putty, primers & emulsion paints engineered for superior durability and high whiteness.',
      tag: 'Special Deals Available',
    },
    {
      id: 'birla-opus',
      name: 'Birla Opus',
      category: 'Decorative & Protective Paints',
      description: 'Next-generation interior and exterior paint solutions with rich vibrancy and long-lasting weather shield.',
      tag: 'Special Deals Available',
    },
    {
      id: 'asian-paints',
      name: 'Asian Paints',
      category: 'Complete Paint Ecosystem',
      description: 'India’s most recognized paint brand offering complete interior, exterior, waterproofing, and enamel solutions.',
      tag: 'Wide Range Available',
    },
  ],

  // Paint Colour Palette
  colorCategories: [
    {
      name: 'Elegant Whites',
      colors: [
        { name: 'Pure Pearl', code: 'EW-01', hex: '#FDFBF7', textColor: '#1e293b' },
        { name: 'Whisper White', code: 'EW-02', hex: '#F3F4F6', textColor: '#1e293b' },
        { name: 'Ivory Cloud', code: 'EW-03', hex: '#FAF5EE', textColor: '#1e293b' },
        { name: 'Silk Linen', code: 'EW-04', hex: '#F5EFE6', textColor: '#1e293b' },
      ],
    },
    {
      name: 'Warm Neutrals',
      colors: [
        { name: 'Almond Silk', code: 'WN-01', hex: '#EADBC8', textColor: '#1e293b' },
        { name: 'Sand Dune', code: 'WN-02', hex: '#DAC0A3', textColor: '#1e293b' },
        { name: 'Warm Beige', code: 'WN-03', hex: '#C8AE7D', textColor: '#ffffff' },
        { name: 'Rich Mocha', code: 'WN-04', hex: '#8C6A54', textColor: '#ffffff' },
      ],
    },
    {
      name: 'Modern Greys',
      colors: [
        { name: 'Cool Pewter', code: 'MG-01', hex: '#D1D5DB', textColor: '#1e293b' },
        { name: 'Slate Mist', code: 'MG-02', hex: '#9CA3AF', textColor: '#ffffff' },
        { name: 'Urban Ash', code: 'MG-03', hex: '#6B7280', textColor: '#ffffff' },
        { name: 'Charcoal Shadow', code: 'MG-04', hex: '#374151', textColor: '#ffffff' },
      ],
    },
    {
      name: 'Fresh Greens',
      colors: [
        { name: 'Sage Breeze', code: 'FG-01', hex: '#D1E7DD', textColor: '#1e293b' },
        { name: 'Mint Whispers', code: 'FG-02', hex: '#A3D9A5', textColor: '#1e293b' },
        { name: 'Olive Leaf', code: 'FG-03', hex: '#608A56', textColor: '#ffffff' },
        { name: 'Deep Forest', code: 'FG-04', hex: '#2D5A27', textColor: '#ffffff' },
      ],
    },
    {
      name: 'Calm Blues',
      colors: [
        { name: 'Oceanic Calm', code: 'CB-01', hex: '#BAE6FD', textColor: '#1e293b' },
        { name: 'Sky Twilight', code: 'CB-02', hex: '#60A5FA', textColor: '#ffffff' },
        { name: 'Cerulean Breeze', code: 'CB-03', hex: '#0284C7', textColor: '#ffffff' },
        { name: 'Royal Navy', code: 'CB-04', hex: '#1E3A8A', textColor: '#ffffff' },
      ],
    },
    {
      name: 'Bold Colours',
      colors: [
        { name: 'Sunlit Ochre', code: 'BC-01', hex: '#F59E0B', textColor: '#ffffff' },
        { name: 'Terracotta Blaze', code: 'BC-02', hex: '#EA580C', textColor: '#ffffff' },
        { name: 'Crimson Velvet', code: 'BC-03', hex: '#BE123C', textColor: '#ffffff' },
        { name: 'Plum Royale', code: 'BC-04', hex: '#7E22CE', textColor: '#ffffff' },
      ],
    },
  ],

  // Why Santu Hardware (6 cards)
  whyChooseUs: [
    {
      icon: 'Layers',
      title: 'Wide Product Range',
      description: 'Paint, hardware, plumbing, electrical and more under one single roof.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Leading Paint Brands',
      description: 'JK Maxx, Birla Opus and Asian Paints available with genuine products.',
    },
    {
      icon: 'Tag',
      title: 'Special Paint Deals',
      description: "Contact us for current prices and exclusive deals on top brands.",
    },
    {
      icon: 'Truck',
      title: 'Free 30 KM Delivery',
      description: 'Convenient local delivery right to your doorstep or site.',
    },
    {
      icon: 'PhoneCall',
      title: 'Easy Ordering',
      description: 'Simply call or WhatsApp your requirements for instant quotes.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Helpful Service',
      description: 'Get expert guidance finding the right product, quantity, and finish.',
    },
  ],

  // How to Order (3 steps)
  howToOrder: [
    {
      step: '01',
      title: 'Send Your Requirement',
      description: 'Call or WhatsApp us with the products, paint shades, or fittings you need.',
      icon: 'Send',
    },
    {
      step: '02',
      title: 'Get Price & Availability',
      description: 'Our team confirms current price, availability, and applicable special offers.',
      icon: 'BadgeCheck',
    },
    {
      step: '03',
      title: 'Get It Delivered',
      description: 'Eligible orders can receive free delivery within our 30 KM service radius.',
      icon: 'PackageCheck',
    },
  ],
};
