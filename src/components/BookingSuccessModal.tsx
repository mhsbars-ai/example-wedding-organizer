import React from 'react';
import { BookingFormData } from '../types';
import { WEDDING_PACKAGES, ADD_ON_ITEMS } from '../data/weddingData';
import { CheckCircle2, MessageSquare, Printer, X, Sparkles, Calendar, MapPin, Phone, Mail, Heart, ArrowRight } from 'lucide-react';

interface BookingSuccessModalProps {
  bookingData: BookingFormData;
  refCode: string;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  bookingData,
  refCode,
  onClose
}) => {
  const selectedPkg = WEDDING_PACKAGES.find((p) => p.id === bookingData.selectedPackageId) || WEDDING_PACKAGES[1];

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Generate WhatsApp pre-filled text
  const waMessage = encodeURIComponent(
    `Halo Eternal Moments Wedding Organizer,\n\n` +
    `Saya telah mengisi formulir pemesanan paket acara di website dengan Rincian Pemesanan:\n\n` +
    `*Kode Referensi:* ${refCode}\n` +
    `*Pasangan:* ${bookingData.brideName} & ${bookingData.groomName}\n` +
    `*Tanggal Acara:* ${bookingData.eventDate}\n` +
    `*Kota/Venue:* ${bookingData.city} (${bookingData.venuePreference})\n` +
    `*Jumlah Tamu:* ${bookingData.guestCount} Tamu\n` +
    `*Paket:* ${selectedPkg.name} (${formatIDR(selectedPkg.price)})\n` +
    `*Total Estimasi:* ${formatIDR(bookingData.estimatedBudget)}\n\n` +
    `Mohon kirimkan proposal resmi dan konfirmasi ketersediaan jadwalnya. Terima kasih!`
  );

  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-stone-900 shadow-2xl relative border border-amber-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950">
            Pemesanan Paket Berhasil Diterima!
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Terima kasih, data rencana pernikahan Anda telah tersimpan dengan aman di sistem kami.
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-mono text-xs font-bold mt-2">
            Kode Referensi: {refCode}
          </div>
        </div>

        {/* Receipt Card */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 text-xs mb-6 print:block">
          <div className="flex justify-between border-b border-amber-200/80 pb-2">
            <span className="text-stone-500">Pasangan Pengantin:</span>
            <strong className="text-amber-950 font-bold">{bookingData.brideName} & {bookingData.groomName}</strong>
          </div>

          <div className="flex justify-between border-b border-amber-200/80 pb-2">
            <span className="text-stone-500">Kontak (WhatsApp / Email):</span>
            <strong className="text-stone-800">{bookingData.phone} • {bookingData.email}</strong>
          </div>

          <div className="flex justify-between border-b border-amber-200/80 pb-2">
            <span className="text-stone-500">Rencana Tanggal & Lokasi:</span>
            <strong className="text-stone-800">{bookingData.eventDate} ({bookingData.city})</strong>
          </div>

          <div className="flex justify-between border-b border-amber-200/80 pb-2">
            <span className="text-stone-500">Paket Terpilih:</span>
            <strong className="text-amber-900 font-bold">{selectedPkg.name} ({formatIDR(selectedPkg.price)})</strong>
          </div>

          {bookingData.selectedAddOnIds.length > 0 && (
            <div className="border-b border-amber-200/80 pb-2">
              <span className="text-stone-500 block mb-1">Add-ons Tambahan:</span>
              <ul className="pl-3 list-disc space-y-0.5 text-stone-700">
                {bookingData.selectedAddOnIds.map((id) => {
                  const addon = ADD_ON_ITEMS.find((a) => a.id === id);
                  return addon ? (
                    <li key={id}>{addon.name} ({formatIDR(addon.price)})</li>
                  ) : null;
                })}
              </ul>
            </div>
          )}

          <div className="flex justify-between items-center pt-1 font-serif text-base">
            <span className="font-bold text-stone-800">Total Proyeksi Investasi:</span>
            <span className="font-bold text-amber-900 text-lg">{formatIDR(bookingData.estimatedBudget)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Kirim Rincian via WhatsApp Langsung</span>
          </a>

          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="flex-1 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Bukti Pemesanan</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold text-xs flex items-center justify-center cursor-pointer"
            >
              Selesai & Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
