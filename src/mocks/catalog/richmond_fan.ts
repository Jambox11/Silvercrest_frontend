import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Richmond, VA. */
export const CATALOG_RICHMOND_FAN: Property = {
  id: 'prop_237',
  title: 'The Fan townhouse',
  location: 'Richmond, VA',
  price: 398000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_237',
  metadataUri: 'ipfs://QmCatalog237',
  createdAt: 1697233300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 2,
  sqft: 1650,
  propertyType: 'house',
  yearBuilt: 2002,
  featured: false,
  description: 'Tokenized listing in Richmond, VA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 37.553,
  lng: -77.467,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2211,
  totalShares: 200,
  availableShares: 97,
  capRate: 3.5,
};
