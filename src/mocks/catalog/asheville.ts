import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Asheville, NC. */
export const CATALOG_ASHEVILLE: Property = {
  id: 'prop_045',
  title: 'Blue Ridge lodge',
  location: 'Asheville, NC',
  price: 585000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_045',
  metadataUri: 'ipfs://QmDummy045',
  createdAt: 1697065000,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 4,
  baths: 3,
  sqft: 2200,
  propertyType: 'cabin',
  yearBuilt: 1985,
  featured: true,
  description: 'Dummy tokenized listing in Asheville, NC. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.595,
  lng: -82.551,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2925,
  totalShares: 200,
  availableShares: 85,
  capRate: 3.2,
};
