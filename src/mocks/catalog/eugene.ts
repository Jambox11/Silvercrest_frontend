import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Eugene, OR. */
export const CATALOG_EUGENE: Property = {
  id: 'prop_219',
  title: 'Whiteaker cottage',
  location: 'Eugene, OR',
  price: 398000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_219',
  metadataUri: 'ipfs://QmCatalog219',
  createdAt: 1697217100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1520,
  propertyType: 'house',
  yearBuilt: 1984,
  featured: false,
  description: 'Tokenized listing in Eugene, OR. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.052,
  lng: -123.087,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2211,
  totalShares: 200,
  availableShares: 79,
  capRate: 4.300000000000001,
};
