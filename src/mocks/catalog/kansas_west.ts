import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Kansas City, MO. */
export const CATALOG_KANSAS_WEST: Property = {
  id: 'prop_267',
  title: 'Westport cottage',
  location: 'Kansas City, MO',
  price: 289000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_267',
  metadataUri: 'ipfs://QmCatalog267',
  createdAt: 1697260300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1400,
  propertyType: 'house',
  yearBuilt: 1982,
  featured: false,
  description: 'Tokenized listing in Kansas City, MO. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.053,
  lng: -94.592,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1605,
  totalShares: 200,
  availableShares: 77,
  capRate: 4.300000000000001,
};
