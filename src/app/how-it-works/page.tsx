import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

const STEPS = [
  {
    title: 'Connect a wallet',
    body: 'Demo mode simulates Freighter-style connect. No secret keys are collected.',
  },
  {
    title: 'Tokenize a property',
    body: 'Metadata, NFT reference, and owner are written to the dummy registry.',
  },
  {
    title: 'List or buy shares',
    body: 'Create an asking price or pick fractional lots from the catalog.',
  },
  {
    title: 'Offer and settle',
    body: 'Pending offers can be accepted, then a sale finalize step marks the listing sold.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Product"
        title="How SilverKrest works"
        subtitle="Four steps from wallet connect to simulated settlement. All figures on this page are dummy data."
      />
      <ol className="space-y-4">
        {STEPS.map((step, index) => (
          <li key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 flex gap-4">
            <span className="h-8 w-8 shrink-0 rounded-full bg-stellar-500 text-white flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </span>
            <div>
              <h2 className="font-semibold text-gray-900">{step.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex gap-3">
        <Link href="/discover" className="px-4 py-2 bg-stellar-500 text-white rounded-lg text-sm font-medium">
          Browse listings
        </Link>
        <Link href="/list" className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium">
          List a property
        </Link>
      </div>
    </div>
  );
}
