import React from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { DealsOfTheWeek } from './components/DealsOfTheWeek';
import { TrustAuthenticityBanner } from './components/TrustAuthenticityBanner';
import { NewlyLaunched } from './components/NewlyLaunched';
import { CatalogSection } from './components/CatalogSection';
import { CuratedCollections } from './components/CuratedCollections';
import { CalculatorSection } from './components/CalculatorSection';
import { BrandPartnersSection } from './components/BrandPartnersSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PincodeModal } from './components/PincodeModal';
import { WalletModal } from './components/WalletModal';
import { LoginModal } from './components/LoginModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col antialiased text-gray-900 selection:bg-[#F8C200] selection:text-black">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        <HeroBanner />
        <CategoryGrid />
        <DealsOfTheWeek />
        <BrandPartnersSection />
        <NewlyLaunched />
        <CatalogSection />
        <CuratedCollections />
        <CalculatorSection />
        <TrustAuthenticityBanner />
      </main>

      {/* Yellow Brand Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CartDrawer />
      <PincodeModal />
      <WalletModal />
      <LoginModal />
      <VideoPlayerModal />

      {/* Floating Action Triggers */}
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
