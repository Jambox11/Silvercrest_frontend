import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Jacksonville, FL. */
export const CATALOG_JACKSONVILLE: Property = {
  id: 'prop_205',
  title: 'Riverside cottage',
  location: 'Jacksonville, FL',
  price: 335000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_205',
  metadataUri: 'ipfs://QmCatalog205',
  createdAt: 1697204500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1580,
  propertyType: 'house',
  yearBuilt: 1970,
  featured: false,
  description: 'Tokenized listing in Jacksonville, FL. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 30.332,
  lng: -81.656,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1861,
  totalShares: 200,
  availableShares: 65,
  capRate: 3.5,
};
