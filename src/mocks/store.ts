import type { Property, Listing, Offer } from '@/lib/types';
import { MOCK_PROPERTIES, getMockProperty as getStaticProperty } from './properties';
import { MOCK_LISTINGS, getMockListing as getStaticListing } from './listings';
import { MOCK_OFFERS } from './offers';

const dynamicProperties: Property[] = [];
const dynamicListings: Listing[] = [];
const dynamicOffers: Offer[] = [];

export function addDynamicProperty(property: Property, listing?: Listing) {
  dynamicProperties.unshift(property);
  if (listing) dynamicListings.unshift(listing);
}

export function addDynamicOffer(offer: Offer) {
  dynamicOffers.unshift(offer);
}

export function getAllProperties(): Property[] {
  return [...dynamicProperties, ...MOCK_PROPERTIES];
}

export function getAllListings(): Listing[] {
  return [...dynamicListings, ...MOCK_LISTINGS];
}

export function getAllOffers(): Offer[] {
  return [...dynamicOffers, ...MOCK_OFFERS];
}

export function getMockProperty(id: string): Property | undefined {
  return dynamicProperties.find(p => p.id === id) ?? getStaticProperty(id);
}

export function getMockListing(id: string): Listing | undefined {
  return dynamicListings.find(l => l.id === id) ?? getStaticListing(id);
}

export function getMockProperties(skip = 0, limit = 50): Property[] {
  return getAllProperties().slice(skip, skip + limit);
}

export function getMockListings(status?: string, skip = 0, limit = 50): Listing[] {
  let items = getAllListings();
  if (status) items = items.filter(l => l.status === status);
  return items.slice(skip, skip + limit);
}

export function getMockOffers(skip = 0, limit = 50): Offer[] {
  return getAllOffers().slice(skip, skip + limit);
}

export function getMockOffersForListing(listingId: string): Offer[] {
  return getAllOffers().filter(o => o.listingId === listingId);
}

export function getMockOffersByBuyer(buyer: string): Offer[] {
  return getAllOffers().filter(o => o.buyer === buyer);
}

export function getMockListingsForProperty(propertyId: string): Listing[] {
  return getAllListings().filter(l => l.propertyId === propertyId);
}

export function getMockListingsBySeller(seller: string): Listing[] {
  return getAllListings().filter(l => l.seller === seller);
}

export function searchMockProperties(query: string): Property[] {
  const q = query.toLowerCase();
  return getAllProperties().filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
  );
}

export function getMockFeaturedProperties(): Property[] {
  return getAllProperties().filter(p => p.featured);
}

export function getMockOffer(id: string): Offer | undefined {
  return getAllOffers().find(o => o.id === id);
}
