import type { Offer } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY, MOCK_SELLER_2, MOCK_BUYER_2 } from '@/lib/constants';

export const MOCK_OFFERS: Offer[] = [
  { id: 'offer_001', listingId: 'list_001', buyer: MOCK_BUYER_2, price: 480000, status: 'pending', createdAt: 1697010000 },
  { id: 'offer_002', listingId: 'list_003', buyer: MOCK_BUYER_2, price: 1900000, status: 'accepted', createdAt: 1697012000 },
  { id: 'offer_003', listingId: 'list_002', buyer: MOCK_WALLET_PUBLIC_KEY, price: 680000, status: 'pending', createdAt: 1697013000 },
  { id: 'offer_004', listingId: 'list_004', buyer: MOCK_WALLET_PUBLIC_KEY, price: 850000, status: 'rejected', createdAt: 1697014000 },
  { id: 'offer_005', listingId: 'list_007', buyer: MOCK_BUYER_2, price: 3000000, status: 'pending', createdAt: 1697015000 },
  { id: 'offer_006', listingId: 'list_008', buyer: MOCK_WALLET_PUBLIC_KEY, price: 395000, status: 'pending', createdAt: 1697016000 },
  { id: 'offer_007', listingId: 'list_010', buyer: MOCK_BUYER_2, price: 920000, status: 'pending', createdAt: 1697017000 },
  { id: 'offer_008', listingId: 'list_011', buyer: MOCK_WALLET_PUBLIC_KEY, price: 1350000, status: 'accepted', createdAt: 1697018000 },
  { id: 'offer_009', listingId: 'list_006', buyer: MOCK_WALLET_PUBLIC_KEY, price: 1050000, status: 'rejected', createdAt: 1697019000 },
  { id: 'offer_010', listingId: 'list_009', buyer: MOCK_BUYER_2, price: 360000, status: 'pending', createdAt: 1697020000 },
];

export function getMockOffers(skip = 0, limit = 50): Offer[] {
  return MOCK_OFFERS.slice(skip, skip + limit);
}

export function getMockOffer(id: string): Offer | undefined {
  return MOCK_OFFERS.find(o => o.id === id);
}

export function getMockOffersForListing(listingId: string): Offer[] {
  return MOCK_OFFERS.filter(o => o.listingId === listingId);
}

export function getMockOffersByBuyer(buyer: string): Offer[] {
  return MOCK_OFFERS.filter(o => o.buyer === buyer);
}

export function getMockOffersBySeller(seller: string, listings: { id: string; seller: string }[]): Offer[] {
  const sellerListingIds = new Set(listings.filter(l => l.seller === seller).map(l => l.id));
  return MOCK_OFFERS.filter(o => sellerListingIds.has(o.listingId));
}
