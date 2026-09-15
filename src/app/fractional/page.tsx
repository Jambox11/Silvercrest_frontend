import { PageHeader } from '@/components/PageHeader';
import { getMockPositions } from '@/mocks/fractional';
import { formatPrice } from '@/lib/format';
import Link from 'next/link';

export default function FractionalPage() {
  const positions = getMockPositions();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Ownership"
        title="Fractional marketplace"
        subtitle="Sample share lots. Yields and pools are simulated for product demos."
      />
      <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Shares</th>
              <th className="px-4 py-3">Share price</th>
              <th className="px-4 py-3">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {positions.map(pos => (
              <tr key={pos.id}>
                <td className="px-4 py-3">
                  <Link href={`/properties/${pos.propertyId}`} className="text-stellar-600 hover:underline">
                    {pos.propertyTitle}
                  </Link>
                </td>
                <td className="px-4 py-3">{pos.shares}</td>
                <td className="px-4 py-3">{formatPrice(pos.sharePrice)}</td>
                <td className="px-4 py-3 font-mono text-xs">{pos.owner.slice(0, 8)}…</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
