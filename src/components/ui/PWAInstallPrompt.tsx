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
    iosStep1: 'Alt menüden',
    iosStep2: 'simgesine tıklayın',
    iosStep3: '"Ana Ekrana Ekle" seçin',
    iosClose: 'Anladım',
    installed: 'Uygulama yüklendi!',
  },
  en: {
    title: 'Install App',
    description: 'Add to home screen for faster access!',
    installButton: 'Install',
    dismissButton: 'Later',
    iosTitle: 'Add to Home Screen',
    iosStep1: 'Tap the',
    iosStep2: 'icon below',
    iosStep3: 'Select "Add to Home Screen"',
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
  
  // Check if user dismissed recently (24 hours)
  const dismissed = localStorage.getItem('pwa-dismissed');
  if (dismissed) {
    const dismissedTime = parseInt(dismissed, 10);
    const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60);
    if (hoursSinceDismissed < 24) return false;
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
        <h3 className="font-display text-lg font-medium text-cream">
          {content.iosTitle}
        </h3>
      </div>

      <ol className="mb-4 space-y-3 text-sm text-cream/70">
        <li className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
            1
          </span>
          <span>
            {content.iosStep1}{' '}
            <Share className="inline h-4 w-4 text-gold" />{' '}
            {content.iosStep2}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
            2
          </span>
          <span className="flex items-center gap-1">
            <Plus className="inline h-4 w-4 text-gold" />
            {content.iosStep3}
          </span>
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
      
      // Show prompt after 30 seconds on page
      setTimeout(() => {
        setInstallState('prompt');
      }, 30000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Check if iOS after a delay
    setTimeout(() => {
      if (isIOS() && shouldShowPrompt()) {
        setInstallState('ios-instructions');
      }
    }, 45000);

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
