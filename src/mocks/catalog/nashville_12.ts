import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Nashville, TN. */
export const CATALOG_NASHVILLE_12: Property = {
  id: 'prop_244',
  title: '12 South condo',
  location: 'Nashville, TN',
  price: 412000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_244',
  metadataUri: 'ipfs://QmCatalog244',
  createdAt: 1697239600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 2,
  baths: 2,
  sqft: 1020,
  propertyType: 'condo',
  yearBuilt: 2009,
  featured: false,
  description: 'Tokenized listing in Nashville, TN. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 36.118,
  lng: -86.79,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2288,
  totalShares: 200,
  availableShares: 104,
  capRate: 3.1,
};
