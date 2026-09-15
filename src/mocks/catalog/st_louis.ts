import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for St. Louis, MO. */
export const CATALOG_ST_LOUIS: Property = {
  id: 'prop_038',
  title: 'Central West End greystone',
  location: 'St. Louis, MO',
  price: 375000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_038',
  metadataUri: 'ipfs://QmDummy038',
  createdAt: 1697058000,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  beds: 4,
  baths: 3,
  sqft: 2200,
  propertyType: 'house',
  yearBuilt: 2018,
  featured: false,
  description: 'Dummy tokenized listing in St. Louis, MO. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 38.627,
  lng: -90.199,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1875,
  totalShares: 200,
  availableShares: 118,
  capRate: 6.2,
};
