import { PropertyBrowser } from '@/components/PropertyBrowser';

export default function DiscoverPage() {
  return (
    <PropertyBrowser
      showFilters
      showViewAll={false}
      title="All Properties"
      subtitle="Search, filter, and browse the full marketplace"
    />
  );
}
