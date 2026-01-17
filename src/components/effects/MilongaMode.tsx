'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Milonga Mode
// Special mode that transforms the site into a milonga atmosphere
// Respects prefers-reduced-motion for accessibility
// ─────────────────────────────────────────────────────────────────────────────

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Context
// ─────────────────────────────────────────────────────────────────────────────

interface MilongaModeContextType {
  isActive: boolean;
  toggle: () => void;
  activate: () => void;
  deactivate: () => void;
}

const MilongaModeContext = createContext<MilongaModeContextType | undefined>(
  undefined
);

// ─────────────────────────────────────────────────────────────────────────────
// Provider Component
// ─────────────────────────────────────────────────────────────────────────────

interface MilongaModeProviderProps {
  children: ReactNode;
}

export function MilongaModeProvider({ children }: MilongaModeProviderProps) {
  const [isActive, setIsActive] = useState(false);

  // Load saved preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('milongaMode');
    if (saved === 'true') {
      setIsActive(true);
    }
  }, []);

  // Apply body class when active
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isActive) {
      document.body.classList.add('milonga-mode');
      document.documentElement.style.setProperty('--milonga-glow', '1');
    } else {
      document.body.classList.remove('milonga-mode');
      document.documentElement.style.setProperty('--milonga-glow', '0');
    }
  }, [isActive]);

  // Persist preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('milongaMode', String(isActive));
  }, [isActive]);

  const toggle = useCallback(() => setIsActive((prev) => !prev), []);
  const activate = useCallback(() => setIsActive(true), []);
  const deactivate = useCallback(() => setIsActive(false), []);

  const value = useMemo(
    () => ({ isActive, toggle, activate, deactivate }),
    [isActive, toggle, activate, deactivate]
  );

  return (
    <MilongaModeContext.Provider value={value}>
      {children}
      {isActive && <MilongaOverlay />}
    </MilongaModeContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useMilongaMode() {
  const context = useContext(MilongaModeContext);
  if (!context) {
    throw new Error('useMilongaMode must be used within a MilongaModeProvider');
  }
  return context;
}

// ─────────────────────────────────────────────────────────────────────────────
// Milonga Overlay Effects
// ─────────────────────────────────────────────────────────────────────────────

function MilongaOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-[9000] overflow-hidden"
    >
      {/* Warm color overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 via-transparent to-amber-950/30 mix-blend-overlay" />

      {/* Floating light particles */}
      <FloatingLights />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Floating Lights Animation
// ─────────────────────────────────────────────────────────────────────────────

function FloatingLights() {
  const prefersReducedMotion = useReducedMotion();
  
  const lights = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 200, 100, 0.3)',
    }));
  }, []);

  // Don't render floating lights for users who prefer reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            width: light.size,
            height: light.size,
            backgroundColor: light.color,
            boxShadow: `0 0 ${light.size * 3}px ${light.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Milonga Toggle Button
// ─────────────────────────────────────────────────────────────────────────────

interface MilongaToggleProps {
  className?: string;
}

export function MilongaToggle({ className = '' }: MilongaToggleProps) {
  const { isActive, toggle } = useMilongaMode();

  const label = isActive ? 'Normal Mod' : 'Milonga';
  const Icon = isActive ? Sun : Moon;

  return (
    <motion.button
      onClick={toggle}
      className={`group relative flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all whitespace-nowrap sm:w-[130px] ${isActive
        ? 'border-rose-500/50 bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
        : 'border-cream/20 bg-cream/5 text-cream/70 hover:border-gold/30 hover:text-gold'
        } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isActive ? 'Normal Moda Geç' : 'Milonga Modunu Aç'}
      aria-pressed={isActive}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isActive ? 'sun' : 'moon'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      </AnimatePresence>

      <span className="hidden sm:inline text-xs whitespace-nowrap">{label}</span>

      {/* Sparkle effect when active */}
      {isActive && (
        <motion.div
          className="absolute -right-1 -top-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="h-3 w-3 text-rose-400" />
        </motion.div>
      )}
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS Variables for Milonga Mode (Add to global CSS)
// ─────────────────────────────────────────────────────────────────────────────

/*
Add this to your globals.css:

.milonga-mode {
  --gold: 255, 180, 100;
  --midnight: 20, 12, 12;
  --charcoal: 35, 20, 20;
  --cream: 255, 240, 230;
}

.milonga-mode .text-gold {
  color: rgb(255, 180, 100);
  text-shadow: 0 0 10px rgba(255, 180, 100, 0.5);
}

.milonga-mode .bg-gold {
  background-color: rgb(255, 180, 100);
  box-shadow: 0 0 20px rgba(255, 180, 100, 0.3);
}

.milonga-mode .border-gold {
  border-color: rgb(255, 180, 100);
  box-shadow: 0 0 10px rgba(255, 180, 100, 0.2);
}
*/
