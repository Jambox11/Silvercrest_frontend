import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Kansas City, MO. */
export const CATALOG_KANSAS_CITY: Property = {
  id: 'prop_027',
  title: 'Brookside foursquare',
  location: 'Kansas City, MO',
  price: 385000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_027',
  metadataUri: 'ipfs://QmCatalog027',
  createdAt: 1697047000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 4,
  baths: 2,
  sqft: 2000,
  propertyType: 'house',
  yearBuilt: 2007,
  featured: false,
  description: 'Sample tokenized listing in Kansas City, MO. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.1,
  lng: -94.579,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1925,
  totalShares: 200,
  availableShares: 107,
  capRate: 5.2,
};
