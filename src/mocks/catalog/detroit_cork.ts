import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Detroit, MI. */
export const CATALOG_DETROIT_CORK: Property = {
  id: 'prop_271',
  title: 'Corktown cottage',
  location: 'Detroit, MI',
  price: 229000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_271',
  metadataUri: 'ipfs://QmCatalog271',
  createdAt: 1697263900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1350,
  propertyType: 'house',
  yearBuilt: 1986,
  featured: false,
  description: 'Tokenized listing in Detroit, MI. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.329,
  lng: -83.064,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1272,
  totalShares: 200,
  availableShares: 81,
  capRate: 4.300000000000001,
};
