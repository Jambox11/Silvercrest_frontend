import { PageHeader } from '@/components/PageHeader';
import { getMockNotifications } from '@/mocks/notifications';
import { formatDate } from '@/lib/format';
import Link from 'next/link';

export default function NotificationsPage() {
  const items = getMockNotifications();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Inbox"
        title="Notifications"
        subtitle="Dummy alerts for offers, listings, KYC, and system notices."
      />
      <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl bg-white">
        {items.map(item => (
          <li key={item.id} className="px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {!item.read && <span className="inline-block h-2 w-2 rounded-full bg-stellar-500 mr-2" />}
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">{item.body}</p>
                {item.href && (
                  <Link href={item.href} className="text-xs text-stellar-600 hover:underline mt-2 inline-block">
                    Open
                  </Link>
                )}
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{formatDate(item.createdAt)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
