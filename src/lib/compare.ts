import { COMPARE_STORAGE_KEY } from '@/lib/constants';
import { readJson, writeJson } from '@/lib/storage';

const MAX_COMPARE = 3;

export function getCompareIds(): string[] {
  return readJson<string[]>(COMPARE_STORAGE_KEY, []);
}

export function toggleCompare(propertyId: string): string[] {
  const current = getCompareIds();
  if (current.includes(propertyId)) {
    const next = current.filter(id => id !== propertyId);
    writeJson(COMPARE_STORAGE_KEY, next);
    return next;
  }
  const next = [propertyId, ...current].slice(0, MAX_COMPARE);
  writeJson(COMPARE_STORAGE_KEY, next);
  return next;
}
