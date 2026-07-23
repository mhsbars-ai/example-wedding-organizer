import React from 'react';
import { VENDOR_PARTNERS } from '../data/weddingData';
import { Award, Star, MapPin, Sparkles, Building2, ExternalLink } from 'lucide-react';

export const VendorsSection: React.FC = () => {
  return (
    <section id="vendors" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-800" />
            <span>Kemitraan Vendor Ternama</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight mb-4">
            Didukung Vendor & Venue Bintang Lima
          </h2>
          <p className="text-stone-600 text-base">
            Eternal Moments bekerja sama secara eksklusif dengan vendor terverifikasi untuk menjamin kualitas dekorasi, katering, serta dokumentasi standar terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENDOR_PARTNERS.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={vendor.imageUrl}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-300 text-xs font-bold flex items-center gap-1 border border-amber-400/30">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>{vendor.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider bg-amber-100/80 px-2.5 py-1 rounded-md inline-block mb-2">
                    {vendor.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-amber-950 mb-1 group-hover:text-amber-800 transition-colors">
                    {vendor.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>{vendor.location}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-100 text-[11px] text-stone-700">
                    <span className="text-stone-400 block text-[10px] uppercase font-medium">Project Unggulan:</span>
                    <strong className="text-amber-900 font-semibold">{vendor.featuredProject}</strong>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <span className="text-[11px] text-amber-800 font-medium flex items-center gap-1 hover:underline cursor-pointer">
                  <span>Lihat Rekam Portofolio Vendor</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
