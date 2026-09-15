import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Hartford, CT. */
export const CATALOG_HARTFORD: Property = {
  id: 'prop_214',
  title: 'West End victorian',
  location: 'Hartford, CT',
  price: 355000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_214',
  metadataUri: 'ipfs://QmCatalog214',
  createdAt: 1697212600,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 4,
  baths: 3,
  sqft: 2000,
  propertyType: 'house',
  yearBuilt: 1979,
  featured: false,
  description: 'Tokenized listing in Hartford, CT. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.764,
  lng: -72.682,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1972,
  totalShares: 200,
  availableShares: 74,
  capRate: 3.9000000000000004,
};
