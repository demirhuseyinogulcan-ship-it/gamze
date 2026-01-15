/**
 * Testimonial Types
 * Types for student testimonials/stories component
 */

// Single testimonial/story
export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role?: string;
  readonly location: string;
  readonly quote: string;
  readonly fullStory?: string;
  readonly avatarUrl?: string;
  readonly videoUrl?: string;
  readonly videoPosterUrl?: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
  readonly category: 'beginner' | 'wedding' | 'performance' | 'couple' | 'general';
  readonly beforeAfter?: {
    before: string;
    after: string;
  };
  readonly date?: string;
}

// Testimonial filter category
export interface TestimonialCategory {
  readonly id: Testimonial['category'] | 'all';
  readonly label: string;
  readonly count: number;
}

// Props for testimonial components
export interface TestimonialsProps {
  readonly testimonials: readonly Testimonial[];
  readonly locale: 'tr' | 'en';
  readonly showFilters?: boolean;
  readonly maxVisible?: number;
}

export interface TestimonialCardProps {
  readonly testimonial: Testimonial;
  readonly isExpanded?: boolean;
  readonly onToggleExpand?: () => void;
}

export interface TestimonialVideoProps {
  readonly videoUrl: string;
  readonly posterUrl?: string;
  readonly name: string;
}

// Schema.org Review type for SEO
export interface ReviewSchema {
  readonly '@type': 'Review';
  readonly reviewRating: {
    readonly '@type': 'Rating';
    readonly ratingValue: number;
    readonly bestRating: 5;
  };
  readonly author: {
    readonly '@type': 'Person';
    readonly name: string;
  };
  readonly reviewBody: string;
  readonly datePublished?: string;
}
