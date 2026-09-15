import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Bend, OR. */
export const CATALOG_BEND: Property = {
  id: 'prop_044',
  title: 'Deschutes river cabin',
  location: 'Bend, OR',
  price: 640000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_044',
  metadataUri: 'ipfs://QmCatalog044',
  createdAt: 1697064000,
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'cabin',
  yearBuilt: 1984,
  featured: false,
  description: 'Sample tokenized listing in Bend, OR. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.058,
  lng: -121.315,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 3200,
  totalShares: 200,
  availableShares: 84,
  capRate: 7.2,
};
