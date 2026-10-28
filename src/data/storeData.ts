export interface BulkPriceTier {
  quantity: number;
  price: number;
  show_plus_icon?: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  basePrice: number;
  compareAtPrice?: number | null;
  unit: string;
  image: string;
  badge?: string;
  deliveryTime?: string;
  payOnDelivery?: boolean;
  freeDeliveryThreshold?: number;
  tiers?: BulkPriceTier[];
  isDealOfTheWeek?: boolean;
  isNewlyLaunched?: boolean;
  rating?: number;
  reviewCount?: number;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  slug: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
  quote: string;
}

export const SERVICEABLE_PINCODES = [
  "841411",
  "841401",
  "841301",
  "841417",
  "841407"
];

export const STORE_CONFIG = {
  brandName: "Santu Hardware",
  tagline: "Paints, Hardware, Plumbing & Electrical — free delivery within 30 km",
  expressTime: "Same day",
  defaultPincode: "841411",
  defaultArea: "Ishauvpur, Saran",
  phone: "+91 7739802334",
  secondaryPhone: "+91 9097441600",
  whatsappNumber: "917739802334",
  address: "Chhapra–Mohammadpur Road, Ishauvpur, Man Pusauli, Bihar 841411",
  addressShort: "Chhapra–Mohammadpur Road, Ishauvpur",
  district: "Saran, Bihar",
  pincode: "841411",
  googleListingUrl: "https://share.google/k4zckZLpWoskgXe2x",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Santu+Hardware%2C+Chhapra+Mohammadpur+Road%2C+Ishauvpur%2C+Bihar+841411",
  deliveryRadiusKm: 30,
  logoUrl: "/images/logo-lockup.png",
  heroBannerUrl: "/images/santu_hero_banner_v2.jpg",
  trustBannerUrl: "/images/santu_trust_banner_v2.jpg",
  cashbackPercent: 1,
  freeDeliveryMinOrder: 500
};

export const CATEGORIES: Category[] = [
  {
    id: "painting",
    name: "Painting & Putty",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/painting.png?v=1770837387",
    itemCount: 185,
    slug: "painting"
  },
  {
    id: "plumbing",
    name: "CPVC & Water Tanks",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    itemCount: 220,
    slug: "plumbing"
  },
  {
    id: "sanitary-bath-fittings",
    name: "Sanitary & Bath",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/sanitary_and_bath_fittings.png?v=1770838342",
    itemCount: 110,
    slug: "sanitary-bath-fittings"
  },
  {
    id: "waterproofing",
    name: "Water Proofing",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/water_proofing.png?v=1770837873",
    itemCount: 52,
    slug: "waterproofing"
  },
  {
    id: "wires",
    name: "Wires & MCBs",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/Wires_Actual_Tile.png?v=1783694346",
    itemCount: 94,
    slug: "wires"
  },
  {
    id: "electrical-conduit-pipes",
    name: "Conduits & GI Boxes",
    image: "https://services.ibo.com/media/v1/products/images/6a5cbb67-cff6-4168-b3ad-6f03c9d94c28/polycab-maxima-1-sq-mm-blue-90-m-fr-pvc-insulated-wire-0.webp",
    itemCount: 88,
    slug: "electrical-conduit-pipes"
  },
  {
    id: "switches-sockets",
    name: "Switches & Sockets",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/switches_and_sockets.png?v=1770838213",
    itemCount: 78,
    slug: "switches-sockets"
  },
  {
    id: "fevicol",
    name: "Fevicol & Adhesives",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/fevicol.png?v=1770838170",
    itemCount: 36,
    slug: "fevicol"
  },
  {
    id: "power-tools-accessories",
    name: "Power Tools",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/ChatGPT_Image_Jul_10_2026_08_02_23_PM.png?v=1783693998",
    itemCount: 55,
    slug: "power-tools-accessories"
  },
  {
    id: "door-locks-hardware",
    name: "Door Locks & Hardware",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/door_locks_and_hardware.png?v=1770838304",
    itemCount: 85,
    slug: "door-locks-hardware"
  },
  {
    id: "hinges-channels-handles",
    name: "Hinges & Handles",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/hinges_channels_and_handles.png?v=1770838232",
    itemCount: 140,
    slug: "hinges-channels-handles"
  },
  {
    id: "kitchen-sinks-faucets",
    name: "Kitchen Sinks & Faucets",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/sink_category_1_jpg.jpg?v=1781939913",
    itemCount: 65,
    slug: "kitchen-sinks-faucets"
  },
  {
    id: "home-appliances-power-backup",
    name: "Geysers & Water Heaters",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/ChatGPT_Image_Jun_20_2026_01_36_28_PM.png?v=1782137470",
    itemCount: 40,
    slug: "home-appliances-power-backup"
  },
  {
    id: "ceilingfans-exhaust",
    name: "Ceiling & Exhaust Fans",
    image: "https://www.crompton.co.in/cdn/shop/files/Surebreezeseabreeze_Ivory__1angle_1.png?v=1772789657&width=600",
    itemCount: 45,
    slug: "ceilingfans-exhaust"
  },
  {
    id: "lighting",
    name: "Lighting & LEDs",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=400&q=80",
    itemCount: 70,
    slug: "lighting"
  },
  {
    id: "general-hardware-tools",
    name: "General Hardware & Tools",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/Rectangle_2_994f0a2f-4bf4-4f1f-91bd-14f35ff8f4de.webp?v=1786606573",
    itemCount: 160,
    slug: "general-hardware-tools"
  },
  {
    id: "tiling",
    name: "Tiling & Adhesives",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/tiling_bulk.png?v=1779348284",
    itemCount: 88,
    slug: "tiling"
  },
  {
    id: "safety-tools-workwear",
    name: "Safety & Workwear",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/Category_Images_by_Rashid_-_500x500_-_2026-04-16T111626.979_1.png?v=1787746320",
    itemCount: 45,
    slug: "safety-tools-workwear"
  },
  {
    id: "kitchen-systems-accessories",
    name: "Kitchen Systems",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/kitchen_systems_and_accessories.png?v=1770838250",
    itemCount: 48,
    slug: "kitchen-systems-accessories"
  },
  {
    id: "wardrobe-bed-fittings",
    name: "Wardrobe & Bed Fittings",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/wardrobe_and_bed_fittings.png?v=1770838287",
    itemCount: 62,
    slug: "wardrobe-bed-fittings"
  },
  {
    id: "glass-hardware",
    name: "Glass Door Hardware",
    image: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/Glass_Door_Hardware_120c055a-f28d-44e7-b84a-0af8cfe9dbde.png?v=1788332056",
    itemCount: 35,
    slug: "glass-hardware"
  }

];

