import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Chicago, IL. */
export const CATALOG_CHICAGO_LOGAN: Property = {
  id: 'prop_269',
  title: 'Logan Square loft',
  location: 'Chicago, IL',
  price: 398000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_269',
  metadataUri: 'ipfs://QmCatalog269',
  createdAt: 1697262100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 2,
  baths: 2,
  sqft: 1100,
  propertyType: 'condo',
  yearBuilt: 1984,
  featured: false,
  description: 'Tokenized listing in Chicago, IL. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.923,
  lng: -87.697,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 2211,
  totalShares: 200,
  availableShares: 79,
  capRate: 3.5,
};
