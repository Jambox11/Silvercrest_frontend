import { PageHeader } from '@/components/PageHeader';
import { getMockKyc } from '@/mocks/kyc';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';
import { truncateAddress } from '@/lib/format';

export default function SettingsPage() {
  const kyc = getMockKyc(MOCK_WALLET_PUBLIC_KEY);
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Account"
        title="Settings"
        subtitle="Sample preferences and KYC status for walkthroughs."
      />
      <div className="space-y-4">
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Network</h2>
          <p className="text-sm text-gray-600 mt-1">Default demo network is Stellar testnet. Switch from the header.</p>
        </section>
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">KYC</h2>
          <p className="text-sm text-gray-600 mt-1">
            {kyc.legalName} · {kyc.country} · {kyc.status}
          </p>
          <p className="text-xs font-mono text-gray-400 mt-2">{truncateAddress(kyc.publicKey)}</p>
        </section>
        <section className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">Data source</h2>
          <p className="text-sm text-gray-600 mt-1">
            Mock catalogs are on by default via NEXT_PUBLIC_USE_MOCK. Live FastAPI is used when that flag is false.
          </p>
        </section>
      </div>
    </div>
  );
}
