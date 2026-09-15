import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Detroit, MI. */
export const CATALOG_DETROIT: Property = {
  id: 'prop_022',
  title: 'Corktown studio block',
  location: 'Detroit, MI',
  price: 390000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_022',
  metadataUri: 'ipfs://QmCatalog022',
  createdAt: 1697042000,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  beds: 0,
  baths: 2,
  sqft: 4200,
  propertyType: 'commercial',
  yearBuilt: 2002,
  featured: false,
  description: 'Sample tokenized listing in Detroit, MI. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.331,
  lng: -83.046,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1950,
  totalShares: 200,
  availableShares: 102,
  capRate: 5.2,
};
