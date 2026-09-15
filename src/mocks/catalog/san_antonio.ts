import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for San Antonio, TX. */
export const CATALOG_SAN_ANTONIO: Property = {
  id: 'prop_202',
  title: 'King William victorian',
  location: 'San Antonio, TX',
  price: 445000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_202',
  metadataUri: 'ipfs://QmCatalog202',
  createdAt: 1697201800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 4,
  baths: 3,
  sqft: 2100,
  propertyType: 'house',
  yearBuilt: 1967,
  featured: false,
  description: 'Tokenized listing in San Antonio, TX. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 29.424,
  lng: -98.494,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2472,
  totalShares: 200,
  availableShares: 62,
  capRate: 3.9000000000000004,
};
