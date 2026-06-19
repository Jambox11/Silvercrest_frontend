'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getActivity } from '@/lib/api';
import type { ActivityEvent } from '@/lib/types';
import { formatPrice, formatDate, truncateAddress } from '@/lib/format';

function ActivityRow({ event }: { event: ActivityEvent }) {
  const actor = truncateAddress(event.actor);
  const title = event.propertyTitle ?? 'a property';

  let message: React.ReactNode;
  switch (event.type) {
    case 'property_tokenized':
      message = <><strong>{actor}</strong> tokenized {titleLink(title, event.propertyId)}</>;
      break;
    case 'listing_created':
      message = <><strong>{actor}</strong> listed {titleLink(title, event.propertyId)}{priceSuffix(event)}</>;
      break;
    case 'offer_made':
      message = <><strong>{actor}</strong> made an offer on {titleLink(title, event.propertyId)}{priceSuffix(event)}</>;
      break;
    case 'offer_accepted':
      message = <><strong>{actor}</strong> accepted an offer on {titleLink(title, event.propertyId)}{priceSuffix(event)}</>;
      break;
    case 'sale_completed':
      message = <><strong>{actor}</strong> completed sale of {titleLink(title, event.propertyId)}{priceSuffix(event)}</>;
      break;
  }

  return (
    <div className="px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-2 h-2 rounded-full bg-stellar-500 shrink-0" />
        <p className="text-sm text-gray-700">{message}</p>
      </div>
      <span className="text-xs text-gray-400 shrink-0">{formatDate(event.timestamp)}</span>
    </div>
  );
}

function titleLink(title: string, propertyId?: string) {
  if (!propertyId) return <span className="font-medium">{title}</span>;
  return (
    <Link href={`/properties/${propertyId}`} className="font-medium text-stellar-600 hover:underline">
      {title}
    </Link>
  );
}

function priceSuffix(event: ActivityEvent) {
  if (!event.amount) return null;
  return <> for {formatPrice(event.amount, event.currency)}</>;
}

export function ActivityFeed({ limit = 5, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const [events, setEvents] = useState<ActivityEvent[]>([]);

  useEffect(() => {
    getActivity(limit).then(setEvents).catch(() => setEvents([]));
  }, [limit]);

  if (events.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recent Activity</h2>
            <p className="text-gray-600 mt-2">Live on-chain marketplace events</p>
          </div>
          {showViewAll && (
            <Link href="/activity" className="text-stellar-600 hover:underline text-sm font-medium">
              View all →
            </Link>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {events.map(event => (
            <ActivityRow key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
