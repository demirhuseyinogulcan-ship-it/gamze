/**
 * Location Types for SEO-optimized location pages
 * Following Interface Segregation Principle (ISP)
 */

// Base geographic coordinates
export interface Coordinates {
  readonly lat: number;
  readonly lng: number;
}

// Contact information for a location
export interface LocationContact {
  readonly phone: string;
  readonly email: string;
  readonly whatsapp: string;
}

// Address structure
export interface LocationAddress {
  readonly street: string;
  readonly district: string;
  readonly city: string;
  readonly postalCode?: string;
  readonly fullAddress: string;
}

// SEO metadata for location pages
export interface LocationSEO {
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly ogImage?: string;
  readonly canonicalUrl: string;
}

// Feature/benefit item
export interface LocationFeature {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

// Testimonial specific to location
export interface LocationTestimonial {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly quote: string;
  readonly avatarUrl?: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
}

// Transportation/access information
export interface LocationAccess {
  readonly type: 'metro' | 'bus' | 'car' | 'train' | 'ferry';
  readonly name: string;
  readonly distance: string;
  readonly walkTime?: string;
}

// Working hours
export interface WorkingHours {
  readonly day: string;
  readonly hours: string;
  readonly isClosed?: boolean;
}

// Main Location entity - Single Responsibility Principle
export interface Location {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly heroImage: string;
  readonly coordinates: Coordinates;
  readonly address: LocationAddress;
  readonly contact: LocationContact;
  readonly seo: LocationSEO;
  readonly features: readonly LocationFeature[];
  readonly testimonials: readonly LocationTestimonial[];
  readonly accessInfo: readonly LocationAccess[];
  readonly workingHours: readonly WorkingHours[];
  readonly googleMapsEmbed: string;
  readonly isActive: boolean;
}

// Props for location components - Dependency Inversion
export interface LocationHeroProps {
  readonly name: string;
  readonly tagline: string;
  readonly heroImage: string;
  readonly locale: 'tr' | 'en';
}

export interface LocationFeaturesProps {
  readonly features: readonly LocationFeature[];
  readonly locale: 'tr' | 'en';
}

export interface LocationMapProps {
  readonly coordinates: Coordinates;
  readonly address: LocationAddress;
  readonly googleMapsEmbed: string;
  readonly accessInfo: readonly LocationAccess[];
}

export interface LocationCTAProps {
  readonly contact: LocationContact;
  readonly locationName: string;
  readonly locale: 'tr' | 'en';
  readonly locationSlug?: string;
}

// Schema.org LocalBusiness type for SEO
export interface LocalBusinessSchema {
  readonly '@context': 'https://schema.org';
  readonly '@type': 'DanceSchool';
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly telephone: string;
  readonly email: string;
  readonly url: string;
  readonly address: {
    readonly '@type': 'PostalAddress';
    readonly streetAddress: string;
    readonly addressLocality: string;
    readonly addressRegion: string;
    readonly postalCode?: string;
    readonly addressCountry: string;
  };
  readonly geo: {
    readonly '@type': 'GeoCoordinates';
    readonly latitude: number;
    readonly longitude: number;
  };
  readonly openingHoursSpecification: readonly {
    readonly '@type': 'OpeningHoursSpecification';
    readonly dayOfWeek: string;
    readonly opens: string;
    readonly closes: string;
  }[];
  readonly priceRange: string;
  readonly aggregateRating?: {
    readonly '@type': 'AggregateRating';
    readonly ratingValue: number;
    readonly reviewCount: number;
  };
}
