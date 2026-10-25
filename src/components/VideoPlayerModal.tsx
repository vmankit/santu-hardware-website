import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Star, CheckCircle2 } from 'lucide-react';

export const VideoPlayerModal: React.FC = () => {
  const { selectedVideo, closeVideoModal } = useCart();

  if (!selectedVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={closeVideoModal} />
      
      <div className="relative bg-black rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 border border-gray-800">
        
        {/* Close Button */}
        <button
          onClick={closeVideoModal}
          className="absolute top-4 right-4 z-20 size-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black mx-auto flex items-center justify-center">
          <video
            src={selectedVideo.url}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption & Review details */}
        <div className="p-4 md:p-5 bg-[#111827] text-white">
          <div className="flex items-center gap-1 text-[#F8C200] mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
            <span className="text-xs text-gray-400 font-semibold ml-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Verified Customer Experience
            </span>
          </div>
          <h3 className="font-extrabold text-sm md:text-base text-white mb-1">
            {selectedVideo.title}
          </h3>
          <p className="text-xs text-gray-300 italic leading-relaxed">
            "{selectedVideo.quote}"
          </p>
        </div>

      </div>
    </div>
  );
};
