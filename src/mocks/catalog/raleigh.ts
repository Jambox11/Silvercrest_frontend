import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Raleigh, NC. */
export const CATALOG_RALEIGH: Property = {
  id: 'prop_025',
  title: 'Oakwood victorian',
  location: 'Raleigh, NC',
  price: 498000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_025',
  metadataUri: 'ipfs://QmDummy025',
  createdAt: 1697045000,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 4,
  baths: 3,
  sqft: 2300,
  propertyType: 'house',
  yearBuilt: 2005,
  featured: true,
  description: 'Dummy tokenized listing in Raleigh, NC. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.779,
  lng: -78.638,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2490,
  totalShares: 200,
  availableShares: 105,
  capRate: 3.2,
};
