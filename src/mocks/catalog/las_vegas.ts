import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Las Vegas, NV. */
export const CATALOG_LAS_VEGAS: Property = {
  id: 'prop_032',
  title: 'Summerlin modern',
  location: 'Las Vegas, NV',
  price: 615000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_032',
  metadataUri: 'ipfs://QmCatalog032',
  createdAt: 1697052000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 4,
  baths: 3,
  sqft: 2500,
  propertyType: 'house',
  yearBuilt: 2012,
  featured: false,
  description: 'Sample tokenized listing in Las Vegas, NV. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 36.17,
  lng: -115.14,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 3075,
  totalShares: 200,
  availableShares: 112,
  capRate: 5.2,
};
