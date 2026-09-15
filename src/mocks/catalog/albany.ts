import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Albany, NY. */
export const CATALOG_ALBANY: Property = {
  id: 'prop_215',
  title: 'Center Square row',
  location: 'Albany, NY',
  price: 298000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_215',
  metadataUri: 'ipfs://QmCatalog215',
  createdAt: 1697213500,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  beds: 3,
  baths: 2,
  sqft: 1600,
  propertyType: 'house',
  yearBuilt: 1980,
  featured: false,
  description: 'Tokenized listing in Albany, NY. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 42.652,
  lng: -73.756,
  agentId: 'agent_004',
  fractional: true,
  sharePrice: 1655,
  totalShares: 200,
  availableShares: 75,
  capRate: 4.300000000000001,
};
