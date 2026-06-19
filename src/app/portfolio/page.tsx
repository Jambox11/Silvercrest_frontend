'use client';

import Link from 'next/link';
import { useWallet } from '@/hooks/useWallet';
import { usePortfolio } from '@/hooks/usePortfolio';
import { formatPrice, formatDate, truncateAddress } from '@/lib/format';
import { StatusBadge } from '@/components/StatusBadge';
import { PropertyGridSkeleton } from '@/components/ui/LoadingSkeleton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { EmptyState } from '@/components/ui/EmptyState';
import { WalletConnect } from '@/components/WalletConnect';

export default function PortfolioPage() {
  const wallet = useWallet();
  const { listings, offers, isLoading, error, refresh } = usePortfolio(wallet.publicKey);

  if (!wallet.isConnected) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <EmptyState
          title="Connect your wallet"
          description="Connect your Stellar wallet to view your property listings, offers, and portfolio activity."
          action={
            <WalletConnect onConnect={wallet.connect} isLoading={wallet.isLoading} />
          }
        />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 mt-2 font-mono text-sm">
            {truncateAddress(wallet.publicKey!)}
          </p>
        </div>
        <Link
          href="/list"
          className="px-4 py-2 bg-stellar-500 text-white text-sm rounded-lg font-medium hover:bg-stellar-600 transition-colors text-center"
        >
          + List Property
        </Link>
      </div>

      {!isLoading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="My Listings" value={listings.length} />
          <StatCard label="Active" value={listings.filter(l => l.status === 'active').length} />
          <StatCard label="My Offers" value={offers.length} />
          <StatCard
            label="Pending Offers"
            value={offers.filter(o => o.status === 'pending').length}
          />
        </div>
      )}

      {error && (
        <div className="mb-8">
          <ErrorMessage message={error} onRetry={refresh} />
        </div>
      )}

      {isLoading ? (
        <PropertyGridSkeleton count={3} />
      ) : (
        <>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Listings</h2>
            {listings.length === 0 ? (
              <EmptyState
                title="No listings yet"
                description="You haven't listed any properties. Tokenize a property to get started."
              />
            ) : (
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Property</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Price</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Listed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {listings.map(listing => (
                      <tr key={listing.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link
                            href={`/properties/${listing.propertyId}`}
                            className="font-medium text-stellar-600 hover:underline"
                          >
                            {listing.property?.title ?? listing.propertyId}
                          </Link>
                          {listing.property && (
                            <p className="text-xs text-gray-400 mt-0.5">
                              {listing.property.location}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium">
                          {formatPrice(listing.price, listing.currency)}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={listing.status} />
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          {formatDate(listing.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Offers</h2>
            {offers.length === 0 ? (
              <EmptyState
                title="No offers yet"
                description="Browse properties and submit offers to see them here."
                action={
                  <Link
                    href="/#discover"
                    className="px-4 py-2 bg-stellar-500 text-white text-sm rounded-lg hover:bg-stellar-600 transition-colors"
                  >
                    Browse Properties
                  </Link>
                }
              />
            ) : (
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Property</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Offer</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {offers.map(offer => (
                      <tr key={offer.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          {offer.property ? (
                            <Link
                              href={`/properties/${offer.property.id}`}
                              className="font-medium text-stellar-600 hover:underline"
                            >
                              {offer.property.title}
                            </Link>
                          ) : (
                            <span className="text-gray-500">{offer.listingId}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium">
                          {formatPrice(offer.price, 'USD')}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={offer.status} />
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          {formatDate(offer.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
      <p className="text-2xl font-bold text-stellar-600">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}
