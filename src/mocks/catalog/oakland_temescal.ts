import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Oakland, CA. */
export const CATALOG_OAKLAND_TEMESCAL: Property = {
  id: 'prop_256',
  title: 'Temescal bungalow',
  location: 'Oakland, CA',
  price: 875000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_256',
  metadataUri: 'ipfs://QmCatalog256',
  createdAt: 1697250400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 1971,
  featured: false,
  description: 'Tokenized listing in Oakland, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.837,
  lng: -122.262,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 4861,
  totalShares: 200,
  availableShares: 66,
  capRate: 3.1,
};
