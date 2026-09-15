import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Pittsburgh, PA. */
export const CATALOG_PITTSBURGH: Property = {
  id: 'prop_036',
  title: 'Shadyside brownstone',
  location: 'Pittsburgh, PA',
  price: 405000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_036',
  metadataUri: 'ipfs://QmCatalog036',
  createdAt: 1697056000,
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  beds: 4,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 2016,
  featured: false,
  description: 'Sample tokenized listing in Pittsburgh, PA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.441,
  lng: -79.996,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 2025,
  totalShares: 200,
  availableShares: 116,
  capRate: 4.2,
};
