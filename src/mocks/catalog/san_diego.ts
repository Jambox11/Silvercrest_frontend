import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for San Diego, CA. */
export const CATALOG_SAN_DIEGO: Property = {
  id: 'prop_020',
  title: 'Pacific Beach condo',
  location: 'San Diego, CA',
  price: 880000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_020',
  metadataUri: 'ipfs://QmDummy020',
  createdAt: 1697040000,
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  beds: 2,
  baths: 2,
  sqft: 980,
  propertyType: 'condo',
  yearBuilt: 2000,
  featured: true,
  description: 'Dummy tokenized listing in San Diego, CA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.715,
  lng: -117.161,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 4400,
  totalShares: 200,
  availableShares: 100,
  capRate: 3.2,
};
