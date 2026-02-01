/**
 * Couple Tango Lessons - English Version
 * SEO-optimized service page
 * 
 * Focus: Couples, partner harmony, wedding dance, romantic experience
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceSteps,
    ServiceAudience,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import {
    CIFT_TANGO_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// Get English translations
const enTranslation = CIFT_TANGO_DERSI_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo?.title || 'Couple Tango Lessons Istanbul | Gamze Tango',
    description: enTranslation?.seo?.description || 'Tango lessons for couples in Istanbul.',
    keywords: enTranslation?.seo?.keywords?.join(', ') || 'couple tango lessons, partner tango',
    alternates: {
        canonical: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/couple-tango-lessons',
        languages: {
            'tr-TR': '/cift-tango-dersi',
            'en-US': '/en/couple-tango-lessons',
        },
    },
    openGraph: {
        title: enTranslation?.seo?.title || 'Couple Tango Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Tango lessons for couples in Istanbul.',
        url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/couple-tango-lessons',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${CIFT_TANGO_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Couple Tango Lessons in Istanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: enTranslation?.seo?.title || 'Couple Tango Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Tango lessons for couples in Istanbul.',
        images: [`https://gamzetango.com${CIFT_TANGO_DERSI_SERVICE.heroImage}`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD Schemas (use English data)
const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: enTranslation?.name || 'Couple Tango Lessons',
    description: enTranslation?.description || CIFT_TANGO_DERSI_SERVICE.description,
    provider: {
        '@type': 'Person',
        name: 'Gamze Yıldız',
        url: 'https://gamzetango.com',
    },
    areaServed: {
        '@type': 'City',
        name: 'Istanbul',
    },
    serviceType: 'Dance Lessons',
    url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/couple-tango-lessons',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (enTranslation?.faqs || CIFT_TANGO_DERSI_SERVICE.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function CoupleTangoLessonsPage() {
    // Use English translations or fallback to Turkish
    const name = enTranslation?.name || CIFT_TANGO_DERSI_SERVICE.name;
    const tagline = enTranslation?.tagline || CIFT_TANGO_DERSI_SERVICE.tagline;
    const description = enTranslation?.description || CIFT_TANGO_DERSI_SERVICE.description;
    const features = enTranslation?.features || CIFT_TANGO_DERSI_SERVICE.features;
    const benefits = enTranslation?.benefits || CIFT_TANGO_DERSI_SERVICE.benefits;
    const audiences = enTranslation?.audiences || CIFT_TANGO_DERSI_SERVICE.audiences;
    const steps = enTranslation?.steps || CIFT_TANGO_DERSI_SERVICE.steps;
    const faqs = enTranslation?.faqs || CIFT_TANGO_DERSI_SERVICE.faqs;
    const ctaText = enTranslation?.ctaText || CIFT_TANGO_DERSI_SERVICE.ctaText;
    const ctaDescription = enTranslation?.ctaDescription || CIFT_TANGO_DERSI_SERVICE.ctaDescription;

    return (
        <>
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="min-h-screen bg-midnight">
                {/* Hero Section */}
                <ServiceHero
                    name={name}
                    tagline={tagline}
                    description={description}
                    heroImage={CIFT_TANGO_DERSI_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={features}
                    title="What Couple Lessons Offer"
                    locale="en"
                />

                {/* Target Audience */}
                {audiences && (
                    <ServiceAudience
                        audiences={audiences}
                        title="Who Are Couple Lessons For?"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                    title="Benefits for Couples"
                    locale="en"
                />

                {/* Process Steps */}
                {steps && (
                    <ServiceSteps
                        steps={steps}
                        title="The Process"
                        locale="en"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={faqs}
                    title="Frequently Asked Questions"
                    locale="en"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={ctaText}
                    ctaDescription={ctaDescription}
                    serviceName={name}
                    serviceSlug="couple-tango-lessons"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
