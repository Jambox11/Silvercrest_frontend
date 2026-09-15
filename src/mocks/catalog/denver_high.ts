import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Denver, CO. */
export const CATALOG_DENVER_HIGH: Property = {
  id: 'prop_250',
  title: 'Highlands loft',
  location: 'Denver, CO',
  price: 478000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_250',
  metadataUri: 'ipfs://QmCatalog250',
  createdAt: 1697245000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 2,
  baths: 2,
  sqft: 1080,
  propertyType: 'condo',
  yearBuilt: 1965,
  featured: false,
  description: 'Tokenized listing in Denver, CO. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.762,
  lng: -105.016,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2655,
  totalShares: 200,
  availableShares: 60,
  capRate: 3.9000000000000004,
};