export const PRODUCTS: Product[] = [
  {
    id: "asian-paints-damp-sheath",
    title: "Asian Paints SmartCare Damp Sheath Advanced Exterior Primer, 20L",
    category: "Painting & Putty",
    brand: "Asian Paints",
    basePrice: 3190,
    compareAtPrice: 3650,
    unit: "20 Liter Bucket",
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/sc-Dampsheath-exterior-new.png",
    badge: "13% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isDealOfTheWeek: true,
    rating: 4.9,
    reviewCount: 96,
    tiers: [
      { quantity: 3, price: 3050, show_plus_icon: true },
      { quantity: 6, price: 2980, show_plus_icon: true }
    ]
  },
  {
    id: "kei-homecab-fr-wire",
    title: "KEI Homecab FR PVC Insulated Copper Wire, 90m (1.5 sq mm)",
    category: "Wires & MCBs",
    brand: "KEI Wires",
    basePrice: 1986,
    compareAtPrice: 3811,
    unit: "90m Coil",
    image: "https://services.ibo.com/media/v1/products/images/6a5cbb67-cff6-4168-b3ad-6f03c9d94c28/polycab-maxima-1-sq-mm-blue-90-m-fr-pvc-insulated-wire-0.webp",
    badge: "48% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isDealOfTheWeek: true,
    rating: 4.8,
    reviewCount: 142,
    tiers: [
      { quantity: 3, price: 1850, show_plus_icon: true },
      { quantity: 5, price: 1750, show_plus_icon: true }
    ]
  },
  {
    id: "prince-storefit-tank-1000l",
    title: "Prince Storefit 4-Layer Antibacterial Overhead Water Tank, 1000L",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 8500,
    compareAtPrice: 9800,
    unit: "1000 Liter Tank",
    image: "https://services.ibo.com/media/v1/products/images/986765fb-191c-4997-8e22-5cc4d62f2204/kaveri-3-layer-black-1000-l-overhead-tank-1.jpeg",
    badge: "13% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isDealOfTheWeek: true,
    rating: 4.9,
    reviewCount: 78,
    tiers: [
      { quantity: 2, price: 8200, show_plus_icon: true }
    ]
  },
  {
    id: "trovant-regal-one-piece-commode",
    title: "Trovant Regal One-Piece Western Commode with Soft-Close Hydraulic Seat & Jet (10 Yrs Warranty)",
    category: "Sanitary & Bath",
    brand: "Trovant",
    basePrice: 9918,
    compareAtPrice: 12500,
    unit: "Complete Set",
    image: "https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F8302b3b8-2e50-4be6-b2e5-b95798d191bd.png&w=1920&q=75",
    badge: "21% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isDealOfTheWeek: true,
    rating: 4.9,
    reviewCount: 64
  },
  {
    id: "dr-fixit-101-pidiproof-20l",
    title: "Dr. Fixit 101 PidiProof LW+ Integral Waterproofing Liquid for Concrete, 20L",
    category: "Water Proofing",
    brand: "Dr. Fixit",
    basePrice: 2438,
    compareAtPrice: 2800,
    unit: "20 Liter Drum",
    image: "https://drfixit-stg.s3.ap-south-1.amazonaws.com/assets/images/products/xhdpi/16191739476082a23b4efc6.webp",
    badge: "13% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isDealOfTheWeek: true,
    rating: 4.9,
    reviewCount: 128,
    tiers: [
      { quantity: 2, price: 2350, show_plus_icon: true }
    ]
  },
  {
    id: "ap-apex-shyne-20l",
    title: "Asian Paints Apex Shyne Advanced Weatherproof Exterior Emulsion, 20L",
    category: "Painting & Putty",
    brand: "Asian Paints",
    basePrice: 6000,
    compareAtPrice: 6800,
    unit: "20 Liter Drum",
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-shyne-dust-proof-packshot-asian-paints.png",
    badge: "Best Seller",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 154,
    tiers: [
      { quantity: 2, price: 5850, show_plus_icon: true },
      { quantity: 4, price: 5700, show_plus_icon: true }
    ]
  },
  {
    id: "ap-apcolite-enamel-4l",
    title: "Asian Paints Apcolite Premium Gloss High-Shine Enamel Paint, 4L",
    category: "Painting & Putty",
    brand: "Asian Paints",
    basePrice: 1100,
    compareAtPrice: 1250,
    unit: "4 Liter Tin",
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/metals-apcolite-premium-gloss-enamel-asian-paints.png",
    badge: "12% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: "ap-acrylic-wall-putty-5kg",
    title: "Asian Paints TruCare Acrylic Wall Putty, 5 Kg",
    category: "Painting & Putty",
    brand: "Asian Paints",
    basePrice: 320,
    compareAtPrice: 380,
    unit: "5 Kg Bucket",
    image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-undercoats-trucare-acrylic-wall-putty-asian-paints.png",
    badge: "Genuine",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.7,
    reviewCount: 45
  },
  {
    id: "birla-opus-neo-star-20l",
    title: "Birla Opus Neo Star Luxury High-Sheen Interior Emulsion, 20L",
    category: "Painting & Putty",
    brand: "Birla Opus",
    basePrice: 7660,
    compareAtPrice: 8500,
    unit: "20 Liter Bucket",
    image: "https://services.ibo.com/media/v1/products/images/8e42ce39-d6f0-4904-a08f-5125d1306189/birla-opus-ns-1-calista-neo-star-pastel-10-l-exterior-emulsion--base-1.webp",
    badge: "Luxury Paint",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 88,
    tiers: [
      { quantity: 2, price: 7450, show_plus_icon: true }
    ]
  },
  {
    id: "birla-opus-power-fit-20l",
    title: "Birla Opus Power Fit Exterior All-Weather Emulsion, 20L",
    category: "Painting & Putty",
    brand: "Birla Opus",
    basePrice: 4580,
    compareAtPrice: 5200,
    unit: "20 Liter Bucket",
    image: "https://services.ibo.com/media/v1/products/images/8e42ce39-d6f0-4904-a08f-5125d1306189/birla-opus-ns-1-calista-neo-star-pastel-10-l-exterior-emulsion--base-1.webp",
    badge: "12% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 64
  },
  {
    id: "birla-white-waterproof-putty-40kg",
    title: "Birla White Waterproof Wall Care Putty, 40 Kg Bag",
    category: "Painting & Putty",
    brand: "Birla Opus",
    basePrice: 1270,
    compareAtPrice: 1450,
    unit: "40 Kg Bag",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/8/534843651/UI/MK/WS/25763034/birla-white-wall-care-putty-40-kg-1-500x500.png",
    badge: "Waterproof",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 210,
    tiers: [
      { quantity: 5, price: 1230, show_plus_icon: true },
      { quantity: 10, price: 1190, show_plus_icon: true }
    ]
  },
  {
    id: "birla-opus-enamel-4l",
    title: "Birla Opus Super Gloss Architectural Enamel Paint, 4L",
    category: "Painting & Putty",
    brand: "Birla Opus",
    basePrice: 1100,
    compareAtPrice: 1280,
    unit: "4 Liter Tin",
    image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/metals-apcolite-premium-gloss-enamel-asian-paints.png",
    badge: "High Gloss",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: "prince-storefit-tank-500l",
    title: "Prince 4-Layer Heavy Duty Overhead Water Tank, 500L",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 2600,
    compareAtPrice: 3200,
    unit: "500 Liter Tank",
    image: "https://services.ibo.com/media/v1/products/images/6161bae1-22b1-4e7b-abd8-f474e66f7281/kaveri-3-layer-white-500-l-overhead-tank-1.jpeg",
    badge: "19% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: "prince-cpvc-brass-mta-1-5",
    title: "Prince CPVC Heavy Brass MTA (Male Threaded Adapter), 1.5 Inch",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 686,
    compareAtPrice: 780,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Brass Heavy",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 58,
    tiers: [
      { quantity: 10, price: 650, show_plus_icon: true }
    ]
  },
  {
    id: "prince-swr-ultrafit-pipe-4inch",
    title: "Prince SWR Ultrafit Ring-Fit Soil, Waste & Rainwater Pipe 4-Inch (10ft)",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 475,
    compareAtPrice: 560,
    unit: "10ft Pipe",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Leak-Proof",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 76
  },
  {
    id: "prince-cpvc-ball-valve-1-5",
    title: "Prince CPVC Heavy Duty Ball Valve, 1.5 Inch",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 704,
    compareAtPrice: 820,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Tested 16 Bar",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 39
  },
  {
    id: "prince-cpvc-ball-valve-1inch",
    title: "Prince CPVC Ball Valve Quarter-Turn, 1 Inch",
    category: "CPVC & Water Tanks",
    brand: "Prince",
    basePrice: 270,
    compareAtPrice: 320,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "15% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 88
  },
  {
    id: "skipper-multi-floor-trap",
    title: "Skipper Multi-Floor Nahani Trap with Stainless Steel Grating, 4x3x2 Inch",
    category: "CPVC & Water Tanks",
    brand: "Skipper",
    basePrice: 233,
    compareAtPrice: 290,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Anti-Odor",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.7,
    reviewCount: 54
  },
  {
    id: "skipper-cpvc-ball-valve-1inch",
    title: "Skipper CPVC Heavy Brass Spindle Ball Valve, 1 Inch",
    category: "CPVC & Water Tanks",
    brand: "Skipper",
    basePrice: 288,
    compareAtPrice: 340,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Heavy Brass",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 62
  },
  {
    id: "supreme-lifeline-cpvc-ball-valve-1-5",
    title: "Supreme Lifeline CPVC High-Pressure Ball Valve, 1.5 Inch",
    category: "CPVC & Water Tanks",
    brand: "Supreme",
    basePrice: 790,
    compareAtPrice: 920,
    unit: "Piece",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "High Pressure",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 71
  },
  {
    id: "astral-truzo-cpvc-solvent-100ml",
    title: "Astral Truzo Heavy Duty Fast-Curing CPVC Solvent Cement, 100ml",
    category: "Fevicol & Adhesives",
    brand: "Astral",
    basePrice: 180,
    compareAtPrice: 210,
    unit: "100ml Tin",
    image: "https://www.astraladhesives.com/media/catalog/product/s/o/solvobond-cpvc-707_1_.png",
    badge: "Fast Setting",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 114
  },
  {
    id: "astral-cpvc-pro-pipe",
    title: "Astral CPVC PRO Class 1 SDR 11 Hot & Cold Water Pipe (1 Inch, 3m)",
    category: "CPVC & Water Tanks",
    brand: "Astral",
    basePrice: 340,
    compareAtPrice: 420,
    unit: "3 Meter Length",
    image: "https://darvinindia.com/wp-content/uploads/2021/10/cpvc-ball-valve.png",
    badge: "Hot & Cold",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 84
  },
  {
    id: "trovant-decent-s-ewc-commode",
    title: "Trovant Decent 'S' Floor Mounted Ceramic EWC Toilet with Cistern & Seat Cover",
    category: "Sanitary & Bath",
    brand: "Trovant",
    basePrice: 2800,
    compareAtPrice: 3400,
    unit: "Complete Unit",
    image: "https://hindware.com/_next/image?url=https%3A%2F%2Fhindwarestg.blob.core.windows.net%2Fcontainer1%2Fproducts%2F8302b3b8-2e50-4be6-b2e5-b95798d191bd.png&w=1920&q=75",
    badge: "18% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: "bvenus-nova-2-way-bib-cock",
    title: "B Venus Nova Dual-Flow 2-Way Solid Brass Bib Cock with Wall Flange",
    category: "Sanitary & Bath",
    brand: "B Venus",
    basePrice: 838,
    compareAtPrice: 990,
    unit: "Piece",
    image: "https://5.imimg.com/data5/SELLER/Default/2026/3/595261909/GT/BA/EF/182015039/felone-2-way-bib-cock-500x500.png",
    badge: "Solid Brass",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 38
  },
  {
    id: "bvenus-abs-health-faucet",
    title: "B Venus ABS Chrome Health Faucet with 1m SS Braided Hose & Wall Hook",
    category: "Sanitary & Bath",
    brand: "B Venus",
    basePrice: 575,
    compareAtPrice: 720,
    unit: "Complete Kit",
    image: "https://ruheindia.com/cdn/shop/files/Artboard_1_03d6e434-343a-4f28-a945-7626fc0ae473.jpg?v=1775295840&width=460",
    badge: "20% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 65
  },
  {
    id: "bvenus-nova-angle-cock",
    title: "B Venus Nova Quarter-Turn Solid Brass Angle Cock",
    category: "Sanitary & Bath",
    brand: "B Venus",
    basePrice: 404,
    compareAtPrice: 490,
    unit: "Piece",
    image: "https://www.aquieen.com/cdn/shop/files/FLU-5404-IMG1.jpg?v=1748459640&width=1946",
    badge: "Quarter Turn",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.7,
    reviewCount: 52
  },
  {
    id: "aquatek-brass-bib-cock",
    title: "Aquatek Solid Brass Bib Cock Long Body with Aerator",
    category: "Sanitary & Bath",
    brand: "Aquatek",
    basePrice: 207,
    compareAtPrice: 260,
    unit: "Piece",
    image: "https://5.imimg.com/data5/SELLER/Default/2026/3/595261909/GT/BA/EF/182015039/felone-2-way-bib-cock-500x500.png",
    badge: "Heavy Cast",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.7,
    reviewCount: 34
  },
  {
    id: "anchor-16-way-spn-mcb-box",
    title: "16-Way SPN Concealed MCB Distribution Board Box with Smoke Acrylic Door",
    category: "Wires & MCBs",
    brand: "Anchor",
    basePrice: 1550,
    compareAtPrice: 1950,
    unit: "1 Unit",
    image: "https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2025-02/17bfe0f1-9a2e-4282-8f88-67717fc47d18.png",
    badge: "20% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 62
  },
  {
    id: "anchor-10-way-mcb-box",
    title: "Anchor 10-Way Double Door MCB Distribution Box [B.B]",
    category: "Wires & MCBs",
    brand: "Anchor",
    basePrice: 1050,
    compareAtPrice: 1350,
    unit: "1 Unit",
    image: "https://d32zxht0g2dn3w.cloudfront.net/s3fs-public/2025-02/17bfe0f1-9a2e-4282-8f88-67717fc47d18.png",
    badge: "Double Door",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: "anchor-18-mod-gi-box",
    title: "Anchor Concealed Modular GI Metal Box, 18-Module (Heavy Zinc Coated)",
    category: "Conduits & GI Boxes",
    brand: "Anchor",
    basePrice: 166,
    compareAtPrice: 210,
    unit: "1 Piece",
    image: "https://5.imimg.com/data5/ANDROID/Default/2026/8/633455278/NG/NY/CZ/12558192/prod-20260808-2053268882370895227122396-jpg-500x500.jpg",
    badge: "Rust-Proof",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 88,
    tiers: [
      { quantity: 5, price: 155, show_plus_icon: true }
    ]
  },
  {
    id: "anchor-12-mod-gi-box",
    title: "Anchor Concealed Modular GI Metal Box, 12-Module",
    category: "Conduits & GI Boxes",
    brand: "Anchor",
    basePrice: 130,
    compareAtPrice: 160,
    unit: "1 Piece",
    image: "https://5.imimg.com/data5/ANDROID/Default/2026/8/633455278/NG/NY/CZ/12558192/prod-20260808-2053268882370895227122396-jpg-500x500.jpg",
    badge: "Standard GI",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 110,
    tiers: [
      { quantity: 10, price: 120, show_plus_icon: true }
    ]
  },
  {
    id: "anchor-8-mod-gi-box",
    title: "Anchor Concealed Modular GI Metal Box, 8-Module",
    category: "Conduits & GI Boxes",
    brand: "Anchor",
    basePrice: 105,
    compareAtPrice: 130,
    unit: "1 Piece",
    image: "https://5.imimg.com/data5/ANDROID/Default/2026/8/633455278/NG/NY/CZ/12558192/prod-20260808-2053268882370895227122396-jpg-500x500.jpg",
    badge: "Best Seller",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 145,
    tiers: [
      { quantity: 10, price: 95, show_plus_icon: true }
    ]
  },
  {
    id: "anchor-4-mod-gi-box",
    title: "Anchor Concealed Modular GI Metal Box, 4-Module",
    category: "Conduits & GI Boxes",
    brand: "Anchor",
    basePrice: 62,
    compareAtPrice: 80,
    unit: "1 Piece",
    image: "https://5.imimg.com/data5/ANDROID/Default/2026/8/633455278/NG/NY/CZ/12558192/prod-20260808-2053268882370895227122396-jpg-500x500.jpg",
    badge: "GI Metal",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 78
  },
  {
    id: "anchor-2-mod-gi-box",
    title: "Anchor Concealed Modular GI Metal Box, 2-Module",
    category: "Conduits & GI Boxes",
    brand: "Anchor",
    basePrice: 40,
    compareAtPrice: 55,
    unit: "1 Piece",
    image: "https://5.imimg.com/data5/ANDROID/Default/2026/8/633455278/NG/NY/CZ/12558192/prod-20260808-2053268882370895227122396-jpg-500x500.jpg",
    badge: "Economic",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: "malhotra-fan-box-heavy",
    title: "Malhotra Heavy Duty Concealed Ceiling Fan Box with GI Suspension Hook Rod",
    category: "Conduits & GI Boxes",
    brand: "Malhotra",
    basePrice: 90,
    compareAtPrice: 120,
    unit: "1 Piece",
    image: "https://cpimg.tistatic.com/7847891/b/4/mild-steel-octagonal-fan-box.jpg",
    badge: "Heavy Gauge",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 82
  },
  {
    id: "eagle-pro-paint-brush-110mm",
    title: "Eagle Professional Pure Bristle Paint Brush 110mm (4.5 Inch)",
    category: "General Hardware & Tools",
    brand: "Eagle",
    basePrice: 200,
    compareAtPrice: 250,
    unit: "1 Piece",
    image: "https://plus.unsplash.com/premium_photo-1678812165213-12dc8d1f3e19?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    badge: "Zero Shedding",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 49
  },
  {
    id: "eagle-pro-paint-brush-50mm",
    title: "Eagle Professional Wall Paint Brush 50mm (2 Inch)",
    category: "General Hardware & Tools",
    brand: "Eagle",
    basePrice: 50,
    compareAtPrice: 70,
    unit: "1 Piece",
    image: "https://plus.unsplash.com/premium_photo-1678812165213-12dc8d1f3e19?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    badge: "Soft Touch",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.7,
    reviewCount: 38
  },
  {
    id: "dr-fixit-101-pidiproof-5l",
    title: "Dr. Fixit 101 PidiProof LW+ Waterproofing Liquid, 5L Can",
    category: "Water Proofing",
    brand: "Dr. Fixit",
    basePrice: 695,
    compareAtPrice: 820,
    unit: "5 Liter Can",
    image: "https://drfixit-stg.s3.ap-south-1.amazonaws.com/assets/images/products/xhdpi/16191739476082a23b4efc6.webp",
    badge: "Essential",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 94
  },
  {
    id: "dr-fixit-fastflex",
    title: "Dr. Fixit Fastflex 2-Component Cementitious High-Performance Waterproofing Coating, 12 Kg",
    category: "Water Proofing",
    brand: "Dr. Fixit",
    basePrice: 2490,
    compareAtPrice: 2950,
    unit: "12 Kg Kit",
    image: "https://drfixit-stg.s3.ap-south-1.amazonaws.com/assets/images/products/xhdpi/16191739476082a23b4efc6.webp",
    badge: "Terrace & Bath",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: "fevicol-sh-ultimate",
    title: "Fevicol SH Ultimate Synthetic Resin Adhesive, 10 Kg Bucket",
    category: "Fevicol & Adhesives",
    brand: "Pidilite",
    basePrice: 2280,
    compareAtPrice: 2550,
    unit: "10 Kg Bucket",
    image: "https://services.ibo.com/media/v1/products/images/95b0267a-a956-4331-b272-47ab087f7f5f/fevicol-sh-1-kg-woodwork-adhesive-1.webp?c_type=C2",
    badge: "11% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 168,
    tiers: [
      { quantity: 2, price: 2200, show_plus_icon: true }
    ]
  },
  {
    id: "fevicol-marine-waterproof-5kg",
    title: "Fevicol Marine Waterproof Woodworking Adhesive, 5 Kg",
    category: "Fevicol & Adhesives",
    brand: "Pidilite",
    basePrice: 1320,
    compareAtPrice: 1480,
    unit: "5 Kg Bucket",
    image: "https://services.ibo.com/media/v1/products/images/95b0267a-a956-4331-b272-47ab087f7f5f/fevicol-sh-1-kg-woodwork-adhesive-1.webp?c_type=C2",
    badge: "Marine Grade",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: "araldite-standard-epoxy-180g",
    title: "Araldite Standard High-Strength Epoxy Adhesive Resin & Hardener, 180g",
    category: "Fevicol & Adhesives",
    brand: "Pidilite",
    basePrice: 225,
    compareAtPrice: 265,
    unit: "Set",
    image: "https://5.imimg.com/data5/SELLER/Default/2026/1/580143833/AS/UX/GX/94410526/araldite-standard-epoxy-adhesive-180g-500x500.jpg",
    badge: "Industrial",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 58
  },
  {
    id: "polycab-green-wire-2-5",
    title: "Polycab Green Wire FR-LSH Copper Insulated Cable, 90m (2.5 sq mm)",
    category: "Wires & MCBs",
    brand: "Polycab",
    basePrice: 2850,
    compareAtPrice: 3350,
    unit: "90m Coil",
    image: "https://services.ibo.com/media/v1/products/images/e36ce043-e69d-4754-bd1d-7adb46b6048c/polycab-optima-1-sq-mm-red-90-m-pvc-insulated-wire-1.webp?c_type=C3",
    badge: "15% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 165,
    tiers: [
      { quantity: 3, price: 2750, show_plus_icon: true }
    ]
  },
  {
    id: "havells-life-line-wire-1sqmm",
    title: "Havells Life Line Plus S3 HRFR Flame Retardant Wire, 90m (1.0 sq mm)",
    category: "Wires & MCBs",
    brand: "Havells",
    basePrice: 1490,
    compareAtPrice: 1780,
    unit: "90m Coil",
    image: "https://havells.com/media/catalog/product/cache/bebb556ccaa04236261d8ba5676ddf4d/import/Flexible-Cables/WHFFDNBA12X5.jpg",
    badge: "Flame Proof",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: "godrej-ultra-tribolt-lock",
    title: "Godrej Ultra Tribolt 1CK Antique Brass Rim Deadbolt Main Door Lock",
    category: "Door Locks & Hardware",
    brand: "Godrej",
    basePrice: 2699,
    compareAtPrice: 3200,
    unit: "Complete Lock Kit",
    image: "https://static.godrejenterprises.com/2_63624f6ba9.webp",
    badge: "16% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 148
  },
  {
    id: "godrej-classic-cylindrical-lock",
    title: "Godrej Classic Cylindrical Stainless Steel Bedroom Door Lock with Keys",
    category: "Door Locks & Hardware",
    brand: "Godrej",
    basePrice: 949,
    compareAtPrice: 1200,
    unit: "Complete Kit",
    image: "https://static.godrejenterprises.com/1_15ea0fa5d6.webp",
    badge: "Popular",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 78
  },
  {
    id: "hettich-soft-close-hinges",
    title: "Hettich Sensys Soft-Close Hydraulic Concealed Cabinet Hinges (Pair)",
    category: "Hinges & Handles",
    brand: "Hettich",
    basePrice: 240,
    compareAtPrice: 320,
    unit: "Pair (2 Pcs)",
    image: "https://services.ibo.com/media/v1/products/images/08315ca3-0d8d-469f-aa0d-f9ffe5bb498c/hettich-slideon-2333-full-overlay0-crank-regular-close-cabinet-hinge-1.jpeg",
    badge: "German Tech",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 220,
    tiers: [
      { quantity: 5, price: 220, show_plus_icon: true },
      { quantity: 10, price: 200, show_plus_icon: true }
    ]
  },
  {
    id: "carysil-nera-quartz-sink",
    title: "Carysil Nera Quartz Granite Kitchen Sink Double Bowl (Black Matt Finish)",
    category: "Kitchen Sinks & Faucets",
    brand: "Carysil",
    basePrice: 9850,
    compareAtPrice: 13999,
    unit: "Granite Sink Set",
    image: "https://cdn.sanity.io/images/rju1k71l/production/247130e13c663654e49c9200619ac11aba078cf9-2400x1974.png?w=1600&auto=format",
    badge: "30% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isNewlyLaunched: true,
    rating: 4.9,
    reviewCount: 38
  },
  {
    id: "ss304-handmade-kitchen-sink",
    title: "Stainless Steel 304 Grade Handmade Kitchen Sink 24 x 18 Inch with Drainer Basket",
    category: "Kitchen Sinks & Faucets",
    brand: "General Hardware",
    basePrice: 2850,
    compareAtPrice: 3999,
    unit: "Complete Sink Kit",
    image: "https://media.istockphoto.com/id/465702213/photo/kitchen-sink.jpg?s=612x612&w=0&k=20&c=rFYzK9z6CxyV8gd3ebEf3Av8dOrOUIheFcza6nNK-10=",
    badge: "SS 304",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 84
  },
  {
    id: "gm-modular-water-heater",
    title: "GM Modular Aeris Plus 15L Vertical Storage Geyser (BEE 5-Star Rated)",
    category: "Geysers & Water Heaters",
    brand: "GM Modular",
    basePrice: 6449,
    compareAtPrice: 15750,
    unit: "15 Liter Geyser",
    image: "https://store.gmmodular.com/cdn/shop/files/KALP-1copy.jpg?v=1791398599&width=1200",
    badge: "59% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isNewlyLaunched: true,
    rating: 4.9,
    reviewCount: 68
  },
  {
    id: "ao-smith-elegance-prime-geyser",
    title: "AO Smith Elegance Prime 25L Vertical Storage Water Heater with Blue Diamond Tank",
    category: "Geysers & Water Heaters",
    brand: "AO Smith",
    basePrice: 8129,
    compareAtPrice: 11900,
    unit: "25 Liter Unit",
    image: "https://www.aosmithindia.com/wp-content/uploads/2022/10/Elegance-prime2.png",
    badge: "32% OFF",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isNewlyLaunched: true,
    rating: 4.8,
    reviewCount: 54
  },
  {
    id: "bosch-professional-grinder",
    title: "Bosch GWS 600 Professional 4-Inch Corded Angle Grinder (670W)",
    category: "Power Tools",
    brand: "Bosch",
    basePrice: 2299,
    compareAtPrice: 3200,
    unit: "Tool Kit with Guard",
    image: "https://www.bosch-professional.com/in/en/ocsmedia/299497-54/application-image/full/angle-grinder-pro-gws-600-060137505f.png",
    badge: "German Quality",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 186
  },
  {
    id: "bosch-impact-drill-500w",
    title: "Bosch GSB 500W Impact Drill Machine with 100-Piece Accessory Kit",
    category: "Power Tools",
    brand: "Bosch",
    basePrice: 3750,
    compareAtPrice: 4999,
    unit: "100-Piece Kit",
    image: "https://www.bbassets.com/media/uploads/p/l/40358391_2-bosch-gsb-500-re-corded-electric-drill-tool-set-1-cm-500-watt-blue.jpg",
    badge: "Full Kit",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: "crompton-surebreeze-fan",
    title: "Crompton Surebreeze Hill Briz 1200mm Ceiling Fan (Brown/White)",
    category: "Ceiling & Exhaust Fans",
    brand: "Crompton",
    basePrice: 1449,
    compareAtPrice: 2200,
    unit: "1 Fan Complete",
    image: "https://www.crompton.co.in/cdn/shop/files/Surebreezeseabreeze_Ivory__1angle_1.png?v=1772789657&width=1920",
    badge: "Top Seller",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 240
  },
  {
    id: "aristo-wheel-waste-bin",
    title: "Aristo Heavy-Duty Waste Bin with Foot Pedal, 65L (Blue)",
    category: "General Hardware & Tools",
    brand: "Aristo",
    basePrice: 2185,
    compareAtPrice: 2650,
    unit: "65 Liter Bin",
    image: "https://static1.industrybuying.com/products/cleaning/waste-recycling/dustbins/CLE.DUS.104534956_1629289805935.jpg",
    badge: "Heavy Plastic",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    isNewlyLaunched: true,
    rating: 4.8,
    reviewCount: 31
  },
  {
    id: "roff-cera-clean-5l",
    title: "Roff Cera Clean Rapid Tile & Ceramic Cleaner Liquid, 5 Liter",
    category: "Tiling & Adhesives",
    brand: "Pidilite",
    basePrice: 460,
    compareAtPrice: 550,
    unit: "5 Liter Can",
    image: "https://services.ibo.com/media/v1/products/images/e10af977-b941-447d-a1c7-0f5192961d22/roff-1-l-tile--stone-cleaner-1.jpeg",
    badge: "Quick Clean",
    deliveryTime: "Same day",
    payOnDelivery: true,
    freeDeliveryThreshold: 500,
    rating: 4.8,
    reviewCount: 110
  }

];

