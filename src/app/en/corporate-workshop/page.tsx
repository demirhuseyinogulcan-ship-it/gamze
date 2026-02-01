/**
 * Corporate Tango Workshop - Company Events
 * SEO-optimized service page (English)
 * 
 * Focus: Team building, motivation, corporate events
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
    KURUMSAL_WORKSHOP_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// Get English translations
const enTranslation = KURUMSAL_WORKSHOP_SERVICE.translations?.en;

// SEO Metadata
export const metadata: Metadata = {
    title: enTranslation?.seo?.title || 'Corporate Tango Workshop Istanbul | Gamze Tango',
    description: enTranslation?.seo?.description || 'Corporate tango workshops for team building in Istanbul.',
    keywords: enTranslation?.seo?.keywords?.join(', ') || 'corporate tango workshop, team building',
    alternates: {
        canonical: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/corporate-workshop',
        languages: {
            'tr-TR': '/kurumsal-workshop',
            'en-US': '/en/corporate-workshop',
        },
    },
    openGraph: {
        title: enTranslation?.seo?.title || 'Corporate Tango Workshop Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Corporate tango workshops for team building in Istanbul.',
        url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/corporate-workshop',
        siteName: 'Gamze Yıldız Tango',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${KURUMSAL_WORKSHOP_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Corporate Tango Workshop - Team Building',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: enTranslation?.seo?.title || 'Corporate Tango Workshop Istanbul | Gamze Tango',
        description: enTranslation?.seo?.description || 'Corporate tango workshops for team building in Istanbul.',
        images: [`https://gamzetango.com${KURUMSAL_WORKSHOP_SERVICE.heroImage}`],
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
    name: enTranslation?.name || 'Corporate Tango Workshop',
    description: enTranslation?.description || KURUMSAL_WORKSHOP_SERVICE.description,
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
    url: enTranslation?.seo?.canonicalUrl || 'https://gamzetango.com/en/corporate-workshop',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (enTranslation?.faqs || KURUMSAL_WORKSHOP_SERVICE.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function CorporateWorkshopPage() {
    // Use English translations or fallback to Turkish
    const name = enTranslation?.name || KURUMSAL_WORKSHOP_SERVICE.name;
    const tagline = enTranslation?.tagline || KURUMSAL_WORKSHOP_SERVICE.tagline;
    const description = enTranslation?.description || KURUMSAL_WORKSHOP_SERVICE.description;
    const features = enTranslation?.features || KURUMSAL_WORKSHOP_SERVICE.features;
    const benefits = enTranslation?.benefits || KURUMSAL_WORKSHOP_SERVICE.benefits;
    const audiences = enTranslation?.audiences || KURUMSAL_WORKSHOP_SERVICE.audiences;
    const steps = enTranslation?.steps || KURUMSAL_WORKSHOP_SERVICE.steps;
    const faqs = enTranslation?.faqs || KURUMSAL_WORKSHOP_SERVICE.faqs;
    const ctaText = enTranslation?.ctaText || KURUMSAL_WORKSHOP_SERVICE.ctaText;
    const ctaDescription = enTranslation?.ctaDescription || KURUMSAL_WORKSHOP_SERVICE.ctaDescription;

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
                    heroImage={KURUMSAL_WORKSHOP_SERVICE.heroImage}
                    locale="en"
                />

                {/* Features */}
                <ServiceFeatures
                    features={features}
                    title="What's in the Corporate Workshop?"
                    locale="en"
                />

                {/* Target Audience */}
                {audiences && (
                    <ServiceAudience
                        audiences={audiences}
                        title="Who is Corporate Workshop For?"
                        locale="en"
                    />
                )}

                {/* Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                    title="What Does Your Team Gain?"
                    locale="en"
                />

                {/* Process Steps */}
                {steps && (
                    <ServiceSteps
                        steps={steps}
                        title="Workshop Process"
                        locale="en"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={faqs}
                    title="Corporate Workshop FAQ"
                    locale="en"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={ctaText}
                    ctaDescription={ctaDescription}
                    serviceName={name}
                    serviceSlug="corporate-workshop"
                    locale="en"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
