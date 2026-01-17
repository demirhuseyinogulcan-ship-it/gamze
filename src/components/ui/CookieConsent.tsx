'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Cookie Consent Banner
// KVKK/GDPR compliant cookie consent with localStorage persistence
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type ConsentStatus = 'accepted' | 'rejected' | null;

// ─────────────────────────────────────────────────────────────────────────────
// Cookie Consent Content
// ─────────────────────────────────────────────────────────────────────────────

const COOKIE_CONTENT = {
    tr: {
        title: 'Çerez Kullanımı',
        description: 'Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Devam ederek çerez politikamızı kabul etmiş olursunuz.',
        acceptButton: 'Kabul Et',
        rejectButton: 'Reddet',
        privacyLink: 'Gizlilik Politikası',
    },
    en: {
        title: 'Cookie Usage',
        description: 'We use cookies to enhance your experience on our website. By continuing, you accept our cookie policy.',
        acceptButton: 'Accept',
        rejectButton: 'Reject',
        privacyLink: 'Privacy Policy',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// Storage Key
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'cookie_consent';

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

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
            // Small delay to prevent flash on page load
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle accept
    const handleAccept = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, 'accepted');
            setShowBanner(false);
            // Dispatch event for analytics to listen
            window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'accepted' }));
        }, 300);
    }, []);

    // Handle reject
    const handleReject = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            localStorage.setItem(STORAGE_KEY, 'rejected');
            setShowBanner(false);
            window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: 'rejected' }));
        }, 300);
    }, []);

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: isClosing ? 100 : 0, opacity: isClosing ? 0 : 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="mx-auto max-w-4xl">
                        <div className="relative overflow-hidden rounded-2xl border border-cream/10 bg-charcoal/95 p-6 shadow-2xl backdrop-blur-xl">
                            {/* Decorative gradient */}
                            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-crimson/10 blur-3xl" />

                            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                {/* Content */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold/20">
                                        <Cookie className="h-6 w-6 text-gold" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                                            {content.title}
                                        </h3>
                                        <p className="text-sm text-cream/70">
                                            {content.description}{' '}
                                            <a
                                                href="/gizlilik-politikasi"
                                                className="inline-flex items-center gap-1 text-gold hover:underline"
                                            >
                                                <Shield className="h-3 w-3" />
                                                {content.privacyLink}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-shrink-0 gap-3">
                                    <button
                                        onClick={handleReject}
                                        className="rounded-lg border border-cream/20 px-4 py-2 text-sm font-medium text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                                    >
                                        {content.rejectButton}
                                    </button>
                                    <motion.button
                                        onClick={handleAccept}
                                        className="rounded-lg bg-gold px-6 py-2 text-sm font-semibold text-midnight transition-colors hover:bg-gold/90"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {content.acceptButton}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
