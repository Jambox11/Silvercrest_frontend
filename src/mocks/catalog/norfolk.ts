import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Norfolk, VA. */
export const CATALOG_NORFOLK: Property = {
  id: 'prop_238',
  title: 'Ghent cottage',
  location: 'Norfolk, VA',
  price: 334000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_238',
  metadataUri: 'ipfs://QmCatalog238',
  createdAt: 1697234200,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  beds: 3,
  baths: 2,
  sqft: 1500,
  propertyType: 'house',
  yearBuilt: 2003,
  featured: false,
  description: 'Tokenized listing in Norfolk, VA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 36.851,
  lng: -76.286,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1855,
  totalShares: 200,
  availableShares: 98,
  capRate: 3.9000000000000004,
};
