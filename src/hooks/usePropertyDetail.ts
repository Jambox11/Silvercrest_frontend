'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Property, Listing, Offer } from '@/lib/types';
import {
  getProperty,
  getListingsForProperty,
  getOffersForListing,
} from '@/lib/api';

export function usePropertyDetail(propertyId: string) {
  const [property, setProperty] = useState<Property | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [prop, propertyListings] = await Promise.all([
        getProperty(propertyId),
        getListingsForProperty(propertyId),
      ]);

      if (!prop) {
        setError('Property not found');
        return;
      }

      setProperty(prop);
      setListings(propertyListings);

      const activeListing = propertyListings.find(l => l.status === 'active');
      if (activeListing) {
        const listingOffers = await getOffersForListing(activeListing.id);
        setOffers(listingOffers);
      } else {
        setOffers([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load property');
    } finally {
      setIsLoading(false);
    }
  }, [propertyId]);

  useEffect(() => {
    load();
  }, [load]);

  return { property, listings, offers, isLoading, error, refresh: load };
}
