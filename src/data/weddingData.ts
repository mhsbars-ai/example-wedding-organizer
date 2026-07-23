import { WeddingPackage, GalleryItem, Testimonial, AddOnItem, VendorPartner } from '../types';

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'pkg-intimate',
    tier: 'intimate',
    name: 'Intimate Harmony',
    tagline: 'Hangat, Anggun, & Penuh Makna untuk Keluarga & Kerabat Terdekat',
    price: 38000000,
    guestCapacity: '50 - 150 Tamu',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Paket dirancang khusus untuk pernikahan berkonsep intimate wedding di villa, resto, atau garden outdoor dengan nuansa elegan dan hangat.',
    includes: [
      {
        category: 'Perencanaan & WO',
        items: [
          '4 Crew Wedding Organizer Profesional On-the-day',
          'Penyusunan Rencana Acara & Rundown Lengkap',
          '1x Technical Meeting dengan Seluruh Vendor',
          'Pendampingan Fitting & Gladi Resik'
        ]
      },
      {
        category: 'Dekorasi & Theme',
        items: [
          'Pelaminan Minimalis Elegan (4-6 meter) Fresh Flowers',
          'Welcome Gate & Photo Gallery Panel',
          'Standing Flower Line Way (4 set)',
          'Meja Penerima Tamu & Kotak Angpau Custom'
        ]
      },
      {
        category: 'Busana & Rias (MUA)',
        items: [
          'Rias & Busana Akad/Pemberkatan (Pengantin Pria & Wanita)',
          'Rias & Busana Resepsi (Pengantin Pria & Wanita)',
          'Rias & Busana untuk 2 Ibu & 2 Bapak'
        ]
      },
      {
        category: 'Dokumentasi',
        items: [
          '1 Fotografer & 1 Videografer Professional',
          'Semua File Foto High-Res di USB / Cloud Storage',
          '1 Cinematic Teaser Video (60 Detik untuk IG/TikTok)',
          'Album Magnit / Magazine Style 20 Halaman'
        ]
      },
      {
        category: 'Entertainment & MC',
        items: [
          '1 MC Formal & Semi-Formal Pemandu Acara',
          'Sound System Compact 2000 Watt',
          'Acoustic Live Music (Vocalist + Keyboardist/Acoustic Guitar)'
        ]
      }
    ]
  },
  {
    id: 'pkg-royal',
    tier: 'royal',
    name: 'Royal Heritage & Modern Elegance',
    tagline: 'Perpaduan Mewah Tradisi & Sentuhan Modern Ballroom',
    price: 78000000,
    guestCapacity: '200 - 500 Tamu',
    popular: true,
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Pilihan paling diminati untuk resepsi kelas hotel/ballroom atau gedung besar dengan layanan sekelas pesta pernikahan raja.',
    includes: [
      {
        category: 'Tim Management WO',
        items: [
          '8 Crew Wedding Organizer Profesional On-the-day',
          'Personal Assistant khusus Pengantin & Keluarga',
          'Koordinator Catering, Vendor, & VIP Ushering',
          'Technical Meeting & Confirmed Rundown Booklet'
        ]
      },
      {
        category: 'Dekorasi & Stage Design',
        items: [
          'Pelaminan Custom 8-10 meter Full Import Fresh Flowers',
          'Rose Gold / Brass Archway Welcome Entrance',
          'Gazebo / Stage Backdrop Center Piece',
          'Photobooth Custom 3D Theme & Lighting Set',
          'Karpet Red Carpet / Glass Floor Promenade'
        ]
      },
      {
        category: 'Busana & Makeup High-End',
        items: [
          'Rias & Busana Akad/Resepsi Premium (Modern / Tradisional Custom)',
          'Rias & Busana 2 Orang Tua & 4 Penerima Tamu/Bridesmaid',
          'Touch-up Artist Siaga Sepanjang Acara'
        ]
      },
      {
        category: 'Dokumentasi Premium',
        items: [
          '2 Fotografer + 2 Videografer Cinema 4K',
          'Drone Aerial Photography (Sesuai Izin Venue)',
          '1 Video Highlight Cinematic (3-5 Menit)',
          'Exclusive Leather Photobook 30x30 cm'
        ]
      },
      {
        category: 'Entertainment & Sound',
        items: [
          '1 Master of Ceremony Senior Terkenal',
          'Full Band Entertainment (Vokal, Piano, Bass, Saxophone, Drum)',
          'Sound System Professional 5000 Watt & Stage Lighting Effects'
        ]
      }
    ]
  },
  {
    id: 'pkg-grand',
    tier: 'grand',
    name: 'Grand Imperial Luxury',
    tagline: 'Puncak Kemewahan Pernikahan Impian Tanpa Kompromi',
    price: 145000000,
    guestCapacity: '600 - 1500+ Tamu',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    description: 'Layanan VIP komprehensif mulai dari konsep desain kustom, bintang tamu hiburan, hingga penataan detail resepsi megah skala besar.',
    includes: [
      {
        category: 'Tim Concierge & WO Master',
        items: [
          '14 Crew Specialist WO (Director, Stage Manager, Usher Lead, VIP Guard)',
          'Konsultasi Konsep Tematik & 3D Visual Event Design',
          '2 Personal Assistant Pengantin & VIP Room Handling',
          'Manajemen Guest List QR Code Electronic Check-In'
        ]
      },
      {
        category: 'Dekorasi Grand Ballroom',
        items: [
          'Pelaminan Grand Spectacular 12-16 Meter Luxury Floral Tunnel',
          'Chandelier Crystal Hanging Installation & Fairy Lights Canopy',
          'Aisle Mirror Floor / Glass Walkway dengan Flower Pedestals',
          'Exclusive Photobook Area, VIP Table Service & Family Lounge'
        ]
      },
      {
        category: 'Busana Designer & MUA Top Tier',
        items: [
          'Custom Couture Attire Pengantin karya Perancang / MUA Top Indonesia',
          'Busana & Rias Keluarga Besar (Up to 10 Orang)',
          'Tim Stylist Siaga dari Akad sampai Resepsi Selesai'
        ]
      },
      {
        category: 'Dokumentasi Cinematic & Live Stream',
        items: [
          'Full Cinema Team (3 Cam, 1 Crane / Cable Cam, 1 Drone Operator)',
          'Multi-camera YouTube / Zoom Private Live Streaming 1080p',
          'Same-Day-Edit Video Highlight diputar saat Resepsi',
          '2 Luxury Velvet Photobook + Flashdrive Box Exclusive'
        ]
      },
      {
        category: 'Orchestra & Grand Show',
        items: [
          'Mini Orchestra / Chamber Strings + Guest Soloist',
          'Lighting Designer & Cold Spark Pyro Effects Safety Certified',
          '2 Top MC Partner (Male & Female Duo MC)'
        ]
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pernikahan Bohemian Garden di Bali',
    category: 'dekorasi',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Aldo & Karina',
    date: '14 Juni 2025',
    venueName: 'Tirta Uluwatu Villa, Bali',
    likes: 248,
    description: 'Sentuhan bunga pampas, mawar pastel, dan tata lampu warm garland outdoor menciptakan suasana romantis yang akrab.'
  },
  {
    id: 'gal-2',
    title: 'Resepsi Royal Sunda Modern Ballroom',
    category: 'dekorasi',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Dimas & Anindya',
    date: '28 September 2025',
    venueName: 'The Ritz-Carlton Pacific Place, Jakarta',
    likes: 312,
    description: 'Paduan ukiran ornamen emas tradisional dengan rangkaian bunga segar impor berwarna putih dan dusty pink.'
  },
  {
    id: 'gal-3',
    title: 'Keanggunan Busana Adat Jawa Paes Ageng',
    category: 'busana',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Bagas & Citra',
    date: '10 November 2025',
    venueName: 'Balai Kartini, Jakarta',
    likes: 189,
    description: 'Riasan halus tanpa cela dipadu dengan busana beludru hitam berhias payet emas murni buatan desainer ternama.'
  },
  {
    id: 'gal-4',
    title: 'Momen Penuh Haru Akad Nikah di Masjid Ramlie',
    category: 'moment',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Fajri & Syifa',
    date: '05 Januari 2026',
    venueName: 'Masjid Ramlie Musofa, Jakarta Utara',
    likes: 420,
    description: 'Potret emosional saat ijab kabul berlangsung khidmat di hadapan keluarga besar kedua belah pihak.'
  },
  {
    id: 'gal-5',
    title: 'Glasshouse Dining & Food Art Presentation',
    category: 'catering',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Rian & Sheila',
    date: '20 Februari 2026',
    venueName: 'Plataran Cilandak, Jakarta Selatan',
    likes: 156,
    description: 'Penyajian kuliner khas nusantara & western fusion dengan plating estetis dan food stall berdekorasi bunga hidup.'
  },
  {
    id: 'gal-6',
    title: 'Outdoor Sunset Ceremony Glass Chapel',
    category: 'venue',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Kevin & Clarissa',
    date: '12 Maret 2026',
    venueName: 'Pine Forest Resort, Bandung',
    likes: 295,
    description: 'Suasana sejuk hutan pinus dipadu dekorasi kanopi kaca bertabur lampu peri fairy lights.'
  },
  {
    id: 'gal-7',
    title: 'Sinematik First Dance & Wedding Cake Cutting',
    category: 'dokumentasi',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Reza & Maya',
    date: '18 April 2026',
    venueName: 'Hotel Mulia Senayan, Jakarta',
    likes: 380,
    description: 'Pencahayaan panggung berkelas mengiringi tarian pertama pasangan pengantin di hadapan 800 undangan.'
  },
  {
    id: 'gal-8',
    title: 'Dekorasi Table Setting & Centerpiece Minimalis',
    category: 'dekorasi',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
    coupleName: 'Arya & Bianca',
    date: '02 Mei 2026',
    venueName: 'InterContinental Pondok Indah',
    likes: 210,
    description: 'Sentuhan lilin aromaterapi, taplak linen champagne, dan vas kristal berisi bunga baby breath & orchid.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    coupleName: 'Reza & Maya Prameswari',
    weddingDate: '18 April 2026',
    venue: 'Hotel Mulia Senayan, Jakarta',
    packageTier: 'Grand Imperial Luxury',
    rating: 5,
    quote: 'Tim WO benar-benar ajaib! Kami bisa menikmati setiap detik hari pernikahan tanpa merasa stres sama sekali.',
    fullStory: 'Awalnya kami sangat khawatir karena memiliki 1.000+ tamu dengan protokol keluarga yang cukup rumit. Namun sejak pertemuan pertama, Eternal Moments menunjukkan ketenangan dan profesionalisme luar biasa. Rundown berjalan presisi hingga detik terakhir, vendor terkontrol rapi, dan orang tua kami sangat terkesan dengan keramahan tim pendamping.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'testi-2',
    coupleName: 'Aldo & Karina Septiani',
    weddingDate: '14 Juni 2025',
    venue: 'Tirta Uluwatu Villa, Bali',
    packageTier: 'Intimate Harmony',
    rating: 5,
    quote: 'Pernikahan intimate di Bali impian kami terwujud melebihi ekspektasi. Rekomendasi vendornya jempolan!',
    fullStory: 'Kami mengurus pernikahan dari luar kota, jadi sangat mengandalkan koordinasi jarak jauh. Eternal Moments sangat responsif di WhatsApp & selalu memberikan update transparan. Dekorasi bunga segar pampas di tebing Uluwatu sangat magis. Semua tamu terharu dengan konsep acara yang sangat personal.',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'testi-3',
    coupleName: 'Dimas & Anindya Wibowo',
    weddingDate: '28 September 2025',
    venue: 'The Ritz-Carlton Pacific Place',
    packageTier: 'Royal Heritage',
    rating: 5,
    quote: 'Konsep Sunda Modern kami dipadu dengan sempurna. MUA & Momen Sinematiknya dapet banget!',
    fullStory: 'Kami menginginkan nuansa adat yang tidak kaku tetapi tetap sakral. Eternal Moments mampu menerjemahkan ide kami dengan sangat manis. Pengantin tidak perlu bingung cari barang atau mikirin katering telat, tim personal assistant selalu siap sedia membawa obat, minum, dan touch-up makeup.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'testi-4',
    coupleName: 'Fajri & Syifa',
    weddingDate: '05 Januari 2026',
    venue: 'Masjid Ramlie Musofa, Jakarta',
    packageTier: 'Intimate Harmony',
    rating: 5,
    quote: 'Pelayanan yang hangat, komunikatif, dan sangat transparan mengenai anggaran. Sesuai bajet tanpa ada biaya tersembunyi.',
    fullStory: 'Terima kasih telah membimbing kami dari nol. Penjelasan rincian estimasi biaya sangat mendetail sehingga kami paham betul ke mana dana kami dialokasikan. Hasil foto dokumentasinya pun sangat indah dan pengerjaannya cepat.',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const ADD_ON_ITEMS: AddOnItem[] = [
  {
    id: 'add-1',
    name: '360 Video Photobooth Spinner',
    category: 'Entertainment',
    price: 4500000,
    unit: '3 Jam Durasi',
    description: 'Photobooth bergerak 360 derajat dengan instant QR download video slow-motion + custom logo pengantin.',
    popular: true
  },
  {
    id: 'add-2',
    name: 'FPV Cinematic Drone & Aerial Live',
    category: 'Dokumentasi',
    price: 3500000,
    unit: 'Per Event',
    description: 'Pengambilan gambar udara dari sudut indoor/outdoor dengan drone FPV untuk transisi cinematic.',
    popular: true
  },
  {
    id: 'add-3',
    name: 'QR Code Guest Check-in & Digital Invitation',
    category: 'Sistem Tamu',
    price: 2500000,
    unit: 'Paket Unlimited Tamu',
    description: 'Sistem pendaftaran tamu instan dengan scanner tablet, ucapan digital live di layar LED, & WhatsApp RSVP.',
    popular: true
  },
  {
    id: 'add-4',
    name: 'Orchestra / String Quartet Performance',
    category: 'Entertainment',
    price: 8500000,
    unit: 'Resepsi (2 Jam)',
    description: 'Pertunjukan musik gesek biola & cello membawakan lagu-lagu romantis klasik & pop modern.',
  },
  {
    id: 'add-5',
    name: 'Cold Spark Pyrotechnic & Sparkler Walkway',
    category: 'Special Effects',
    price: 3800000,
    unit: '6 Fountains Bar',
    description: 'Efek kembang api dingin indoor yang aman (tidak panas & tidak berasap) untuk grand entrance.',
  },
  {
    id: 'add-6',
    name: 'Mobil Pengantin Classic Alphard / Mercedes VIP',
    category: 'Transportasi',
    price: 3200000,
    unit: '12 Jam Include Driver & BBM',
    description: 'Kendaraan mewah lengkap dengan hiasan bunga pita spesial pengantin & supir berpengalaman.',
  }
];

export const VENDOR_PARTNERS: VendorPartner[] = [
  {
    id: 'ven-1',
    name: 'Elégance Floral & Stage Design',
    category: 'Dekorasi & Florist',
    location: 'Jakarta & Bandung',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    featuredProject: 'Luxury Crystal Canopy Ballroom'
  },
  {
    id: 'ven-2',
    name: 'Lumière Cinema Studios',
    category: 'Foto & Videografi 4K',
    location: 'Jakarta & Bali',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
    featuredProject: 'Same Day Edit Cinema 4K'
  },
  {
    id: 'ven-3',
    name: 'Gourmet Heritage Catering',
    category: 'Catering & Food Art',
    location: 'Jabodetabek & Surabaya',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
    featuredProject: '5-Star International & Royal Buffet'
  },
  {
    id: 'ven-4',
    name: 'Mulia & Ritz Ballroom Collection',
    category: 'Preferred Venues',
    location: 'Jakarta, Bali, Bandung',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80',
    featuredProject: 'Grand Ballroom & Private Garden Villa'
  }
];
