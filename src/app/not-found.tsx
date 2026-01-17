/**
 * 404 Not Found Page
 * Elegant, on-brand error page that guides users back
 */

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-midnight flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[12rem] md:text-[16rem] font-heading font-bold text-white/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-heading font-bold text-gold">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h1 className="heading-md text-white mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Tango yolculuğunuza ana sayfadan devam edebilirsiniz.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-primary px-8 py-4 text-lg"
          >
            Ana Sayfaya Dön
          </Link>
          <Link 
            href="/blog"
            className="btn-secondary px-8 py-4 text-lg"
          >
            Blog&apos;a Git
          </Link>
        </div>

        {/* Decorative Quote */}
        <p className="mt-16 text-white/30 italic font-heading text-lg">
          &ldquo;Dans, kaybolmak değil, kendini bulmaktır.&rdquo;
        </p>
      </div>
    </main>
  );
}
