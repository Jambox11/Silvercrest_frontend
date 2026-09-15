import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Seattle, WA. */
export const CATALOG_SEATTLE: Property = {
  id: 'prop_014',
  title: 'Pike Place loft',
  location: 'Seattle, WA',
  price: 725000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_014',
  metadataUri: 'ipfs://QmCatalog014',
  createdAt: 1697034000,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  beds: 2,
  baths: 2,
  sqft: 1120,
  propertyType: 'condo',
  yearBuilt: 1994,
  featured: false,
  description: 'Sample tokenized listing in Seattle, WA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 47.606,
  lng: -122.332,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 3625,
  totalShares: 200,
  availableShares: 94,
  capRate: 7.2,
};
