import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Denver, CO. */
export const CATALOG_DENVER: Property = {
  id: 'prop_015',
  title: 'RiNo courtyard home',
  location: 'Denver, CO',
  price: 610000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_015',
  metadataUri: 'ipfs://QmDummy015',
  createdAt: 1697035000,
  image: 'https://images.unsplash.com/photo-1518780664697-55e3ad933588?w=800',
  beds: 4,
  baths: 3,
  sqft: 2400,
  propertyType: 'house',
  yearBuilt: 1995,
  featured: true,
  description: 'Dummy tokenized listing in Denver, CO. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.739,
  lng: -104.99,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 3050,
  totalShares: 200,
  availableShares: 95,
  capRate: 3.2,
};
