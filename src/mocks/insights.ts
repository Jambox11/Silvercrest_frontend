import type { MarketInsight } from '@/lib/types';

export const MOCK_INSIGHTS: MarketInsight[] = [
  {
    id: 'ins_001',
    title: 'Miami tokenized inventory tightens',
    city: 'Miami, FL',
    summary: 'Dummy index: oceanfront ask prices up 4.2% as fractional lots clear faster than whole-asset listings.',
    changePct: 4.2,
    medianPrice: 890000,
    publishedAt: 1697020000,
  },
  {
    id: 'ins_002',
    title: 'Rockies ski week demand',
    city: 'Aspen, CO',
    summary: 'Demo data shows chalets with ski-in access holding a premium versus in-town condos.',
    changePct: 2.1,
    medianPrice: 1250000,
    publishedAt: 1697018000,
  },
  {
    id: 'ins_003',
    title: 'Manhattan penthouse pause',
    city: 'New York, NY',
    summary: 'Simulated order book: fewer new tokenizations week-over-week, pending offers still elevated.',
    changePct: -1.4,
    medianPrice: 2100000,
    publishedAt: 1697014000,
  },
  {
    id: 'ins_004',
    title: 'Austin loft absorption',
    city: 'Austin, TX',
    summary: 'Dummy industrial lofts under $400k continue to attract first-time on-chain buyers.',
    changePct: 3.0,
    medianPrice: 385000,
    publishedAt: 1697010000,
  },
];

export function getMockInsights(): MarketInsight[] {
  return [...MOCK_INSIGHTS].sort((a, b) => b.publishedAt - a.publishedAt);
}
