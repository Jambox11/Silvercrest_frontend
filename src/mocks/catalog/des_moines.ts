import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Des Moines, IA. */
export const CATALOG_DES_MOINES: Property = {
  id: 'prop_226',
  title: 'Sherman Hill victorian',
  location: 'Des Moines, IA',
  price: 259000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_226',
  metadataUri: 'ipfs://QmCatalog226',
  createdAt: 1697223400,
  image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  beds: 4,
  baths: 2,
  sqft: 1800,
  propertyType: 'house',
  yearBuilt: 1991,
  featured: false,
  description: 'Tokenized listing in Des Moines, IA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 41.587,
  lng: -93.625,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 1438,
  totalShares: 200,
  availableShares: 86,
  capRate: 3.9000000000000004,
};
