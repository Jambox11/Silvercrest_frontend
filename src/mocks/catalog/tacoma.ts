import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Tacoma, WA. */
export const CATALOG_TACOMA: Property = {
  id: 'prop_218',
  title: 'Proctor district bungalow',
  location: 'Tacoma, WA',
  price: 429000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_218',
  metadataUri: 'ipfs://QmCatalog218',
  createdAt: 1697216200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1580,
  propertyType: 'house',
  yearBuilt: 1983,
  featured: true,
  description: 'Tokenized listing in Tacoma, WA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 47.253,
  lng: -122.444,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 2383,
  totalShares: 200,
  availableShares: 78,
  capRate: 3.9000000000000004,
};
