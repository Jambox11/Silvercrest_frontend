import { HeroSection } from '@/components/HeroSection';
import { MarketStatsSection } from '@/components/MarketStatsSection';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { DiscoverSection } from '@/components/DiscoverSection';
import { ActivityFeed } from '@/components/ActivityFeed';
import { FeaturesSection } from '@/components/FeaturesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarketStatsSection />
      <FeaturedCarousel />
      <DiscoverSection />
      <ActivityFeed limit={5} />
      <FeaturesSection />
    </div>
  );
}
