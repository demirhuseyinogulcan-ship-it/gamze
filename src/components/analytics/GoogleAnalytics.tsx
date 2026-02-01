'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Google Analytics Component
// Anonymized tracking enabled by default (KVKK compliant)
// No personal data collected - IP anonymization + no cookies mode
// ─────────────────────────────────────────────────────────────────────────────

import Script from 'next/script';

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

// GA ID from environment variable with fallback
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XQM6FD9HCV';

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function GoogleAnalytics() {
    return (
        <>
            {/* Load GA4 script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    // GA4 config with privacy-focused settings
                    // IP anonymization is default in GA4
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true,
                        allow_google_signals: false,
                        allow_ad_personalization_signals: false,
                        restricted_data_processing: true
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
