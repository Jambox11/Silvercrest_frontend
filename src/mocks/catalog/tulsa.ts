import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Tulsa, OK. */
export const CATALOG_TULSA: Property = {
  id: 'prop_207',
  title: 'Maple Ridge brick',
  location: 'Tulsa, OK',
  price: 295000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_207',
  metadataUri: 'ipfs://QmCatalog207',
  createdAt: 1697206300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1650,
  propertyType: 'house',
  yearBuilt: 1972,
  featured: false,
  description: 'Tokenized listing in Tulsa, OK. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 36.154,
  lng: -95.993,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1638,
  totalShares: 200,
  availableShares: 67,
  capRate: 4.300000000000001,
};
