import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Tucson, AZ. */
export const CATALOG_TUCSON: Property = {
  id: 'prop_222',
  title: 'Sam Hughes adobe',
  location: 'Tucson, AZ',
  price: 349000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_222',
  metadataUri: 'ipfs://QmCatalog222',
  createdAt: 1697219800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 1987,
  featured: false,
  description: 'Tokenized listing in Tucson, AZ. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.223,
  lng: -110.975,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1938,
  totalShares: 200,
  availableShares: 82,
  capRate: 3.9000000000000004,
};
