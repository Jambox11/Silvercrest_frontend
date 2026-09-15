'use client';

import { useMemo, useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PropertyCard } from '@/components/PropertyCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { getMockProperties } from '@/mocks';
import { getMockListings } from '@/mocks';
import { filterWatched, toggleWatchlist } from '@/lib/watchlist';

export default function WatchlistPage() {
  const [tick, setTick] = useState(0);
  const properties = useMemo(() => getMockProperties(0, 80), [tick]);
  const listings = getMockListings(undefined, 0, 80);
  const watched = filterWatched(properties);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Saved"
        title="Watchlist"
        subtitle="Dummy saved homes persist in local storage on this browser."
      />
      {watched.length === 0 ? (
        <EmptyState
          title="No saved properties"
          description="Open a listing and save it to build a watchlist."
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {watched.map(property => (
            <div key={property.id} className="relative">
              <PropertyCard
                property={property}
                listing={listings.find(l => l.propertyId === property.id)}
              />
              <button
                type="button"
                className="absolute top-3 right-3 z-10 bg-white/90 text-xs px-2 py-1 rounded-full border"
                onClick={() => {
                  toggleWatchlist(property.id);
                  setTick(t => t + 1);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
