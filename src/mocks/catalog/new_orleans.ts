import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for New Orleans, LA. */
export const CATALOG_NEW_ORLEANS: Property = {
  id: 'prop_023',
  title: 'Garden District shotgun',
  location: 'New Orleans, LA',
  price: 435000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_023',
  metadataUri: 'ipfs://QmCatalog023',
  createdAt: 1697043000,
  image: 'https://images.unsplash.com/photo-1518780664697-55e3ad933588?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 2003,
  featured: false,
  description: 'Sample tokenized listing in New Orleans, LA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 29.951,
  lng: -90.072,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2175,
  totalShares: 200,
  availableShares: 103,
  capRate: 6.2,
};
