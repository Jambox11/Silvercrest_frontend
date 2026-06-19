import type { Property, Listing, Offer, ActivityEvent, MarketStats } from '@/lib/types';
import {
  getMockProperties,
  getMockProperty,
  searchMockProperties,
  getMockFeaturedProperties,
  getMockListings,
  getMockListing,
  getMockListingsForProperty,
  getMockListingsBySeller,
  getMockOffers,
  getMockOffer,
  getMockOffersForListing,
  getMockOffersByBuyer,
  getMockActivity,
  getMockMarketStats,
  addDynamicProperty,
  addDynamicOffer,
} from '@/mocks';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8000';
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== 'false';

interface ApiProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  owner: string;
  nft_contract: string;
  nft_id: string;
  metadata_uri: string;
  created_at: number;
  image?: string;
}

interface ApiListing {
  id: string;
  property_id: string;
  seller: string;
  price: number;
  currency: string;
  status: string;
  created_at: number;
}

interface ApiOffer {
  id: string;
  listing_id: string;
  buyer: string;
  price: number;
  status: string;
  created_at: number;
}

function mapProperty(raw: ApiProperty): Property {
  return {
    id: raw.id,
    title: raw.title,
    location: raw.location,
    price: raw.price,
    currency: raw.currency,
    owner: raw.owner,
    nftContract: raw.nft_contract,
    nftId: raw.nft_id,
    metadataUri: raw.metadata_uri,
    createdAt: raw.created_at,
    image: raw.image ?? '',
  };
}

function mapListing(raw: ApiListing): Listing {
  return {
    id: raw.id,
    propertyId: raw.property_id,
    seller: raw.seller,
    price: raw.price,
    currency: raw.currency,
    status: raw.status as Listing['status'],
    createdAt: raw.created_at,
  };
}

function mapOffer(raw: ApiOffer): Offer {
  return {
    id: raw.id,
    listingId: raw.listing_id,
    buyer: raw.buyer,
    price: raw.price,
    status: raw.status as Offer['status'],
    createdAt: raw.created_at,
  };
}

async function fetchJson<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

async function withFallback<T>(apiFn: () => Promise<T>, mockFn: () => T): Promise<T> {
  if (USE_MOCK) return mockFn();
  try {
    return await apiFn();
  } catch {
    return mockFn();
  }
}

export async function getProperties(skip = 0, limit = 10): Promise<Property[]> {
  return withFallback(
    async () => {
      const data = await fetchJson<ApiProperty[]>(`/api/properties?skip=${skip}&limit=${limit}`);
      return data.map(mapProperty);
    },
    () => getMockProperties(skip, limit)
  );
}

export async function getProperty(id: string): Promise<Property | null> {
  return withFallback(
    async () => {
      try {
        const data = await fetchJson<ApiProperty>(`/api/properties/${id}`);
        return mapProperty(data);
      } catch {
        return getMockProperty(id) ?? null;
      }
    },
    () => getMockProperty(id) ?? null
  );
}

export async function searchProperties(query: string): Promise<Property[]> {
  return withFallback(
    async () => {
      const data = await fetchJson<ApiProperty[]>(`/api/search?q=${encodeURIComponent(query)}`);
      return data.map(mapProperty);
    },
    () => searchMockProperties(query)
  );
}

export async function getListings(status?: string, skip = 0, limit = 10): Promise<Listing[]> {
  return withFallback(
    async () => {
      const params = new URLSearchParams({ skip: String(skip), limit: String(limit) });
      if (status) params.set('status', status);
      const data = await fetchJson<ApiListing[]>(`/api/listings?${params}`);
      return data.map(mapListing);
    },
    () => getMockListings(status, skip, limit)
  );
}

export async function getListing(id: string): Promise<Listing | null> {
  return withFallback(
    async () => {
      try {
        const data = await fetchJson<ApiListing>(`/api/listings/${id}`);
        return mapListing(data);
      } catch {
        return getMockListing(id) ?? null;
      }
    },
    () => getMockListing(id) ?? null
  );
}

