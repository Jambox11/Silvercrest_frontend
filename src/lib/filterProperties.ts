import type { Property, Listing, PropertyFilters } from '@/lib/types';

export function filterAndSortProperties(
  properties: Property[],
  listings: Listing[],
  filters: PropertyFilters
): Property[] {
  const listingMap = new Map(listings.map(l => [l.propertyId, l]));

  let result = [...properties];

  if (filters.query?.trim()) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    );
  }

  if (filters.propertyType && filters.propertyType !== 'all') {
    result = result.filter(p => p.propertyType === filters.propertyType);
  }

  if (filters.minBeds) {
    result = result.filter(p => (p.beds ?? 0) >= filters.minBeds!);
  }

  if (filters.minPrice !== undefined) {
    result = result.filter(p => {
      const listing = listingMap.get(p.id);
      const price = listing?.price ?? p.price;
      return price >= filters.minPrice!;
    });
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter(p => {
      const listing = listingMap.get(p.id);
      const price = listing?.price ?? p.price;
      return price <= filters.maxPrice!;
    });
  }

  if (filters.status && filters.status !== 'all') {
    result = result.filter(p => {
      const listing = listingMap.get(p.id);
      return listing?.status === filters.status;
    });
  }

  const sort = filters.sort ?? 'newest';
  result.sort((a, b) => {
    const priceA = listingMap.get(a.id)?.price ?? a.price;
    const priceB = listingMap.get(b.id)?.price ?? b.price;
    switch (sort) {
      case 'price-asc':
        return priceA - priceB;
      case 'price-desc':
        return priceB - priceA;
      case 'oldest':
        return a.createdAt - b.createdAt;
      case 'newest':
      default:
        return b.createdAt - a.createdAt;
    }
  });

  return result;
}

export function getRelatedProperties(
  properties: Property[],
  currentId: string,
  limit = 3
): Property[] {
  const current = properties.find(p => p.id === currentId);
  if (!current) return properties.filter(p => p.id !== currentId).slice(0, limit);

  return properties
    .filter(p => p.id !== currentId)
    .sort((a, b) => {
      const scoreA =
        (a.propertyType === current.propertyType ? 2 : 0) +
        (a.location.split(',')[1]?.trim() === current.location.split(',')[1]?.trim() ? 1 : 0);
      const scoreB =
        (b.propertyType === current.propertyType ? 2 : 0) +
        (b.location.split(',')[1]?.trim() === current.location.split(',')[1]?.trim() ? 1 : 0);
      return scoreB - scoreA;
    })
    .slice(0, limit);
}
