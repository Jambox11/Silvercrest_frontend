import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Buffalo, NY. */
export const CATALOG_BUFFALO: Property = {
  id: 'prop_212',
  title: 'Elmwood village brick',
  location: 'Buffalo, NY',
  price: 265000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_212',
  metadataUri: 'ipfs://QmCatalog212',
  createdAt: 1697210800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 4,
  baths: 2,
  sqft: 1800,
  propertyType: 'house',
  yearBuilt: 1977,
  featured: true,
  description: 'Tokenized listing in Buffalo, NY. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.886,
  lng: -78.878,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 1472,
  totalShares: 200,
  availableShares: 72,
  capRate: 3.1,
};
