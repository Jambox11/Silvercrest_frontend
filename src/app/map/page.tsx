import { PageHeader } from '@/components/PageHeader';
import { getMockProperties } from '@/mocks';

export default function MapPage() {
  const properties = getMockProperties(0, 40);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Explore"
        title="Map view"
        subtitle="Placeholder map pins using sample coordinates. Swap in Mapbox later without changing listing cards."
      />
      <div className="rounded-xl border border-gray-200 bg-stellar-50 h-80 flex items-center justify-center text-sm text-stellar-700 mb-6">
        Sample map canvas — {properties.length} properties in the local catalog
      </div>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {properties.slice(0, 12).map(p => (
          <li key={p.id} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
            <span className="font-medium text-gray-900">{p.title}</span>
            <span className="text-gray-500"> · {p.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
