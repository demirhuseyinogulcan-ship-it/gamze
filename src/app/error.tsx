'use client';

/**
 * Global Error Boundary
 * Catches unhandled errors and provides recovery options
 */

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to analytics/monitoring service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-crimson/20 flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-crimson" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="heading-md text-white mb-4">
          Bir Hata Oluştu
        </h1>
        <p className="text-white/60 text-lg mb-8">
          Üzgünüz, beklenmedik bir hata meydana geldi. 
          Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
        </p>

        {/* Error Details (dev only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-8 text-left bg-white/5 rounded-lg p-4">
            <summary className="text-white/60 cursor-pointer hover:text-white transition-colors">
              Hata Detayları
            </summary>
            <pre className="mt-4 text-xs text-crimson/80 overflow-auto max-h-40">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-8 py-4 text-lg"
          >
            Tekrar Dene
          </button>
          <a 
            href="/"
            className="btn-secondary px-8 py-4 text-lg"
          >
            Ana Sayfaya Dön
          </a>
        </div>

        {/* Support Link */}
        <p className="mt-8 text-white/40 text-sm">
          Sorun devam ederse{' '}
          <a 
            href="https://wa.me/905062284507" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            bizimle iletişime geçin
          </a>
        </p>
      </div>
    </main>
  );
}
