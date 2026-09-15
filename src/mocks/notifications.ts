import type { AppNotification } from '@/lib/types';

export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'ntf_001',
    kind: 'offer',
    title: 'New offer on Sunny Beachfront Villa',
    body: 'A buyer offered $480,000 on your Miami listing.',
    read: false,
    href: '/properties/prop_001',
    createdAt: 1697021000,
  },
  {
    id: 'ntf_002',
    kind: 'listing',
    title: 'Ski Chalet is live',
    body: 'Your Park City listing is now visible on Discover.',
    read: false,
    href: '/properties/prop_010',
    createdAt: 1697019000,
  },
  {
    id: 'ntf_003',
    kind: 'sale',
    title: 'Lakefront Cabin sale completed',
    body: 'Dummy settlement recorded for $600,000.',
    read: true,
    href: '/activity',
    createdAt: 1697004500,
  },
  {
    id: 'ntf_004',
    kind: 'kyc',
    title: 'KYC review pending',
    body: 'Dummy identity documents are waiting in the review queue.',
    read: true,
    href: '/settings',
    createdAt: 1696990000,
  },
  {
    id: 'ntf_005',
    kind: 'system',
    title: 'Testnet maintenance window',
    body: 'Indexer catch-up may lag for a few minutes. Marketplace dummy data remains available.',
    read: true,
    createdAt: 1696980000,
  },
];

export function getMockNotifications(): AppNotification[] {
  return [...MOCK_NOTIFICATIONS].sort((a, b) => b.createdAt - a.createdAt);
}

export function unreadNotificationCount(): number {
  return MOCK_NOTIFICATIONS.filter(n => !n.read).length;
}
