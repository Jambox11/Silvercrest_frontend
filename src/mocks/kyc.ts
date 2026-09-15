import type { KycProfile } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

export const MOCK_KYC: KycProfile = {
  publicKey: MOCK_WALLET_PUBLIC_KEY,
  status: 'verified',
  legalName: 'Demo Investor',
  country: 'US',
  updatedAt: 1696900000,
};

export function getMockKyc(publicKey?: string): KycProfile {
  if (!publicKey) return MOCK_KYC;
  return { ...MOCK_KYC, publicKey };
}
