import { PageHeader } from '@/components/PageHeader';

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        subtitle="Dummy privacy notice. This demo stores watchlist and compare IDs in local storage only."
      />
      <div className="text-sm text-gray-600 space-y-3">
        <p>
          No production analytics pipeline is wired. Public keys shown in the UI are demo fixtures or
          values from a simulated wallet session.
        </p>
        <p>
          If you point the app at a live backend, treat that host’s privacy policy as authoritative.
        </p>
      </div>
    </div>
  );
}
