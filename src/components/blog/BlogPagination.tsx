/**
 * BlogPagination Component
 * Sayfalama navigasyonu
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export function BlogPagination({ 
  currentPage, 
  totalPages, 
  basePath = '/blog' 
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;
  
  const pages = generatePageNumbers(currentPage, totalPages);
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="Sayfalama"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}/sayfa/${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 text-white/70 hover:text-gold transition-colors"
          aria-label="Önceki sayfa"
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Önceki</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 text-white/30 cursor-not-allowed">
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Önceki</span>
        </span>
      )}
      
      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-white/40">
                ...
              </span>
            );
          }
          
          const pageNum = page as number;
          const isActive = pageNum === currentPage;
          const href = pageNum === 1 ? basePath : `${basePath}/sayfa/${pageNum}`;
          
          return (
            <Link
              key={pageNum}
              href={href}
              className={`w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 ${
                isActive
                  ? 'bg-gold text-midnight font-medium'
                  : 'text-white/70 hover:text-gold hover:bg-white/5'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>
      
      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}/sayfa/${currentPage + 1}`}
          className="flex items-center gap-1 px-4 py-2 text-white/70 hover:text-gold transition-colors"
          aria-label="Sonraki sayfa"
        >
          <span className="hidden sm:inline">Sonraki</span>
          <ChevronRight size={18} />
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 text-white/30 cursor-not-allowed">
          <span className="hidden sm:inline">Sonraki</span>
          <ChevronRight size={18} />
        </span>
      )}
    </motion.nav>
  );
}

/**
 * Sayfa numaralarını oluştur
 */
function generatePageNumbers(current: number, total: number): (number | '...')[] {
  const pages: (number | '...')[] = [];
  
  if (total <= 7) {
    // 7 veya daha az sayfa varsa hepsini göster
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Her zaman ilk sayfayı göster
    pages.push(1);
    
    if (current <= 3) {
      // Başlangıçta
      pages.push(2, 3, 4, '...', total);
    } else if (current >= total - 2) {
      // Sonda
      pages.push('...', total - 3, total - 2, total - 1, total);
    } else {
      // Ortada
      pages.push('...', current - 1, current, current + 1, '...', total);
    }
  }
  
  return pages;
}
