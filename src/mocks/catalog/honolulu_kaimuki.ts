import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Honolulu, HI. */
export const CATALOG_HONOLULU_KAIMUKI: Property = {
  id: 'prop_262',
  title: 'Kaimuki plantation',
  location: 'Honolulu, HI',
  price: 978000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_262',
  metadataUri: 'ipfs://QmCatalog262',
  createdAt: 1697255800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1380,
  propertyType: 'house',
  yearBuilt: 1977,
  featured: false,
  description: 'Tokenized listing in Honolulu, HI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 21.285,
  lng: -157.801,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 5433,
  totalShares: 200,
  availableShares: 72,
  capRate: 3.9000000000000004,
};
