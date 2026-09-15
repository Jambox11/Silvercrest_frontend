import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Cincinnati, OH. */
export const CATALOG_CINCINNATI_MT: Property = {
  id: 'prop_233',
  title: 'Mount Adams view home',
  location: 'Cincinnati, OH',
  price: 389000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_233',
  metadataUri: 'ipfs://QmCatalog233',
  createdAt: 1697229700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 1998,
  featured: false,
  description: 'Tokenized listing in Cincinnati, OH. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.107,
  lng: -84.498,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 2161,
  totalShares: 200,
  availableShares: 93,
  capRate: 3.5,
};
