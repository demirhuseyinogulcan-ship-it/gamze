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
