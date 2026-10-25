# Santu Hardware — Paints, Hardware, Plumbing & Electrical (Free Delivery within 30 km)

A production-ready storefront for **Santu Hardware**, Ishauvpur, Saran, Bihar — genuine Asian Paints, JK Maxx and Birla Opus paints, plus hardware, plumbing and electrical supplies, with free delivery within 30 km. Contact: 7739802334 / 9097441600.

Santu Hardware does not stock cement, plywood, CCTV equipment, inverters or Action Tesa products — the catalogue, categories and copy are scoped to what the shop actually sells.

---

## 🚀 Key Features

- **Free Delivery Bar**: Interactive delivery selector and pincode checker for the shop's confirmed 30 km service area, with a live header badge.
- **Animated Search Bar**: Auto-rotating keyword placeholders (Asian Paints, wall putty, KEI wire, LED bulb, CPVC pipe, door lock, Fevicol) with instant catalogue search and filtering.
- **Santu Cash & Wallet**: Wallet breakdown modal showing 1% cashback on every order, redeemable above ₹500.
- **Category Tiles**: Paints, hardware, plumbing, electrical, sanitary/bath, power tools and related departments, with live filtering.
- **Deals Of The Week** and **Newly Launched** rails with bulk-tier pricing.
- **Interactive Slide-over Cart Drawer**:
  - Live free-delivery threshold tracker (free above ₹500)
  - Santu Cash earnings calculation
  - Quantity steppers, pay-on-delivery flow
  - WhatsApp one-click order generation with an itemised breakdown
- **Paint Quantity Calculator**: Estimate interior/exterior paint, primer and wall putty needed from built-up area, with a direct WhatsApp quote request naming Asian Paints, JK Maxx and Birla Opus.
- **Direct Brand Partnerships Showcase**: Asian Paints, JK Maxx, Birla Opus, Pidilite (Fevicol), Hettich, Godrej, Astral, KEI Wires, Havells, Bosch, Dr. Fixit, Finolex.
- **Footer**: Store address, both contact numbers, Google Maps directions link, newsletter sign-up, and policy links.

No fabricated authenticity claims — product origin is "sourced direct from authorised brands," not a QR-verification system the shop doesn't have.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 8 + TypeScript
- **Styling**: Tailwind CSS with custom Santu Hardware design tokens (`#F8C200` brand yellow, `#059669` express green, `#111827` ink dark)
- **Typography**: `Poppins` geometric sans + `IBM Plex Mono` for prices
- **Icons**: Lucide Icons
- **State Management**: React Context (`CartContext`) with LocalStorage persistence

All store details (phone numbers, address, delivery radius, categories, brands, products) live in `src/data/storeData.ts`.

---

## 🏃 Running Locally

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```
