/**
 * Group Tango Lessons - English Version
 * SEO-optimized service page
 * 
 * Focus: Group classes, social learning, affordable tango education
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
    GRUP_TANGO_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// Get English translations
const enTranslation = GRUP_TANGO_DERSI_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo?.title || 'Group Tango Lessons Istanbul | Gamze Tango',
    description: enTranslation?.seo?.description || 'Group tango lessons in Istanbul for all levels.',
    keywords: enTranslation?.seo?.keywords?.join(', ') || 'group tango lessons, tango classes istanbul',
    alternates: {
        canonical: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/group-tango-lessons',
        languages: {
            'tr-TR': '/grup-tango-dersi',
            'en-US': '/en/group-tango-lessons',
        },
    },
    openGraph: {
        title: enTranslation?.seo?.title || 'Group Tango Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Group tango lessons in Istanbul for all levels.',
        url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/group-tango-lessons',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${GRUP_TANGO_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Group Tango Lessons in Istanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: enTranslation?.seo?.title || 'Group Tango Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Group tango lessons in Istanbul for all levels.',
        images: [`https://gamzetango.com${GRUP_TANGO_DERSI_SERVICE.heroImage}`],
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
    name: enTranslation?.name || 'Group Tango Lessons',
    description: enTranslation?.description || GRUP_TANGO_DERSI_SERVICE.description,
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
    url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/group-tango-lessons',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (enTranslation?.faqs || GRUP_TANGO_DERSI_SERVICE.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function GroupTangoLessonsPage() {
    // Use English translations or fallback to Turkish
    const name = enTranslation?.name || GRUP_TANGO_DERSI_SERVICE.name;
    const tagline = enTranslation?.tagline || GRUP_TANGO_DERSI_SERVICE.tagline;
    const description = enTranslation?.description || GRUP_TANGO_DERSI_SERVICE.description;
    const features = enTranslation?.features || GRUP_TANGO_DERSI_SERVICE.features;
    const benefits = enTranslation?.benefits || GRUP_TANGO_DERSI_SERVICE.benefits;
    const audiences = enTranslation?.audiences || GRUP_TANGO_DERSI_SERVICE.audiences;
    const steps = enTranslation?.steps || GRUP_TANGO_DERSI_SERVICE.steps;
    const faqs = enTranslation?.faqs || GRUP_TANGO_DERSI_SERVICE.faqs;
    const ctaText = enTranslation?.ctaText || GRUP_TANGO_DERSI_SERVICE.ctaText;
    const ctaDescription = enTranslation?.ctaDescription || GRUP_TANGO_DERSI_SERVICE.ctaDescription;

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
                    heroImage={GRUP_TANGO_DERSI_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={features}
                    title="What You'll Learn in Group Classes"
                    locale="en"
                />

                {/* Target Audience */}
                {audiences && (
                    <ServiceAudience
                        audiences={audiences}
                        title="Who Are Group Lessons For?"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                    title="Benefits of Group Lessons"
                    locale="en"
                />

                {/* Process Steps */}
                {steps && (
                    <ServiceSteps
                        steps={steps}
                        title="How to Join"
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
                    serviceSlug="group-tango-lessons"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
