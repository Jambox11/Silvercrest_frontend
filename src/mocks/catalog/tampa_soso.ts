import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Tampa, FL. */
export const CATALOG_TAMPA_SOSO: Property = {
  id: 'prop_247',
  title: 'Seminole Heights bungalow',
  location: 'Tampa, FL',
  price: 362000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_247',
  metadataUri: 'ipfs://QmCatalog247',
  createdAt: 1697242300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 2012,
  featured: false,
  description: 'Tokenized listing in Tampa, FL. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 27.993,
  lng: -82.459,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2011,
  totalShares: 200,
  availableShares: 107,
  capRate: 4.300000000000001,
};
