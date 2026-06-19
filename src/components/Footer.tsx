import Link from 'next/link';

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
            <li><Link href="/list" className="hover:text-stellar-600">List Property</Link></li>
            <li><Link href="/portfolio" className="hover:text-stellar-600">Portfolio</Link></li>
            <li><Link href="/activity" className="hover:text-stellar-600">Activity</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="hover:text-stellar-600">
                Stellar Network
              </a>
            </li>
            <li>
              <a href="https://stellar.expert/explorer/testnet" target="_blank" rel="noopener noreferrer" className="hover:text-stellar-600">
                Stellar Expert
              </a>
            </li>
            <li><span className="text-gray-400">Testnet Demo</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SilverKrest. Demo app with simulated data — not financial advice.
      </div>
    </footer>
  );
}
