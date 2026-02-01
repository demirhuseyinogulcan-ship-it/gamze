/**
 * Grup Tango Dersi - Service Page
 * SEO-optimized landing page for group tango lessons
 * 
 * Uses shared service components for consistent UI/UX
 * Based on lady-styling page structure
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

// SEO Metadata
export const metadata: Metadata = {
    title: GRUP_TANGO_DERSI_SERVICE.seo.title,
    description: GRUP_TANGO_DERSI_SERVICE.seo.description,
    keywords: GRUP_TANGO_DERSI_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: GRUP_TANGO_DERSI_SERVICE.seo.canonicalUrl,
    },
    openGraph: {
        title: GRUP_TANGO_DERSI_SERVICE.seo.title,
        description: GRUP_TANGO_DERSI_SERVICE.seo.description,
        url: GRUP_TANGO_DERSI_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${GRUP_TANGO_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Grup Tango Dersi İstanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: GRUP_TANGO_DERSI_SERVICE.seo.title,
        description: GRUP_TANGO_DERSI_SERVICE.seo.description,
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

// JSON-LD Schemas
const serviceSchema = generateServiceSchema(GRUP_TANGO_DERSI_SERVICE);
const faqSchema = generateFAQSchema(GRUP_TANGO_DERSI_SERVICE);

export default function GrupTangoDersiPage() {
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
                    name={GRUP_TANGO_DERSI_SERVICE.name}
                    tagline={GRUP_TANGO_DERSI_SERVICE.tagline}
                    description={GRUP_TANGO_DERSI_SERVICE.description}
                    heroImage={GRUP_TANGO_DERSI_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Grup Dersi? */}
                <ServiceFeatures
                    features={GRUP_TANGO_DERSI_SERVICE.features}
                    title="Grup Derslerinin Avantajları"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {GRUP_TANGO_DERSI_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={GRUP_TANGO_DERSI_SERVICE.audiences}
                        title="Grup Dersleri Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={GRUP_TANGO_DERSI_SERVICE.benefits}
                    title="Grup Dersleri Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {GRUP_TANGO_DERSI_SERVICE.steps && (
                    <ServiceSteps
                        steps={GRUP_TANGO_DERSI_SERVICE.steps}
                        title="Nasıl Başlarım?"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={GRUP_TANGO_DERSI_SERVICE.faqs}
                    title="Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={GRUP_TANGO_DERSI_SERVICE.ctaText}
                    ctaDescription={GRUP_TANGO_DERSI_SERVICE.ctaDescription}
                    serviceName={GRUP_TANGO_DERSI_SERVICE.name}
                    serviceSlug={GRUP_TANGO_DERSI_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
