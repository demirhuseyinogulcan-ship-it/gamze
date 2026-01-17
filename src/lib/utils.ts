import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const baseUrl = `https://wa.me/${cleanPhone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

/**
 * Smooth scroll to an element by selector
 * DRY: Single implementation used across all components
 */
export function scrollToElement(selector: string, offset: number = 0): void {
  const element = document.querySelector(selector);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/**
 * Format date for display
 * DRY: Single implementation instead of duplicates in BlogCard, BlogArticleHeader
 */
export function formatDate(dateString: string, locale: string = 'tr'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Debounce function for scroll/resize handlers
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for high-frequency events
 */
export function throttle<T extends (...args: Parameters<T>) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Check if we're on the homepage
 */
export function isHomePage(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.pathname === '/' || window.location.pathname === '';
}
