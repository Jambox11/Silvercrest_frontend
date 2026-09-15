import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Baltimore, MD. */
export const CATALOG_BALTIMORE: Property = {
  id: 'prop_039',
  title: 'Fells Point rowhome',
  location: 'Baltimore, MD',
  price: 365000,
  currency: 'USD',
  owner: MOCK_SELLER_2,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_039',
  metadataUri: 'ipfs://QmCatalog039',
  createdAt: 1697059000,
  image: 'https://images.unsplash.com/photo-1518780664697-55e3ad933588?w=800',
  beds: 3,
  baths: 2,
  sqft: 1560,
  propertyType: 'house',
  yearBuilt: 2019,
  featured: false,
  description: 'Sample tokenized listing in Baltimore, MD. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 39.29,
  lng: -76.612,
  agentId: 'agent_004',
  fractional: false,
  sharePrice: 1825,
  totalShares: 200,
  availableShares: 119,
  capRate: 7.2,
};
