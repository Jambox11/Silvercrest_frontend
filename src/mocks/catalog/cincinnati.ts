import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Cincinnati, OH. */
export const CATALOG_CINCINNATI: Property = {
  id: 'prop_037',
  title: 'Over-the-Rhine loft house',
  location: 'Cincinnati, OH',
  price: 340000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_037',
  metadataUri: 'ipfs://QmCatalog037',
  createdAt: 1697057000,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
  beds: 3,
  baths: 2,
  sqft: 1700,
  propertyType: 'house',
  yearBuilt: 2017,
  featured: false,
  description: 'Sample tokenized listing in Cincinnati, OH. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.103,
  lng: -84.512,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 1700,
  totalShares: 200,
  availableShares: 117,
  capRate: 5.2,
};
