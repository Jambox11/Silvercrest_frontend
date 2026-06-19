import type { Listing } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY, MOCK_SELLER_2 } from '@/lib/constants';

export const MOCK_LISTINGS: Listing[] = [
  { id: 'list_001', propertyId: 'prop_001', seller: MOCK_WALLET_PUBLIC_KEY, price: 500000, currency: 'USD', status: 'active', createdAt: 1697000000 },
  { id: 'list_002', propertyId: 'prop_002', seller: MOCK_WALLET_PUBLIC_KEY, price: 700000, currency: 'USD', status: 'active', createdAt: 1697001000 },
  { id: 'list_003', propertyId: 'prop_003', seller: MOCK_WALLET_PUBLIC_KEY, price: 1950000, currency: 'USD', status: 'pending', createdAt: 1697002000 },
  { id: 'list_004', propertyId: 'prop_004', seller: MOCK_SELLER_2, price: 890000, currency: 'USD', status: 'active', createdAt: 1697003000 },
  { id: 'list_005', propertyId: 'prop_005', seller: MOCK_SELLER_2, price: 600000, currency: 'USD', status: 'sold', createdAt: 1697004000 },
  { id: 'list_006', propertyId: 'prop_006', seller: MOCK_SELLER_2, price: 1100000, currency: 'USD', status: 'active', createdAt: 1697005000 },
  { id: 'list_007', propertyId: 'prop_007', seller: MOCK_WALLET_PUBLIC_KEY, price: 3100000, currency: 'USD', status: 'active', createdAt: 1697006000 },
  { id: 'list_008', propertyId: 'prop_008', seller: MOCK_SELLER_2, price: 410000, currency: 'USD', status: 'active', createdAt: 1697007000 },
  { id: 'list_009', propertyId: 'prop_009', seller: MOCK_SELLER_2, price: 375000, currency: 'USD', status: 'active', createdAt: 1697008000 },
  { id: 'list_010', propertyId: 'prop_010', seller: MOCK_WALLET_PUBLIC_KEY, price: 950000, currency: 'USD', status: 'active', createdAt: 1697009000 },
  { id: 'list_011', propertyId: 'prop_011', seller: MOCK_SELLER_2, price: 1400000, currency: 'USD', status: 'pending', createdAt: 1697010000 },
  { id: 'list_012', propertyId: 'prop_012', seller: MOCK_SELLER_2, price: 265000, currency: 'USD', status: 'active', createdAt: 1697011000 },
];

export function getMockListings(status?: string, skip = 0, limit = 50): Listing[] {
  let items = [...MOCK_LISTINGS];
  if (status) items = items.filter(l => l.status === status);
  return items.slice(skip, skip + limit);
}

export function getMockListing(id: string): Listing | undefined {
  return MOCK_LISTINGS.find(l => l.id === id);
}

export function getMockListingsForProperty(propertyId: string): Listing[] {
  return MOCK_LISTINGS.filter(l => l.propertyId === propertyId);
}

export function getMockListingsBySeller(seller: string): Listing[] {
  return MOCK_LISTINGS.filter(l => l.seller === seller);
}
