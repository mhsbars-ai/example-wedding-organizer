import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/weddingData';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles, Plus, Check, MapPin, Calendar, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [selectedTestiModal, setSelectedTestiModal] = useState<Testimonial | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Testimonial Form State
  const [newCouple, setNewCouple] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newVenue, setNewVenue] = useState('');
  const [newPackage, setNewPackage] = useState('Royal Heritage');
  const [newQuote, setNewQuote] = useState('');
  const [newFullStory, setNewFullStory] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouple || !newQuote) return;

    const createdTesti: Testimonial = {
      id: `testi-custom-${Date.now()}`,
      coupleName: newCouple,
      weddingDate: newDate || '2026',
      venue: newVenue || 'Ballroom & Resort',
      packageTier: newPackage,
      rating: newRating,
      quote: newQuote,
      fullStory: newFullStory || newQuote,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      galleryImages: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80']
    };

    setTestimonialsList([createdTesti, ...testimonialsList]);
    setSubmittedMessage(true);

    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
      setNewCouple('');
      setNewQuote('');
      setNewFullStory('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-stone-900 via-amber-950/90 to-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Kisah Pengantin Kami</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 tracking-tight">
              Testimoni Kebahagiaan Pasangan
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Kepuasan dan ketenangan pasangan pengantin serta keluarga adalah pencapaian tertinggi bagi tim Eternal Moments.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-amber-50 font-semibold text-xs sm:text-sm hover:from-amber-700 hover:to-amber-900 transition-all shadow-md cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Bagikan Pengalaman Anda</span>
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsList.map((testi) => (
            <div
              key={testi.id}
              className="bg-stone-900/80 border border-amber-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-colors"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testi.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/30" />
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed mb-4">
                  "{testi.quote}"
                </p>

                <p className="text-xs text-stone-300 line-clamp-3 mb-6">
                  {testi.fullStory}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testi.avatarUrl}
                    alt={testi.coupleName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/60"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">{testi.coupleName}</h4>
                    <div className="flex items-center gap-2 text-[11px] text-stone-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {testi.venue.split(',')[0]}
                      </span>
                      <span>•</span>
                      <span className="text-amber-300">{testi.packageTier}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTestiModal(testi)}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline cursor-pointer"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Read Detail Testimonial Modal */}
      {selectedTestiModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-stone-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl">
            <button
              onClick={() => setSelectedTestiModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedTestiModal.avatarUrl}
                alt={selectedTestiModal.coupleName}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-amber-100">{selectedTestiModal.coupleName}</h3>
                <p className="text-xs text-amber-300 font-medium">{selectedTestiModal.packageTier} • {selectedTestiModal.weddingDate}</p>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" /> {selectedTestiModal.venue}
                </p>
              </div>
            </div>

            <div className="my-4 p-4 rounded-2xl bg-amber-950/50 border border-amber-500/20">
              <p className="font-serif italic text-amber-200 text-sm">
                "{selectedTestiModal.quote}"
              </p>
            </div>

            <div className="text-xs sm:text-sm text-stone-200 space-y-3 leading-relaxed mb-6">
              <p>{selectedTestiModal.fullStory}</p>
            </div>

            {selectedTestiModal.galleryImages && selectedTestiModal.galleryImages.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-6">
                {selectedTestiModal.galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Wedding memory"
                    className="w-full h-32 object-cover rounded-xl border border-stone-700"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => setSelectedTestiModal(null)}
              className="w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-700 text-amber-50 font-bold text-xs"
            >
              Tutup Kisah
            </button>
          </div>
        </div>
      )}

      {/* Add Testimonial Form Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-stone-900 border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-serif text-2xl font-bold text-amber-100 mb-1">Tuliskan Ulasan Pernikahan Anda</h3>
            <p className="text-xs text-stone-400 mb-6">
              Terima kasih telah mempercayakan momen sakral Anda bersama Eternal Moments.
            </p>

            {submittedMessage ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-2">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-emerald-200">Terima Kasih Atas Ulasan Anda!</h4>
                <p className="text-xs text-stone-300">Testimoni Anda telah berhasil ditambahkan ke halaman ulasan.</p>
              </div>
            ) : (
              <form onSubmit={handleAddTestimonialSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">Nama Pasangan Pengantin *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi & Ratna"
                    value={newCouple}
                    onChange={(e) => setNewCouple(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1">Tanggal Pernikahan</label>
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1">Paket Acara</label>
                    <select
                      value={newPackage}
                      onChange={(e) => setNewPackage(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Intimate Harmony">Intimate Harmony</option>
                      <option value="Royal Heritage">Royal Heritage</option>
                      <option value="Grand Imperial Luxury">Grand Imperial Luxury</option>
                      <option value="Custom Theme">Custom Theme</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">Lokasi / Venue</label>
                  <input
                    type="text"
                    placeholder="Contoh: Hotel Gran Mahakam, Jakarta"
                    value={newVenue}
                    onChange={(e) => setNewVenue(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">Kutipan Singkat (Satu Kalimat) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Acara berjalan lancar tanpa celah, tim sangat sigap!"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-200 mb-1">Cerita Lengkap Pengalaman Anda</label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan kesan pesan Anda terhadap tim WO, vendor, dan suasana acara..."
                    value={newFullStory}
                    onChange={(e) => setNewFullStory(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs shadow-md"
                >
                  Kirim Ulasan Sekarang
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
