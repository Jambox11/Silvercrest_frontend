import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Omaha, NE. */
export const CATALOG_OMAHA: Property = {
  id: 'prop_206',
  title: 'Dundee foursquare',
  location: 'Omaha, NE',
  price: 318000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_206',
  metadataUri: 'ipfs://QmCatalog206',
  createdAt: 1697205400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 4,
  baths: 2,
  sqft: 1900,
  propertyType: 'house',
  yearBuilt: 1971,
  featured: true,
  description: 'Tokenized listing in Omaha, NE. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.257,
  lng: -95.935,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 1766,
  totalShares: 200,
  availableShares: 66,
  capRate: 3.9000000000000004,
};
