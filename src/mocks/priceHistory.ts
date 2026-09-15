import type { PricePoint } from '@/lib/types';

export const MOCK_PRICE_HISTORY: PricePoint[] = [
  { propertyId: 'prop_001', timestamp: 1694400000, price: 470000 },
  { propertyId: 'prop_001', timestamp: 1697000000, price: 500000 },
  { propertyId: 'prop_002', timestamp: 1694400000, price: 710000 },
  { propertyId: 'prop_002', timestamp: 1697001000, price: 750000 },
  { propertyId: 'prop_003', timestamp: 1694400000, price: 1880000 },
  { propertyId: 'prop_003', timestamp: 1697002000, price: 2000000 },
  { propertyId: 'prop_007', timestamp: 1694400000, price: 2950000 },
  { propertyId: 'prop_007', timestamp: 1697006000, price: 3200000 },
  { propertyId: 'prop_010', timestamp: 1694400000, price: 910000 },
  { propertyId: 'prop_010', timestamp: 1697009000, price: 980000 },
];

export function getMockPriceHistory(propertyId: string): PricePoint[] {
  return MOCK_PRICE_HISTORY.filter(p => p.propertyId === propertyId).sort(
    (a, b) => a.timestamp - b.timestamp
  );
}
