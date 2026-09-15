import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Boulder, CO. */
export const CATALOG_BOULDER: Property = {
  id: 'prop_251',
  title: 'Mapleton hill cottage',
  location: 'Boulder, CO',
  price: 890000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_251',
  metadataUri: 'ipfs://QmCatalog251',
  createdAt: 1697245900,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 3,
  baths: 2,
  sqft: 1680,
  propertyType: 'house',
  yearBuilt: 1966,
  featured: false,
  description: 'Tokenized listing in Boulder, CO. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 40.015,
  lng: -105.271,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 4944,
  totalShares: 200,
  availableShares: 61,
  capRate: 4.300000000000001,
};
