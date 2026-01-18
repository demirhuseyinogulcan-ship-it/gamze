'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { dictionaries, Locale, Dictionary } from './dictionaries';

interface I18nContextType {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  t: <T extends keyof Dictionary>(section: T) => Dictionary[T];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export function I18nProvider({ children, defaultLocale = 'tr' }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const dictionary = dictionaries[locale];

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  const t = useCallback(<T extends keyof Dictionary>(section: T): Dictionary[T] => {
    return dictionary[section];
  }, [dictionary]);

  return (
    <I18nContext.Provider value={{ locale, dictionary, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * LocaleProvider - Forces a specific locale
 * Used for language-specific pages like /en
 */
interface LocaleProviderProps {
  children: ReactNode;
  initialLocale: Locale;
}

export function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const dictionary = dictionaries[locale];

  // Set locale on mount and update HTML lang attribute
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = initialLocale;
    }
  }, [initialLocale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  const t = useCallback(<T extends keyof Dictionary>(section: T): Dictionary[T] => {
    return dictionary[section];
  }, [dictionary]);

  return (
    <I18nContext.Provider value={{ locale, dictionary, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}

export function useT<T extends keyof Dictionary>(section: T): Dictionary[T] {
  const { dictionary } = useTranslation();
  return dictionary[section];
}
