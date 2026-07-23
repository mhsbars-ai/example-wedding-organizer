import React, { useState } from 'react';
import { ADD_ON_ITEMS } from '../data/weddingData';
import { Calculator, Sparkles, Check, ArrowRight, DollarSign, PieChart, Users, Building, Shield } from 'lucide-react';

interface BudgetCalculatorProps {
  onTransferToBooking: (calcData: {
    guestCount: number;
    venuePreference: string;
    estimatedBudget: number;
    selectedAddOns: string[];
  }) => void;
  onClose?: () => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  onTransferToBooking,
  onClose
}) => {
  const [guests, setGuests] = useState<number>(300);
  const [venueType, setVenueType] = useState<string>('ballroom'); // ballroom, garden, building, resto, villa
  const [cateringPaxPrice, setCateringPaxPrice] = useState<number>(125000);
  const [decorTier, setDecorTier] = useState<number>(35000000); // 15m, 35m, 75m
  const [muaTier, setMuaTier] = useState<number>(12000000); // 6m, 12m, 25m
  const [woTier, setWoTier] = useState<number>(15000000); // 8m, 15m, 30m
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['add-1', 'add-3']);

  // Calculations
  const cateringTotal = guests * cateringPaxPrice;
  const venueCost = venueType === 'ballroom' ? 45000000 : venueType === 'garden' ? 30000000 : venueType === 'villa' ? 35000000 : 20000000;
  const addOnsTotal = selectedAddOnIds.reduce((acc, id) => {
    const item = ADD_ON_ITEMS.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const grandTotal = cateringTotal + venueCost + decorTier + muaTier + woTier + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleApplyToBooking = () => {
    let venueLabel = 'Hotel Ballroom';
    if (venueType === 'garden') venueLabel = 'Outdoor Garden Villa';
    if (venueType === 'building') venueLabel = 'Gedung Serbaguna';
    if (venueType === 'resto') venueLabel = 'Restoran Glasshouse';
    if (venueType === 'villa') venueLabel = 'Private Resort Villa';

    onTransferToBooking({
      guestCount: guests,
      venuePreference: venueLabel,
      estimatedBudget: grandTotal,
      selectedAddOns: selectedAddOnIds,
    });
  };

  return (
    <div id="calculator" className="py-16 bg-gradient-to-b from-stone-900 via-amber-950/80 to-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5 text-amber-300" />
            <span>Kalkulator Interaktif</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100 mb-2">
            Simulasi Estimasi Anggaran Pernikahan
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm">
            Atur jumlah tamu dan preferensi elemen pernikahan Anda untuk melihat kalkulasi biaya secara transparan.
          </p>
        </div>

        <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Guest Count Slider */}
            <div className="bg-stone-950/70 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-400" />
                  Jumlah Tamu Undangan
                </label>
                <span className="font-serif text-lg font-bold text-amber-300">{guests} Tamu</span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
              />
            </div>

            {/* Venue Type */}
            <div>
              <label className="block text-xs font-bold text-amber-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-400" />
                Jenis Venue / Tempat Acara
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'ballroom', label: 'Hotel Ballroom', desc: 'Mewah & AC' },
                  { id: 'garden', label: 'Outdoor Garden', desc: 'Asri & Romantic' },
                  { id: 'building', label: 'Gedung Serbaguna', desc: 'Kapasitas Besar' },
                  { id: 'resto', label: 'Resto / Glasshouse', desc: 'Intimate Vibe' },
                  { id: 'villa', label: 'Private Villa', desc: 'Eksklusif Resort' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVenueType(v.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      venueType === v.id
                        ? 'border-amber-400 bg-amber-950/80 text-amber-100 shadow-md'
                        : 'border-stone-800 bg-stone-950/50 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className="font-bold">{v.label}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Catering Pax Price Slider */}
            <div className="bg-stone-950/70 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                  Menu Catering / Pax
                </label>
                <span className="font-serif text-sm font-bold text-amber-300">{formatIDR(cateringPaxPrice)} / pax</span>
              </div>
              <input
                type="range"
                min="75000"
                max="250000"
                step="10000"
                value={cateringPaxPrice}
                onChange={(e) => setCateringPaxPrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
              />
              <p className="text-[10px] text-stone-400 mt-1">
                Estimasi Total Katering: <strong className="text-amber-200">{formatIDR(cateringTotal)}</strong>
              </p>
            </div>

            {/* Tier Selectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-amber-200 uppercase tracking-wider mb-1.5">
                  Tingkat Dekorasi
                </label>
                <select
                  value={decorTier}
                  onChange={(e) => setDecorTier(Number(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none"
                >
                  <option value={18000000}>Minimalis Fresh Flower (Rp 18 Juta)</option>
                  <option value={35000000}>Standard Elegan 8m (Rp 35 Juta)</option>
                  <option value={75000000}>Grand Ballroom Floral Tunnel (Rp 75 Juta)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-200 uppercase tracking-wider mb-1.5">
                  Makeup & Busana (MUA)
                </label>
                <select
                  value={muaTier}
                  onChange={(e) => setMuaTier(Number(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none"
                >
                  <option value={6000000}>Standard MUA + Busana (Rp 6 Juta)</option>
                  <option value={12000000}>Premium MUA & Family Attire (Rp 12 Juta)</option>
                  <option value={25000000}>Top Couture Designer MUA (Rp 25 Juta)</option>
                </select>
              </div>
            </div>

            {/* Add-on Toggles */}
            <div>
              <label className="block text-xs font-bold text-amber-200 uppercase tracking-wider mb-2">
                Pilih Fitur Tambahan (Add-ons)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADD_ON_ITEMS.map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-amber-400 bg-amber-950/60 text-white'
                          : 'border-stone-800 bg-stone-950/40 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="font-semibold text-stone-200 truncate">{addon.name}</div>
                        <div className="text-[10px] text-amber-300">{formatIDR(addon.price)}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-amber-500 text-stone-950 font-bold' : 'border border-stone-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-amber-950/40 border border-amber-500/30 rounded-2xl p-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-100 mb-1 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-amber-400" />
                Rincian Estimasi Anggaran
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Proyeksi lengkap biaya pernikahan berdasarkan kustomisasi pilihan Anda.
              </p>

              <div className="space-y-3 text-xs mb-6 divide-y divide-amber-500/10">
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Catering ({guests} pax)</span>
                  <span className="font-semibold text-amber-100">{formatIDR(cateringTotal)}</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Sewa Venue Acara</span>
                  <span className="font-semibold text-amber-100">{formatIDR(venueCost)}</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Dekorasi & Stage</span>
                  <span className="font-semibold text-amber-100">{formatIDR(decorTier)}</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Makeup & Busana</span>
                  <span className="font-semibold text-amber-100">{formatIDR(muaTier)}</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Jasa Wedding Organizer</span>
                  <span className="font-semibold text-amber-100">{formatIDR(woTier)}</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-2">
                  <span>Fitur Tambahan ({selectedAddOnIds.length} item)</span>
                  <span className="font-semibold text-amber-100">{formatIDR(addOnsTotal)}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-2xl bg-amber-900/60 border border-amber-400/30 text-center mb-4">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">Total Estimasi Anggaran</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 block mt-1">
                  {formatIDR(grandTotal)}
                </span>
                <span className="text-[10px] text-amber-200/80 block mt-0.5">
                  Estimasi ± {formatIDR(Math.round(grandTotal / guests))}/tamu
                </span>
              </div>

              <button
                onClick={handleApplyToBooking}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Gunakan Hasil ke Formulir Pemesanan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
