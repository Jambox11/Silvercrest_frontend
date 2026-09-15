import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Milwaukee, WI. */
export const CATALOG_MILWAUKEE: Property = {
  id: 'prop_028',
  title: 'Third Ward loft',
  location: 'Milwaukee, WI',
  price: 329000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_028',
  metadataUri: 'ipfs://QmCatalog028',
  createdAt: 1697048000,
  image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
  beds: 1,
  baths: 1,
  sqft: 880,
  propertyType: 'condo',
  yearBuilt: 2008,
  featured: false,
  description: 'Sample tokenized listing in Milwaukee, WI. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 43.039,
  lng: -87.906,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 1645,
  totalShares: 200,
  availableShares: 108,
  capRate: 6.2,
};
