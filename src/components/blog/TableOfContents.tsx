/**
 * TableOfContents Component
 * Blog yazısı için içindekiler tablosu
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List, ChevronRight } from 'lucide-react';
import { TableOfContentsItem, Locale } from '@/types/blog';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  locale?: Locale;
}

export function TableOfContents({ items, locale = 'tr' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      }
    );
    
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => observer.disconnect();
  }, [items]);
  
  if (items.length === 0) return null;
  
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky top-24 bg-midnight-50 rounded-sm p-6 border border-white/5"
      aria-label="İçindekiler"
    >
      <h3 className="font-heading text-lg text-white mb-4 flex items-center gap-2">
        <List size={18} className="text-gold" />
        {locale === 'tr' ? 'İçindekiler' : 'Table of Contents'}
      </h3>
      
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const paddingLeft = (item.level - 2) * 16;
          
          return (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full text-left py-1.5 px-3 rounded-sm transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold/10 text-gold'
                    : 'text-white/60 hover:text-gold hover:bg-white/5'
                }`}
                style={{ paddingLeft: `${12 + paddingLeft}px` }}
              >
                <ChevronRight 
                  size={14} 
                  className={`flex-shrink-0 transition-transform ${isActive ? 'rotate-90' : ''}`}
                />
                <span className="text-sm line-clamp-2">{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
