import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Boise, ID. */
export const CATALOG_BOISE_NORTH: Property = {
  id: 'prop_216',
  title: 'Collister rambler',
  location: 'Boise, ID',
  price: 441000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_216',
  metadataUri: 'ipfs://QmCatalog216',
  createdAt: 1697214400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 1981,
  featured: false,
  description: 'Tokenized listing in Boise, ID. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.648,
  lng: -116.247,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2450,
  totalShares: 200,
  availableShares: 76,
  capRate: 3.1,
};
