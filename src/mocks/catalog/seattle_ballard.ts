import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Seattle, WA. */
export const CATALOG_SEATTLE_BALLARD: Property = {
  id: 'prop_254',
  title: 'Ballard loft',
  location: 'Seattle, WA',
  price: 598000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_254',
  metadataUri: 'ipfs://QmCatalog254',
  createdAt: 1697248600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 2,
  baths: 1,
  sqft: 920,
  propertyType: 'condo',
  yearBuilt: 1969,
  featured: true,
  description: 'Tokenized listing in Seattle, WA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 47.676,
  lng: -122.383,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 3322,
  totalShares: 200,
  availableShares: 64,
  capRate: 3.9000000000000004,
};
