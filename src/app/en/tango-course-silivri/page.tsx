/**
 * Tango Course Silivri - English Version
 * SEO page targeting "tango course silivri" search
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import { LocaleProvider } from '@/lib/i18n';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import { SILIVRI_TANGO_COURSE_SERVICE } from '@/lib/constants/services';

// Get English translations
const enTranslation = SILIVRI_TANGO_COURSE_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo.title || 'Tango Course Silivri',
    description: enTranslation?.seo.description || 'Argentine Tango courses in Silivri',
    keywords: enTranslation?.seo.keywords?.join(', '),
    alternates: {
        canonical: enTranslation?.seo.canonicalUrl || 'https://gamzetango.com/en/tango-course-silivri',
        languages: {
            'tr-TR': '/silivri-tango-kursu',
            'en-US': '/en/tango-course-silivri',
        },
    },
    openGraph: {
        title: enTranslation?.seo.title || 'Tango Course Silivri',
        description: enTranslation?.seo.description || 'Argentine Tango courses in Silivri',
        url: enTranslation?.seo.canonicalUrl || 'https://gamzetango.com/en/tango-course-silivri',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
    },
    robots: { index: true, follow: true },
};

// JSON-LD Schema
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tango Course Silivri',
    description: enTranslation?.description || SILIVRI_TANGO_COURSE_SERVICE.description,
    provider: {
        '@type': 'Person',
        name: 'Gamze Yıldız',
        url: 'https://gamzetango.com',
    },
    areaServed: {
        '@type': 'City',
        name: 'Silivri, Istanbul',
    },
    url: 'https://gamzetango.com/en/tango-course-silivri',
};

export default function TangoCourseSilivriPage() {
    if (!enTranslation) return null;

    return (
        <LocaleProvider initialLocale="en">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            <main className="min-h-screen bg-midnight">
                <ServiceHero
                    name={enTranslation.name}
                    tagline={enTranslation.tagline}
                    description={enTranslation.description}
                    heroImage={SILIVRI_TANGO_COURSE_SERVICE.heroImage}
                    locale="en"
                />

                <ServiceFeatures
                    features={enTranslation.features}
                    title="Why Tango Course in Silivri?"
                    locale="en"
                />

                <ServiceBenefits
                    benefits={enTranslation.benefits}
                    title="What You'll Gain"
                    locale="en"
                />

                <ServiceFAQ
                    faqs={enTranslation.faqs}
                    title="Frequently Asked Questions"
                    locale="en"
                />

                <ServiceCTA
                    ctaText={enTranslation.ctaText}
                    ctaDescription={enTranslation.ctaDescription}
                    serviceName={enTranslation.name}
                    serviceSlug="tango-course-silivri"
                    locale="en"
                />
            </main>

            <Footer />
        </LocaleProvider>
    );
}
