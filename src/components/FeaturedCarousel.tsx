'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getFeaturedProperties, getListings } from '@/lib/api';
import type { Property, Listing } from '@/lib/types';
import { PropertyCard } from './PropertyCard';
import { PropertyGridSkeleton } from './ui/LoadingSkeleton';

export function FeaturedCarousel() {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getFeaturedProperties(), getListings(undefined, 0, 50)])
      .then(([props, lists]) => {
        setFeatured(props);
        setListings(lists);
      })
      .finally(() => setLoading(false));
  }, []);

  const listingMap = new Map(listings.map(l => [l.propertyId, l]));

  if (loading) {
    return (
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <PropertyGridSkeleton count={3} />
        </div>
      </section>
    );
  }

  if (featured.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Listings</h2>
            <p className="text-gray-500 text-sm mt-1">Hand-picked premium tokenized assets</p>
          </div>
          <span className="text-xs font-medium text-stellar-600 bg-stellar-50 px-3 py-1 rounded-full border border-stellar-100">
            ⭐ Curated
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.slice(0, 4).map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              listing={listingMap.get(property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
