/**
 * Wedding Dance Training - English Version
 * SEO-optimized service page
 * 
 * Focus: Couples, wedding first dance, choreography, romantic experience
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
    WEDDING_DANCE_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// Get English translations
const enTranslation = WEDDING_DANCE_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo?.title || 'Wedding Dance Lessons Istanbul | Gamze Tango',
    description: enTranslation?.seo?.description || 'Wedding dance choreography and training in Istanbul.',
    keywords: enTranslation?.seo?.keywords?.join(', ') || 'wedding dance, first dance, choreography',
    alternates: {
        canonical: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/wedding-dance',
        languages: {
            'tr-TR': '/dugun-dansi',
            'en-US': '/en/wedding-dance',
        },
    },
    openGraph: {
        title: enTranslation?.seo?.title || 'Wedding Dance Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Wedding dance choreography and training in Istanbul.',
        url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/wedding-dance',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${WEDDING_DANCE_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Wedding Dance Lessons in Istanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: enTranslation?.seo?.title || 'Wedding Dance Lessons Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Wedding dance choreography and training in Istanbul.',
        images: [`https://gamzetango.com${WEDDING_DANCE_SERVICE.heroImage}`],
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
    name: enTranslation?.name || 'Wedding Dance Training',
    description: enTranslation?.description || WEDDING_DANCE_SERVICE.description,
    provider: {
        '@type': 'Person',
        name: 'Gamze Yıldız',
        url: 'https://gamzetango.com',
    },
    areaServed: {
        '@type': 'City',
        name: 'Istanbul',
    },
    serviceType: 'Wedding Dance Choreography',
    url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/wedding-dance',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (enTranslation?.faqs || WEDDING_DANCE_SERVICE.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function WeddingDancePage() {
    // Use English translations or fallback to Turkish
    const name = enTranslation?.name || WEDDING_DANCE_SERVICE.name;
    const tagline = enTranslation?.tagline || WEDDING_DANCE_SERVICE.tagline;
    const description = enTranslation?.description || WEDDING_DANCE_SERVICE.description;
    const features = enTranslation?.features || WEDDING_DANCE_SERVICE.features;
    const benefits = enTranslation?.benefits || WEDDING_DANCE_SERVICE.benefits;
    const audiences = enTranslation?.audiences || WEDDING_DANCE_SERVICE.audiences;
    const steps = enTranslation?.steps || WEDDING_DANCE_SERVICE.steps;
    const faqs = enTranslation?.faqs || WEDDING_DANCE_SERVICE.faqs;
    const ctaText = enTranslation?.ctaText || WEDDING_DANCE_SERVICE.ctaText;
    const ctaDescription = enTranslation?.ctaDescription || WEDDING_DANCE_SERVICE.ctaDescription;

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
                    heroImage={WEDDING_DANCE_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={features}
                    title="What We Offer"
                    locale="en"
                />

                {/* Target Audience */}
                {audiences && (
                    <ServiceAudience
                        audiences={audiences}
                        title="Perfect For"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                    title="Why Choose Us"
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
                    serviceSlug="wedding-dance"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
