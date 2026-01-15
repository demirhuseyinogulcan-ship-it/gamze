'use client';

import { ReactNode } from 'react';
import { I18nProvider } from '@/lib/i18n';
import { MilongaModeProvider } from '@/components/effects';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nProvider defaultLocale="tr">
      <MilongaModeProvider>{children}</MilongaModeProvider>
    </I18nProvider>
  );
}
