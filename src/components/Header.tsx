'use client';

import { useWallet } from '@/hooks/useWallet';
import { WalletConnect } from './WalletConnect';
import { NetworkSwitcher } from './NetworkSwitcher';
import { WalletStatus } from './WalletStatus';

export function Header() {
  const wallet = useWallet();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stellar-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <span className="font-semibold text-lg text-gray-900">SilverKrest</span>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Discover
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Portfolio
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <NetworkSwitcher
              network={wallet.network}
              onSwitch={wallet.switchNetwork}
            />
            {wallet.isConnected ? (
              <WalletStatus
                publicKey={wallet.publicKey!}
                onDisconnect={wallet.disconnect}
              />
            ) : (
              <WalletConnect
                onConnect={wallet.connect}
                isLoading={wallet.isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
