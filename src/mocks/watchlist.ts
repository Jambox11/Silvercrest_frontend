import type { WatchlistItem } from '@/lib/types';

export const MOCK_WATCHLIST: WatchlistItem[] = [
  { propertyId: 'prop_001', addedAt: 1697020000 },
  { propertyId: 'prop_007', addedAt: 1697015000 },
  { propertyId: 'prop_010', addedAt: 1697010000 },
];

export function getMockWatchlist(): WatchlistItem[] {
  return MOCK_WATCHLIST;
}
