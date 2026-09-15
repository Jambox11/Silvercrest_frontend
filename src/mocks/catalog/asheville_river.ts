import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Asheville, NC. */
export const CATALOG_ASHEVILLE_RIVER: Property = {
  id: 'prop_277',
  title: 'River Arts lodge',
  location: 'Asheville, NC',
  price: 512000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_277',
  metadataUri: 'ipfs://QmCatalog277',
  createdAt: 1697269300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'cabin',
  yearBuilt: 1992,
  featured: false,
  description: 'Tokenized listing in Asheville, NC. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.578,
  lng: -82.564,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2844,
  totalShares: 200,
  availableShares: 87,
  capRate: 3.5,
};
