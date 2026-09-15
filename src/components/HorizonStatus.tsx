'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/context/WalletProvider';
import { horizonUrl, pingHorizon } from '@/lib/stellar';

export function HorizonStatus() {
  const { network } = useWallet();
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    pingHorizon(network).then(ok => {
      if (!cancelled) setOnline(ok);
    });
    return () => {
      cancelled = true;
    };
  }, [network]);

  const label =
    online === null ? 'Checking Horizon…' : online ? `${network} Horizon up` : `${network} Horizon unreachable`;

  return (
    <a
      href={horizonUrl(network)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-stellar-600"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          online === null ? 'bg-gray-300' : online ? 'bg-green-500' : 'bg-red-400'
        }`}
      />
      {label}
    </a>
  );
}
