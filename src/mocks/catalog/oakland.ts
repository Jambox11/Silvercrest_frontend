import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Oakland, CA. */
export const CATALOG_OAKLAND: Property = {
  id: 'prop_052',
  title: 'Rockridge craftsman',
  location: 'Oakland, CA',
  price: 950000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_052',
  metadataUri: 'ipfs://QmDummy052',
  createdAt: 1697072000,
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  beds: 3,
  baths: 2,
  sqft: 1750,
  propertyType: 'house',
  yearBuilt: 1992,
  featured: false,
  description: 'Dummy tokenized listing in Oakland, CA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.804,
  lng: -122.271,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 4750,
  totalShares: 200,
  availableShares: 92,
  capRate: 5.2,
};
