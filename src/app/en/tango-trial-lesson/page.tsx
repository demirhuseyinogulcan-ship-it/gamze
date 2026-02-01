/**
 * Tango Trial Lesson - English Version
 * SEO-optimized service page
 * 
 * Focus: First-timers, beginners, trial experience, no commitment
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
    TANGO_DENEME_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// Get English translations
const enTranslation = TANGO_DENEME_DERSI_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo?.title || 'Tango Trial Lesson Istanbul | Gamze Tango',
    description: enTranslation?.seo?.description || 'Try Argentine Tango with a trial lesson in Istanbul.',
    keywords: enTranslation?.seo?.keywords?.join(', ') || 'tango trial lesson, beginner tango',
    alternates: {
        canonical: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/tango-trial-lesson',
        languages: {
            'tr-TR': '/tango-deneme-dersi',
            'en-US': '/en/tango-trial-lesson',
        },
    },
    openGraph: {
        title: enTranslation?.seo?.title || 'Tango Trial Lesson Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Try Argentine Tango with a trial lesson in Istanbul.',
        url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/tango-trial-lesson',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${TANGO_DENEME_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Tango Trial Lesson in Istanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: enTranslation?.seo?.title || 'Tango Trial Lesson Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Try Argentine Tango with a trial lesson in Istanbul.',
        images: [`https://gamzetango.com${TANGO_DENEME_DERSI_SERVICE.heroImage}`],
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
    name: enTranslation?.name || 'Tango Trial Lesson',
    description: enTranslation?.description || TANGO_DENEME_DERSI_SERVICE.description,
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
    url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/tango-trial-lesson',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (enTranslation?.faqs || TANGO_DENEME_DERSI_SERVICE.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function TangoTrialLessonPage() {
    // Use English translations or fallback to Turkish
    const name = enTranslation?.name || TANGO_DENEME_DERSI_SERVICE.name;
    const tagline = enTranslation?.tagline || TANGO_DENEME_DERSI_SERVICE.tagline;
    const description = enTranslation?.description || TANGO_DENEME_DERSI_SERVICE.description;
    const features = enTranslation?.features || TANGO_DENEME_DERSI_SERVICE.features;
    const benefits = enTranslation?.benefits || TANGO_DENEME_DERSI_SERVICE.benefits;
    const audiences = enTranslation?.audiences || TANGO_DENEME_DERSI_SERVICE.audiences;
    const steps = enTranslation?.steps || TANGO_DENEME_DERSI_SERVICE.steps;
    const faqs = enTranslation?.faqs || TANGO_DENEME_DERSI_SERVICE.faqs;
    const ctaText = enTranslation?.ctaText || TANGO_DENEME_DERSI_SERVICE.ctaText;
    const ctaDescription = enTranslation?.ctaDescription || TANGO_DENEME_DERSI_SERVICE.ctaDescription;

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
                    heroImage={TANGO_DENEME_DERSI_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={features}
                    title="What the Trial Lesson Includes"
                    locale="en"
                />

                {/* Target Audience */}
                {audiences && (
                    <ServiceAudience
                        audiences={audiences}
                        title="Who Is This For?"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                    title="Why Try Tango?"
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
                    serviceSlug="tango-trial-lesson"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
