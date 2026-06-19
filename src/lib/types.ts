export type StellarNetwork = 'testnet' | 'mainnet';

export interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  network: StellarNetwork;
}

export type ListingStatus = 'active' | 'pending' | 'sold';
export type OfferStatus = 'pending' | 'accepted' | 'rejected';
export type PropertyType = 'house' | 'condo' | 'penthouse' | 'cabin' | 'commercial' | 'land';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  owner: string;
  nftContract: string;
  nftId: string;
  metadataUri: string;
  createdAt: number;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  description?: string;
  propertyType?: PropertyType;
  amenities?: string[];
  yearBuilt?: number;
  featured?: boolean;
}

export interface Listing {
  id: string;
  propertyId: string;
  seller: string;
  price: number;
  currency: string;
  status: ListingStatus;
  createdAt: number;
}

export interface Offer {
  id: string;
  listingId: string;
  buyer: string;
  price: number;
  status: OfferStatus;
  createdAt: number;
}

export type ActivityType =
  | 'property_tokenized'
  | 'listing_created'
  | 'offer_made'
  | 'offer_accepted'
  | 'sale_completed';

export interface ActivityEvent {
  id: string;
  type: ActivityType;
  propertyId?: string;
  propertyTitle?: string;
  listingId?: string;
  offerId?: string;
  actor: string;
  amount?: number;
  currency?: string;
  timestamp: number;
}

export interface MarketStats {
  totalProperties: number;
  activeListings: number;
  totalVolume: number;
  pendingOffers: number;
  avgPrice: number;
  soldThisMonth: number;
}

export interface PropertyWithListing extends Property {
  listing?: Listing;
}

export interface ApiError {
  message: string;
  status?: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'oldest';

export interface PropertyFilters {
  query?: string;
  propertyType?: PropertyType | 'all';
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  status?: ListingStatus | 'all';
  sort?: SortOption;
}
