import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Fort Worth, TX. */
export const CATALOG_FORT_WORTH: Property = {
  id: 'prop_203',
  title: 'Near Southside craftsman',
  location: 'Fort Worth, TX',
  price: 372000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_203',
  metadataUri: 'ipfs://QmCatalog203',
  createdAt: 1697202700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 1968,
  featured: false,
  description: 'Tokenized listing in Fort Worth, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.755,
  lng: -97.331,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 2066,
  totalShares: 200,
  availableShares: 63,
  capRate: 4.300000000000001,
};
