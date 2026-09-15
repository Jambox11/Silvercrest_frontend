import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Santa Barbara, CA. */
export const CATALOG_SANTA_BARBARA: Property = {
  id: 'prop_261',
  title: 'Westside bungalow',
  location: 'Santa Barbara, CA',
  price: 1290000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_261',
  metadataUri: 'ipfs://QmCatalog261',
  createdAt: 1697254900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'house',
  yearBuilt: 1976,
  featured: false,
  description: 'Tokenized listing in Santa Barbara, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 34.421,
  lng: -119.698,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 7166,
  totalShares: 200,
  availableShares: 71,
  capRate: 3.5,
};
