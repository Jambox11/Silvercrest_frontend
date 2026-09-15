import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Orlando, FL. */
export const CATALOG_ORLANDO_MILLS: Property = {
  id: 'prop_248',
  title: 'Mills 50 cottage',
  location: 'Orlando, FL',
  price: 341000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_248',
  metadataUri: 'ipfs://QmCatalog248',
  createdAt: 1697243200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1400,
  propertyType: 'house',
  yearBuilt: 2013,
  featured: true,
  description: 'Tokenized listing in Orlando, FL. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 28.548,
  lng: -81.367,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 1894,
  totalShares: 200,
  availableShares: 108,
  capRate: 3.1,
};
