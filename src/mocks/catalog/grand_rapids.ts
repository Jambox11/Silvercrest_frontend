import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Grand Rapids, MI. */
export const CATALOG_GRAND_RAPIDS: Property = {
  id: 'prop_227',
  title: 'Heritage Hill colonial',
  location: 'Grand Rapids, MI',
  price: 312000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_227',
  metadataUri: 'ipfs://QmCatalog227',
  createdAt: 1697224300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 4,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 1992,
  featured: false,
  description: 'Tokenized listing in Grand Rapids, MI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.963,
  lng: -85.668,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 1733,
  totalShares: 200,
  availableShares: 87,
  capRate: 4.300000000000001,
};
