import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Pittsburgh, PA. */
export const CATALOG_PITTSBURGH_LAW: Property = {
  id: 'prop_234',
  title: 'Lawrenceville row',
  location: 'Pittsburgh, PA',
  price: 318000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_234',
  metadataUri: 'ipfs://QmCatalog234',
  createdAt: 1697230600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1450,
  propertyType: 'house',
  yearBuilt: 1999,
  featured: false,
  description: 'Tokenized listing in Pittsburgh, PA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.467,
  lng: -79.964,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1766,
  totalShares: 200,
  availableShares: 94,
  capRate: 3.9000000000000004,
};
