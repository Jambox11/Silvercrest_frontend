import { PageHeader } from '@/components/PageHeader';
import { InsightCard } from '@/components/InsightCard';
import { getMockInsights } from '@/mocks/insights';
import { getMockMarketStats } from '@/mocks/activity';
import { StatCard } from '@/components/StatCard';
import { formatPrice } from '@/lib/format';

export default function InsightsPage() {
  const insights = getMockInsights();
  const stats = getMockMarketStats();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Markets"
        title="Market insights"
        subtitle="Sample city indexes so dashboards, newsletters, and research screens have realistic numbers."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Properties" value={stats.totalProperties} />
        <StatCard label="Active listings" value={stats.activeListings} />
        <StatCard label="Avg ask" value={formatPrice(stats.avgPrice)} />
        <StatCard label="Pending offers" value={stats.pendingOffers} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {insights.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
}
