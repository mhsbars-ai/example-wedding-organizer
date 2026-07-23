import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-amber-100">
                <Heart className="w-5 h-5 fill-amber-300 text-amber-100" />
              </div>
              <span className="font-serif text-2xl font-bold text-amber-100">Eternal Moments</span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Wedding Organizer profesional terpercaya di Indonesia. Kami menghadirkan perancangan, koordinasi, dan eksekusi pesta pernikahan berkelas dengan rasa hangat dan ketenangan menyeluruh.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-300 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-300 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-300 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-100 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-xs">
              {['packages', 'gallery', 'testimonials', 'calculator', 'vendors', 'booking'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavClick(id)}
                    className="hover:text-amber-300 transition-colors capitalize text-stone-400"
                  >
                    {id === 'packages' && 'Paket Acara'}
                    {id === 'gallery' && 'Galeri Foto'}
                    {id === 'testimonials' && 'Testimoni Klien'}
                    {id === 'calculator' && 'Kalkulator Anggaran'}
                    {id === 'vendors' && 'Vendor Partner'}
                    {id === 'booking' && 'Formulir Pemesanan'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-100 uppercase tracking-wider">Kantor Cabang</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Jakarta:</strong> Senopati Suites Tower A Lt. 8, Jakarta Selatan</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Bandung:</strong> Dago Highland Plaza No. 14, Bandung</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Bali:</strong> Sunset Road Heritage Block B, Badung - Bali</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-100 uppercase tracking-wider">Layanan Konsultasi</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+62 812-3456-7890 (WA Hotline)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>hello@eternalmoments-wo.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Senin - Minggu (08:00 - 20:00 WIB)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© 2026 Eternal Moments Wedding Organizer. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
