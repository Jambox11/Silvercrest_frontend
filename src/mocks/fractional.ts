import type { FractionalPosition } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY, MOCK_BUYER_2 } from '@/lib/constants';

export const MOCK_FRACTIONAL_POSITIONS: FractionalPosition[] = [
  {
    id: 'frac_001',
    propertyId: 'prop_007',
    propertyTitle: 'Vineyard Estate',
    owner: MOCK_WALLET_PUBLIC_KEY,
    shares: 40,
    sharePrice: 8000,
    acquiredAt: 1697012000,
  },
  {
    id: 'frac_002',
    propertyId: 'prop_010',
    propertyTitle: 'Ski Chalet',
    owner: MOCK_WALLET_PUBLIC_KEY,
    shares: 12,
    sharePrice: 5000,
    acquiredAt: 1697016000,
  },
  {
    id: 'frac_003',
    propertyId: 'prop_001',
    propertyTitle: 'Sunny Beachfront Villa',
    owner: MOCK_BUYER_2,
    shares: 8,
    sharePrice: 2500,
    acquiredAt: 1697019000,
  },
];

export function getMockPositions(owner?: string): FractionalPosition[] {
  if (!owner) return MOCK_FRACTIONAL_POSITIONS;
  return MOCK_FRACTIONAL_POSITIONS.filter(p => p.owner === owner);
}
