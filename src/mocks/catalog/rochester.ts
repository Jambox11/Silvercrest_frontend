import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Rochester, NY. */
export const CATALOG_ROCHESTER: Property = {
  id: 'prop_213',
  title: 'Park Avenue colonial',
  location: 'Rochester, NY',
  price: 274000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_213',
  metadataUri: 'ipfs://QmCatalog213',
  createdAt: 1697211700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 1978,
  featured: false,
  description: 'Tokenized listing in Rochester, NY. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.157,
  lng: -77.615,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1522,
  totalShares: 200,
  availableShares: 73,
  capRate: 3.5,
};
