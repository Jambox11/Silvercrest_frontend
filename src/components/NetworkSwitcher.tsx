'use client';

import { useState } from 'react';
import type { StellarNetwork } from '@/lib/types';

interface NetworkSwitcherProps {
  network: StellarNetwork;
  onSwitch: (network: StellarNetwork) => void;
}

export function NetworkSwitcher({ network, onSwitch }: NetworkSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const networkConfig = {
    testnet: { label: 'Testnet', color: 'bg-yellow-100 text-yellow-800' },
    mainnet: { label: 'Mainnet', color: 'bg-green-100 text-green-800' },
  };

  const current = networkConfig[network];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1 rounded-lg text-sm font-medium ${current.color} transition-colors`}
      >
        {current.label}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {(['testnet', 'mainnet'] as const).map(net => (
            <button
              key={net}
              onClick={() => {
                onSwitch(net);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                network === net
                  ? 'bg-stellar-50 text-stellar-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {networkConfig[net].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
