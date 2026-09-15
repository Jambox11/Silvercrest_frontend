import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Oklahoma City, OK. */
export const CATALOG_OKLAHOMA_CITY: Property = {
  id: 'prop_224',
  title: 'Paseo arts cottage',
  location: 'Oklahoma City, OK',
  price: 268000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_224',
  metadataUri: 'ipfs://QmCatalog224',
  createdAt: 1697221600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1989,
  featured: true,
  description: 'Tokenized listing in Oklahoma City, OK. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.468,
  lng: -97.516,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 1488,
  totalShares: 200,
  availableShares: 84,
  capRate: 3.1,
};
