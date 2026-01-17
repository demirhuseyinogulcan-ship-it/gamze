'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component
 * SEO-friendly breadcrumb with Schema.org structured data
 */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate JSON-LD structured data for breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://gamzetango.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 text-sm text-white/60 ${className}`}
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-gold transition-colors"
          title="Ana Sayfa"
        >
          <Home size={14} />
          <span className="sr-only">Ana Sayfa</span>
        </Link>

        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-white/40" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
