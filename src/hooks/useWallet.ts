'use client';

import { useState, useCallback, useEffect } from 'react';
import type { StellarNetwork, WalletState } from '@/lib/types';

const STORAGE_KEY = 'silvercrest_wallet';

export function useWallet() {
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

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate Freighter wallet connection
      // In production, this would use @stellar/wallets-sdk
      const mockPublicKey = 'GDZST3XVCDTUJ76ZAV2HA72KYFL3JCPBHQ4PXESVXHMZQ5MDDG2WXYUP';

      setState({
        isConnected: true,
        publicKey: mockPublicKey,
        network: 'testnet',
      });

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isConnected: true,
          publicKey: mockPublicKey,
          network: 'testnet',
        })
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setState({
      isConnected: false,
      publicKey: null,
      network: 'testnet',
    });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const switchNetwork = useCallback((network: StellarNetwork) => {
    setState(prev => ({
      ...prev,
      network,
    }));
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...state,
        network,
      })
    );
  }, [state]);

  return {
    ...state,
    isLoading,
    error,
    connect,
    disconnect,
    switchNetwork,
  };
}
