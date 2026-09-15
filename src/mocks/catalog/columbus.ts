import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Columbus, OH. */
export const CATALOG_COLUMBUS: Property = {
  id: 'prop_034',
  title: 'German Village brick',
  location: 'Columbus, OH',
  price: 360000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_034',
  metadataUri: 'ipfs://QmCatalog034',
  createdAt: 1697054000,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1650,
  propertyType: 'house',
  yearBuilt: 2014,
  featured: false,
  description: 'Sample tokenized listing in Columbus, OH. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.961,
  lng: -82.999,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1800,
  totalShares: 200,
  availableShares: 114,
  capRate: 7.2,
};
