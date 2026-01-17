'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Cursor Trail Effect
// Elegant particle trail following the cursor
// Respects prefers-reduced-motion for accessibility
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface CursorTrailConfig {
  particleCount: number;
  particleLifetime: number; // ms
  minSize: number;
  maxSize: number;
  trailDelay: number; // ms between particles
  color: string;
  glowColor: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_CONFIG: CursorTrailConfig = {
  particleCount: 12,
  particleLifetime: 600,
  minSize: 4,
  maxSize: 12,
  trailDelay: 40,
  color: 'rgba(212, 175, 55, 0.6)', // Gold
  glowColor: 'rgba(212, 175, 55, 0.3)',
};

// ─────────────────────────────────────────────────────────────────────────────
// Particle Component
// ─────────────────────────────────────────────────────────────────────────────

interface ParticleProps {
  particle: TrailParticle;
  config: CursorTrailConfig;
}

function Particle({ particle, config }: ParticleProps) {
  return (
    <motion.div
      key={particle.id}
      initial={{ scale: 1, opacity: particle.opacity }}
      animate={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: config.particleLifetime / 1000, ease: 'easeOut' }}
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: particle.x,
        top: particle.y,
        width: particle.size,
        height: particle.size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
        boxShadow: `0 0 ${particle.size * 2}px ${config.glowColor}`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Cursor Trail Component
// ─────────────────────────────────────────────────────────────────────────────

interface CursorTrailProps {
  enabled?: boolean;
  config?: Partial<CursorTrailConfig>;
}

export function CursorTrail({
  enabled = true,
  config: customConfig,
}: CursorTrailProps) {
  const config = { ...DEFAULT_CONFIG, ...customConfig };
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const particleIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  // Check if device supports hover (not touch-only) and respects reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(hover: hover)');
    // Disable cursor trail if user prefers reduced motion
    setIsVisible(mediaQuery.matches && enabled && !prefersReducedMotion);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches && enabled && !prefersReducedMotion);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enabled, prefersReducedMotion]);

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isVisible) return;

      const currentTime = Date.now();
      if (currentTime - lastTimeRef.current < config.trailDelay) return;

      const { clientX, clientY } = e;

      // Calculate distance moved
      const dx = clientX - lastPositionRef.current.x;
      const dy = clientY - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only create particle if moved enough
      if (distance < 5) return;

      lastPositionRef.current = { x: clientX, y: clientY };
      lastTimeRef.current = currentTime;

      // Create new particle
      const newParticle: TrailParticle = {
        id: particleIdRef.current++,
        x: clientX,
        y: clientY,
        size: config.minSize + Math.random() * (config.maxSize - config.minSize),
        opacity: 0.6 + Math.random() * 0.4,
      };

      setParticles((prev) => {
        const updated = [...prev, newParticle];
        // Keep only the latest particles
        if (updated.length > config.particleCount) {
          return updated.slice(-config.particleCount);
        }
        return updated;
      });

      // Remove particle after lifetime
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, config.particleLifetime);
    },
    [isVisible, config]
  );

  // Add mouse move listener
  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible, handleMouseMove]);

  // Don't render on touch devices or when disabled
  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle key={particle.id} particle={particle} config={config} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook for controlling cursor trail
// ─────────────────────────────────────────────────────────────────────────────

export function useCursorTrail() {
  const [enabled, setEnabled] = useState(true);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  const enable = useCallback(() => {
    setEnabled(true);
  }, []);

  const disable = useCallback(() => {
    setEnabled(false);
  }, []);

  return { enabled, toggle, enable, disable };
}
