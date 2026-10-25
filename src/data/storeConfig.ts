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
  image?: string;
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
  businessName: 'Santu Hardware',
  legalName: 'Santu Hardware',
  tagline: 'Paint, hardware and plumbing under one roof',
  mainSellingMessage: 'Paint, hardware, plumbing and electricals, all from one counter',
  supportingText: 'Premium paints, hardware, plumbing, electrical supplies and more — all available at Santu Hardware.',
  featuredOfferText: 'Special deals on JK Maxx, Birla Opus and Asian Paints',
  
  // Contact details — primary number is the one used for WhatsApp and every CTA
  phoneRaw: '7739802334',
  phoneDisplay: '+91 7739802334',
  phoneShort: '7739802334',
  phoneTel: 'tel:+917739802334',
  whatsappNumber: '917739802334',

  // Both shop lines, shown wherever we list contact details
  phoneNumbers: [
    { raw: '7739802334', display: '+91 7739802334', tel: 'tel:+917739802334', label: 'Primary — call or WhatsApp' },
    { raw: '9097441600', display: '+91 9097441600', tel: 'tel:+919097441600', label: 'Alternate line' },
  ],
  
  // Delivery details
  deliveryRadius: '30 KM',
  deliveryHighlight: 'Free delivery within 30 km',
  deliveryDescription: 'Order your paints, hardware and other products from Santu Hardware and get free delivery within our 30 km service area.',
  
  // Images
  images: {
    logoMark: '/images/logo-mark.png',
    logoFull: '/images/logo-full.png',
    logoLockup: '/images/logo-lockup.png',
    logoLockupWhite: '/images/logo-lockup-white.png',
    heroStore: '/images/hero-clean.jpg',
    paintDeals: '/images/paint-deals.jpg',
    hardwareTools: '/images/hardware-tools.jpg',
    deliveryService: '/images/delivery-service.jpg',
  },

  // Address & Hours (Configurable without fake data)
  address: 'Chhapra–Mohammadpur Road, Ishauvpur, Man Pusauli, Bihar 841411' as string | null,
  addressDisplay: 'Chhapra–Mohammadpur Road, Ishauvpur, Man Pusauli, Bihar 841411',
  addressNote: 'On the Chhapra–Mohammadpur road. Tap for directions on Google Maps.',
  openingHours: null as string | null, // Displays 'Contact store for hours' if null
  
  // Quick pre-filled WhatsApp helper
  getWhatsAppUrl: (message?: string) => {
    const defaultMsg = 'Hi Santu Hardware, I want to enquire about a product.';
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/917739802334?text=${text}`;
  },

  // Handwritten slip WhatsApp helper
  getSlipWhatsAppUrl: () => {
    const msg = encodeURIComponent("Hi Santu Hardware, I am sending a photo of my painter/contractor's requirement slip. Please calculate the total price and check stock availability.");
    return `https://wa.me/917739802334?text=${msg}`;
  },
  
  // Google Business listing for the store
  googleListingUrl: 'https://share.google/k4zckZLpWoskgXe2x',

  getDirectionsUrl: () => 'https://share.google/k4zckZLpWoskgXe2x',
  
  // Top Hero Information Strip
  heroStrip: [
    {
      id: 'wide-range',
      icon: 'Palette',
      title: 'Wide range',
      subtitle: 'Paints, hardware & more',
    },
    {
      id: 'free-delivery',
      icon: 'Truck',
      title: 'Free delivery',
      subtitle: 'Within a 30 km radius',
    },
    {
      id: 'easy-ordering',
      icon: 'MessageSquare',
      title: 'Easy ordering',
      subtitle: 'Call or WhatsApp',
    },
  ],

  // Special Deals
  specialDeals: [
    {
      id: 'jk-maxx',
      name: 'JK Maxx Paints',
      logo: '/images/brands/jk-maxx.png',
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
      name: 'Birla Opus',
      logo: '/images/brands/birla-opus.png',
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
      name: 'Asian Paints',
      logo: '/images/brands/asian-paints.png',
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
      image: '/images/cat-paints.jpg',
      shortDescription: 'Interior, exterior, primers & wall putty',
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
      image: '/images/cat-hardware.jpg',
      shortDescription: 'Locks, fasteners, hinges & handles',
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
      image: '/images/cat-plumbing.jpg',
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
      image: '/images/cat-electrical.jpg',
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
      image: '/images/hardware-tools.jpg',
      shortDescription: 'Hand tools, measuring & cutting',
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
      image: '/images/paint-deals.jpg',
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
      logo: '/images/brands/jk-maxx.png',
      category: 'Paints & Wall Finishes',
      description: 'Premium quality wall putty, primers & emulsion paints engineered for superior durability and high whiteness.',
      tag: 'Special deals',
      warranty: {
        url: 'https://jkmaxxpaints.com/warranty-card/',
        label: 'Warranty certificates',
        note: 'Up to 12 years on select emulsions',
      },
    },
    {
      id: 'birla-opus',
      name: 'Birla Opus',
      logo: '/images/brands/birla-opus.png',
      category: 'Decorative & Protective Paints',
      description: 'Next-generation interior and exterior paint solutions with rich vibrancy and long-lasting weather shield.',
      tag: 'Special deals',
      warranty: {
        url: 'https://www.birlaopus.com/warranty',
        label: 'Register your warranty',
        note: 'Keep your bill and empty drums handy',
      },
    },
    {
      id: 'asian-paints',
      name: 'Asian Paints',
      logo: '/images/brands/asian-paints.png',
      category: 'Complete Paint Ecosystem',
      description: 'India’s most recognized paint brand offering complete interior, exterior, waterproofing, and enamel solutions.',
      tag: 'Wide range',
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
      title: 'Everything under one roof',
      description: 'Paint, hardware, plumbing, electrical and more under one single roof.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Genuine brands only',
      description: 'JK Maxx, Birla Opus and Asian Paints available with genuine products.',
    },
    {
      icon: 'Tag',
      title: 'Deals worth asking about',
      description: "Contact us for current prices and exclusive deals on top brands.",
    },
    {
      icon: 'Truck',
      title: 'We bring it to you',
      description: 'Convenient local delivery right to your doorstep or site.',
    },
    {
      icon: 'PhoneCall',
      title: 'Order by phone or WhatsApp',
      description: 'Simply call or WhatsApp your requirements for instant quotes.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Advice at the counter',
      description: 'Get expert guidance finding the right product, quantity, and finish.',
    },
  ],

  // How to Order (3 steps)
  howToOrder: [
    {
      step: '01',
      title: 'Tell us what you need',
      description: 'Call or WhatsApp us with the products, paint shades, or fittings you need.',
      icon: 'Send',
    },
    {
      step: '02',
      title: 'We confirm price and stock',
      description: 'Our team confirms current price, availability, and applicable special offers.',
      icon: 'BadgeCheck',
    },
    {
      step: '03',
      title: 'We deliver it',
      description: 'Eligible orders can receive free delivery within our 30 KM service radius.',
      icon: 'PackageCheck',
    },
  ],
};
