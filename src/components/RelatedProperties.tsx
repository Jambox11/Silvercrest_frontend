import Link from 'next/link';
import { PropertyCard } from './PropertyCard';
import type { Property, Listing } from '@/lib/types';

interface RelatedPropertiesProps {
  properties: Property[];
  listings: Listing[];
  currentId: string;
}

export function RelatedProperties({ properties, listings, currentId }: RelatedPropertiesProps) {
  const listingMap = new Map(listings.map(l => [l.propertyId, l]));
  const related = properties.filter(p => p.id !== currentId).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Similar Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            listing={listingMap.get(property.id)}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/discover" className="text-stellar-600 hover:underline text-sm font-medium">
          Browse all properties →
        </Link>
      </div>
    </div>
  );
}
