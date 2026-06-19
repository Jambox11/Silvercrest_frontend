'use client';

import { WalletProvider } from '@/context/WalletProvider';
import { ToastProvider } from '@/context/ToastProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <ToastProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ToastProvider>
    </WalletProvider>
  );
}
