import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Boise, ID. */
export const CATALOG_BOISE: Property = {
  id: 'prop_026',
  title: 'North End bungalow',
  location: 'Boise, ID',
  price: 452000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_026',
  metadataUri: 'ipfs://QmCatalog026',
  createdAt: 1697046000,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 2006,
  featured: false,
  description: 'Sample tokenized listing in Boise, ID. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.615,
  lng: -116.202,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2260,
  totalShares: 200,
  availableShares: 106,
  capRate: 4.2,
};
