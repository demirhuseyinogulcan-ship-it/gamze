/**
 * Lady Styling - English Version
 * SEO-optimized service page for women's tango training
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import { LocaleProvider } from '@/lib/i18n';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceSteps,
    ServiceAudience,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import { LADY_STYLING_SERVICE } from '@/lib/constants/services';

// Get English translations
const enTranslation = LADY_STYLING_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo.title || 'Lady Styling | Tango for Women',
    description: enTranslation?.seo.description || 'Feminine elegance in tango',
    keywords: enTranslation?.seo.keywords?.join(', '),
    alternates: {
        canonical: enTranslation?.seo.canonicalUrl || 'https://gamzetango.com/en/lady-styling',
        languages: {
            'tr-TR': '/lady-styling',
            'en-US': '/en/lady-styling',
        },
    },
    openGraph: {
        title: enTranslation?.seo.title || 'Lady Styling',
        description: enTranslation?.seo.description || 'Feminine elegance in tango',
        url: enTranslation?.seo.canonicalUrl || 'https://gamzetango.com/en/lady-styling',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${LADY_STYLING_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Lady Styling - Feminine Elegance in Tango',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

// JSON-LD Schema
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lady Styling - Tango for Women',
    description: enTranslation?.description || LADY_STYLING_SERVICE.description,
    provider: {
        '@type': 'Person',
        name: 'Gamze Yıldız',
        url: 'https://gamzetango.com',
    },
    areaServed: {
        '@type': 'City',
        name: 'Istanbul',
    },
    url: 'https://gamzetango.com/en/lady-styling',
};

export default function LadyStylingEnglishPage() {
    if (!enTranslation) {
        // Fallback to Turkish if no translation
        return null;
    }

    return (
        <LocaleProvider initialLocale="en">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="min-h-screen bg-midnight">
                {/* Hero Section */}
                <ServiceHero
                    name={enTranslation.name}
                    tagline={enTranslation.tagline}
                    description={enTranslation.description}
                    heroImage={LADY_STYLING_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={enTranslation.features}
                    title="What You'll Learn"
                    locale="en"
                />

                {/* Target Audience */}
                {enTranslation.audiences && enTranslation.audiences.length > 0 && (
                    <ServiceAudience
                        audiences={enTranslation.audiences}
                        title="Who Is Lady Styling For?"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={enTranslation.benefits}
                    title="What You'll Gain"
                    locale="en"
                />

                {/* Process Steps */}
                {enTranslation.steps && enTranslation.steps.length > 0 && (
                    <ServiceSteps
                        steps={enTranslation.steps}
                        title="The Process"
                        locale="en"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={enTranslation.faqs}
                    title="Frequently Asked Questions"
                    locale="en"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={enTranslation.ctaText}
                    ctaDescription={enTranslation.ctaDescription}
                    serviceName={enTranslation.name}
                    serviceSlug="lady-styling"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </LocaleProvider>
    );
}
