import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Atlanta, GA. */
export const CATALOG_ATLANTA: Property = {
  id: 'prop_013',
  title: 'Midtown brick bungalow',
  location: 'Atlanta, GA',
  price: 465000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_013',
  metadataUri: 'ipfs://QmDummy013',
  createdAt: 1697033000,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 1993,
  featured: false,
  description: 'Dummy tokenized listing in Atlanta, GA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 33.749,
  lng: -84.388,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2325,
  totalShares: 200,
  availableShares: 93,
  capRate: 6.2,
};
