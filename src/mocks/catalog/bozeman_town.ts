import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Bozeman, MT. */
export const CATALOG_BOZEMAN_TOWN: Property = {
  id: 'prop_278',
  title: 'Townsend street cabin',
  location: 'Bozeman, MT',
  price: 641000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_278',
  metadataUri: 'ipfs://QmCatalog278',
  createdAt: 1697270200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'cabin',
  yearBuilt: 1993,
  featured: true,
  description: 'Tokenized listing in Bozeman, MT. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 45.68,
  lng: -111.039,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 3561,
  totalShares: 200,
  availableShares: 88,
  capRate: 3.9000000000000004,
};
