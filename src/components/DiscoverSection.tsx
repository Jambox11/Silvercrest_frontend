import { PropertyBrowser } from '@/components/PropertyBrowser';

export function DiscoverSection() {
  return (
    <PropertyBrowser
      limit={6}
      showFilters={false}
      showViewAll
      title="Discover Properties"
      subtitle="Browse tokenized real estate listings on Stellar"
    />
  );
}
