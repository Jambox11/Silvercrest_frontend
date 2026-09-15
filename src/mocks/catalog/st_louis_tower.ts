import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for St. Louis, MO. */
export const CATALOG_ST_LOUIS_TOWER: Property = {
  id: 'prop_268',
  title: 'Tower Grove bungalow',
  location: 'St. Louis, MO',
  price: 241000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_268',
  metadataUri: 'ipfs://QmCatalog268',
  createdAt: 1697261200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1450,
  propertyType: 'house',
  yearBuilt: 1983,
  featured: false,
  description: 'Tokenized listing in St. Louis, MO. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 38.609,
  lng: -90.256,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 1338,
  totalShares: 200,
  availableShares: 78,
  capRate: 3.1,
};
