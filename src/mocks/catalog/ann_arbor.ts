import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Ann Arbor, MI. */
export const CATALOG_ANN_ARBOR: Property = {
  id: 'prop_228',
  title: 'Burns Park bungalow',
  location: 'Ann Arbor, MI',
  price: 478000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_228',
  metadataUri: 'ipfs://QmCatalog228',
  createdAt: 1697225200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 1993,
  featured: false,
  description: 'Tokenized listing in Ann Arbor, MI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.281,
  lng: -83.743,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2655,
  totalShares: 200,
  availableShares: 88,
  capRate: 3.1,
};
