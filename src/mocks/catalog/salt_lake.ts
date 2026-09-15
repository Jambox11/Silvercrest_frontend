import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Salt Lake City, UT. */
export const CATALOG_SALT_LAKE: Property = {
  id: 'prop_024',
  title: 'Avenues craftsman',
  location: 'Salt Lake City, UT',
  price: 575000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_024',
  metadataUri: 'ipfs://QmDummy024',
  createdAt: 1697044000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 4,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 2004,
  featured: false,
  description: 'Dummy tokenized listing in Salt Lake City, UT. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.761,
  lng: -111.891,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 2875,
  totalShares: 200,
  availableShares: 104,
  capRate: 7.2,
};