export const CURATED_COLLECTIONS = [
  {
    id: "paint-studio",
    title: "Paint Studio & Primers",
    subtitle: "Asian Paints & Birla Opus High-Sheen Emulsions, Putty & Primers",
    image: "/images/collections/paint-studio.jpg",
    link: "painting",
    tag: "Wholesale Rates"
  },
  {
    id: "architectural-hardware",
    title: "Architectural Hardware",
    subtitle: "Hettich Soft-Close Hinges, Channels & Godrej Locks",
    image: "/images/collections/architectural-hardware.jpg",
    link: "hinges-channels-handles",
    tag: "Original German Tech"
  },
  {
    id: "plumbing-fittings",
    title: "Plumbing, Tanks & Fittings",
    subtitle: "Prince Storefit Tanks, Astral CPVC, Supreme & Skipper Valves",
    image: "/images/collections/plumbing-fittings.jpg",
    link: "plumbing",
    tag: "100% Genuine"
  },
  {
    id: "sanitary-bath",
    title: "Sanitaryware & Bath Fittings",
    subtitle: "Trovant Western Commodes, B Venus Cocks & Health Faucets",
    image: "/images/collections/sanitary-bath.png",
    link: "sanitary-bath-fittings",
    tag: "Wholesale Rates"
  },
  {
    id: "electrical-piping",
    title: "Electrical Wiring & GI Boxes",
    subtitle: "Anchor Concealed GI Boxes, MCB DBs & Polycab / KEI FR Wires",
    image: "/images/collections/electrical-wiring.jpg",
    link: "wires",
    tag: "Instant Delivery"
  },
  {
    id: "power-tools",
    title: "Power Tools & Cutting Blades",
    subtitle: "Bosch Drills, Angle Grinders, Diamond Blades & Fasteners",
    image: "/images/collections/power-tools.jpg",
    link: "power-tools-accessories",
    tag: "German Tech"
  }
];

