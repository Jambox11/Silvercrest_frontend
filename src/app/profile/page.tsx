import { PageHeader } from '@/components/PageHeader';
import { getMockPositions } from '@/mocks/fractional';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';
import { formatPrice } from '@/lib/format';
import { ownershipPct, sharesCost } from '@/lib/shareMath';
import Link from 'next/link';

export default function ProfilePage() {
  const positions = getMockPositions(MOCK_WALLET_PUBLIC_KEY);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Account"
        title="Investor profile"
        subtitle="Sample identity and fractional positions for the connected demo wallet."
      />
      <div className="rounded-xl border border-gray-200 bg-white p-5 mb-6">
        <p className="text-sm text-gray-500">Display name</p>
        <p className="font-semibold text-gray-900">Demo Investor</p>
      </div>
      <h2 className="font-semibold text-gray-900 mb-3">Fractional lots</h2>
      <ul className="space-y-3">
        {positions.map(pos => (
          <li key={pos.id} className="rounded-xl border border-gray-200 bg-white p-4">
            <Link href={`/properties/${pos.propertyId}`} className="font-medium text-stellar-600">
              {pos.propertyTitle}
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              {pos.shares} shares · {formatPrice(sharesCost(pos.shares, pos.sharePrice))} cost basis ·{' '}
              {ownershipPct(pos.shares, 400).toFixed(1)}% of a 400-share sample pool
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
