import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Albuquerque, NM. */
export const CATALOG_ALBUQUERQUE: Property = {
  id: 'prop_221',
  title: 'Nob Hill pueblo',
  location: 'Albuquerque, NM',
  price: 368000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_221',
  metadataUri: 'ipfs://QmCatalog221',
  createdAt: 1697218900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1650,
  propertyType: 'house',
  yearBuilt: 1986,
  featured: false,
  description: 'Tokenized listing in Albuquerque, NM. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 35.084,
  lng: -106.65,
  agentId: 'agent_002',
  fractional: true,
  sharePrice: 2044,
  totalShares: 200,
  availableShares: 81,
  capRate: 3.5,
};
