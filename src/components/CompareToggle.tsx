'use client';

import { useEffect, useState } from 'react';
import { isCompared, toggleCompare } from '@/lib/compare';

export function CompareToggle({ propertyId }: { propertyId: string }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(isCompared(propertyId));
  }, [propertyId]);

  return (
    <button
      type="button"
      onClick={() => {
        const next = toggleCompare(propertyId);
        setSelected(next.includes(propertyId));
      }}
      className={`w-full px-6 py-2 rounded-lg text-sm font-medium border transition-colors ${
        selected
          ? 'border-stellar-500 text-stellar-600 bg-stellar-50'
          : 'border-gray-200 text-gray-600 hover:border-stellar-200'
      }`}
    >
      {selected ? 'In compare tray' : 'Add to compare'}
    </button>
  );
}
