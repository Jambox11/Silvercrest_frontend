import type { Property } from '@/lib/types';
import { MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

/** Dummy catalog entry for Honolulu, HI. */
export const CATALOG_HONOLULU_EXTRA: Property = {
  id: 'prop_050',
  title: 'Ala Moana tower residence',
  location: 'Honolulu, HI',
  price: 1120000,
  currency: 'USD',
  owner: MOCK_WALLET_PUBLIC_KEY,
  nftContract: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4',
  nftId: 'nft_050',
  metadataUri: 'ipfs://QmDummy050',
  createdAt: 1697070000,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
  beds: 2,
  baths: 2,
  sqft: 1200,
  propertyType: 'condo',
  yearBuilt: 1990,
  featured: true,
  description: 'Dummy tokenized listing in Honolulu, HI. Specs and pricing are simulated for the SilverKrest marketplace demo.',
  amenities: ['Dummy inventory', 'Stellar NFT', 'Testnet ready'],
  lat: 21.307,
  lng: -157.858,
  agentId: 'agent_003',
  fractional: false,
  sharePrice: 5600,
  totalShares: 200,
  availableShares: 90,
  capRate: 3.2,
};
