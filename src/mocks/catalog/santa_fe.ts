import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Santa Fe, NM. */
export const CATALOG_SANTA_FE: Property = {
  id: 'prop_043',
  title: 'Canyon Road adobe',
  location: 'Santa Fe, NM',
  price: 780000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_043',
  metadataUri: 'ipfs://QmDummy043',
  createdAt: 1697063000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 1983,
  featured: false,
  description: 'Dummy tokenized listing in Santa Fe, NM. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.687,
  lng: -105.938,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 3900,
  totalShares: 200,
  availableShares: 83,
  capRate: 6.2,
};
