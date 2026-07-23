import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, PhoneCall, Calendar, Sparkles, Image as ImageIcon, Award, Calculator, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenBooking,
  onOpenCalculator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'packages', label: 'Paket Acara' },
    { id: 'gallery', label: 'Galeri Foto' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'calculator', label: 'Simulasi Anggaran' },
    { id: 'vendors', label: 'Vendor & Venue' },
    { id: 'booking', label: 'Formulir Pemesanan' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'calculator') {
      onOpenCalculator();
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-amber-50/95 backdrop-blur-md shadow-sm border-b border-amber-100/80 py-3'
          : 'bg-gradient-to-b from-stone-900/70 via-stone-900/30 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 via-amber-600 to-amber-900 flex items-center justify-center text-amber-100 shadow-md transform group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-amber-200/40 text-amber-100" />
            </div>
            <div>
              <span className={`block font-serif text-xl sm:text-2xl font-bold tracking-tight ${
                isScrolled ? 'text-amber-950' : 'text-white'
              }`}>
                Eternal Moments
              </span>
              <span className={`block text-[10px] tracking-widest uppercase font-medium -mt-1 ${
                isScrolled ? 'text-amber-700' : 'text-amber-200'
              }`}>
                Wedding Organizer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? 'bg-amber-900 text-amber-50 font-semibold shadow-xs'
                        : 'bg-white/20 backdrop-blur-sm text-white font-semibold'
                      : isScrolled
                        ? 'text-stone-700 hover:text-amber-900 hover:bg-amber-100/50'
                        : 'text-stone-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                isScrolled
                  ? 'border-amber-300 text-amber-900 hover:bg-amber-100/60'
                  : 'border-amber-200/50 text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Hitung Budget</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 text-amber-50 hover:from-amber-900 hover:to-amber-950 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Pesan Paket</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-800 text-amber-50 shadow-xs"
            >
              Pesan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-amber-950 hover:bg-amber-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50/98 border-b border-amber-200/80 px-4 pt-3 pb-6 shadow-xl backdrop-blur-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-900 text-amber-50 font-semibold'
                    : 'text-stone-800 hover:bg-amber-100/70'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-4 h-4 text-amber-300" />}
              </button>
            ))}

            <div className="pt-3 border-t border-amber-200/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-800 text-amber-900 font-medium text-sm hover:bg-amber-100"
              >
                <Calculator className="w-4 h-4" />
                Simulasi Anggaran
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-800 to-amber-950 text-amber-50 font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Isi Formulir Pemesanan
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
