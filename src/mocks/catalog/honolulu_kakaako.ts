import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Honolulu, HI. */
export const CATALOG_HONOLULU_KAKAAKO: Property = {
  id: 'prop_264',
  title: 'Kakaako tower',
  location: 'Honolulu, HI',
  price: 735000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_264',
  metadataUri: 'ipfs://QmCatalog264',
  createdAt: 1697257600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 2,
  baths: 2,
  sqft: 890,
  propertyType: 'condo',
  yearBuilt: 1979,
  featured: false,
  description: 'Tokenized listing in Honolulu, HI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 21.298,
  lng: -157.86,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 4083,
  totalShares: 200,
  availableShares: 74,
  capRate: 3.1,
};
