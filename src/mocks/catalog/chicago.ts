import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Chicago, IL. */
export const CATALOG_CHICAGO: Property = {
  id: 'prop_016',
  title: 'Gold Coast high-rise',
  location: 'Chicago, IL',
  price: 540000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_016',
  metadataUri: 'ipfs://QmCatalog016',
  createdAt: 1697036000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 2,
  baths: 2,
  sqft: 1050,
  propertyType: 'condo',
  yearBuilt: 1996,
  featured: false,
  description: 'Sample tokenized listing in Chicago, IL. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.878,
  lng: -87.63,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 2700,
  totalShares: 200,
  availableShares: 96,
  capRate: 4.2,
};
