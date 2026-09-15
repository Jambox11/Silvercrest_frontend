import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Portland, ME. */
export const CATALOG_PORTLAND_ME: Property = {
  id: 'prop_275',
  title: 'West End federal',
  location: 'Portland, ME',
  price: 589000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_275',
  metadataUri: 'ipfs://QmCatalog275',
  createdAt: 1697267500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 1990,
  featured: false,
  description: 'Tokenized listing in Portland, ME. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.659,
  lng: -70.257,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 3272,
  totalShares: 200,
  availableShares: 85,
  capRate: 4.300000000000001,
};
