import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'SilverKrest - Tokenized Real Estate on Stellar',
  description:
    'Discover, compare, and trade tokenized real estate on Stellar. Freighter-aware wallet, Horizon health, and catalog sessions without secret keys.',
  keywords: ['Stellar', 'Soroban', 'real estate', 'tokenization', 'Freighter'],
  openGraph: {
    title: 'SilverKrest',
    description: 'Tokenized real estate marketplace UI for Stellar testnet.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
