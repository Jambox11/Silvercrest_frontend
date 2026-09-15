import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Bend, OR. */
export const CATALOG_BEND_WEST: Property = {
  id: 'prop_279',
  title: 'Westside pine cabin',
  location: 'Bend, OR',
  price: 598000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_279',
  metadataUri: 'ipfs://QmCatalog279',
  createdAt: 1697271100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'cabin',
  yearBuilt: 1994,
  featured: false,
  description: 'Tokenized listing in Bend, OR. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.058,
  lng: -121.325,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 3322,
  totalShares: 200,
  availableShares: 89,
  capRate: 4.300000000000001,
};
