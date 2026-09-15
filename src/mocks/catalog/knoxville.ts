import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Knoxville, TN. */
export const CATALOG_KNOXVILLE: Property = {
  id: 'prop_211',
  title: 'Old North Knoxville',
  location: 'Knoxville, TN',
  price: 289000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_211',
  metadataUri: 'ipfs://QmCatalog211',
  createdAt: 1697209900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'house',
  yearBuilt: 1976,
  featured: false,
  description: 'Tokenized listing in Knoxville, TN. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.961,
  lng: -83.921,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1605,
  totalShares: 200,
  availableShares: 71,
  capRate: 4.300000000000001,
};
