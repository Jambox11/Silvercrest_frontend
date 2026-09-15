import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Dallas, TX. */
export const CATALOG_DALLAS: Property = {
  id: 'prop_200',
  title: 'Bishop Arts bungalow',
  location: 'Dallas, TX',
  price: 415000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_200',
  metadataUri: 'ipfs://QmCatalog200',
  createdAt: 1697200000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1720,
  propertyType: 'house',
  yearBuilt: 1965,
  featured: true,
  description: 'Tokenized listing in Dallas, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.776,
  lng: -96.797,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 2305,
  totalShares: 200,
  availableShares: 60,
  capRate: 3.1,
};
