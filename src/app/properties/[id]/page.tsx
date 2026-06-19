'use client';

import Link from 'next/link';
import { use, useState, useEffect } from 'react';
import { usePropertyDetail } from '@/hooks/usePropertyDetail';
import { useWallet } from '@/hooks/useWallet';
import { getProperties, getListings } from '@/lib/api';
import { getRelatedProperties } from '@/lib/filterProperties';
import { formatPrice, formatDate, truncateAddress } from '@/lib/format';
import { PROPERTY_TYPE_LABELS } from '@/lib/constants';
import { StatusBadge } from '@/components/StatusBadge';
import { MakeOfferModal } from '@/components/MakeOfferModal';
import { RelatedProperties } from '@/components/RelatedProperties';
import { DetailSkeleton } from '@/components/ui/LoadingSkeleton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import type { Property, Listing } from '@/lib/types';

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const wallet = useWallet();
  const { property, listings, offers, isLoading, error, refresh } = usePropertyDetail(id);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [allListings, setAllListings] = useState<Listing[]>([]);

  useEffect(() => {
    Promise.all([getProperties(0, 50), getListings(undefined, 0, 50)]).then(([p, l]) => {
      setAllProperties(p);
      setAllListings(l);
    });
  }, [property?.id]);

  if (isLoading) return <DetailSkeleton />;

  if (error || !property) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ErrorMessage message={error ?? 'Property not found'} onRetry={refresh} />
        <div className="mt-6 text-center">
          <Link href="/discover" className="text-stellar-600 hover:underline text-sm">
            ← Back to Discover
          </Link>
        </div>
      </div>
    );
  }

  const activeListing = listings.find(l => l.status === 'active');
  const related = getRelatedProperties(allProperties, id, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/discover" className="text-stellar-600 hover:underline text-sm mb-6 inline-block">
        ← Back to Discover
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
          {property.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🏠</div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {property.propertyType && (
              <span className="px-2 py-0.5 bg-stellar-50 text-stellar-600 text-xs font-medium rounded-full">
                {PROPERTY_TYPE_LABELS[property.propertyType]}
              </span>
            )}
            {property.featured && (
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
            {property.yearBuilt && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                Built {property.yearBuilt}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
          <p className="text-gray-500 mt-2">{property.location}</p>

          {(property.beds !== undefined || property.baths !== undefined || property.sqft) && (
            <p className="text-sm text-gray-400 mt-3">
              {[
                property.beds !== undefined && `${property.beds} bedrooms`,
                property.baths !== undefined && `${property.baths} bathrooms`,
                property.sqft && `${property.sqft.toLocaleString()} sq ft`,
              ]
                .filter(Boolean)
                .join(' · ')}
            </p>
          )}

          {property.description && (
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">{property.description}</p>
          )}

          <p className="text-3xl font-bold text-stellar-600 mt-6">
            {formatPrice(activeListing?.price ?? property.price, property.currency)}
          </p>

          {activeListing && (
            <div className="mt-4 flex items-center gap-2">
              <StatusBadge status={activeListing.status} />
              <span className="text-sm text-gray-500">Listed {formatDate(activeListing.createdAt)}</span>
            </div>
          )}

          {property.amenities && property.amenities.length > 0 && (
            <div className="mt-6">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Amenities</p>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map(a => (
                  <span key={a} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{a}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-sm">
            <Row label="Owner" value={truncateAddress(property.owner)} mono />
            <Row label="NFT Token" value={property.nftId} mono />
            <Row label="Contract" value={truncateAddress(property.nftContract, 8, 8)} mono />
          </div>

          {activeListing ? (
            wallet.isConnected ? (
              <button
                onClick={() => setShowOfferModal(true)}
                className="mt-8 w-full px-6 py-3 bg-stellar-500 text-white rounded-lg font-semibold hover:bg-stellar-600 transition-colors"
              >
                Make an Offer
              </button>
            ) : (
              <p className="mt-8 text-center text-sm text-gray-500 border border-dashed border-gray-200 rounded-lg py-4">
                Connect your wallet to make an offer
              </p>
            )
          ) : (
            <p className="mt-8 text-center text-sm text-gray-400 border border-gray-100 rounded-lg py-4">
              No active listing for this property
            </p>
          )}
        </div>
      </div>

      {listings.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Listing History</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Price</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Seller</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {listings.map(listing => (
                  <tr key={listing.id}>
                    <td className="px-4 py-3 font-medium">{formatPrice(listing.price, listing.currency)}</td>
                    <td className="px-4 py-3"><StatusBadge status={listing.status} /></td>
                    <td className="px-4 py-3 font-mono text-gray-600">{truncateAddress(listing.seller)}</td>
                    <td className="px-4 py-3 text-gray-500">{formatDate(listing.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {offers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Offers ({offers.length})</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Offer</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Buyer</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {offers.map(offer => (
                  <tr key={offer.id}>
                    <td className="px-4 py-3 font-medium">{formatPrice(offer.price, property.currency)}</td>
                    <td className="px-4 py-3 font-mono text-gray-600">{truncateAddress(offer.buyer)}</td>
                    <td className="px-4 py-3"><StatusBadge status={offer.status} /></td>
                    <td className="px-4 py-3 text-gray-500">{formatDate(offer.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <RelatedProperties properties={related} listings={allListings} currentId={id} />

      {showOfferModal && activeListing && (
        <MakeOfferModal
          property={property}
          listing={activeListing}
          onClose={() => setShowOfferModal(false)}
          onSuccess={refresh}
        />
      )}
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-400">{label}</span>
      <span className={mono ? 'font-mono text-gray-700' : 'text-gray-700'}>{value}</span>
    </div>
  );
}
