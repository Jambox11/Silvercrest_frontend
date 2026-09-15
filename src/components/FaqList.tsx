'use client';

import { useMemo, useState } from 'react';
import type { FaqItem } from '@/lib/types';

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const grouped = useMemo(() => {
    const map = new Map<string, FaqItem[]>();
    for (const item of items) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return Array.from(map.entries());
  }, [items]);

  return (
    <div className="space-y-8">
      {grouped.map(([category, faqs]) => (
        <section key={category}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
            {category}
          </h2>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white">
            {faqs.map(faq => (
              <button
                key={faq.id}
                type="button"
                className="w-full text-left px-4 py-4"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <p className="font-medium text-gray-900">{faq.question}</p>
                {openId === faq.id && (
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                )}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
