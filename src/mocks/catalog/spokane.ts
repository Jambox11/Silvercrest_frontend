import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Catalog listing for Spokane, WA. */
export const CATALOG_SPOKANE: Property = {
  id: 'prop_217',
  title: 'South Hill craftsman',
  location: 'Spokane, WA',
  price: 387000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_217',
  metadataUri: 'ipfs://QmCatalog217',
  createdAt: 1697215300,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 4,
  baths: 2,
  sqft: 1950,
  propertyType: 'house',
  yearBuilt: 1982,
  featured: false,
  description: 'Tokenized listing in Spokane, WA. Pricing and specs are catalog samples for the SilverKrest marketplace.',
  amenities: ['Catalog inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 47.659,
  lng: -117.426,
  agentId: 'agent_002',
  fractional: false,
  sharePrice: 2150,
  totalShares: 200,
  availableShares: 77,
  capRate: 3.5,
};
