'use client';

import { useEffect, useState } from 'react';
import { getMarketStats } from '@/lib/api';
import type { MarketStats } from '@/lib/types';
import { formatPrice } from '@/lib/format';

export function MarketStatsSection() {
  const [stats, setStats] = useState<MarketStats | null>(null);

  useEffect(() => {
    getMarketStats().then(setStats).catch(() => null);
  }, []);

  if (!stats) return null;

  const items = [
    { label: 'Tokenized Properties', value: stats.totalProperties.toString() },
    { label: 'Active Listings', value: stats.activeListings.toString() },
    { label: 'Pending Offers', value: stats.pendingOffers.toString() },
    { label: 'Avg. Listing Price', value: formatPrice(stats.avgPrice) },
    { label: 'Total Volume', value: formatPrice(stats.totalVolume) },
    { label: 'Sold This Month', value: stats.soldThisMonth.toString() },
  ];

  return (
    <section className="py-12 px-4 bg-stellar-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-sm font-medium text-stellar-100 uppercase tracking-wider mb-8">
          Marketplace Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map(item => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold">{item.value}</p>
              <p className="text-stellar-100 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
