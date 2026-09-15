import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for San Diego, CA. */
export const CATALOG_SAN_DIEGO_NORTH: Property = {
  id: 'prop_258',
  title: 'North Park condo',
  location: 'San Diego, CA',
  price: 612000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_258',
  metadataUri: 'ipfs://QmCatalog258',
  createdAt: 1697252200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 2,
  baths: 2,
  sqft: 950,
  propertyType: 'condo',
  yearBuilt: 1973,
  featured: false,
  description: 'Tokenized listing in San Diego, CA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.741,
  lng: -117.13,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 3400,
  totalShares: 200,
  availableShares: 68,
  capRate: 3.9000000000000004,
};
