import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Burlington, VT. */
export const CATALOG_BURLINGTON: Property = {
  id: 'prop_041',
  title: 'South End farmhouse',
  location: 'Burlington, VT',
  price: 520000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_041',
  metadataUri: 'ipfs://QmCatalog041',
  createdAt: 1697061000,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1900,
  propertyType: 'house',
  yearBuilt: 1981,
  featured: false,
  description: 'Sample tokenized listing in Burlington, VT. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 44.476,
  lng: -73.212,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2600,
  totalShares: 200,
  availableShares: 81,
  capRate: 4.2,
};
