import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Sacramento, CA. */
export const CATALOG_SACRAMENTO: Property = {
  id: 'prop_033',
  title: 'Midtown victorian',
  location: 'Sacramento, CA',
  price: 535000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_033',
  metadataUri: 'ipfs://QmDummy033',
  createdAt: 1697053000,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1800,
  propertyType: 'house',
  yearBuilt: 2013,
  featured: false,
  description: 'Dummy tokenized listing in Sacramento, CA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 38.581,
  lng: -121.494,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2675,
  totalShares: 200,
  availableShares: 113,
  capRate: 6.2,
};
