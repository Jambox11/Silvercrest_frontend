'use client';

import { useEffect, useMemo, useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { getMockProperties, getMockListings } from '@/mocks';
import { getCompareIds } from '@/lib/compare';
import { formatPrice } from '@/lib/format';
import Link from 'next/link';

export default function ComparePage() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(getCompareIds());
  }, []);
  const properties = useMemo(() => getMockProperties(0, 80).filter(p => ids.includes(p.id)), [ids]);
  const listings = getMockListings(undefined, 0, 80);

  if (properties.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <EmptyState
          title="Nothing to compare"
          description="Add up to three listings to the compare tray from Discover."
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <PageHeader eyebrow="Tools" title="Compare listings" subtitle="Side-by-side sample specs for up to three properties." />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-xl bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 text-left">Field</th>
              {properties.map(p => (
                <th key={p.id} className="p-3 text-left">
                  <Link href={`/properties/${p.id}`} className="text-stellar-600 hover:underline">
                    {p.title}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Location', (p: (typeof properties)[0]) => p.location],
              ['Ask', (p: (typeof properties)[0]) => formatPrice(listings.find(l => l.propertyId === p.id)?.price ?? p.price, p.currency)],
              ['Beds', (p: (typeof properties)[0]) => String(p.beds ?? '—')],
              ['Baths', (p: (typeof properties)[0]) => String(p.baths ?? '—')],
              ['Sqft', (p: (typeof properties)[0]) => (p.sqft ? p.sqft.toLocaleString() : '—')],
              ['Type', (p: (typeof properties)[0]) => p.propertyType ?? '—'],
              ['Year', (p: (typeof properties)[0]) => String(p.yearBuilt ?? '—')],
            ].map(([label, getter]) => (
              <tr key={String(label)} className="border-t border-gray-100">
                <td className="p-3 font-medium text-gray-500">{label as string}</td>
                {properties.map(p => (
                  <td key={p.id} className="p-3">
                    {(getter as (p: (typeof properties)[0]) => string)(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
