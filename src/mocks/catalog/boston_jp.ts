import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Boston, MA. */
export const CATALOG_BOSTON_JP: Property = {
  id: 'prop_272',
  title: 'Jamaica Plain triple-decker',
  location: 'Boston, MA',
  price: 625000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_272',
  metadataUri: 'ipfs://QmCatalog272',
  createdAt: 1697264800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 1,
  sqft: 1200,
  propertyType: 'condo',
  yearBuilt: 1987,
  featured: true,
  description: 'Tokenized listing in Boston, MA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.31,
  lng: -71.115,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 3472,
  totalShares: 200,
  availableShares: 82,
  capRate: 3.1,
};
