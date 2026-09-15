import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Raleigh, NC. */
export const CATALOG_RALEIGH_BOYLAN: Property = {
  id: 'prop_239',
  title: 'Boylan Heights bungalow',
  location: 'Raleigh, NC',
  price: 455000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_239',
  metadataUri: 'ipfs://QmCatalog239',
  createdAt: 1697235100,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 2004,
  featured: false,
  description: 'Tokenized listing in Raleigh, NC. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.772,
  lng: -78.65,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 2527,
  totalShares: 200,
  availableShares: 99,
  capRate: 4.300000000000001,
};
