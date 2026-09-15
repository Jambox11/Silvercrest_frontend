import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Columbus, OH. */
export const CATALOG_COLUMBUS_SHORT: Property = {
  id: 'prop_232',
  title: 'Short North row',
  location: 'Columbus, OH',
  price: 355000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_232',
  metadataUri: 'ipfs://QmCatalog232',
  createdAt: 1697228800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1997,
  featured: false,
  description: 'Tokenized listing in Columbus, OH. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.977,
  lng: -83.003,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 1972,
  totalShares: 200,
  availableShares: 92,
  capRate: 3.1,
};
