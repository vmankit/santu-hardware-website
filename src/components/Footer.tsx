import React, { useState } from 'react';
import { ArrowRight, ChevronRight, MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#F8C200] text-[#111827] pt-12 md:pt-16 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Top App Download & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-black/15">
          
          {/* Col 1: App Badges & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo-mark.png" alt="Santu Hardware" className="h-10 w-auto shrink-0" width="52" height="40" />
              <span className="font-extrabold text-2xl tracking-tight text-gray-950">
                Santu <span className="text-[#059669]">Hardware</span>
              </span>
            </div>

            <p className="text-xs text-gray-800 font-medium leading-relaxed">
              Paints, hardware, plumbing &amp; electrical supplies in Ishauvpur, Saran.
              Free delivery within 30 km of the shop.
            </p>

            <div className="pt-1 text-xs text-gray-800 font-medium not-italic">
              <div className="font-bold text-gray-950 mb-1">Shop address</div>
              <address className="not-italic leading-relaxed">
                {STORE_CONFIG.address}
              </address>
              <a
                href={STORE_CONFIG.googleListingUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block mt-1.5 font-bold underline hover:no-underline"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="font-extrabold text-base mb-4 text-gray-950 uppercase tracking-wider text-xs">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-800">
              <li><a href="#about" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> About Us</a></li>
              <li><a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Contact Us</a></li>
              <li><a href="#deals-section" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Wholesale Price Lists</a></li>
              <li><a href="#calculator-section" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Paint Calculator</a></li>
              <li><a href="#categories-section" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Shop by Category</a></li>
              <li><a href="#faq" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Contractor FAQ's</a></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h3 className="font-extrabold text-base mb-4 text-gray-950 uppercase tracking-wider text-xs">
              Policy &amp; Guarantee
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-800">
              <li><a href="#policy" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> 100% Genuine Guarantee</a></li>
              <li><a href="#policy" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Same-day Shipping Policy</a></li>
              <li><a href="#policy" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Easy Hassle-Free Returns</a></li>
              <li><a href="#policy" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Terms of Service</a></li>
              <li><a href="#policy" className="hover:text-black flex items-center gap-1.5 py-1.5"><ChevronRight className="w-3.5 h-3.5" /> Privacy &amp; Data Security</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h3 className="font-extrabold text-base mb-4 text-gray-950 uppercase tracking-wider text-xs">
              Contact Information
            </h3>
            <div className="space-y-3 text-xs text-gray-800 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
                <span>
                  <strong>Santu Hardware:</strong> {STORE_CONFIG.address}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-900 shrink-0" />
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline font-bold"
                >
                  Order on WhatsApp
                </a>
              </p>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${STORE_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:underline font-bold font-mono block">
                    {STORE_CONFIG.phone}
                  </a>
                  <a href={`tel:${STORE_CONFIG.secondaryPhone.replace(/\s+/g, '')}`} className="hover:underline font-bold font-mono block">
                    {STORE_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Subscription Row */}
        <div className="py-8 max-w-xl mx-auto text-center">
          <h4 className="font-extrabold text-sm md:text-base text-gray-950 mb-2">
            Get a first peek at New Products, Special Paint Offers, and wholesale price drops.
          </h4>
          
          <form onSubmit={handleSubscribe} className="flex items-center bg-white rounded-full p-1 border border-black/20 shadow-sm max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your contractor or personal email"
              required
              className="flex-1 bg-transparent px-4 py-2 text-xs text-gray-900 placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              className="bg-[#111827] hover:bg-black text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors shrink-0 flex items-center gap-1"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {subscribed && (
            <p className="text-xs font-bold text-[#059669] mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to Santu Hardware alerts!
            </p>
          )}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-black/15 text-center text-xs text-gray-800 font-medium">
          <p>© 2026 Santu Hardware. All Rights Reserved. Construction Materials, Paints &amp; Hardware Delivered Fast.</p>
        </div>

      </div>
    </footer>
  );
};
