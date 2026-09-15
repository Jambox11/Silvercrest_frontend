import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Cleveland, OH. */
export const CATALOG_CLEVELAND: Property = {
  id: 'prop_231',
  title: 'Ohio City brick',
  location: 'Cleveland, OH',
  price: 248000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_231',
  metadataUri: 'ipfs://QmCatalog231',
  createdAt: 1697227900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 1996,
  featured: false,
  description: 'Tokenized listing in Cleveland, OH. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.499,
  lng: -81.695,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1377,
  totalShares: 200,
  availableShares: 91,
  capRate: 4.300000000000001,
};
