import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingFormSection } from './components/BookingFormSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { VendorsSection } from './components/VendorsSection';
import { LightboxModal } from './components/LightboxModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { Footer } from './components/Footer';
import { WeddingPackage, GalleryItem, BookingFormData } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Selected State for booking form pre-fill
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-royal');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedGuests, setSelectedGuests] = useState<number>(250);
  const [selectedCity, setSelectedCity] = useState<string>('Jakarta');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<number>(0);

  // Modals state
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [likedGalleryIds, setLikedGalleryIds] = useState<Record<string, boolean>>({});
  const [completedBooking, setCompletedBooking] = useState<{ data: BookingFormData; refCode: string } | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForBooking = (pkg: WeddingPackage) => {
    setSelectedPackageId(pkg.id);
    scrollToSection('booking');
  };

  const handleQuickBookingFromHero = (date: string, guests: number, city: string) => {
    if (date) setSelectedDate(date);
    if (guests) setSelectedGuests(guests);
    if (city) setSelectedCity(city);
    scrollToSection('booking');
  };

  const handleCalculatorTransfer = (calcData: {
    guestCount: number;
    venuePreference: string;
    estimatedBudget: number;
    selectedAddOns: string[];
  }) => {
    setSelectedGuests(calcData.guestCount);
    setSelectedAddOns(calcData.selectedAddOns);
    setSelectedBudget(calcData.estimatedBudget);
    scrollToSection('booking');
  };

  const handleToggleLike = (id: string) => {
    setLikedGalleryIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookingSubmitSuccess = (data: BookingFormData, refCode: string) => {
    setCompletedBooking({ data, refCode });
  };

  const handleOpenConsultationWA = () => {
    const text = encodeURIComponent('Halo Eternal Moments Wedding Organizer, saya ingin konsultasi mengenai perencanaan pernikahan.');
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-amber-400 selection:text-amber-950">
      
      {/* Navbar Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenBooking={() => scrollToSection('booking')}
        onOpenCalculator={() => scrollToSection('calculator')}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExplorePackages={() => scrollToSection('packages')}
          onOpenBookingWithDate={handleQuickBookingFromHero}
          onOpenConsultation={handleOpenConsultationWA}
        />

        {/* Packages Section */}
        <PackagesSection
          onSelectPackageForBooking={handleSelectPackageForBooking}
        />

        {/* Photo Gallery Section */}
        <GallerySection
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Budget Calculator Tool */}
        <BudgetCalculator
          onTransferToBooking={handleCalculatorTransfer}
        />

        {/* Vendor & Venue Partners Section */}
        <VendorsSection />

        {/* Multi-step Booking Form Section */}
        <BookingFormSection
          initialPackageId={selectedPackageId}
          initialDate={selectedDate}
          initialGuests={selectedGuests}
          initialCity={selectedCity}
          initialAddOns={selectedAddOns}
          initialBudget={selectedBudget}
          onSubmitSuccess={handleBookingSubmitSuccess}
        />
      </main>

      {/* Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onLike={handleToggleLike}
          isLiked={!!likedGalleryIds[activeLightboxItem.id]}
        />
      )}

      {/* Booking Success Modal */}
      {completedBooking && (
        <BookingSuccessModal
          bookingData={completedBooking.data}
          refCode={completedBooking.refCode}
          onClose={() => setCompletedBooking(null)}
        />
      )}

      {/* Floating Speed-Dial WhatsApp Consultation Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={handleOpenConsultationWA}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all transform hover:scale-105 cursor-pointer border border-emerald-400/30"
          aria-label="Konsultasi WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold hidden sm:inline group-hover:inline transition-all">
            Konsultasi Live WA
          </span>
        </button>
      </div>

    </div>
  );
}
