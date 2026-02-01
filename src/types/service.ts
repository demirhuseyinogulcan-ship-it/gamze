/**
 * Service Types for SEO-optimized service/hizmet pages
 * Following Interface Segregation Principle (ISP)
 * 
 * Service = Hizmet sayfaları (Lady Styling, Düğün Dansı, Dans Kursu vb.)
 * Lokasyon bağımsız, hizmet odaklı landing page'ler için kullanılır.
 */

// SEO metadata for service pages
export interface ServiceSEO {
    readonly title: string;
    readonly description: string;
    readonly keywords: readonly string[];
    readonly ogImage?: string;
    readonly canonicalUrl: string;
}

// Feature/benefit item for services
export interface ServiceFeature {
    readonly id: string;
    readonly icon: string;
    readonly title: string;
    readonly description: string;
}

// Benefit item (longer form than feature)
export interface ServiceBenefit {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly highlight?: string; // öne çıkan metin
}

// FAQ item for service pages (supports FAQ Schema)
export interface ServiceFAQ {
    readonly id: string;
    readonly question: string;
    readonly answer: string;
}

// Target audience segment
export interface ServiceAudience {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly icon?: string;
}

// What to expect / process step
export interface ServiceStep {
    readonly id: string;
    readonly stepNumber: number;
    readonly title: string;
    readonly description: string;
}

// Main Service entity
export interface Service {
    readonly id: string;
    readonly slug: string;
    readonly name: string;
    readonly tagline: string;
    readonly description: string;
    readonly heroImage: string;
    readonly seo: ServiceSEO;
    readonly features: readonly ServiceFeature[];
    readonly benefits: readonly ServiceBenefit[];
    readonly audiences?: readonly ServiceAudience[];
    readonly steps?: readonly ServiceStep[];
    readonly faqs: readonly ServiceFAQ[];
    readonly relatedLocations: readonly string[]; // location slug'ları
    readonly relatedBlogs: readonly string[];     // blog slug'ları
    readonly ctaText: string;
    readonly ctaDescription: string;
    readonly isActive: boolean;
    readonly translations?: {
        readonly en?: ServiceTranslation;
    };
}

// English translation for a service
export interface ServiceTranslation {
    readonly name: string;
    readonly tagline: string;
    readonly description: string;
    readonly features: readonly ServiceFeature[];
    readonly benefits: readonly ServiceBenefit[];
    readonly audiences?: readonly ServiceAudience[];
    readonly steps?: readonly ServiceStep[];
    readonly faqs: readonly ServiceFAQ[];
    readonly ctaText: string;
    readonly ctaDescription: string;
    readonly seo: ServiceSEO;
}

// Props for service components
export interface ServiceHeroProps {
    readonly name: string;
    readonly tagline: string;
    readonly description: string;
    readonly heroImage: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceFeaturesProps {
    readonly features: readonly ServiceFeature[];
    readonly title?: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceBenefitsProps {
    readonly benefits: readonly ServiceBenefit[];
    readonly title?: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceAudienceProps {
    readonly audiences: readonly ServiceAudience[];
    readonly title?: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceStepsProps {
    readonly steps: readonly ServiceStep[];
    readonly title?: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceFAQProps {
    readonly faqs: readonly ServiceFAQ[];
    readonly title?: string;
    readonly locale: 'tr' | 'en';
}

export interface ServiceCTAProps {
    readonly ctaText: string;
    readonly ctaDescription: string;
    readonly serviceName: string;
    readonly serviceSlug: string;
    readonly locale: 'tr' | 'en';
}

// Schema.org Service type for SEO
export interface ServiceSchema {
    readonly '@context': 'https://schema.org';
    readonly '@type': 'Service';
    readonly name: string;
    readonly description: string;
    readonly provider: {
        readonly '@type': 'Person';
        readonly name: string;
        readonly url: string;
    };
    readonly areaServed: {
        readonly '@type': 'City';
        readonly name: string;
    };
    readonly serviceType: string;
    readonly url: string;
}

// FAQ Schema for rich snippets
export interface FAQPageSchema {
    readonly '@context': 'https://schema.org';
    readonly '@type': 'FAQPage';
    readonly mainEntity: readonly {
        readonly '@type': 'Question';
        readonly name: string;
        readonly acceptedAnswer: {
            readonly '@type': 'Answer';
            readonly text: string;
        };
    }[];
}
