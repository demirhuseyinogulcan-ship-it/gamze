'use client';

import { Navbar, Footer, ScrollProgress } from '@/components/ui';
import {
  Hero,
  About,
  Philosophy,
  Services,
  Gallery,
  Schedule,
  FAQ,
  Contact,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Gallery />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
