import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Miami, FL. */
export const CATALOG_MIAMI_WYNWOOD: Property = {
  id: 'prop_246',
  title: 'Wynwood warehouse loft',
  location: 'Miami, FL',
  price: 489000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_246',
  metadataUri: 'ipfs://QmCatalog246',
  createdAt: 1697241400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 1,
  baths: 1,
  sqft: 880,
  propertyType: 'condo',
  yearBuilt: 2011,
  featured: false,
  description: 'Tokenized listing in Miami, FL. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 25.801,
  lng: -80.199,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2716,
  totalShares: 200,
  availableShares: 106,
  capRate: 3.9000000000000004,
};
