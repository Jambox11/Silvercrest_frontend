import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Memphis, TN. */
export const CATALOG_MEMPHIS: Property = {
  id: 'prop_209',
  title: 'Cooper-Young cottage',
  location: 'Memphis, TN',
  price: 278000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_209',
  metadataUri: 'ipfs://QmCatalog209',
  createdAt: 1697208100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1974,
  featured: false,
  description: 'Tokenized listing in Memphis, TN. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.15,
  lng: -90.049,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 1544,
  totalShares: 200,
  availableShares: 69,
  capRate: 3.5,
};
