import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Madison, WI. */
export const CATALOG_MADISON_WEST: Property = {
  id: 'prop_229',
  title: 'Near West loft',
  location: 'Madison, WI',
  price: 329000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_229',
  metadataUri: 'ipfs://QmCatalog229',
  createdAt: 1697226100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 2,
  baths: 2,
  sqft: 980,
  propertyType: 'condo',
  yearBuilt: 1994,
  featured: false,
  description: 'Tokenized listing in Madison, WI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.075,
  lng: -89.431,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1827,
  totalShares: 200,
  availableShares: 89,
  capRate: 3.5,
};
