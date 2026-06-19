'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Listing, Offer, Property } from '@/lib/types';
import { getListingsBySeller, getOffersByBuyer, getProperty, getListing } from '@/lib/api';

interface PortfolioListing extends Listing {
  property?: Property;
}

interface PortfolioOffer extends Offer {
  property?: Property;
}

export function usePortfolio(publicKey: string | null) {
  const [listings, setListings] = useState<PortfolioListing[]>([]);
  const [offers, setOffers] = useState<PortfolioOffer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!publicKey) {
      setListings([]);
      setOffers([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const [userListings, userOffers] = await Promise.all([
        getListingsBySeller(publicKey),
        getOffersByBuyer(publicKey),
      ]);

      const listingsWithProperties = await Promise.all(
        userListings.map(async listing => ({
          ...listing,
          property: (await getProperty(listing.propertyId)) ?? undefined,
        }))
      );

      const offersWithProperties = await Promise.all(
        userOffers.map(async offer => {
          const listing = await getListing(offer.listingId);
          const property = listing
            ? (await getProperty(listing.propertyId)) ?? undefined
            : undefined;
          return { ...offer, property };
        })
      );

      setListings(listingsWithProperties);
      setOffers(offersWithProperties);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio');
    } finally {
      setIsLoading(false);
    }
  }, [publicKey]);

  useEffect(() => {
    load();
  }, [load]);

  return { listings, offers, isLoading, error, refresh: load };
}
