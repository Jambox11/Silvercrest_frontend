import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Portland, OR. */
export const CATALOG_PORTLAND_ALBERTA: Property = {
  id: 'prop_253',
  title: 'Alberta arts cottage',
  location: 'Portland, OR',
  price: 468000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_253',
  metadataUri: 'ipfs://QmCatalog253',
  createdAt: 1697247700,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1450,
  propertyType: 'house',
  yearBuilt: 1968,
  featured: false,
  description: 'Tokenized listing in Portland, OR. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 45.559,
  lng: -122.65,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2600,
  totalShares: 200,
  availableShares: 63,
  capRate: 3.5,
};
