import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroInfoStrip } from './components/HeroInfoStrip';
import { SpecialDeals } from './components/SpecialDeals';
import { ProductCategories } from './components/ProductCategories';
import { BrandsSection } from './components/BrandsSection';
import { PaintColorSection } from './components/PaintColorSection';
import { FreeDeliverySection } from './components/FreeDeliverySection';
import { WhySantuHardware } from './components/WhySantuHardware';
import { HowToOrder } from './components/HowToOrder';
import { CantFindItSection } from './components/CantFindItSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-brand-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area with Bottom Padding for Mobile Action Bar */}
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <HeroInfoStrip />
        <SpecialDeals />
        <ProductCategories />
        <BrandsSection />
        <PaintColorSection />
        <FreeDeliverySection />
        <WhySantuHardware />
        <HowToOrder />
        <CantFindItSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile-Only Fixed Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
};

export default App;
