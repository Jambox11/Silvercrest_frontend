import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Providence, RI. */
export const CATALOG_PROVIDENCE: Property = {
  id: 'prop_040',
  title: 'College Hill colonial',
  location: 'Providence, RI',
  price: 490000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_040',
  metadataUri: 'ipfs://QmDummy040',
  createdAt: 1697060000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 4,
  baths: 3,
  sqft: 2400,
  propertyType: 'house',
  yearBuilt: 1980,
  featured: true,
  description: 'Dummy tokenized listing in Providence, RI. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.824,
  lng: -71.413,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 2450,
  totalShares: 200,
  availableShares: 80,
  capRate: 3.2,
};
