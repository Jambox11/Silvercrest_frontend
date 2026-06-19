'use client';

import { useEffect, useState } from 'react';
import { getActivity } from '@/lib/api';
import type { ActivityEvent } from '@/lib/types';
import { formatPrice, formatDate, truncateAddress } from '@/lib/format';
import Link from 'next/link';

function ActivityRow({ event }: { event: ActivityEvent }) {
  const actor = truncateAddress(event.actor);
  const title = event.propertyTitle ?? 'a property';

  return (
    <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-stellar-500 mt-2 shrink-0" />
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-mono text-gray-500">{actor}</span>
            {' · '}
            <span className="capitalize">{event.type.replace(/_/g, ' ')}</span>
            {event.propertyId && (
              <>
                {' · '}
                <Link href={`/properties/${event.propertyId}`} className="text-stellar-600 hover:underline font-medium">
                  {title}
                </Link>
              </>
            )}
          </p>
          {event.amount && (
            <p className="text-xs text-gray-400 mt-0.5">{formatPrice(event.amount, event.currency)}</p>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-400 sm:ml-4">{formatDate(event.timestamp)}</span>
    </div>
  );
}

export default function ActivityPage() {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActivity(50).then(setEvents).finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Marketplace Activity</h1>
      <p className="text-gray-500 mt-2">All recent on-chain events</p>

      <div className="mt-8 bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="px-5 py-4 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ))
        ) : events.length === 0 ? (
          <p className="px-5 py-8 text-center text-gray-500 text-sm">No activity yet</p>
        ) : (
          events.map(event => <ActivityRow key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}
