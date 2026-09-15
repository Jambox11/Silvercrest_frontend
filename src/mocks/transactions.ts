import type { LedgerTransaction } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

export const MOCK_TRANSACTIONS: LedgerTransaction[] = [
  {
    id: 'tx_001',
    kind: 'tokenize',
    propertyId: 'prop_001',
    propertyTitle: 'Sunny Beachfront Villa',
    hash: 'abc123samplehash0001',
    status: 'confirmed',
    timestamp: 1697000000,
  },
  {
    id: 'tx_002',
    kind: 'list',
    propertyId: 'prop_001',
    propertyTitle: 'Sunny Beachfront Villa',
    amount: 500000,
    currency: 'USD',
    hash: 'abc123samplehash0002',
    status: 'confirmed',
    timestamp: 1697000100,
  },
  {
    id: 'tx_003',
    kind: 'offer',
    propertyId: 'prop_001',
    propertyTitle: 'Sunny Beachfront Villa',
    amount: 480000,
    currency: 'USD',
    hash: 'abc123samplehash0003',
    status: 'confirmed',
    timestamp: 1697010000,
  },
  {
    id: 'tx_004',
    kind: 'finalize',
    propertyId: 'prop_005',
    propertyTitle: 'Lakefront Cabin',
    amount: 600000,
    currency: 'USD',
    hash: 'abc123samplehash0004',
    status: 'confirmed',
    timestamp: 1697004500,
  },
  {
    id: 'tx_005',
    kind: 'dividend',
    propertyId: 'prop_007',
    propertyTitle: 'Vineyard Estate',
    amount: 4200,
    currency: 'USD',
    hash: 'abc123samplehash0005',
    status: 'pending',
    timestamp: 1697022000,
  },
];

export function getMockTransactions(owner = MOCK_WALLET_PUBLIC_KEY): LedgerTransaction[] {
  void owner;
  return [...MOCK_TRANSACTIONS].sort((a, b) => b.timestamp - a.timestamp);
}
