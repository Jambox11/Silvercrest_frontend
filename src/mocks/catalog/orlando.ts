import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Orlando, FL. */
export const CATALOG_ORLANDO: Property = {
  id: 'prop_031',
  title: 'Winter Park cottage',
  location: 'Orlando, FL',
  price: 448000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_031',
  metadataUri: 'ipfs://QmDummy031',
  createdAt: 1697051000,
  image: 'https://images.unsplash.com/photo-1518780664697-55e3ad933588?w=800',
  beds: 3,
  baths: 2,
  sqft: 1580,
  propertyType: 'house',
  yearBuilt: 2011,
  featured: false,
  description: 'Dummy tokenized listing in Orlando, FL. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 28.538,
  lng: -81.379,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 2240,
  totalShares: 200,
  availableShares: 111,
  capRate: 4.2,
};
