import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Madison, WI. */
export const CATALOG_MADISON: Property = {
  id: 'prop_208',
  title: 'Willy Street bungalow',
  location: 'Madison, WI',
  price: 402000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_208',
  metadataUri: 'ipfs://QmCatalog208',
  createdAt: 1697207200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1620,
  propertyType: 'house',
  yearBuilt: 1973,
  featured: false,
  description: 'Tokenized listing in Madison, WI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.073,
  lng: -89.401,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2233,
  totalShares: 200,
  availableShares: 68,
  capRate: 3.1,
};
