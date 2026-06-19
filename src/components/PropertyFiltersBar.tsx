'use client';

import type { PropertyFilters, PropertyType } from '@/lib/types';
import { PROPERTY_TYPE_LABELS } from '@/lib/constants';

interface PropertyFiltersBarProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
}

const PROPERTY_TYPES: (PropertyType | 'all')[] = [
  'all', 'house', 'condo', 'penthouse', 'cabin', 'commercial', 'land',
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
] as const;

export function PropertyFiltersBar({ filters, onChange }: PropertyFiltersBarProps) {
  const update = (patch: Partial<PropertyFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select
        value={filters.propertyType ?? 'all'}
        onChange={e => update({ propertyType: e.target.value as PropertyFilters['propertyType'] })}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-stellar-500"
      >
        {PROPERTY_TYPES.map(type => (
          <option key={type} value={type}>
            {type === 'all' ? 'All Types' : PROPERTY_TYPE_LABELS[type]}
          </option>
        ))}
      </select>

      <select
        value={filters.status ?? 'all'}
        onChange={e => update({ status: e.target.value as PropertyFilters['status'] })}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-stellar-500"
      >
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="sold">Sold</option>
      </select>

      <select
        value={filters.minBeds ?? 0}
        onChange={e => update({ minBeds: Number(e.target.value) || undefined })}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-stellar-500"
      >
        <option value={0}>Any Beds</option>
        <option value={1}>1+ Beds</option>
        <option value={2}>2+ Beds</option>
        <option value={3}>3+ Beds</option>
        <option value={4}>4+ Beds</option>
      </select>

      <select
        value={filters.sort ?? 'newest'}
        onChange={e => update({ sort: e.target.value as PropertyFilters['sort'] })}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-stellar-500"
      >
        {SORT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {(filters.propertyType !== 'all' || filters.status !== 'all' || filters.minBeds) && (
        <button
          onClick={() => onChange({ ...filters, propertyType: 'all', status: 'all', minBeds: undefined })}
          className="text-sm text-stellar-600 hover:underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
