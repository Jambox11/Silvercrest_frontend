'use client';

import { useState } from 'react';
import type { StellarNetwork } from '@/lib/types';
import { STELLAR_EXPLORER_BASE } from '@/lib/constants';

interface WalletStatusProps {
  publicKey: string;
  network: StellarNetwork;
  onDisconnect: () => void;
}

export function WalletStatus({ publicKey, network, onDisconnect }: WalletStatusProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const truncatedKey = publicKey.slice(0, 6) + '...' + publicKey.slice(-6);
  const explorerBase = STELLAR_EXPLORER_BASE[network];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-stellar-50 text-stellar-600 rounded-lg font-medium border border-stellar-200 hover:bg-stellar-100 transition-colors flex items-center gap-2"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        {truncatedKey}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <button
            onClick={copyToClipboard}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
          <a
            href={`${explorerBase}/account/${publicKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View on Stellar Expert
          </a>
          <hr className="my-2" />
          <button
            onClick={() => {
              onDisconnect();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
