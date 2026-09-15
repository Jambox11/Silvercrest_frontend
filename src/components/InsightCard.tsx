import type { MarketInsight } from '@/lib/types';
import { formatPrice, formatDate } from '@/lib/format';

export function InsightCard({ insight }: { insight: MarketInsight }) {
  const up = insight.changePct >= 0;
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-xs text-gray-400">{insight.city}</p>
      <h3 className="font-semibold text-gray-900 mt-1">{insight.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{insight.summary}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className={up ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
          {up ? '+' : ''}
          {insight.changePct.toFixed(1)}%
        </span>
        <span className="text-gray-500">
          Median {formatPrice(insight.medianPrice)} · {formatDate(insight.publishedAt)}
        </span>
      </div>
    </article>
  );
}
