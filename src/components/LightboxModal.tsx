import React from 'react';
import { GalleryItem } from '../types';
import { X, MapPin, Calendar, Heart, Share2, Sparkles, Check } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
  onLike: (id: string) => void;
  isLiked?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onLike,
  isLiked
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-stone-900 border border-amber-500/30 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl text-white relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-950/80 text-white flex items-center justify-center hover:bg-stone-950 transition-colors border border-amber-500/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Photo View */}
        <div className="md:col-span-7 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[80vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Info Panel */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-stone-900">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-950 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
                {item.category}
              </span>
              {item.date && (
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  {item.date}
                </span>
              )}
            </div>

            {item.coupleName && (
              <h4 className="font-serif text-amber-300 text-lg font-bold">
                {item.coupleName}
              </h4>
            )}

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mb-3 leading-snug">
              {item.title}
            </h3>

            {item.venueName && (
              <div className="flex items-center gap-1.5 text-xs text-amber-200/90 mb-4 pb-3 border-b border-stone-800">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item.venueName}</span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
              {item.description}
            </p>
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 border-t border-stone-800 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onLike(item.id)}
                className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                  isLiked
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                <span>{isLiked ? 'Disukai' : 'Sukai Foto'} ({item.likes + (isLiked ? 1 : 0)})</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 text-xs font-semibold flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Tersalin' : 'Bagikan'}</span>
              </button>
            </div>

            <p className="text-[10px] text-stone-500 text-center">
              Dokumentasi Resmi Portofolio Eternal Moments Wedding Organizer
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
