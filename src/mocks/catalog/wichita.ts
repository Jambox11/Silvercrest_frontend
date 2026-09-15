import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Wichita, KS. */
export const CATALOG_WICHITA: Property = {
  id: 'prop_225',
  title: 'College Hill brick',
  location: 'Wichita, KS',
  price: 231000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_225',
  metadataUri: 'ipfs://QmCatalog225',
  createdAt: 1697222500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'house',
  yearBuilt: 1990,
  featured: false,
  description: 'Tokenized listing in Wichita, KS. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.687,
  lng: -97.33,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1283,
  totalShares: 200,
  availableShares: 85,
  capRate: 3.5,
};
