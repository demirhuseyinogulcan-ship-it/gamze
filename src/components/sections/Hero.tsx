'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, Button } from '@/components/ui';
import { useReducedMotion } from '@/lib/hooks';

export function Hero() {
  const { t } = useTranslation();
  const hero = t('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Disable parallax effects for users who prefer reduced motion
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.1]);

  // Animation helper - returns instant animation for reduced motion preference
  const getTransition = (duration: number, delay: number = 0) => ({
    duration: prefersReducedMotion ? 0 : duration,
    delay: prefersReducedMotion ? 0 : delay,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Ana bölüm"
    >
      {/* Video Background - Optimized for Performance */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        {/* Poster image loads first for fast LCP */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/0.jpg')" }}
        />
        {/* Video loads lazily with low priority */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/0.jpg"
        >
          <source src="/images/5.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 via-transparent to-midnight/60" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <Container>
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 0.2)}
              className="text-gold font-body text-sm md:text-base uppercase tracking-[0.4em] mb-6"
            >
              {hero.subtitle}
            </motion.span>

            {/* Main Title - H1 includes "Tango" for SEO */}
            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(1, 0.4)}
              className="heading-xl mb-8"
            >
              <span className="text-white block mb-2">{hero.title}</span>
              <motion.span
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={getTransition(0.8, 0.7)}
                className="font-heading text-6xl md:text-7xl lg:text-8xl italic text-gold block"
              >
                {hero.titleHighlight}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 0.9)}
              className="body-lg max-w-2xl mb-10 text-white/80"
            >
              {hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.8, 1.1)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                {hero.cta}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('#about')}
              >
                {hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getTransition(1, 1.5)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors duration-300"
          aria-label="Aşağı kaydır"
        >
          <span className="text-xs uppercase tracking-widest">Keşfet</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={getTransition(2, 1)}
        className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={getTransition(2, 1.2)}
        className="absolute bottom-40 right-20 w-48 h-48 border border-gold/10 rounded-full blur-sm"
      />
    </section>
  );
}
