import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Baltimore, MD. */
export const CATALOG_BALTIMORE_HAMP: Property = {
  id: 'prop_236',
  title: 'Hampden row',
  location: 'Baltimore, MD',
  price: 329000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_236',
  metadataUri: 'ipfs://QmCatalog236',
  createdAt: 1697232400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1480,
  propertyType: 'house',
  yearBuilt: 2001,
  featured: true,
  description: 'Tokenized listing in Baltimore, MD. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.331,
  lng: -76.635,
  agentId: 'agent_001',
  fractional: true,
  sharePrice: 1827,
  totalShares: 200,
  availableShares: 96,
  capRate: 3.1,
};
