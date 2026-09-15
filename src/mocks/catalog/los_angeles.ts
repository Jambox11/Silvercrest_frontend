import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Los Angeles, CA. */
export const CATALOG_LOS_ANGELES: Property = {
  id: 'prop_259',
  title: 'Echo Park craftsman',
  location: 'Los Angeles, CA',
  price: 980000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_259',
  metadataUri: 'ipfs://QmCatalog259',
  createdAt: 1697253100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1974,
  featured: false,
  description: 'Tokenized listing in Los Angeles, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 34.079,
  lng: -118.26,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 5444,
  totalShares: 200,
  availableShares: 69,
  capRate: 4.300000000000001,
};
