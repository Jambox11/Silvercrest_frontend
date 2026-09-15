import type { StellarNetwork } from '@/lib/types';
import { STELLAR_EXPLORER_BASE } from '@/lib/constants';

/** Stellar account ids are 56-character strkeys starting with G. */
export function isStellarPublicKey(value: string): boolean {
  return /^G[A-Z2-7]{55}$/.test(value);
}

export function explorerAccountUrl(network: StellarNetwork, publicKey: string): string {
  return `${STELLAR_EXPLORER_BASE[network]}/account/${publicKey}`;
}

export function horizonUrl(network: StellarNetwork): string {
  return network === 'mainnet'
    ? 'https://horizon.stellar.org'
    : 'https://horizon-testnet.stellar.org';
}

export async function pingHorizon(
  network: StellarNetwork,
  fetchImpl: typeof fetch = fetch
): Promise<boolean> {
  try {
    const res = await fetchImpl(`${horizonUrl(network)}/`, {
      headers: { Accept: 'application/json' },
    });
    return res.ok;
  } catch {
    return false;
  }
}

type FreighterLike = {
  isConnected?: () => Promise<boolean | { isConnected?: boolean }>;
  getPublicKey?: () => Promise<string>;
};

export async function readFreighterPublicKey(
  api: FreighterLike | undefined
): Promise<string | null> {
  if (!api?.getPublicKey) return null;
  try {
    const connected = await api.isConnected?.();
    if (connected === false) return null;
    if (connected && typeof connected === 'object' && connected.isConnected === false) {
      return null;
    }
    const key = await api.getPublicKey();
    return isStellarPublicKey(key) ? key : null;
  } catch {
    return null;
  }
}
