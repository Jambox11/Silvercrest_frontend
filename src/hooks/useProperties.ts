'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Property } from '@/lib/types';
import { getProperties, searchProperties } from '@/lib/api';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const load = useCallback(async (searchQuery?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = searchQuery?.trim()
        ? await searchProperties(searchQuery.trim())
        : await getProperties(0, 50);
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load properties');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const search = useCallback(
    (value: string) => {
      setQuery(value);
      load(value);
    },
    [load]
  );

  const refresh = useCallback(() => load(query), [load, query]);

  return { properties, isLoading, error, query, search, refresh };
}
