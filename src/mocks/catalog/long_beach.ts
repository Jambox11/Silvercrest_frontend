import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Long Beach, CA. */
export const CATALOG_LONG_BEACH: Property = {
  id: 'prop_260',
  title: 'Belmont Shore cottage',
  location: 'Long Beach, CA',
  price: 845000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_260',
  metadataUri: 'ipfs://QmCatalog260',
  createdAt: 1697254000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1400,
  propertyType: 'house',
  yearBuilt: 1975,
  featured: true,
  description: 'Tokenized listing in Long Beach, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 33.758,
  lng: -118.137,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 4694,
  totalShares: 200,
  availableShares: 70,
  capRate: 3.1,
};
