import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Flagstaff, AZ. */
export const CATALOG_FLAGSTAFF: Property = {
  id: 'prop_280',
  title: 'Downtown ponderosa cabin',
  location: 'Flagstaff, AZ',
  price: 534000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_280',
  metadataUri: 'ipfs://QmCatalog280',
  createdAt: 1697272000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'cabin',
  yearBuilt: 1995,
  featured: false,
  description: 'Tokenized listing in Flagstaff, AZ. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.198,
  lng: -111.651,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2966,
  totalShares: 200,
  availableShares: 90,
  capRate: 3.1,
};
