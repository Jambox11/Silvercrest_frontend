import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Sacramento, CA. */
export const CATALOG_SACRAMENTO_MID: Property = {
  id: 'prop_257',
  title: 'Midtown italianate',
  location: 'Sacramento, CA',
  price: 562000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_257',
  metadataUri: 'ipfs://QmCatalog257',
  createdAt: 1697251300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1650,
  propertyType: 'house',
  yearBuilt: 1972,
  featured: false,
  description: 'Tokenized listing in Sacramento, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 38.575,
  lng: -121.483,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 3122,
  totalShares: 200,
  availableShares: 67,
  capRate: 3.5,
};
