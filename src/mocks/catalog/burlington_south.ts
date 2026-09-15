import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Burlington, VT. */
export const CATALOG_BURLINGTON_SOUTH: Property = {
  id: 'prop_276',
  title: 'South End mill house',
  location: 'Burlington, VT',
  price: 498000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_276',
  metadataUri: 'ipfs://QmCatalog276',
  createdAt: 1697268400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1991,
  featured: false,
  description: 'Tokenized listing in Burlington, VT. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.466,
  lng: -73.213,
  agentId: 'agent_001',
  fractional: false,
  sharePrice: 2766,
  totalShares: 200,
  availableShares: 86,
  capRate: 3.1,
};
