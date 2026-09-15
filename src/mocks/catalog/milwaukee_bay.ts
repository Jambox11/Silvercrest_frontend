import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Milwaukee, WI. */
export const CATALOG_MILWAUKEE_BAY: Property = {
  id: 'prop_270',
  title: 'Bay View bungalow',
  location: 'Milwaukee, WI',
  price: 268000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_270',
  metadataUri: 'ipfs://QmCatalog270',
  createdAt: 1697263000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1400,
  propertyType: 'house',
  yearBuilt: 1985,
  featured: false,
  description: 'Tokenized listing in Milwaukee, WI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.002,
  lng: -87.895,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1488,
  totalShares: 200,
  availableShares: 80,
  capRate: 3.9000000000000004,
};
