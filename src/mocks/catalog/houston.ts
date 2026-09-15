import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Houston, TX. */
export const CATALOG_HOUSTON: Property = {
  id: 'prop_201',
  title: 'Montrose courtyard home',
  location: 'Houston, TX',
  price: 389000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_201',
  metadataUri: 'ipfs://QmCatalog201',
  createdAt: 1697200900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 1966,
  featured: false,
  description: 'Tokenized listing in Houston, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 29.76,
  lng: -95.37,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2161,
  totalShares: 200,
  availableShares: 61,
  capRate: 3.5,
};
