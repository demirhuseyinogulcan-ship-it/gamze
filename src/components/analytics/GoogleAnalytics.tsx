'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Google Analytics Component
// Loads GA4 only when user has accepted cookies
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { hasAcceptedCookies } from '@/components/ui/CookieConsent';

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// Replace with your actual GA4 Measurement ID
// ─────────────────────────────────────────────────────────────────────────────

const GA_MEASUREMENT_ID = 'G-XQM6FD9HCV';

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function GoogleAnalytics() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Check initial consent status
        if (hasAcceptedCookies()) {
            setShouldLoad(true);
        }

        // Listen for consent changes
        const handleConsentChange = (event: CustomEvent<string>) => {
            if (event.detail === 'accepted') {
                setShouldLoad(true);
            }
        };

        window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
        return () => {
            window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
        };
    }, []);

    // Don't render if consent not given
    if (!shouldLoad) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}
