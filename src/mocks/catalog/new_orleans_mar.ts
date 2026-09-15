import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for New Orleans, LA. */
export const CATALOG_NEW_ORLEANS_MAR: Property = {
  id: 'prop_245',
  title: 'Marigny creole',
  location: 'New Orleans, LA',
  price: 448000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_245',
  metadataUri: 'ipfs://QmCatalog245',
  createdAt: 1697240500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'house',
  yearBuilt: 2010,
  featured: false,
  description: 'Tokenized listing in New Orleans, LA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 29.964,
  lng: -90.058,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 2488,
  totalShares: 200,
  availableShares: 105,
  capRate: 3.5,
};
