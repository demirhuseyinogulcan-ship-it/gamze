'use client';

/**
 * Testimonials Section Component
 * Displays student stories with filtering and animations
 */

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslation } from '@/lib/i18n';
import {
  getTestimonials,
  CATEGORY_LABELS,
} from '@/lib/constants/testimonials';
import type { Testimonial, TestimonialCategory } from '@/types/testimonial';

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? 'fill-gold text-gold'
              : 'fill-transparent text-cream/20'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// Before/After Badge
function BeforeAfterBadge({ before, after }: { before: string; after: string }) {
  return (
    <div className="mt-4 flex items-center gap-2 text-xs">
      <span className="rounded-full bg-cream/10 px-3 py-1 text-cream/60">
        {before}
      </span>
      <span className="text-gold">→</span>
      <span className="rounded-full bg-gold/20 px-3 py-1 text-gold">
        {after}
      </span>
    </div>
  );
}

// Single Testimonial Card
function TestimonialCard({
  testimonial,
  isExpanded,
  onToggle,
}: {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const hasFullStory = !!testimonial.fullStory;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-b from-charcoal/50 to-midnight/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] sm:p-8"
    >
      {/* Quote icon */}
      <div className="absolute -right-4 -top-4 opacity-5">
        <Quote className="h-24 w-24 text-gold" strokeWidth={1} />
      </div>

      {/* Header */}
      <header className="relative mb-4 flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/10 ring-2 ring-gold/20">
            <span className="font-display text-lg font-medium text-gold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-cream">
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-cream/60">
              {testimonial.role && (
                <>
                  <span>{testimonial.role}</span>
                  <span className="text-gold/40">•</span>
                </>
              )}
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {testimonial.location}
              </span>
            </div>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </header>

      {/* Quote */}
      <blockquote className="relative">
        <p className="text-base leading-relaxed text-cream/80 sm:text-lg">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Expanded Story */}
      <AnimatePresence mode="wait">
        {isExpanded && testimonial.fullStory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="mt-4 overflow-hidden"
          >
            <p className="border-t border-gold/10 pt-4 text-sm leading-relaxed text-cream/60">
              {testimonial.fullStory}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before/After */}
      {testimonial.beforeAfter && (
        <BeforeAfterBadge
          before={testimonial.beforeAfter.before}
          after={testimonial.beforeAfter.after}
        />
      )}

      {/* Expand Button */}
      {hasFullStory && (
        <button
          onClick={onToggle}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span>Daha az göster</span>
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            </>
          ) : (
            <>
              <span>Devamını oku</span>
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      )}

      {/* Hover glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}

// Filter Button Component
function FilterButton({
  category,
  isActive,
  onClick,
  count,
}: {
  category: TestimonialCategory;
  isActive: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight ${
        isActive
          ? 'bg-gold text-midnight shadow-[0_0_20px_rgba(212,175,55,0.3)]'
          : 'border border-cream/20 bg-transparent text-cream/70 hover:border-gold/50 hover:text-cream'
      }`}
      aria-pressed={isActive}
    >
      <span>{category.label}</span>
      <span
        className={`rounded-full px-1.5 text-xs ${
          isActive ? 'bg-midnight/20 text-midnight' : 'bg-cream/10 text-cream/50'
        }`}
      >
        {count}
      </span>
    </button>
  );
}

// Main Testimonials Component
export function Testimonials() {
  const { locale, t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Testimonial['category'] | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Get testimonials based on locale
  const allTestimonials = useMemo(() => getTestimonials(locale), [locale]);
  
  // Get category labels based on locale
  const categoryLabels = CATEGORY_LABELS[locale];

  // Calculate category counts
  const categories = useMemo((): TestimonialCategory[] => {
    const counts = allTestimonials.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const allCategories: TestimonialCategory[] = [
      { id: 'all' as const, label: categoryLabels.all, count: allTestimonials.length },
      { id: 'beginner' as const, label: categoryLabels.beginner, count: counts.beginner || 0 },
      { id: 'wedding' as const, label: categoryLabels.wedding, count: counts.wedding || 0 },
      { id: 'couple' as const, label: categoryLabels.couple, count: counts.couple || 0 },
      { id: 'performance' as const, label: categoryLabels.performance, count: counts.performance || 0 },
    ];
    return allCategories.filter((c) => c.count > 0 || c.id === 'all');
  }, [allTestimonials, categoryLabels]);

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    if (activeCategory === 'all') return allTestimonials;
    return allTestimonials.filter((t) => t.category === activeCategory);
  }, [allTestimonials, activeCategory]);

  // Toggle expand handler
  const handleToggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  // Section translations
  const sectionText = locale === 'tr' 
    ? { subtitle: 'Öğrenci Hikayeleri', title: 'Başarı Hikayeleri' }
    : { subtitle: 'Student Stories', title: 'Success Stories' };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-midnight py-20 sm:py-28 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Title */}
        <div>
          <h2 id="testimonials-title" className="sr-only">{sectionText.title}</h2>
          <SectionTitle
            subtitle={sectionText.subtitle}
            title={sectionText.title}
          />
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex justify-center">
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                count={category.count}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label={sectionText.title}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                isExpanded={expandedId === testimonial.id}
                onToggle={() => handleToggleExpand(testimonial.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-cream/60"
          >
            {locale === 'tr'
              ? 'Bu kategoride henüz hikaye yok.'
              : 'No stories in this category yet.'}
          </motion.p>
        )}
      </Container>
    </section>
  );
}

export default Testimonials;
