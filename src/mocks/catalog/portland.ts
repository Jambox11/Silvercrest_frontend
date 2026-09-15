import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Portland, OR. */
export const CATALOG_PORTLAND: Property = {
  id: 'prop_017',
  title: 'Alberta arts bungalow',
  location: 'Portland, OR',
  price: 489000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_017',
  metadataUri: 'ipfs://QmCatalog017',
  createdAt: 1697037000,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1550,
  propertyType: 'house',
  yearBuilt: 1997,
  featured: false,
  description: 'Sample tokenized listing in Portland, OR. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 45.515,
  lng: -122.679,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2445,
  totalShares: 200,
  availableShares: 97,
  capRate: 5.2,
};
