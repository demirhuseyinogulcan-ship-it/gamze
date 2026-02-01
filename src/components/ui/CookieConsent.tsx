'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Cookie Consent Banner
// UX-friendly minimal banner - soft approach
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';

// ─────────────────────────────────────────────────────────────────────────────
// Cookie Consent Content
// ─────────────────────────────────────────────────────────────────────────────

const COOKIE_CONTENT = {
    tr: {
        title: 'Deneyiminizi İyileştiriyoruz',
        description: 'Size en iyi deneyimi sunmak için temel çerezler kullanıyoruz. Sitemizi kullanmaya devam ederek bunu kabul etmiş olursunuz.',
        acceptButton: 'Anladım',
        settingsButton: 'Tercihler',
        privacyLink: 'Gizlilik',
    },
    en: {
        title: 'We Improve Your Experience',
        description: 'We use essential cookies to give you the best experience. By continuing to use our site, you accept this.',
        acceptButton: 'Got It',
        settingsButton: 'Preferences',
        privacyLink: 'Privacy',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// Storage Key
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'cookie_consent';

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

type ConsentStatus = 'accepted' | 'rejected' | null;

export function getConsentStatus(): ConsentStatus {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'accepted' || value === 'rejected') return value;
    return null;
}

export function hasAcceptedCookies(): boolean {
    return getConsentStatus() === 'accepted';
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function CookieConsent() {
    const { locale } = useTranslation();
    const content = COOKIE_CONTENT[locale];

    const [showBanner, setShowBanner] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Check consent status on mount
    useEffect(() => {
        const status = getConsentStatus();
        if (status === null) {
            // Delay to prevent flash on page load
            const timer = setTimeout(() => setShowBanner(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle accept (main button)
    const handleAccept = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, 'accepted');
            setShowBanner(false);
            window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'accepted' }));
        }, 300);
    }, []);

    // Handle settings click - just accept and close (simplified UX)
    const handleSettings = useCallback(() => {
        // Redirect to privacy policy but also accept
        localStorage.setItem(STORAGE_KEY, 'accepted');
        window.location.href = locale === 'tr' ? '/gizlilik-politikasi' : '/privacy-policy';
    }, [locale]);

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: isClosing ? 100 : 0, opacity: isClosing ? 0 : 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-4 left-4 right-4 z-[100] md:bottom-6 md:left-auto md:right-6 md:max-w-md"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-cream/10 bg-charcoal/95 p-5 shadow-2xl backdrop-blur-xl">
                        {/* Decorative gradient */}
                        <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-gold/10 blur-2xl" />
                        
                        <div className="relative">
                            {/* Header */}
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/20">
                                    <Cookie className="h-5 w-5 text-gold" />
                                </div>
                                <h3 className="font-heading text-base font-semibold text-white">
                                    {content.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="mb-4 text-sm leading-relaxed text-cream/70">
                                {content.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    onClick={handleSettings}
                                    className="flex items-center gap-1.5 text-xs text-cream/50 transition-colors hover:text-cream/70"
                                >
                                    <Shield className="h-3 w-3" />
                                    {content.privacyLink}
                                </button>
                                
                                <motion.button
                                    onClick={handleAccept}
                                    className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-midnight transition-colors hover:bg-gold/90"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {content.acceptButton}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
