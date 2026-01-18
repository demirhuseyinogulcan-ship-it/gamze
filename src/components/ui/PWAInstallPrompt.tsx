'use client';

// ─────────────────────────────────────────────────────────────────────────────
// PWA Install Prompt Component
// Shows "Add to Home Screen" prompt for mobile users
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Share, Plus } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type InstallState = 'hidden' | 'prompt' | 'ios-instructions' | 'installed';

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT = {
  tr: {
    title: 'Uygulamayı İndir',
    description: 'Ana ekranınıza ekleyin, daha hızlı erişin!',
    installButton: 'Yükle',
    dismissButton: 'Daha sonra',
    iosTitle: 'Ana Ekrana Ekle',
    iosDescription: 'Gamze Tango\'yu uygulama gibi kullanın!',
    iosStep1: 'Alttaki',
    iosStep1b: '(Paylaş) simgesine dokunun',
    iosStep2: 'Aşağı kaydırın ve',
    iosStep2b: '"Ana Ekrana Ekle" seçin',
    iosStep3: 'Sağ üstten "Ekle" butonuna dokunun',
    iosClose: 'Anladım',
    installed: 'Uygulama yüklendi!',
  },
  en: {
    title: 'Install App',
    description: 'Add to home screen for faster access!',
    installButton: 'Install',
    dismissButton: 'Later',
    iosTitle: 'Add to Home Screen',
    iosDescription: 'Use Gamze Tango like an app!',
    iosStep1: 'Tap the',
    iosStep1b: '(Share) icon below',
    iosStep2: 'Scroll down and tap',
    iosStep2b: '"Add to Home Screen"',
    iosStep3: 'Tap "Add" in the top right',
    iosClose: 'Got it',
    installed: 'App installed!',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Utility Functions
// ─────────────────────────────────────────────────────────────────────────────

function isIOS(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
}

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as Navigator & { standalone: boolean }).standalone)
  );
}

function shouldShowPrompt(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Don't show if already installed
  if (isStandalone()) return false;
  
  // Check if user dismissed recently (1 hour for testing, can increase later)
  const dismissed = localStorage.getItem('pwa-dismissed');
  if (dismissed) {
    const dismissedTime = parseInt(dismissed, 10);
    const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60);
    if (hoursSinceDismissed < 1) return false;
  }
  
  return true;
}

// ─────────────────────────────────────────────────────────────────────────────
// iOS Instructions Component
// ─────────────────────────────────────────────────────────────────────────────

function IOSInstructions({
  content,
  onClose,
}: {
  content: typeof CONTENT.tr;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl border border-gold/20 bg-charcoal/95 p-6 shadow-2xl backdrop-blur-md"
    >
      <button
        onClick={onClose}
        className="absolute right-3 top-3 rounded-full p-1 text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
        aria-label="Kapat"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
          <Smartphone className="h-6 w-6 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-lg font-medium text-cream">
            {content.iosTitle}
          </h3>
          <p className="text-sm text-cream/60">{content.iosDescription}</p>
        </div>
      </div>

      <ol className="mb-5 space-y-4 text-sm text-cream/80">
        <li className="flex items-start gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
            1
          </span>
          <span>
            {content.iosStep1}{' '}
            <span className="inline-flex items-center gap-1 rounded bg-blue-500/20 px-2 py-0.5">
              <Share className="h-4 w-4 text-blue-400" />
            </span>{' '}
            {content.iosStep1b}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
            2
          </span>
          <span>
            {content.iosStep2}{' '}
            <span className="inline-flex items-center gap-1 rounded bg-gold/20 px-2 py-0.5 text-gold">
              <Plus className="h-4 w-4" />
              {content.iosStep2b}
            </span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
            3
          </span>
          <span>{content.iosStep3}</span>
        </li>
      </ol>

      <button
        onClick={onClose}
        className="w-full rounded-lg bg-gold py-3 font-medium text-midnight transition-colors hover:bg-gold/90"
      >
        {content.iosClose}
      </button>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Install Prompt Component
// ─────────────────────────────────────────────────────────────────────────────

export function PWAInstallPrompt() {
  const { locale } = useTranslation();
  const content = CONTENT[locale];
  
  const [installState, setInstallState] = useState<InstallState>('hidden');
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!shouldShowPrompt()) return;

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 10 seconds on page (Android/Chrome)
      setTimeout(() => {
        setInstallState('prompt');
      }, 10000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Check if iOS - show after 5 seconds for better UX
    setTimeout(() => {
      if (isIOS() && shouldShowPrompt() && !isStandalone()) {
        setInstallState('ios-instructions');
      }
    }, 5000);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setInstallState('installed');
      setTimeout(() => setInstallState('hidden'), 3000);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  // Handle install click
  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setInstallState('installed');
    } else {
      setInstallState('hidden');
    }

    setDeferredPrompt(null);
  }, [deferredPrompt]);

  // Handle dismiss
  const handleDismiss = useCallback(() => {
    localStorage.setItem('pwa-dismissed', Date.now().toString());
    setInstallState('hidden');
  }, []);

  return (
    <AnimatePresence>
      {/* Standard Install Prompt */}
      {installState === 'prompt' && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl border border-gold/20 bg-charcoal/95 p-5 shadow-2xl backdrop-blur-md"
        >
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 rounded-full p-1 text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
              <Download className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-cream">
                {content.title}
              </h3>
              <p className="text-sm text-cream/60">{content.description}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDismiss}
              className="flex-1 rounded-lg border border-cream/20 py-2.5 text-sm font-medium text-cream/70 transition-colors hover:bg-cream/10"
            >
              {content.dismissButton}
            </button>
            <button
              onClick={handleInstall}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold py-2.5 text-sm font-medium text-midnight transition-colors hover:bg-gold/90"
            >
              <Download className="h-4 w-4" />
              {content.installButton}
            </button>
          </div>
        </motion.div>
      )}

      {/* iOS Instructions */}
      {installState === 'ios-instructions' && (
        <IOSInstructions content={content} onClose={handleDismiss} />
      )}

      {/* Installed Success */}
      {installState === 'installed' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-xl bg-green-500/20 p-4 text-center text-green-400 backdrop-blur-md"
        >
          ✓ {content.installed}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
