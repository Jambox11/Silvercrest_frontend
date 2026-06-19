'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWallet } from '@/hooks/useWallet';
import { WalletConnect } from './WalletConnect';
import { NetworkSwitcher } from './NetworkSwitcher';
import { WalletStatus } from './WalletStatus';

const NAV = [
  { href: '/discover', label: 'Discover' },
  { href: '/list', label: 'List Property' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/activity', label: 'Activity' },
];

export function Header() {
  const wallet = useWallet();
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stellar-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <span className="font-semibold text-lg text-gray-900 hidden sm:inline">SilverKrest</span>
            </Link>
            <nav className="hidden md:flex gap-5">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === href ? 'text-stellar-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {wallet.error && (
              <button
                onClick={wallet.clearError}
                className="hidden sm:block text-xs text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200"
                title={wallet.error}
              >
                Wallet error
              </button>
            )}
            <NetworkSwitcher network={wallet.network} onSwitch={wallet.switchNetwork} />
            {wallet.isConnected && wallet.publicKey ? (
              <WalletStatus
                publicKey={wallet.publicKey}
                network={wallet.network}
                onDisconnect={wallet.disconnect}
              />
            ) : (
              <WalletConnect onConnect={wallet.connect} isLoading={wallet.isLoading} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
