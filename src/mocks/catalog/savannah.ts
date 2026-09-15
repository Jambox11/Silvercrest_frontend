import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Sample catalog entry for Savannah, GA. */
export const CATALOG_SAVANNAH: Property = {
  id: 'prop_042',
  title: 'Historic district townhouse',
  location: 'Savannah, GA',
  price: 560000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_042',
  metadataUri: 'ipfs://QmCatalog042',
  createdAt: 1697062000,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 3,
  baths: 3,
  sqft: 2000,
  propertyType: 'house',
  yearBuilt: 1982,
  featured: false,
  description: 'Sample tokenized listing in Savannah, GA. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Sample inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 32.081,
  lng: -81.091,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 2800,
  totalShares: 200,
  availableShares: 82,
  capRate: 5.2,
};
