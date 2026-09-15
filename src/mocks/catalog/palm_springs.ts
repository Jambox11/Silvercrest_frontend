import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Palm Springs, CA. */
export const CATALOG_PALM_SPRINGS: Property = {
  id: 'prop_048',
  title: 'Mid-century desert home',
  location: 'Palm Springs, CA',
  price: 910000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_048',
  metadataUri: 'ipfs://QmCatalog048',
  createdAt: 1697068000,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 1988,
  featured: false,
  description: 'Sample tokenized listing in Palm Springs, CA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 33.83,
  lng: -116.545,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 4550,
  totalShares: 200,
  availableShares: 88,
  capRate: 6.2,
};
