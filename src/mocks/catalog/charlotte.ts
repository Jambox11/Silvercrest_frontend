import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Charlotte, NC. */
export const CATALOG_CHARLOTTE: Property = {
  id: 'prop_204',
  title: 'Plaza Midwood bungalow',
  location: 'Charlotte, NC',
  price: 428000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_204',
  metadataUri: 'ipfs://QmCatalog204',
  createdAt: 1697203600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1750,
  propertyType: 'house',
  yearBuilt: 1969,
  featured: false,
  description: 'Tokenized listing in Charlotte, NC. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.227,
  lng: -80.843,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2377,
  totalShares: 200,
  availableShares: 64,
  capRate: 3.1,
};
