import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, ArrowRight, ShieldCheck, Heart, PhoneCall, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onOpenBookingWithDate: (date: string, guests: number, location: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePackages,
  onOpenBookingWithDate,
  onOpenConsultation
}) => {
  const [quickDate, setQuickDate] = useState('');
  const [quickGuests, setQuickGuests] = useState(200);
  const [quickCity, setQuickCity] = useState('Jakarta');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithDate(quickDate, quickGuests, quickCity);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-stone-900 text-white">
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Wedding Backdrop"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>Professional Wedding Organizer #1 Pilihan Pasangan Elegan</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-amber-50 leading-[1.15]">
              Wujudkan Pernikahan <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-rose-200">Impian Abadi</span> yang Elegan & Tanpa Stres
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
              Kami mendesain, mengordinasikan, dan mengeksekusi setiap detail hari bahagia Anda—mulai dari dekorasi berkelas, rias profesional, hingga rundown presisi tanpa celah.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplorePackages}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-amber-50 font-semibold shadow-lg hover:shadow-amber-900/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat Katalog Paket</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-amber-200/30 text-amber-100 font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Konsultasi Gratis via WA</span>
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-amber-200">500+</span>
                <span className="text-xs text-stone-400">Pernikahan Terlaksana</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-amber-200">99.8%</span>
                <span className="text-xs text-stone-400">Kepuasan Klien</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-amber-200">10+ Thn</span>
                <span className="text-xs text-stone-400">Pengalaman WO</span>
              </div>
            </div>
          </div>

          {/* Quick Date Availability & Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/80 border border-amber-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-600 to-amber-800 text-amber-50 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Garansi Jadwal
              </div>

              <h3 className="font-serif text-xl font-bold text-amber-100 mb-2">
                Cek Ketersediaan & Estimasi
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Masukkan rencana tanggal dan lokasi untuk memulai pemesanan paket acara Anda.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                {/* Tanggal */}
                <div>
                  <label className="block text-xs font-medium text-amber-200/90 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Rencana Tanggal Acara
                  </label>
                  <input
                    type="date"
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full bg-stone-950/80 border border-stone-700 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none transition-colors"
                  />
                </div>

                {/* Estimasi Tamu */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-amber-200/90 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      Estimasi Jumlah Tamu
                    </label>
                    <span className="text-xs font-bold text-amber-300">{quickGuests} Tamu</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={quickGuests}
                    onChange={(e) => setQuickGuests(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                    <span>50 (Intimate)</span>
                    <span>500 (Medium)</span>
                    <span>1500+ (Grand)</span>
                  </div>
                </div>

                {/* Kota / Lokasi */}
                <div>
                  <label className="block text-xs font-medium text-amber-200/90 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Kota Penyelenggaraan
                  </label>
                  <select
                    value={quickCity}
                    onChange={(e) => setQuickCity(e.target.value)}
                    className="w-full bg-stone-950/80 border border-stone-700 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none transition-colors"
                  >
                    <option value="Jakarta">Jabodetabek</option>
                    <option value="Bandung">Bandung & Sekitarnya</option>
                    <option value="Surabaya">Surabaya & Malang</option>
                    <option value="Bali">Bali (Island Wedding)</option>
                    <option value="Yogyakarta">Yogyakarta & Solo</option>
                    <option value="Lainnya">Kota Lainnya (Seluruh Indonesia)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Heart className="w-4 h-4 fill-amber-950" />
                  <span>Lanjutkan Pemesanan Paket</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Konsultasi awal 100% Gratis
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Rincian Transparan
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
