import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Atlanta, GA. */
export const CATALOG_ATLANTA_GRANT: Property = {
  id: 'prop_243',
  title: 'Grant Park loft',
  location: 'Atlanta, GA',
  price: 365000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_243',
  metadataUri: 'ipfs://QmCatalog243',
  createdAt: 1697238700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 2,
  baths: 2,
  sqft: 1100,
  propertyType: 'condo',
  yearBuilt: 2008,
  featured: false,
  description: 'Tokenized listing in Atlanta, GA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 33.736,
  lng: -84.373,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2027,
  totalShares: 200,
  availableShares: 103,
  capRate: 4.300000000000001,
};
