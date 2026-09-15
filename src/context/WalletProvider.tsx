'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { StellarNetwork, WalletState } from '@/lib/types';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';
import { isStellarPublicKey, readFreighterPublicKey } from '@/lib/stellar';

const STORAGE_KEY = 'silvercrest_wallet';

interface WalletContextValue extends WalletState {
  isLoading: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  switchNetwork: (network: StellarNetwork) => void;
  clearError: () => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

function emptyState(network: StellarNetwork = 'testnet'): WalletState {
  return {
    isConnected: false,
    publicKey: null,
    network,
    source: null,
  };
}

function readFreighterFromWindow() {
  if (typeof window === 'undefined') return undefined;
  return (
    (window as Window & { freighterApi?: Parameters<typeof readFreighterPublicKey>[0] })
      .freighterApi
  );
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>(emptyState());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as WalletState;
      if (parsed.publicKey && isStellarPublicKey(parsed.publicKey)) {
        setState({
          isConnected: true,
          publicKey: parsed.publicKey,
          network: parsed.network === 'mainnet' ? 'mainnet' : 'testnet',
          source: parsed.source === 'freighter' ? 'freighter' : 'session',
        });
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const persist = useCallback((next: WalletState) => {
    if (next.isConnected && next.publicKey) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const freighterKey = await readFreighterPublicKey(readFreighterFromWindow());
      const next: WalletState = {
        isConnected: true,
        publicKey: freighterKey ?? MOCK_WALLET_PUBLIC_KEY,
        network: state.network,
        source: freighterKey ? 'freighter' : 'session',
      };
      if (!isStellarPublicKey(next.publicKey ?? '')) {
        throw new Error('Wallet returned an invalid Stellar account id');
      }
      setState(next);
      persist(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  }, [state.network, persist]);

  const disconnect = useCallback(() => {
    const next = emptyState(state.network);
    setState(next);
    persist(next);
  }, [state.network, persist]);

  const switchNetwork = useCallback(
    (network: StellarNetwork) => {
      setState(prev => {
        const next = { ...prev, network };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const clearError = useCallback(() => setError(null), []);

  return (
    <WalletContext.Provider
      value={{
        ...state,
        isLoading,
        error,
        connect,
        disconnect,
        switchNetwork,
        clearError,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

const DISCONNECTED: WalletContextValue = {
  ...emptyState(),
  isLoading: false,
  error: null,
  connect: async () => {},
  disconnect: () => {},
  switchNetwork: () => {},
  clearError: () => {},
};

export function useWallet(): WalletContextValue {
  return useContext(WalletContext) ?? DISCONNECTED;
}
