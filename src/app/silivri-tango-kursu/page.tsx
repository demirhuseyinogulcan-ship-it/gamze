/**
 * Silivri Tango Kursu - SEO Landing Page
 * "Silivri tango kursu" aramasını hedefleyen sayfa
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import {
    SILIVRI_TANGO_COURSE_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: SILIVRI_TANGO_COURSE_SERVICE.seo.title,
    description: SILIVRI_TANGO_COURSE_SERVICE.seo.description,
    keywords: SILIVRI_TANGO_COURSE_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: SILIVRI_TANGO_COURSE_SERVICE.seo.canonicalUrl,
        languages: {
            'tr-TR': '/silivri-tango-kursu',
            'en-US': '/en/tango-course-silivri',
        },
    },
    openGraph: {
        title: SILIVRI_TANGO_COURSE_SERVICE.seo.title,
        description: SILIVRI_TANGO_COURSE_SERVICE.seo.description,
        url: SILIVRI_TANGO_COURSE_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${SILIVRI_TANGO_COURSE_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Silivri Tango Kursu - Gamze Yıldız',
            },
        ],
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
const serviceSchema = generateServiceSchema(SILIVRI_TANGO_COURSE_SERVICE);
const faqSchema = generateFAQSchema(SILIVRI_TANGO_COURSE_SERVICE);

export default function SilivriTangoKursuPage() {
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
                    name={SILIVRI_TANGO_COURSE_SERVICE.name}
                    tagline={SILIVRI_TANGO_COURSE_SERVICE.tagline}
                    description={SILIVRI_TANGO_COURSE_SERVICE.description}
                    heroImage={SILIVRI_TANGO_COURSE_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features */}
                <ServiceFeatures
                    features={SILIVRI_TANGO_COURSE_SERVICE.features}
                    title="Neden Silivri Tango Kursu?"
                    locale="tr"
                />

                {/* Benefits */}
                <ServiceBenefits
                    benefits={SILIVRI_TANGO_COURSE_SERVICE.benefits}
                    title="Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={SILIVRI_TANGO_COURSE_SERVICE.faqs}
                    title="Silivri Tango Kursu Hakkında Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={SILIVRI_TANGO_COURSE_SERVICE.ctaText}
                    ctaDescription={SILIVRI_TANGO_COURSE_SERVICE.ctaDescription}
                    serviceName={SILIVRI_TANGO_COURSE_SERVICE.name}
                    serviceSlug={SILIVRI_TANGO_COURSE_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
