import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Louisville, KY. */
export const CATALOG_LOUISVILLE: Property = {
  id: 'prop_210',
  title: 'Highlands shotgun',
  location: 'Louisville, KY',
  price: 312000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_210',
  metadataUri: 'ipfs://QmCatalog210',
  createdAt: 1697209000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 1975,
  featured: false,
  description: 'Tokenized listing in Louisville, KY. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 38.253,
  lng: -85.759,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1733,
  totalShares: 200,
  availableShares: 70,
  capRate: 3.9000000000000004,
};
