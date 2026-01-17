'use client';

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

export default function HomePage() {
  return (
    <>
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <main>
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
