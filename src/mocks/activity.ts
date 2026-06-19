import type { ActivityEvent, MarketStats } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY, MOCK_SELLER_2, MOCK_BUYER_2 } from '@/lib/constants';
import { getAllProperties, getAllListings, getAllOffers } from './store';

export const MOCK_ACTIVITY: ActivityEvent[] = [
  {
    id: 'act_001',
    type: 'property_tokenized',
    propertyId: 'prop_011',
    propertyTitle: 'Tropical Bungalow',
    actor: MOCK_SELLER_2,
    timestamp: 1697010000,
  },
  {
    id: 'act_002',
    type: 'listing_created',
    propertyId: 'prop_011',
    propertyTitle: 'Tropical Bungalow',
    listingId: 'list_011',
    actor: MOCK_SELLER_2,
    amount: 1400000,
    currency: 'USD',
    timestamp: 1697010100,
  },
  {
    id: 'act_003',
    type: 'offer_made',
    propertyId: 'prop_011',
    propertyTitle: 'Tropical Bungalow',
    listingId: 'list_011',
    offerId: 'offer_008',
    actor: MOCK_WALLET_PUBLIC_KEY,
    amount: 1350000,
    currency: 'USD',
    timestamp: 1697018000,
  },
  {
    id: 'act_004',
    type: 'offer_accepted',
    propertyId: 'prop_011',
    propertyTitle: 'Tropical Bungalow',
    listingId: 'list_011',
    offerId: 'offer_008',
    actor: MOCK_SELLER_2,
    amount: 1350000,
    currency: 'USD',
    timestamp: 1697018100,
  },
  {
    id: 'act_005',
    type: 'offer_made',
    propertyId: 'prop_007',
    propertyTitle: 'Vineyard Estate',
    listingId: 'list_007',
    offerId: 'offer_005',
    actor: MOCK_BUYER_2,
    amount: 3000000,
    currency: 'USD',
    timestamp: 1697015000,
  },
  {
    id: 'act_006',
    type: 'sale_completed',
    propertyId: 'prop_005',
    propertyTitle: 'Lakefront Cabin',
    listingId: 'list_005',
    actor: MOCK_BUYER_2,
    amount: 600000,
    currency: 'USD',
    timestamp: 1697004500,
  },
  {
    id: 'act_007',
    type: 'property_tokenized',
    propertyId: 'prop_012',
    propertyTitle: 'Music Row Studio',
    actor: MOCK_SELLER_2,
    timestamp: 1697011000,
  },
  {
    id: 'act_008',
    type: 'offer_made',
    propertyId: 'prop_001',
    propertyTitle: 'Sunny Beachfront Villa',
    listingId: 'list_001',
    offerId: 'offer_001',
    actor: MOCK_BUYER_2,
    amount: 480000,
    currency: 'USD',
    timestamp: 1697010000,
  },
  {
    id: 'act_009',
    type: 'listing_created',
    propertyId: 'prop_010',
    propertyTitle: 'Ski Chalet',
    listingId: 'list_010',
    actor: MOCK_WALLET_PUBLIC_KEY,
    amount: 950000,
    currency: 'USD',
    timestamp: 1697009000,
  },
  {
    id: 'act_010',
    type: 'offer_made',
    propertyId: 'prop_010',
    propertyTitle: 'Ski Chalet',
    listingId: 'list_010',
    offerId: 'offer_007',
    actor: MOCK_BUYER_2,
    amount: 920000,
    currency: 'USD',
    timestamp: 1697017000,
  },
];

export function getMockActivity(limit = 10): ActivityEvent[] {
  return [...MOCK_ACTIVITY]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);
}

export function getMockMarketStats(): MarketStats {
  const properties = getAllProperties();
  const listings = getAllListings();
  const offers = getAllOffers();
  const activeListings = listings.filter(l => l.status === 'active');
  const pendingOffers = offers.filter(o => o.status === 'pending');
  const soldListings = listings.filter(l => l.status === 'sold');
  const totalVolume = listings.reduce((sum, l) => sum + l.price, 0);
  const avgPrice = listings.length ? totalVolume / listings.length : 0;

  return {
    totalProperties: properties.length,
    activeListings: activeListings.length,
    totalVolume,
    pendingOffers: pendingOffers.length,
    avgPrice: Math.round(avgPrice),
    soldThisMonth: soldListings.length,
  };
}
