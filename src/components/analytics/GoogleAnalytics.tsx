'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Google Analytics Component
// Script always loads, but tracking only happens after cookie consent
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { hasAcceptedCookies } from '@/components/ui/CookieConsent';

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

const GA_MEASUREMENT_ID = 'G-XQM6FD9HCV';

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function GoogleAnalytics() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        // Check initial consent status
        if (hasAcceptedCookies()) {
            setHasConsent(true);
        }

        // Listen for consent changes
        const handleConsentChange = (event: CustomEvent<string>) => {
            if (event.detail === 'accepted') {
                setHasConsent(true);
                // Initialize tracking after consent
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('consent', 'update', {
                        analytics_storage: 'granted',
                    });
                }
            }
        };

        window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
        return () => {
            window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
        };
    }, []);

    return (
        <>
            {/* Always load GA script for verification */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default to denied for KVKK compliance
          gtag('consent', 'default', {
            analytics_storage: '${hasConsent ? 'granted' : 'denied'}',
          });
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}

// Add gtag to window type
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
