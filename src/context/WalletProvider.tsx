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

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>({
    isConnected: false,
    publicKey: null,
    network: 'testnet',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setState(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
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
      await new Promise(resolve => setTimeout(resolve, 600));

      const next: WalletState = {
        isConnected: true,
        publicKey: MOCK_WALLET_PUBLIC_KEY,
        network: state.network,
      };
      setState(next);
      persist(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  }, [state.network, persist]);

  const disconnect = useCallback(() => {
    const next: WalletState = {
      isConnected: false,
      publicKey: null,
      network: state.network,
    };
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

export function useWallet(): WalletContextValue {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
