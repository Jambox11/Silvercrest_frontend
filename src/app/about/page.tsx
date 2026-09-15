import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Company"
        title="About SilverKrest"
        subtitle="A demo marketplace for discovering, listing, and trading tokenized real estate on Stellar — powered by dummy catalogs so every screen works without live chain risk."
      />
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <StatCard label="Settlement" value="Stellar" hint="Testnet by default" />
        <StatCard label="Custody" value="None" hint="Wallets sign locally" />
        <StatCard label="Data mode" value="Dummy" hint="Swap to API when ready" />
      </div>
      <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
        <p>
          SilverKrest coordinates property registration, listings, offers, and sale finalization
          through a Soroban registry. The frontend never asks for secret keys. Offers and
          fractional lots in this build are simulated against rich dummy inventory.
        </p>
        <p>
          Use Discover to browse, List Property to tokenize a demo asset, and Portfolio to
          inspect your simulated positions. Insights, watchlists, and documents are included
          so the product feels complete for walkthroughs.
        </p>
        <p>
          <Link href="/how-it-works" className="text-stellar-600 hover:underline">
            See how it works
          </Link>
          {' · '}
          <Link href="/faq" className="text-stellar-600 hover:underline">
            FAQ
          </Link>
        </p>
      </div>
    </div>
  );
}
