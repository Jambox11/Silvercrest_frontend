import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Minneapolis, MN. */
export const CATALOG_MINNEAPOLIS_NEA: Property = {
  id: 'prop_265',
  title: 'Northeast bungalow',
  location: 'Minneapolis, MN',
  price: 348000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_265',
  metadataUri: 'ipfs://QmCatalog265',
  createdAt: 1697258500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1980,
  featured: false,
  description: 'Tokenized listing in Minneapolis, MN. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 45.0,
  lng: -93.247,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1933,
  totalShares: 200,
  availableShares: 75,
  capRate: 3.5,
};
