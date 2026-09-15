import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for El Paso, TX. */
export const CATALOG_EL_PASO: Property = {
  id: 'prop_223',
  title: 'Kern Place bungalow',
  location: 'El Paso, TX',
  price: 242000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_223',
  metadataUri: 'ipfs://QmCatalog223',
  createdAt: 1697220700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 1988,
  featured: false,
  description: 'Tokenized listing in El Paso, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 31.761,
  lng: -106.485,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1344,
  totalShares: 200,
  availableShares: 83,
  capRate: 4.300000000000001,
};
