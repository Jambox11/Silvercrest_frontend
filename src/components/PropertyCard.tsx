import Link from 'next/link';
import type { Property, Listing } from '@/lib/types';
import { formatPrice } from '@/lib/format';
import { StatusBadge } from './StatusBadge';
import { PROPERTY_TYPE_LABELS } from '@/lib/constants';

interface PropertyCardProps {
  property: Property;
  listing?: Listing;
}

export function PropertyCard({ property, listing }: PropertyCardProps) {
  const displayPrice = listing?.price ?? property.price;
  const currency = listing?.currency ?? property.currency;

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-stellar-200 transition-all"
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {property.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🏠</div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          {property.propertyType && (
            <span className="px-2 py-0.5 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
              {PROPERTY_TYPE_LABELS[property.propertyType]}
            </span>
          )}
        </div>
        {listing && (
          <div className="absolute top-3 right-3">
            <StatusBadge status={listing.status} />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-stellar-600 transition-colors">
          {property.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{property.location}</p>

        {(property.beds || property.baths || property.sqft) && (
          <p className="text-xs text-gray-400 mt-2">
            {[
              property.beds !== undefined && `${property.beds} bed`,
              property.baths !== undefined && `${property.baths} bath`,
              property.sqft && `${property.sqft.toLocaleString()} sqft`,
            ]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}

        <p className="text-lg font-bold text-stellar-600 mt-3">
          {formatPrice(displayPrice, currency)}
        </p>
      </div>
    </Link>
  );
}
