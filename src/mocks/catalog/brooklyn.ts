import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Brooklyn, NY. */
export const CATALOG_BROOKLYN: Property = {
  id: 'prop_051',
  title: 'Williamsburg warehouse loft',
  location: 'Brooklyn, NY',
  price: 890000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_051',
  metadataUri: 'ipfs://QmCatalog051',
  createdAt: 1697071000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 2,
  baths: 2,
  sqft: 1100,
  propertyType: 'condo',
  yearBuilt: 1991,
  featured: false,
  description: 'Sample tokenized listing in Brooklyn, NY. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.708,
  lng: -73.957,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 4450,
  totalShares: 200,
  availableShares: 91,
  capRate: 4.2,
};
