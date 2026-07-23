import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/weddingData';
import { GalleryItem } from '../types';
import { Heart, Maximize2, Search, Sparkles, Filter, Calendar, MapPin, Grid, LayoutGrid } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    GALLERY_ITEMS.forEach((item) => {
      initial[item.id] = { count: item.likes, liked: false };
    });
    return initial;
  });

  const categories = [
    { id: 'all', label: 'Semua Momen' },
    { id: 'dekorasi', label: 'Dekorasi & Stage' },
    { id: 'venue', label: 'Venue & Chapel' },
    { id: 'catering', label: 'Catering Art' },
    { id: 'busana', label: 'Busana & Makeup' },
    { id: 'dokumentasi', label: 'Foto & Video' },
    { id: 'moment', label: 'Moment Sakral' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.coupleName && item.coupleName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.venueName && item.venueName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleToggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikesState((prev) => {
      const current = prev[id];
      if (!current) return prev;
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
    });
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Dokumentasi Portofolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight mb-4">
            Galeri Momen Indah Karya Kami
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Kumpulan momen kebahagiaan pasangan pengantin yang telah memercayakan hari istimewanya kepada Eternal Moments Wedding Organizer.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-amber-900 text-amber-50 shadow-xs'
                      : 'bg-white/80 text-stone-700 hover:bg-amber-100/70 hover:text-amber-950'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari pasangan / venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-amber-200 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
              />
            </div>

          </div>

          <div className="text-xs text-stone-500 font-medium px-2">
            Menampilkan <strong className="text-amber-900">{filteredItems.length}</strong> foto inspirasi pernikahan
          </div>
        </div>

        {/* Photo Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-amber-50/40 rounded-3xl border border-dashed border-amber-300">
            <p className="text-stone-500 text-sm">Tidak ada foto yang cocok dengan kata kunci pencarian Anda.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-amber-800 underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const likeInfo = likesState[item.id] || { count: item.likes, liked: false };

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden bg-stone-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-80"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge & Like Button */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="bg-amber-950/80 backdrop-blur-md text-amber-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-400/30">
                      {item.category}
                    </span>

                    <button
                      onClick={(e) => handleToggleLike(e, item.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all flex items-center gap-1 text-xs font-semibold ${
                        likeInfo.liked
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-stone-900/60 text-stone-200 hover:bg-stone-900'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${likeInfo.liked ? 'fill-white' : ''}`} />
                      <span>{likeInfo.count}</span>
                    </button>
                  </div>

                  {/* Bottom Content Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white transform group-hover:-translate-y-1 transition-transform">
                    {item.coupleName && (
                      <div className="text-amber-300 text-xs font-serif font-bold mb-0.5">
                        {item.coupleName}
                      </div>
                    )}

                    <h4 className="font-serif text-sm font-semibold text-stone-100 line-clamp-1 mb-1">
                      {item.title}
                    </h4>

                    {item.venueName && (
                      <div className="flex items-center gap-1 text-[11px] text-stone-300">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{item.venueName}</span>
                      </div>
                    )}

                    <div className="mt-2 pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-amber-200/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Klik untuk perbesar</span>
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
