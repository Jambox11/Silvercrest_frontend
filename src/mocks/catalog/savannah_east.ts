import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Savannah, GA. */
export const CATALOG_SAVANNAH_EAST: Property = {
  id: 'prop_242',
  title: 'Eastside cottage',
  location: 'Savannah, GA',
  price: 398000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_242',
  metadataUri: 'ipfs://QmCatalog242',
  createdAt: 1697237800,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 2,
  baths: 2,
  sqft: 1320,
  propertyType: 'house',
  yearBuilt: 2007,
  featured: true,
  description: 'Tokenized listing in Savannah, GA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.078,
  lng: -81.081,
  agentId: 'agent_003',
  fractional: true,
  sharePrice: 2211,
  totalShares: 200,
  availableShares: 102,
  capRate: 3.9000000000000004,
};
