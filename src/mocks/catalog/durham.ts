import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Durham, NC. */
export const CATALOG_DURHAM: Property = {
  id: 'prop_240',
  title: 'Trinity Park craftsman',
  location: 'Durham, NC',
  price: 421000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_240',
  metadataUri: 'ipfs://QmCatalog240',
  createdAt: 1697236000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 2005,
  featured: false,
  description: 'Tokenized listing in Durham, NC. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.994,
  lng: -78.899,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2338,
  totalShares: 200,
  availableShares: 100,
  capRate: 3.1,
};
