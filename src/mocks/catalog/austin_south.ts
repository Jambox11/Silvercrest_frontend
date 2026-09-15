import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Austin, TX. */
export const CATALOG_AUSTIN_SOUTH: Property = {
  id: 'prop_249',
  title: 'South Congress bungalow',
  location: 'Austin, TX',
  price: 545000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_249',
  metadataUri: 'ipfs://QmCatalog249',
  createdAt: 1697244100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 2014,
  featured: false,
  description: 'Tokenized listing in Austin, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 30.25,
  lng: -97.75,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 3027,
  totalShares: 200,
  availableShares: 109,
  capRate: 3.5,
};
