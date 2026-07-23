import React, { useState } from 'react';
import { WeddingPackage } from '../types';
import { WEDDING_PACKAGES } from '../data/weddingData';
import { Check, Sparkles, Users, ArrowRight, Info, Scale, CheckCircle2, X } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackageForBooking: (pkg: WeddingPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackageForBooking }) => {
  const [selectedDetailPackage, setSelectedDetailPackage] = useState<WeddingPackage | null>(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="packages" className="py-20 bg-amber-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Katalog Paket Pernikahan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight mb-4">
            Pilihan Paket Sesuai Impian & Skala Acara Anda
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Semua paket telah mencakup tim koordinasi profesional, perencanaan terstruktur, dan kemitraan dengan vendor kelas atas di Indonesia.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowComparisonModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 hover:bg-amber-200/80 text-amber-900 text-sm font-semibold border border-amber-300 shadow-xs transition-colors cursor-pointer"
            >
              <Scale className="w-4 h-4 text-amber-800" />
              <span>Bandingkan Semua Fitur Paket</span>
            </button>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEDDING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden relative ${
                pkg.popular
                  ? 'border-amber-500 shadow-xl ring-2 ring-amber-400/50 md:-translate-y-2'
                  : 'border-amber-200/80 shadow-md hover:shadow-lg hover:border-amber-300'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 text-xs font-bold uppercase tracking-widest text-center py-1.5 px-4">
                  ★ Paling Banyak Dipilih
                </div>
              )}

              {/* Cover Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.coverImage}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1 bg-amber-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-amber-100 border border-amber-400/30">
                    <Users className="w-3 h-3 text-amber-300" />
                    {pkg.guestCapacity}
                  </span>
                </div>
              </div>

              {/* Package Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-amber-950 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium italic mb-4">
                    "{pkg.tagline}"
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-100">
                    <span className="text-xs text-stone-500 block uppercase font-medium">Investasi Paket</span>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-900">
                      {formatIDR(pkg.price)}
                    </div>
                    <span className="text-[11px] text-stone-500 italic">*Sudah termasuk koordinasi & pendampingan lengkap</span>
                  </div>

                  <p className="text-xs text-stone-600 mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">Fitur Utama:</span>
                    {pkg.includes.slice(0, 3).map((cat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">
                          <strong className="text-amber-950 font-medium">{cat.category}:</strong> {cat.items[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <button
                    onClick={() => onSelectPackageForBooking(pkg)}
                    className="w-full py-3 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Pesan Paket Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedDetailPackage(pkg)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200/70 text-stone-800 font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-stone-600" />
                    <span>Rincian Layanan Lengkap</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedDetailPackage && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 relative">
            
            {/* Header image & title */}
            <div className="relative h-56 bg-stone-900">
              <img
                src={selectedDetailPackage.coverImage}
                alt={selectedDetailPackage.name}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedDetailPackage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Rincian Paket Lengkap</span>
                <h3 className="font-serif text-3xl font-bold">{selectedDetailPackage.name}</h3>
                <p className="text-sm text-stone-200 italic">{selectedDetailPackage.tagline}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div>
                  <span className="text-xs text-stone-500 uppercase block font-semibold">Total Investasi</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-950">
                    {formatIDR(selectedDetailPackage.price)}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-xs font-semibold text-amber-900 border border-amber-200">
                  <Users className="w-4 h-4 text-amber-700" />
                  Kapasitas: {selectedDetailPackage.guestCapacity}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-amber-950 mb-4">Cakupan Fasilitas & Layanan Included:</h4>
                <div className="space-y-6">
                  {selectedDetailPackage.includes.map((cat, idx) => (
                    <div key={idx} className="border-b border-stone-100 pb-4 last:border-none">
                      <h5 className="font-bold text-sm text-amber-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        {cat.category}
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs text-stone-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const pkg = selectedDetailPackage;
                    setSelectedDetailPackage(null);
                    onSelectPackageForBooking(pkg);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-50 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Pesan Paket {selectedDetailPackage.name} Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedDetailPackage(null)}
                  className="px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-sm transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-amber-950">Perbandingan Matriks Paket Wedding</h3>
                <p className="text-xs text-stone-500">Pilih paket yang paling tepat sesuai skala dan anggaran acara Anda</p>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="w-9 h-9 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-amber-200 bg-amber-50">
                    <th className="p-3 font-bold text-amber-950 w-1/4">Fitur / Komponen</th>
                    {WEDDING_PACKAGES.map((pkg) => (
                      <th key={pkg.id} className="p-3 font-bold text-amber-900 w-1/4 text-center">
                        <div className="font-serif text-sm font-bold text-amber-950">{pkg.name}</div>
                        <div className="text-amber-800 font-normal">{formatIDR(pkg.price)}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Kapasitas Tamu</td>
                    <td className="p-3 text-center">50 - 150 Tamu</td>
                    <td className="p-3 text-center font-bold text-amber-900 bg-amber-50/50">200 - 500 Tamu</td>
                    <td className="p-3 text-center">600 - 1500+ Tamu</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Jumlah Tim WO On-The-Day</td>
                    <td className="p-3 text-center">4 Crew WO</td>
                    <td className="p-3 text-center font-bold text-amber-900 bg-amber-50/50">8 Crew WO + Personal Asst</td>
                    <td className="p-3 text-center">14 Crew WO Master Director</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Dekorasi Pelaminan</td>
                    <td className="p-3 text-center">4-6 Meter Fresh Flower</td>
                    <td className="p-3 text-center font-bold text-amber-900 bg-amber-50/50">8-10 Meter Fresh Import</td>
                    <td className="p-3 text-center">12-16 Meter Floral Tunnel 3D</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Dokumentasi Video</td>
                    <td className="p-3 text-center">1 Videografer + Teaser IG</td>
                    <td className="p-3 text-center font-bold text-amber-900 bg-amber-50/50">2 Video Cinema 4K + Drone</td>
                    <td className="p-3 text-center">Full Cinema + Live Stream + Same Day Edit</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Musik & Hiburan</td>
                    <td className="p-3 text-center">Acoustic Live Music</td>
                    <td className="p-3 text-center font-bold text-amber-900 bg-amber-50/50">Full Band Entertainment</td>
                    <td className="p-3 text-center">Mini Orchestra + Pyro Show</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-800">Aksi Pemesanan</td>
                    {WEDDING_PACKAGES.map((pkg) => (
                      <td key={pkg.id} className="p-3 text-center">
                        <button
                          onClick={() => {
                            setShowComparisonModal(false);
                            onSelectPackageForBooking(pkg);
                          }}
                          className="px-3 py-2 rounded-lg bg-amber-900 text-amber-50 text-xs font-semibold hover:bg-amber-950 w-full"
                        >
                          Pilih Paket
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
