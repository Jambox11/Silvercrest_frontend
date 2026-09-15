import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Minneapolis, MN. */
export const CATALOG_MINNEAPOLIS: Property = {
  id: 'prop_021',
  title: 'Lakes district tudor',
  location: 'Minneapolis, MN',
  price: 520000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_021',
  metadataUri: 'ipfs://QmDummy021',
  createdAt: 1697041000,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 4,
  baths: 3,
  sqft: 2200,
  propertyType: 'house',
  yearBuilt: 2001,
  featured: false,
  description: 'Dummy tokenized listing in Minneapolis, MN. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.978,
  lng: -93.265,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2600,
  totalShares: 200,
  availableShares: 101,
  capRate: 4.2,
};
