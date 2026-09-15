import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Salt Lake City, UT. */
export const CATALOG_SALT_LAKE_9: Property = {
  id: 'prop_252',
  title: '9th and 9th bungalow',
  location: 'Salt Lake City, UT',
  price: 512000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_252',
  metadataUri: 'ipfs://QmCatalog252',
  createdAt: 1697246800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 1967,
  featured: false,
  description: 'Tokenized listing in Salt Lake City, UT. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.75,
  lng: -111.859,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2844,
  totalShares: 200,
  availableShares: 62,
  capRate: 3.1,
};
