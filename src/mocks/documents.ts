import type { PropertyDocument } from '@/lib/types';

export const MOCK_DOCUMENTS: PropertyDocument[] = [
  {
    id: 'doc_001',
    propertyId: 'prop_001',
    kind: 'deed',
    title: 'Warranty deed (sample PDF)',
    uri: 'ipfs://QmCatalogDeed001',
    uploadedAt: 1697000000,
  },
  {
    id: 'doc_002',
    propertyId: 'prop_001',
    kind: 'inspection',
    title: 'Coastal inspection summary',
    uri: 'ipfs://QmCatalogInspect001',
    uploadedAt: 1697000500,
  },
  {
    id: 'doc_003',
    propertyId: 'prop_002',
    kind: 'appraisal',
    title: 'Aspen appraisal 2024',
    uri: 'ipfs://QmCatalogAppraise002',
    uploadedAt: 1697001500,
  },
  {
    id: 'doc_004',
    propertyId: 'prop_007',
    kind: 'insurance',
    title: 'Vineyard casualty policy',
    uri: 'ipfs://QmCatalogIns007',
    uploadedAt: 1697006500,
  },
  {
    id: 'doc_005',
    propertyId: 'prop_006',
    kind: 'hoa',
    title: 'Back Bay HOA packet',
    uri: 'ipfs://QmCatalogHoa006',
    uploadedAt: 1697005500,
  },
];

export function getMockDocuments(propertyId?: string): PropertyDocument[] {
  if (!propertyId) return MOCK_DOCUMENTS;
  return MOCK_DOCUMENTS.filter(d => d.propertyId === propertyId);
}
