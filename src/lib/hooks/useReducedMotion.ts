'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect user's motion preference
 * Respects prefers-reduced-motion media query for accessibility
 * 
 * @returns {boolean} true if user prefers reduced motion
 * 
 * @example
 * const prefersReducedMotion = useReducedMotion();
 * 
 * // Use in Framer Motion
 * <motion.div
 *   initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
 * />
 */
export function useReducedMotion(): boolean {
  // Default to false (animations enabled) for SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if matchMedia is supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers use addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      // @ts-ignore - addListener is deprecated but needed for older browsers
      mediaQuery.addListener(handleChange);
      // @ts-ignore
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation props based on reduced motion preference
 * Returns either full animation or instant animation
 */
export function getMotionProps(
  prefersReducedMotion: boolean,
  fullAnimation: {
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown>;
    exit?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  }
) {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: fullAnimation.animate,
      exit: fullAnimation.exit,
      transition: { duration: 0 },
    };
  }
  return fullAnimation;
}

/**
 * Reduced motion safe animation variants
 * Use these when you want animations to be completely disabled for reduced-motion
 */
export const reducedMotionVariants = {
  // No animation - just show the content
  static: {
    initial: {},
    animate: {},
    exit: {},
  },
  // Instant fade (minimal motion)
  instantFade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
} as const;
