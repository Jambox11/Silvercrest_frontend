import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Key West, FL. */
export const CATALOG_KEY_WEST: Property = {
  id: 'prop_049',
  title: 'Old Town conch house',
  location: 'Key West, FL',
  price: 980000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_049',
  metadataUri: 'ipfs://QmDummy049',
  createdAt: 1697069000,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 1989,
  featured: false,
  description: 'Dummy tokenized listing in Key West, FL. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 24.555,
  lng: -81.78,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 4900,
  totalShares: 200,
  availableShares: 89,
  capRate: 7.2,
};
