import Link from 'next/link';
import { HorizonStatus } from '@/components/HorizonStatus';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-stellar-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SK</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">SilverKrest</span>
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Tokenized real estate on Stellar. Discover, list, and trade property with
            non-custodial wallet signing and transparent on-chain settlement.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/discover" className="hover:text-stellar-600">Discover</Link></li>
            <li><Link href="/insights" className="hover:text-stellar-600">Insights</Link></li>
            <li><Link href="/fractional" className="hover:text-stellar-600">Fractional</Link></li>
            <li><Link href="/map" className="hover:text-stellar-600">Map</Link></li>
            <li><Link href="/agents" className="hover:text-stellar-600">Agents</Link></li>
            <li><Link href="/list" className="hover:text-stellar-600">List Property</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/about" className="hover:text-stellar-600">About</Link></li>
            <li><Link href="/how-it-works" className="hover:text-stellar-600">How it works</Link></li>
            <li><Link href="/faq" className="hover:text-stellar-600">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-stellar-600">Help</Link></li>
            <li><Link href="/legal/terms" className="hover:text-stellar-600">Terms</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-stellar-600">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} SilverKrest. Catalog sessions never store secret keys.</p>
        <HorizonStatus />
      </div>
    </footer>
  );
}
