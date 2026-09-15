import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Nashville, TN. */
export const CATALOG_NASHVILLE: Property = {
  id: 'prop_018',
  title: 'East Nashville cottage',
  location: 'Nashville, TN',
  price: 410000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_018',
  metadataUri: 'ipfs://QmCatalog018',
  createdAt: 1697038000,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 1998,
  featured: false,
  description: 'Sample tokenized listing in Nashville, TN. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 36.162,
  lng: -86.781,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2050,
  totalShares: 200,
  availableShares: 98,
  capRate: 6.2,
};