export const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "pavan",
    name: "Mr. Pavan",
    role: "General Contractor & Site Engineer",
    location: "Chhapra–Ishauvpur Road, Saran",
    title: "Mr. Pavan shares his Santu Hardware experience",
    videoUrl: "https://cdn.shopify.com/videos/c/vp/df20f93e18294fb49bc6e452747f1d1a/df20f93e18294fb49bc6e452747f1d1a.HD-1080p-2.5Mbps-74921881.mp4",
    posterUrl: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/preview_images/df20f93e18294fb49bc6e452747f1d1a.thumbnail.0000000000_small.jpg?v=1771479107",
    quote: "Earlier when we ran out of cement, Prince pipes or wire coils on-site, labour would sit idle for half a day. With Santu Hardware's fast site delivery and QR-verified authenticity, work never stops. Their wholesale bulk pricing is cheaper than market stores."
  },
  {
    id: "vishal",
    name: "Mr. Vishal",
    role: "Principal Interior Architect",
    location: "Saran, Bihar",
    title: "Hear what Mr. Vishal had to say",
    videoUrl: "https://cdn.shopify.com/videos/c/vp/5eabe64b53514400b638538aa71bc4b4/5eabe64b53514400b638538aa71bc4b4.HD-1080p-2.5Mbps-74921882.mp4",
    posterUrl: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/preview_images/5eabe64b53514400b638538aa71bc4b4.thumbnail.0000000000_small.jpg?v=1771479109",
    quote: "Finding authentic Hettich soft-close channels, Asian Paints Apex Shyne and Action Tesa HDHMR without adulteration used to be a headache. Santu Hardware guarantees 100% genuine hardware directly delivered to our residential sites."
  },
  {
    id: "gopal",
    name: "Mr. Gopal",
    role: "Home Builder & Villa Owner",
    location: "Man Pusauli, Saran",
    title: "Hear what Mr. Gopal had to say",
    videoUrl: "https://cdn.shopify.com/videos/c/vp/d4249f82797e491dacd7800cd580c71b/d4249f82797e491dacd7800cd580c71b.HD-1080p-2.5Mbps-74921880.mp4",
    posterUrl: "https://cdn.shopify.com/s/files/1/0872/6095/4939/files/preview_images/d4249f82797e491dacd7800cd580c71b.thumbnail.0000000000_small.jpg?v=1771479108",
    quote: "I saved over ₹65,000 on my house construction materials using Santu Hardware's tiered bulk pricing and Santu Cash cashback. The fact that I can pay on delivery gives complete peace of mind."
  }
];

