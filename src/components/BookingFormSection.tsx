import React, { useState, useEffect } from 'react';
import { BookingFormData, WeddingPackage } from '../types';
import { WEDDING_PACKAGES, ADD_ON_ITEMS } from '../data/weddingData';
import { Calendar, Users, MapPin, Phone, Mail, User, Sparkles, Check, ArrowRight, ShieldCheck, Heart, Calculator, Send, MessageCircle } from 'lucide-react';

interface BookingFormSectionProps {
  initialPackageId?: string;
  initialDate?: string;
  initialGuests?: number;
  initialCity?: string;
  initialAddOns?: string[];
  initialBudget?: number;
  onSubmitSuccess: (data: BookingFormData, refCode: string) => void;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialPackageId,
  initialDate,
  initialGuests,
  initialCity,
  initialAddOns,
  initialBudget,
  onSubmitSuccess
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    brideName: '',
    groomName: '',
    email: '',
    phone: '',
    city: initialCity || 'Jakarta',
    eventDate: initialDate || '',
    guestCount: initialGuests || 250,
    venuePreference: 'Hotel Ballroom Bintang 4/5',
    eventStyle: 'Modern European',
    selectedPackageId: initialPackageId || 'pkg-royal',
    selectedAddOnIds: initialAddOns || ['add-1'],
    estimatedBudget: initialBudget || 0,
    specialNotes: '',
    consultationType: 'whatsapp',
  });

  useEffect(() => {
    if (initialPackageId) {
      setFormData((prev) => ({ ...prev, selectedPackageId: initialPackageId }));
    }
    if (initialDate) {
      setFormData((prev) => ({ ...prev, eventDate: initialDate }));
    }
    if (initialGuests) {
      setFormData((prev) => ({ ...prev, guestCount: initialGuests }));
    }
    if (initialCity) {
      setFormData((prev) => ({ ...prev, city: initialCity }));
    }
    if (initialAddOns) {
      setFormData((prev) => ({ ...prev, selectedAddOnIds: initialAddOns }));
    }
  }, [initialPackageId, initialDate, initialGuests, initialCity, initialAddOns]);

  const selectedPkg = WEDDING_PACKAGES.find((p) => p.id === formData.selectedPackageId) || WEDDING_PACKAGES[1];

  // Calculate live total cost
  const basePrice = selectedPkg.price;
  const addOnsCost = formData.selectedAddOnIds.reduce((sum, id) => {
    const item = ADD_ON_ITEMS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const calculatedTotal = basePrice + addOnsCost;

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleAddOn = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedAddOnIds.includes(id);
      return {
        ...prev,
        selectedAddOnIds: exists
          ? prev.selectedAddOnIds.filter((item) => item !== id)
          : [...prev.selectedAddOnIds, id],
      };
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `WO-EM-${Math.floor(100000 + Math.random() * 900000)}`;
    onSubmitSuccess({ ...formData, estimatedBudget: calculatedTotal }, refCode);
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="booking" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-900 to-stone-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Pemesanan & Reservasi Acara</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 tracking-tight mb-4">
            Formulir Pemesanan Paket Pernikahan
          </h2>
          <p className="text-stone-300 text-base">
            Isi rincian rencana pernikahan Anda untuk mendapatkan penawaran resmi, pengecekan jadwal ketersediaan vendor, dan sesi konsultasi gratis bersama Wedding Planner kami.
          </p>
        </div>

        {/* Multi-step Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-stone-800 -z-10" />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-amber-500 transition-all duration-300 -z-10"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />

            {[
              { step: 1, label: 'Data Kontak' },
              { step: 2, label: 'Tanggal & Venue' },
              { step: 3, label: 'Paket & Add-on' },
              { step: 4, label: 'Ringkasan & Submit' },
            ].map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setCurrentStep(s.step)}
                className={`flex flex-col items-center gap-1.5 cursor-pointer ${
                  currentStep >= s.step ? 'text-amber-300 font-bold' : 'text-stone-500'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-md ${
                    currentStep === s.step
                      ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/30'
                      : currentStep > s.step
                      ? 'bg-amber-800 text-amber-100'
                      : 'bg-stone-800 border border-stone-700 text-stone-400'
                  }`}
                >
                  {currentStep > s.step ? <Check className="w-4 h-4" /> : s.step}
                </div>
                <span className="text-[11px] hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form Box */}
        <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Wizard Fields */}
          <div className="lg:col-span-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* STEP 1: Kontak & Pasangan */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif text-xl font-bold text-amber-100 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-amber-400" />
                    Langkah 1: Identitas Pasangan Pengantin & Kontak
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-amber-200 mb-1.5">Nama Pengantin Wanita *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Anisa Rahma"
                        value={formData.brideName}
                        onChange={(e) => handleInputChange('brideName', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-amber-200 mb-1.5">Nama Pengantin Pria *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Dimas Setiawan"
                        value={formData.groomName}
                        onChange={(e) => handleInputChange('groomName', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-amber-200 mb-1.5">Nomor WhatsApp Aktif *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="081234567890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-amber-200 mb-1.5">Alamat Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="anisa.dimas@gmail.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1.5">Kota Tempat Acara Diselenggarakan *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Jakarta Selatan / Bandung / Bali"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Lanjut: Tanggal & Venue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Tanggal & Tamu */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif text-xl font-bold text-amber-100 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    Langkah 2: Tanggal, Jumlah Tamu, & Preferensi Acara
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-amber-200 mb-1.5">Target Tanggal Acara *</label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-medium text-amber-200">Estimasi Jumlah Tamu</label>
                        <span className="text-xs font-bold text-amber-300">{formData.guestCount} Tamu</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="1500"
                        step="25"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange('guestCount', Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1.5">Preferensi Tempat / Venue Acara</label>
                    <select
                      value={formData.venuePreference}
                      onChange={(e) => handleInputChange('venuePreference', e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="Hotel Ballroom Bintang 4/5">Hotel Ballroom Bintang 4 / 5</option>
                      <option value="Outdoor Garden & Villa Resort">Outdoor Garden & Villa Resort</option>
                      <option value="Gedung Pernikahan Serbaguna">Gedung Pernikahan Serbaguna</option>
                      <option value="Glasshouse & Intimate Resto">Glasshouse & Intimate Resto</option>
                      <option value="Rumah / Area Pribadi">Rumah / Area Kediaman Pribadi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1.5">Konsep / Tema Pernikahan</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        'Modern European',
                        'Sunda Modern',
                        'Jawa Paes Ageng',
                        'Rustic Minimalis',
                        'Bohemian Outdoor',
                        'International Glamour'
                      ].map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => handleInputChange('eventStyle', style)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            formData.eventStyle === style
                              ? 'border-amber-400 bg-amber-950 text-amber-100 font-bold'
                              : 'border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium text-xs"
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Lanjut: Pilih Paket & Add-on</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Pilih Paket & Add-ons */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif text-xl font-bold text-amber-100 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Langkah 3: Pilih Paket Utama & Layanan Tambahan
                  </h3>

                  {/* Packages cards choices */}
                  <div className="space-y-3">
                    <label className="block text-xs font-medium text-amber-200">Pilih Paket Pernikahan *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {WEDDING_PACKAGES.map((pkg) => {
                        const isSelected = formData.selectedPackageId === pkg.id;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => handleInputChange('selectedPackageId', pkg.id)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'border-amber-400 bg-amber-950/80 ring-2 ring-amber-400/50 text-white'
                                : 'border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700'
                            }`}
                          >
                            <div>
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-serif font-bold text-sm text-amber-100">{pkg.name}</h4>
                                {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                              </div>
                              <span className="text-[10px] text-stone-400 block mb-2">{pkg.guestCapacity}</span>
                            </div>

                            <div className="font-serif text-sm font-bold text-amber-300 pt-2 border-t border-stone-800">
                              {formatIDR(pkg.price)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add-ons List */}
                  <div className="pt-2">
                    <label className="block text-xs font-medium text-amber-200 mb-2">Pilih Add-ons Fitur Tambahan (Opsional)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ADD_ON_ITEMS.map((addon) => {
                        const checked = formData.selectedAddOnIds.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => handleToggleAddOn(addon.id)}
                            className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                              checked
                                ? 'border-amber-400 bg-amber-950/60 text-white'
                                : 'border-stone-800 bg-stone-950/50 text-stone-400 hover:border-stone-700'
                            }`}
                          >
                            <div>
                              <div className="text-xs font-semibold text-stone-200">{addon.name}</div>
                              <div className="text-[10px] text-amber-300">{formatIDR(addon.price)} / {addon.unit}</div>
                            </div>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                              checked ? 'bg-amber-500 text-stone-950 font-bold' : 'border border-stone-700'
                            }`}>
                              {checked && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium text-xs"
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Lanjut: Review & Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Ringkasan & Method Konsultasi */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="font-serif text-xl font-bold text-amber-100 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    Langkah 4: Metode Konsultasi & Catatan Khusus
                  </h3>

                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-2">Metode Konsultasi Yang Diharapkan</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'whatsapp', title: 'WhatsApp Chat', desc: 'Respon cepat & PDF proposal' },
                        { id: 'office', title: 'Tatap Muka Kantor', desc: 'Sesi di Studio Jakarta / Bandung' },
                        { id: 'zoom', title: 'Online Zoom Call', desc: 'Sesi meeting presentasi virtual' }
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => handleInputChange('consultationType', method.id)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.consultationType === method.id
                              ? 'border-amber-400 bg-amber-950/80 text-white'
                              : 'border-stone-800 bg-stone-950/50 text-stone-400 hover:border-stone-700'
                          }`}
                        >
                          <div className="text-xs font-bold text-amber-200">{method.title}</div>
                          <div className="text-[10px] text-stone-400 mt-0.5">{method.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-amber-200 mb-1.5">Catatan / Permintaan Khusus</label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan jika ada kebutuhan khusus, budaya adat, atau pertanyaan vendor tertentu..."
                      value={formData.specialNotes}
                      onChange={(e) => handleInputChange('specialNotes', e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/50 border border-amber-500/30 text-xs text-amber-200/90 space-y-1">
                    <p className="font-semibold flex items-center gap-1.5 text-amber-100">
                      <Heart className="w-4 h-4 text-amber-400" />
                      Komitmen Layanan Eternal Moments
                    </p>
                    <p className="text-[11px] text-stone-300">
                      Dengan menekan tombol submit, tim Wedding Planner kami akan segera menghubungi Anda dalam waktu maksimal 2 jam kerja untuk memberikan rincian proposal resmi.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium text-xs"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-bold text-sm shadow-xl hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 fill-stone-950" />
                      <span>Kirim Pemesanan Paket</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>

          {/* Right Live Summary Panel */}
          <div className="lg:col-span-4 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg font-bold text-amber-100 mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Ringkasan Pesanan Anda
              </h4>
              <p className="text-xs text-stone-400 mb-4 pb-3 border-b border-amber-500/20">
                Pembaruan estimasi biaya secara otomatis
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-medium">Pasangan:</span>
                  <span className="text-amber-100 font-semibold">
                    {formData.brideName || 'Pengantin Wanita'} & {formData.groomName || 'Pengantin Pria'}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-medium">Rencana Acara:</span>
                  <span className="text-amber-100 font-semibold">
                    {formData.eventDate || 'Belum Ditentukan'} • {formData.guestCount} Tamu
                  </span>
                  <span className="text-stone-400 text-[10px] block">{formData.city} ({formData.venuePreference})</span>
                </div>

                <div className="pt-2 border-t border-amber-500/10">
                  <span className="text-stone-400 block text-[10px] uppercase font-medium">Paket Terpilih:</span>
                  <span className="text-amber-200 font-serif font-bold text-sm">{selectedPkg.name}</span>
                  <span className="text-amber-300 font-semibold block">{formatIDR(selectedPkg.price)}</span>
                </div>

                {formData.selectedAddOnIds.length > 0 && (
                  <div className="pt-2 border-t border-amber-500/10">
                    <span className="text-stone-400 block text-[10px] uppercase font-medium">
                      Add-ons ({formData.selectedAddOnIds.length} item):
                    </span>
                    <ul className="space-y-1 mt-1">
                      {formData.selectedAddOnIds.map((id) => {
                        const addon = ADD_ON_ITEMS.find((a) => a.id === id);
                        if (!addon) return null;
                        return (
                          <li key={id} className="flex justify-between text-[11px] text-stone-300">
                            <span className="truncate pr-1">• {addon.name}</span>
                            <span className="text-amber-200 shrink-0">{formatIDR(addon.price)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-amber-500/30 mt-6">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">Total Proyeksi Investasi</span>
              <div className="font-serif text-2xl font-bold text-amber-100 mt-1">
                {formatIDR(calculatedTotal)}
              </div>
              <span className="text-[10px] text-stone-400 block mt-0.5">
                *Rincian final dikonfirmasi setelah sesi technical consultation
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
