import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Reno, NV. */
export const CATALOG_RENO: Property = {
  id: 'prop_220',
  title: 'Midtown ranch',
  location: 'Reno, NV',
  price: 456000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_220',
  metadataUri: 'ipfs://QmCatalog220',
  createdAt: 1697218000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 1985,
  featured: false,
  description: 'Tokenized listing in Reno, NV. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.53,
  lng: -119.814,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2533,
  totalShares: 200,
  availableShares: 80,
  capRate: 3.1,
};
