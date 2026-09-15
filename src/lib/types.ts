export type StellarNetwork = 'testnet' | 'mainnet';

export type WalletSource = 'freighter' | 'session' | null;

export interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  network: StellarNetwork;
  source: WalletSource;
}

export type ListingStatus = 'active' | 'pending' | 'sold';
export type OfferStatus = 'pending' | 'accepted' | 'rejected';
export type PropertyType = 'house' | 'condo' | 'penthouse' | 'cabin' | 'commercial' | 'land';
export type DocumentKind = 'deed' | 'inspection' | 'appraisal' | 'insurance' | 'tax' | 'hoa';
export type NotificationKind = 'offer' | 'listing' | 'sale' | 'system' | 'kyc';
export type TransactionKind = 'tokenize' | 'list' | 'offer' | 'accept' | 'finalize' | 'dividend';
export type KycStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

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
  lat?: number;
  lng?: number;
  agentId?: string;
  fractional?: boolean;
  sharePrice?: number;
  totalShares?: number;
  availableShares?: number;
  capRate?: number;
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
  | 'sale_completed'
  | 'shares_purchased';

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

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'oldest' | 'caprate';

export interface PropertyFilters {
  query?: string;
  propertyType?: PropertyType | 'all';
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  status?: ListingStatus | 'all';
  sort?: SortOption;
  city?: string;
  fractionalOnly?: boolean;
}

export interface AgentProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  avatar: string;
  rating: number;
  closedDeals: number;
  specialty: string;
  publicKey: string;
}

export interface PricePoint {
  propertyId: string;
  timestamp: number;
  price: number;
}

export interface PropertyDocument {
  id: string;
  propertyId: string;
  kind: DocumentKind;
  title: string;
  uri: string;
  uploadedAt: number;
}

export interface AppNotification {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  read: boolean;
  href?: string;
  createdAt: number;
}

export interface WatchlistItem {
  propertyId: string;
  addedAt: number;
}

export interface LedgerTransaction {
  id: string;
  kind: TransactionKind;
  propertyId?: string;
  propertyTitle?: string;
  amount?: number;
  currency?: string;
  hash: string;
  status: 'confirmed' | 'pending' | 'failed';
  timestamp: number;
}

export interface FractionalPosition {
  id: string;
  propertyId: string;
  propertyTitle: string;
  owner: string;
  shares: number;
  sharePrice: number;
  acquiredAt: number;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  city: string;
  summary: string;
  changePct: number;
  medianPrice: number;
  publishedAt: number;
}

export interface KycProfile {
  publicKey: string;
  status: KycStatus;
  legalName: string;
  country: string;
  updatedAt: number;
}
