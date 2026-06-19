'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useProperties';
import { getListings } from '@/lib/api';
import { filterAndSortProperties } from '@/lib/filterProperties';
import type { Listing, PropertyFilters } from '@/lib/types';
import { PropertyCard } from './PropertyCard';
import { SearchBar } from './SearchBar';
import { PropertyFiltersBar } from './PropertyFiltersBar';
import { PropertyGridSkeleton } from './ui/LoadingSkeleton';
import { ErrorMessage } from './ui/ErrorMessage';
import { EmptyState } from './ui/EmptyState';

interface PropertyBrowserProps {
  limit?: number;
  featuredOnly?: boolean;
  showFilters?: boolean;
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function PropertyBrowser({
  limit,
  featuredOnly = false,
  showFilters = true,
  showViewAll = false,
  title = 'Discover Properties',
  subtitle = 'Browse tokenized real estate listings on Stellar',
}: PropertyBrowserProps) {
  const { properties, isLoading, error, query, search, refresh } = useProperties();
  const [listings, setListings] = useState<Listing[]>([]);
  const [filters, setFilters] = useState<PropertyFilters>({
    propertyType: 'all',
    status: 'all',
    sort: 'newest',
  });

  useEffect(() => {
    getListings(undefined, 0, 50).then(setListings).catch(() => setListings([]));
  }, []);

  const listingMap = useMemo(
    () => new Map(listings.map(l => [l.propertyId, l])),
    [listings]
  );

  const filtered = useMemo(() => {
    let source = featuredOnly ? properties.filter(p => p.featured) : properties;
    const result = filterAndSortProperties(source, listings, { ...filters, query });
    return limit ? result.slice(0, limit) : result;
  }, [properties, listings, filters, query, limit, featuredOnly]);

  if (error) {
    return (
      <section id="discover" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ErrorMessage message={error} onRetry={refresh} />
        </div>
      </section>
    );
  }

  return (
    <section id="discover" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-2">{subtitle}</p>
            </div>
            <SearchBar value={query} onChange={search} />
          </div>
          {showFilters && (
            <PropertyFiltersBar filters={filters} onChange={setFilters} />
          )}
        </div>

        {isLoading ? (
          <PropertyGridSkeleton count={limit ?? 6} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No properties found"
            description={
              query
                ? `No results for "${query}". Try adjusting your filters.`
                : 'No properties match your filters. Try broadening your search.'
            }
            action={
              query || filters.propertyType !== 'all' ? (
                <button
                  onClick={() => {
                    search('');
                    setFilters({ propertyType: 'all', status: 'all', sort: 'newest' });
                  }}
                  className="px-4 py-2 bg-stellar-500 text-white text-sm rounded-lg hover:bg-stellar-600 transition-colors"
                >
                  Reset search
                </button>
              ) : undefined
            }
          />
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">{filtered.length} properties</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  listing={listingMap.get(property.id)}
                />
              ))}
            </div>
            {showViewAll && (
              <div className="mt-10 text-center">
                <Link
                  href="/discover"
                  className="inline-block px-6 py-3 bg-stellar-500 text-white rounded-lg font-semibold hover:bg-stellar-600 transition-colors"
                >
                  View All Properties
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
