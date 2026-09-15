import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Milwaukee, WI. */
export const CATALOG_MILWAUKEE_EAST: Property = {
  id: 'prop_230',
  title: 'East Side high-rise',
  location: 'Milwaukee, WI',
  price: 341000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_230',
  metadataUri: 'ipfs://QmCatalog230',
  createdAt: 1697227000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 2,
  baths: 2,
  sqft: 1050,
  propertyType: 'condo',
  yearBuilt: 1995,
  featured: true,
  description: 'Tokenized listing in Milwaukee, WI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.049,
  lng: -87.896,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 1894,
  totalShares: 200,
  availableShares: 90,
  capRate: 3.9000000000000004,
};
