import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Bozeman, MT. */
export const CATALOG_BOZEMAN: Property = {
  id: 'prop_046',
  title: 'Bridger foothills cabin',
  location: 'Bozeman, MT',
  price: 720000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_046',
  metadataUri: 'ipfs://QmDummy046',
  createdAt: 1697066000,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  beds: 3,
  baths: 2,
  sqft: 1800,
  propertyType: 'cabin',
  yearBuilt: 1986,
  featured: false,
  description: 'Dummy tokenized listing in Bozeman, MT. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 45.677,
  lng: -111.043,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 3600,
  totalShares: 200,
  availableShares: 86,
  capRate: 4.2,
};
