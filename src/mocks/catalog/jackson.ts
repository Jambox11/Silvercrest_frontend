import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Jackson, WY. */
export const CATALOG_JACKSON: Property = {
  id: 'prop_047',
  title: 'Teton view chalet',
  location: 'Jackson, WY',
  price: 1450000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_047',
  metadataUri: 'ipfs://QmCatalog047',
  createdAt: 1697067000,
  image: 'https://images.unsplash.com/photo-1518780664697-55e3ad933588?w=800',
  beds: 4,
  baths: 3,
  sqft: 2800,
  propertyType: 'cabin',
  yearBuilt: 1987,
  featured: false,
  description: 'Sample tokenized listing in Jackson, WY. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.48,
  lng: -110.762,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 7250,
  totalShares: 200,
  availableShares: 87,
  capRate: 5.2,
};
