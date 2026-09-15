import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Charleston, SC. */
export const CATALOG_CHARLESTON: Property = {
  id: 'prop_241',
  title: 'Cannonborough single',
  location: 'Charleston, SC',
  price: 625000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_241',
  metadataUri: 'ipfs://QmCatalog241',
  createdAt: 1697236900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 2006,
  featured: false,
  description: 'Tokenized listing in Charleston, SC. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.776,
  lng: -79.931,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 3472,
  totalShares: 200,
  availableShares: 101,
  capRate: 3.5,
};
