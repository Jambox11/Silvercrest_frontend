import type { Property } from '@/lib/types';
import { WATCHLIST_STORAGE_KEY } from '@/lib/constants';
import { readJson, writeJson } from '@/lib/storage';
import { MOCK_WATCHLIST } from '@/mocks/watchlist';

export function getWatchlistIds(): string[] {
  const stored = readJson<string[]>(WATCHLIST_STORAGE_KEY, MOCK_WATCHLIST.map(w => w.propertyId));
  return stored;
}

export function isWatched(propertyId: string): boolean {
  return getWatchlistIds().includes(propertyId);
}

export function toggleWatchlist(propertyId: string): string[] {
  const current = getWatchlistIds();
  const next = current.includes(propertyId)
    ? current.filter(id => id !== propertyId)
    : [propertyId, ...current];
  writeJson(WATCHLIST_STORAGE_KEY, next);
  return next;
}

export function filterWatched(properties: Property[]): Property[] {
  const ids = new Set(getWatchlistIds());
  return properties.filter(p => ids.has(p.id));
}
