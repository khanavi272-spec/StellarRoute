'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { WalletProvider } from '@/components/providers/wallet-provider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="stellarroute-theme">
      <WalletProvider defaultNetwork="testnet">
        {children}
      </WalletProvider>
    </ThemeProvider>
  );
}
