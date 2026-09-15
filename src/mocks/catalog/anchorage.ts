import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Anchorage, AK. */
export const CATALOG_ANCHORAGE: Property = {
  id: 'prop_263',
  title: 'South Addition rambler',
  location: 'Anchorage, AK',
  price: 412000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_263',
  metadataUri: 'ipfs://QmCatalog263',
  createdAt: 1697256700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 1978,
  featured: false,
  description: 'Tokenized listing in Anchorage, AK. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 61.218,
  lng: -149.9,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 2288,
  totalShares: 200,
  availableShares: 73,
  capRate: 4.300000000000001,
};
