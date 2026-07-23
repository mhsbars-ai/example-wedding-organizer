export type PackageTier = 'intimate' | 'royal' | 'grand' | 'custom';

export interface WeddingPackage {
  id: string;
  tier: PackageTier;
  name: string;
  tagline: string;
  price: number;
  guestCapacity: string;
  popular?: boolean;
  coverImage: string;
  description: string;
  includes: {
    category: string;
    items: string[];
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'dekorasi' | 'venue' | 'catering' | 'busana' | 'dokumentasi' | 'moment';
  imageUrl: string;
  coupleName?: string;
  date?: string;
  venueName?: string;
  likes: number;
  description: string;
}

export interface Testimonial {
  id: string;
  coupleName: string;
  weddingDate: string;
  venue: string;
  packageTier: string;
  rating: number;
  quote: string;
  fullStory: string;
  avatarUrl: string;
  galleryImages: string[];
}

export interface AddOnItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  popular?: boolean;
}

export interface BookingFormData {
  // Step 1: Contact & Couple
  brideName: string;
  groomName: string;
  email: string;
  phone: string;
  city: string;

  // Step 2: Date & Venue
  eventDate: string;
  guestCount: number;
  venuePreference: string;
  eventStyle: string; // Traditional, Modern European, Rustic, Intimate Garden, Beach Resort

  // Step 3: Package & Add-ons
  selectedPackageId: string;
  selectedAddOnIds: string[];

  // Step 4: Budget & Notes
  estimatedBudget: number;
  specialNotes: string;
  consultationType: 'whatsapp' | 'office' | 'zoom';
}

export interface VendorPartner {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  imageUrl: string;
  featuredProject: string;
}
