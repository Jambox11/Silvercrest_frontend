import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Phoenix, AZ. */
export const CATALOG_PHOENIX: Property = {
  id: 'prop_019',
  title: 'Arcadia ranch',
  location: 'Phoenix, AZ',
  price: 555000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_019',
  metadataUri: 'ipfs://QmDummy019',
  createdAt: 1697039000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 4,
  baths: 3,
  sqft: 2600,
  propertyType: 'house',
  yearBuilt: 1999,
  featured: false,
  description: 'Dummy tokenized listing in Phoenix, AZ. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 33.448,
  lng: -112.074,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2775,
  totalShares: 200,
  availableShares: 99,
  capRate: 7.2,
};
