import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Indianapolis, IN. */
export const CATALOG_INDIANAPOLIS: Property = {
  id: 'prop_035',
  title: 'Mass Ave row',
  location: 'Indianapolis, IN',
  price: 295000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_035',
  metadataUri: 'ipfs://QmCatalog035',
  createdAt: 1697055000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 2015,
  featured: true,
  description: 'Sample tokenized listing in Indianapolis, IN. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.768,
  lng: -86.158,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1475,
  totalShares: 200,
  availableShares: 115,
  capRate: 3.2,
};
