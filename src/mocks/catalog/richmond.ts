import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Richmond, VA. */
export const CATALOG_RICHMOND: Property = {
  id: 'prop_029',
  title: 'Church Hill row',
  location: 'Richmond, VA',
  price: 415000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_029',
  metadataUri: 'ipfs://QmDummy029',
  createdAt: 1697049000,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1750,
  propertyType: 'house',
  yearBuilt: 2009,
  featured: false,
  description: 'Dummy tokenized listing in Richmond, VA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.541,
  lng: -77.436,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2075,
  totalShares: 200,
  availableShares: 109,
  capRate: 7.2,
};
