'use client';

/**
 * HomePageClient - Client-side homepage component
 * Contains all interactive elements (animations, scroll effects, etc.)
 */

import { Navbar, Footer, ScrollProgress, AmbientSound, PWAInstallPrompt } from '@/components/ui';
import { CursorTrail } from '@/components/effects';
import {
  Hero,
  About,
  Philosophy,
  Services,
  Gallery,
  Testimonials,
  FirstLessonJourney,
  LeadMagnet,
  Schedule,
  FAQ,
  Contact,
  BlogPreview,
} from '@/components/sections';

export function HomePageClient() {
  return (
    <>
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Gallery />
        <Testimonials />
        <FirstLessonJourney />
        <BlogPreview />
        <LeadMagnet />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AmbientSound />
      <PWAInstallPrompt />
    </>
  );
}
