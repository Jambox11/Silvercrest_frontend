import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

const LINKS = [
  { href: '/faq', label: 'FAQ' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About' },
  { href: '/legal/terms', label: 'Terms' },
  { href: '/legal/privacy', label: 'Privacy' },
];

export default function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Support"
        title="Help center"
        subtitle="Demo documentation. There is no live support desk behind these links."
      />
      <ul className="space-y-2">
        {LINKS.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="block rounded-xl border border-gray-200 bg-white px-4 py-3 hover:border-stellar-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