export const POPULAR_BRANDS = [
  { name: "Asian Paints", category: "Paints & Waterproofing", tag: "Genuine", logo: "/images/brands/asian-paints.png" },
  { name: "JK Maxx Paints", category: "Paints, Putty & Primers", tag: "Genuine", logo: "/images/brands/jk-maxx.png" },
  { name: "Birla Opus", category: "Interior & Exterior Paints", tag: "Authorised", logo: "/images/brands/birla-opus.png" },
  { name: "Prince", category: "Pipes & Water Tanks", tag: "Original", logo: "/images/brands/prince.png" },
  { name: "Supreme", category: "CPVC & Drainage", tag: "Certified", logo: "/images/brands/supreme.png" },
  { name: "Skipper", category: "Plumbing & Valves", tag: "Heavy Brass", logo: "/images/brands/skipper.svg" },
  { name: "Astral", category: "Solvent Cement & CPVC", tag: "Certified", logo: "/images/brands/astral.png" },
  { name: "Trovant", category: "Sanitary & Commodes", tag: "10 Yrs Warranty", logo: "/images/brands/trovant.png" },
  { name: "B Venus", category: "Bath Cocks & Faucets", tag: "Solid Brass", logo: "/images/brands/b-venus.png" },
  { name: "Anchor", category: "GI Boxes & MCB DBs", tag: "Heavy Gauge", logo: "/images/brands/anchor.svg" },
  { name: "Fevicol (Pidilite)", category: "Adhesives & Chemicals", tag: "Original", logo: "/images/brands/fevicol.png" },
  { name: "Dr. Fixit", category: "Waterproofing", tag: "Water Shield", logo: "/images/brands/dr-fixit.png" },
  { name: "Polycab", category: "Wires & Cables", tag: "FR-LSH", logo: "/images/brands/polycab.png" },
  { name: "KEI Wires", category: "Cables & Conduits", tag: "ISI Marked", logo: "/images/brands/kei.png" },
  { name: "Havells", category: "Switches & Lighting", tag: "Authorised", logo: "/images/brands/havells.svg" },
  { name: "Hettich", category: "Architectural Hardware", tag: "German Tech", logo: "/images/brands/hettich.svg" },
  { name: "Godrej", category: "Locks & Security", tag: "100% Genuine", logo: "/images/brands/godrej.svg" },
  { name: "Bosch", category: "Power Tools", tag: "German Quality", logo: "/images/brands/bosch.svg" }
];
