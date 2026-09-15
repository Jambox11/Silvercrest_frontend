import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Philadelphia, PA. */
export const CATALOG_PHILADELPHIA: Property = {
  id: 'prop_235',
  title: 'Fishtown brick',
  location: 'Philadelphia, PA',
  price: 412000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_235',
  metadataUri: 'ipfs://QmCatalog235',
  createdAt: 1697231500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1520,
  propertyType: 'house',
  yearBuilt: 2000,
  featured: false,
  description: 'Tokenized listing in Philadelphia, PA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.952,
  lng: -75.164,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2288,
  totalShares: 200,
  availableShares: 95,
  capRate: 4.300000000000001,
};
