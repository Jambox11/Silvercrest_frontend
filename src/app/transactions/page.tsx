import { PageHeader } from '@/components/PageHeader';
import { getMockTransactions } from '@/mocks/transactions';
import { formatDate, formatPrice } from '@/lib/format';

export default function TransactionsPage() {
  const rows = getMockTransactions();
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Ledger"
        title="Transactions"
        subtitle="Dummy Stellar hashes for tokenize, list, offer, and dividend events."
      />
      <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3">Kind</th>
              <th className="px-4 py-3">Asset</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map(row => (
              <tr key={row.id}>
                <td className="px-4 py-3 text-gray-500">{formatDate(row.timestamp)}</td>
                <td className="px-4 py-3 capitalize">{row.kind}</td>
                <td className="px-4 py-3">{row.propertyTitle ?? '—'}</td>
                <td className="px-4 py-3">
                  {row.amount ? formatPrice(row.amount, row.currency) : '—'}
                </td>
                <td className="px-4 py-3 capitalize">{row.status}</td>
                <td className="px-4 py-3 font-mono text-xs text-gray-400">{row.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
