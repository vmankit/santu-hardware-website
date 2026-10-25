import React from 'react';
import { TESTIMONIALS } from '../data/storeData';
import { useCart } from '../context/CartContext';
import { Play, Star, Quote, Heart, CheckCircle2 } from 'lucide-react';

export const CustomerVideoStories: React.FC = () => {
  const { openVideoModal } = useCart();

  return (
    <section className="py-8 md:py-14 bg-white" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-bold mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Verified Contractor &amp; Homeowner Reviews</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Customers Love Santu Hardware
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1.5">
            Contractors, painters and home builders around Ishauvpur who shop with us.
          </p>
        </div>

        {/* 3 Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group bg-gray-50/80 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Video Thumbnail with Play Button */}
              <div
                onClick={() => openVideoModal({ url: t.videoUrl, title: t.title, quote: t.quote })}
                className="relative aspect-video sm:aspect-square w-full bg-black cursor-pointer overflow-hidden"
              >
                <img
                  src={t.posterUrl}
                  alt={t.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                  <div className="size-14 rounded-full bg-[#F8C200] group-hover:bg-[#E5B200] text-gray-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 active:scale-95 pl-1">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Verified Customer
                </div>

                {/* Bottom title on thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-tight drop-shadow">{t.title}</p>
                </div>
              </div>

              {/* Quote & Author Info */}
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-700 italic leading-relaxed relative">
                    <Quote className="w-4 h-4 text-gray-300 inline mr-1 -mt-1" />
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-xs text-gray-900">{t.name}</h4>
                    <p className="text-[10px] text-gray-500 font-medium">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-200">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
