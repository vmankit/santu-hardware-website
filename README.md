# Santu Hardware — Modern Retail Website

A production-quality, modern, mobile-first website for **SANTU HARDWARE**, a premier Paints, Hardware, Plumbing & Electrical store.

---

## 🚀 Key Features

- **Mobile-First High-Conversion UI**: Designed specifically for smartphone screens (320px, 360px, 375px, 390px, 412px, 430px) as well as tablets and desktops.
- **5-Second Value Proposition**: Instant clarity upon opening — store categories, 30 KM free delivery highlight, featured brand deals, and direct Call/WhatsApp action buttons.
- **Fixed Mobile Bottom Action Bar**: Sticky mobile action bar with one-touch **CALL**, **WHATSAPP**, and **DIRECTIONS** triggers.
- **Special Paint Deals**: Prominent deal showcases for **JK Maxx Paints**, **Birla Opus**, and **Asian Paints** with exact pre-filled WhatsApp enquiry messages.
- **Interactive Product Catalog**: Comprehensive categories (Paints, Hardware, Plumbing, Electrical, Tools, Home Improvement) with subcategory detail popups and quick inquiry triggers.
- **Interactive Paint Colour Studio**: Realistic shade swatches across 6 families (Elegant Whites, Warm Neutrals, Modern Greys, Fresh Greens, Calm Blues, Bold Colours) with live wall finish simulation.
- **Interactive 30 KM Delivery Checker**: Allows customers to type their locality/area and directly verify free delivery eligibility via WhatsApp.
- **Centralized Configuration**: All store details, phone numbers, delivery radius, brands, categories, and address can be updated from a single file (`src/data/storeConfig.ts`).
- **Honest & Trustworthy**: Zero fake reviews, zero fake countdowns, zero invented ratings, and configurable address display.
- **SEO & Performance**: Optimized meta tags, OpenGraph, JSON-LD Schema.org LocalBusiness data, and lightning-fast bundle delivery.

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design tokens, modern typography (`Outfit` + `Plus Jakarta Sans`)
- **Icons**: Lucide Icons
- **Production Asset Pipeline**: Vite optimized bundler with gzip compression

---

## 📁 Project Structure

```
site/
├── public/
│   └── images/
│       ├── hero-store.jpg        # Store interior & showroom
│       ├── paint-deals.jpg       # Paint buckets & swatches
│       ├── hardware-tools.jpg    # Hardware, tools & fittings
│       └── delivery-service.jpg  # Local 30 KM delivery vehicle
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with mobile drawer
│   │   ├── Hero.tsx              # Mobile-first hero section
│   │   ├── HeroInfoStrip.tsx     # 3-card info highlight strip
│   │   ├── SpecialDeals.tsx      # JK Maxx, Birla Opus, Asian Paints
│   │   ├── ProductCategories.tsx # 2-column category grid & modal
│   │   ├── BrandsSection.tsx     # Brand showcase with mobile swipe
│   │   ├── PaintColorSection.tsx # Swatches & live wall preview
│   │   ├── FreeDeliverySection.tsx # 30 KM delivery & area checker
│   │   ├── WhySantuHardware.tsx  # 6 value proposition cards
│   │   ├── HowToOrder.tsx        # 3-step order process
│   │   ├── CantFindItSection.tsx # Unlisted product conversion section
│   │   ├── ContactSection.tsx    # Direct contact & store information
│   │   ├── Footer.tsx            # Clean modern footer
│   │   ├── MobileBottomBar.tsx   # Fixed sticky bottom action bar
│   │   └── FloatingWhatsApp.tsx  # Desktop floating WhatsApp button
│   ├── data/
│   │   └── storeConfig.ts        # CENTRAL CONFIGURATION FILE
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                    # SEO Meta, OpenGraph & JSON-LD Schema
├── tailwind.config.js
└── package.json
```

---

## ⚙️ How to Update Store Information

Open [`src/data/storeConfig.ts`](file:///c:/Users/rolln/Downloads/site/src/data/storeConfig.ts):

- **Phone / WhatsApp**: Update `phoneRaw`, `phoneDisplay`, and `whatsappNumber`.
- **Address**: Set `address: 'Your Exact Store Street Address, City, State Pincode'` to display the actual physical store location.
- **Opening Hours**: Set `openingHours: 'Mon - Sat: 8:00 AM - 8:30 PM'`.
- **Deals & Brands**: Add or customize offers and brand listings.

---

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
