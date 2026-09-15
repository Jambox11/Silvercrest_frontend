import { PageHeader } from '@/components/PageHeader';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader eyebrow="Legal" title="Terms of use" subtitle="Sample legal copy for the demo app. Not a binding contract." />
      <div className="text-sm text-gray-600 space-y-3">
        <p>
          SilverKrest is a demonstration of tokenized real estate workflows on Stellar. Listing prices,
          ownership, and yields are simulated. Do not treat this software as an offer to sell securities
          or real property.
        </p>
        <p>
          You will never be asked for a Stellar secret key. Wallet connect in this build is mocked unless
          a production Freighter integration is enabled later.
        </p>
      </div>
    </div>
  );
}
