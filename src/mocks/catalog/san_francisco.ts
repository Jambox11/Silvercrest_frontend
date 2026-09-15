import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for San Francisco, CA. */
export const CATALOG_SAN_FRANCISCO: Property = {
  id: 'prop_255',
  title: 'Mission district loft',
  location: 'San Francisco, CA',
  price: 1125000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_255',
  metadataUri: 'ipfs://QmCatalog255',
  createdAt: 1697249500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 2,
  baths: 2,
  sqft: 980,
  propertyType: 'condo',
  yearBuilt: 1970,
  featured: false,
  description: 'Tokenized listing in San Francisco, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.76,
  lng: -122.419,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 6250,
  totalShares: 200,
  availableShares: 65,
  capRate: 4.300000000000001,
};
