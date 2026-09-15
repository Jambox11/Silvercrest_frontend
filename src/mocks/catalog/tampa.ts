import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Tampa, FL. */
export const CATALOG_TAMPA: Property = {
  id: 'prop_030',
  title: 'Hyde Park bungalow',
  location: 'Tampa, FL',
  price: 470000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_030',
  metadataUri: 'ipfs://QmCatalog030',
  createdAt: 1697050000,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  beds: 3,
  baths: 2,
  sqft: 1620,
  propertyType: 'house',
  yearBuilt: 2010,
  featured: true,
  description: 'Sample tokenized listing in Tampa, FL. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 27.951,
  lng: -82.459,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2350,
  totalShares: 200,
  availableShares: 110,
  capRate: 3.2,
};