export async function getListingsForProperty(propertyId: string): Promise<Listing[]> {
  return withFallback(
    async () => {
      const data = await fetchJson<ApiListing[]>(`/api/listings/property/${propertyId}`);
      return data.map(mapListing);
    },
    () => getMockListingsForProperty(propertyId)
  );
}

export async function getListingsBySeller(seller: string): Promise<Listing[]> {
  return getMockListingsBySeller(seller);
}

export async function getOffers(skip = 0, limit = 10): Promise<Offer[]> {
  return withFallback(
    async () => {
      const data = await fetchJson<ApiOffer[]>(`/api/offers?skip=${skip}&limit=${limit}`);
      return data.map(mapOffer);
    },
    () => getMockOffers(skip, limit)
  );
}

export async function getOffer(id: string): Promise<Offer | null> {
  return withFallback(
    async () => {
      try {
        const data = await fetchJson<ApiOffer>(`/api/offers/${id}`);
        return mapOffer(data);
      } catch {
        return getMockOffer(id) ?? null;
      }
    },
    () => getMockOffer(id) ?? null
  );
}

export async function getOffersForListing(listingId: string): Promise<Offer[]> {
  return withFallback(
    async () => {
      const data = await fetchJson<ApiOffer[]>(`/api/offers/listing/${listingId}`);
      return data.map(mapOffer);
    },
    () => getMockOffersForListing(listingId)
  );
}

export async function getOffersByBuyer(buyer: string): Promise<Offer[]> {
  return getMockOffersByBuyer(buyer);
}

export async function getPropertiesWithListings(): Promise<
  Array<Property & { listing?: Listing }>
> {
  const [properties, listings] = await Promise.all([getProperties(0, 50), getListings(undefined, 0, 50)]);

  return properties.map(property => ({
    ...property,
    listing: listings.find(l => l.propertyId === property.id && l.status === 'active'),
  }));
}

export async function getFeaturedProperties(): Promise<Property[]> {
  return withFallback(
    async () => {
      const all = await getProperties(0, 50);
      return all.filter(p => p.featured);
    },
    () => getMockFeaturedProperties()
  );
}

export async function getActivity(limit = 10): Promise<ActivityEvent[]> {
  return getMockActivity(limit);
}

export async function getMarketStats(): Promise<MarketStats> {
  return getMockMarketStats();
}

export interface SubmitOfferInput {
  listingId: string;
  buyer: string;
  price: number;
}

export async function submitOffer(input: SubmitOfferInput): Promise<Offer> {
  await new Promise(resolve => setTimeout(resolve, 800));
  const offer: Offer = {
    id: `offer_${Date.now()}`,
    listingId: input.listingId,
    buyer: input.buyer,
    price: input.price,
    status: 'pending',
    createdAt: Math.floor(Date.now() / 1000),
  };
  addDynamicOffer(offer);
  return offer;
}

export interface SubmitListingInput {
  title: string;
  location: string;
  price: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  propertyType?: string;
  description?: string;
  owner: string;
}

export async function submitListing(input: SubmitListingInput): Promise<Property> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const propertyId = `prop_${Date.now()}`;
  const property: Property = {
    id: propertyId,
    title: input.title,
    location: input.location,
    price: input.price,
    currency: 'USD',
    owner: input.owner,
    nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
    nftId: `nft_${Date.now()}`,
    metadataUri: 'ipfs://QmPending',
    createdAt: Math.floor(Date.now() / 1000),
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    beds: input.beds,
    baths: input.baths,
    sqft: input.sqft,
    propertyType: input.propertyType as Property['propertyType'],
    description: input.description,
    featured: false,
  };
  const listing: Listing = {
    id: `list_${Date.now()}`,
    propertyId,
    seller: input.owner,
    price: input.price,
    currency: 'USD',
    status: 'active',
    createdAt: Math.floor(Date.now() / 1000),
  };
  addDynamicProperty(property, listing);
  return property;
}
