import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for St. Paul, MN. */
export const CATALOG_ST_PAUL: Property = {
  id: 'prop_266',
  title: 'Summit Avenue brick',
  location: 'St. Paul, MN',
  price: 425000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_266',
  metadataUri: 'ipfs://QmCatalog266',
  createdAt: 1697259400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 4,
  baths: 3,
  sqft: 2200,
  propertyType: 'house',
  yearBuilt: 1981,
  featured: true,
  description: 'Tokenized listing in St. Paul, MN. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.944,
  lng: -93.146,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 2361,
  totalShares: 200,
  availableShares: 76,
  capRate: 3.9000000000000004,
};
