import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Cambridge, MA. */
export const CATALOG_CAMBRIDGE: Property = {
  id: 'prop_273',
  title: 'Porter Square condo',
  location: 'Cambridge, MA',
  price: 780000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_273',
  metadataUri: 'ipfs://QmCatalog273',
  createdAt: 1697265700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 2,
  baths: 1,
  sqft: 900,
  propertyType: 'condo',
  yearBuilt: 1988,
  featured: false,
  description: 'Tokenized listing in Cambridge, MA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.388,
  lng: -71.119,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 4333,
  totalShares: 200,
  availableShares: 83,
  capRate: 3.5,
};
