'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { useScrollProgress } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { MilongaToggle } from '@/components/effects';

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'gallery', href: '#gallery' },
  { key: 'schedule', href: '#schedule' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
  { key: 'blog', href: '/blog', isExternal: true },
] as const;

// URL patterns for language switching
const getLocalizedUrl = (pathname: string, targetLocale: 'tr' | 'en'): string => {
  // Check if we're on a specific blog post (not category/tag pages)
  const isBlogPost = (pathname.startsWith('/blog/') || pathname.startsWith('/en/blog/')) && 
    !pathname.includes('/kategori/') && 
    !pathname.includes('/category/') &&
    !pathname.includes('/etiket/') && 
    !pathname.includes('/tag/');
  
  // For specific blog posts, redirect to main blog page (slugs are different per language)
  if (isBlogPost) {
    return targetLocale === 'tr' ? '/blog' : '/en/blog';
  }
  
  // Blog category pages
  if (pathname.includes('/kategori/') || pathname.includes('/category/')) {
    const categorySlug = pathname.split('/').pop();
    if (targetLocale === 'tr') {
      return `/blog/kategori/${categorySlug}`;
    }
    return `/en/blog/category/${categorySlug}`;
  }
  
  // Blog tag pages
  if (pathname.includes('/etiket/') || pathname.includes('/tag/')) {
    const tagSlug = pathname.split('/').pop();
    if (targetLocale === 'tr') {
      return `/blog/etiket/${tagSlug}`;
    }
    return `/en/blog/tag/${tagSlug}`;
  }
  
  // Main blog page
  if (pathname === '/blog' || pathname === '/en/blog') {
    return targetLocale === 'tr' ? '/blog' : '/en/blog';
  }
  
  // For homepage and other pages, just return root
  return '/';
};

// Get blog href based on locale
const getBlogHref = (locale: 'tr' | 'en'): string => {
  return locale === 'tr' ? '/blog' : '/en/blog';
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollProgress();
  const { locale, setLocale, t } = useTranslation();
  const pathname = usePathname();
  const nav = t('nav');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) {
      // External link - let it navigate normally
      setIsOpen(false);
      return;
    }
    
    // Check if we're on a different page (not homepage)
    const isOnHomepage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (!isOnHomepage) {
      // Navigate to homepage with the anchor
      setIsOpen(false);
      window.location.href = '/' + href;
      return;
    }
    
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    setLocale(newLocale);
    
    // If on blog pages, navigate to the localized version
    if (pathname.startsWith('/blog') || pathname.startsWith('/en/blog')) {
      const newUrl = getLocalizedUrl(pathname, newLocale);
      window.location.href = newUrl;
    }
  };

  // Get the correct blog href based on current locale
  const getNavHref = (item: typeof navItems[number]): string => {
    if (item.key === 'blog') {
      return getBlogHref(locale);
    }
    return item.href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-midnight/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-6'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between" role="navigation" aria-label="Ana navigasyon">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="relative z-10 group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-heading text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-300">
                Gamze <span className="italic text-gold">Yıldız</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const href = getNavHref(item);
                return (
                  <motion.a
                    key={item.key}
                    href={href}
                    onClick={(e) => handleNavClick(e, href, 'isExternal' in item ? item.isExternal : false)}
                    className="nav-link text-sm uppercase tracking-wider"
                    whileHover={{ y: -2 }}
                  >
                    {nav[item.key as keyof typeof nav]}
                  </motion.a>
                );
              })}
              
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLocale}
                className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
              >
                <Globe size={18} />
                <span className="text-sm font-medium uppercase">{locale === 'tr' ? 'EN' : 'TR'}</span>
              </motion.button>

              {/* Milonga Mode Toggle */}
              <MilongaToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <motion.button
                onClick={toggleLocale}
                className="text-white/80 hover:text-gold transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
              >
                <Globe size={20} />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 p-2 text-white hover:text-gold transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-midnight/98 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-midnight-50 shadow-2xl"
            >
              <div className="flex flex-col justify-center h-full px-8 py-20">
                {navItems.map((item, index) => {
                  const href = getNavHref(item);
                  return (
                    <motion.a
                      key={item.key}
                      href={href}
                      onClick={(e) => handleNavClick(e, href, 'isExternal' in item ? item.isExternal : false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="py-4 text-2xl font-heading text-white hover:text-gold transition-colors duration-300 border-b border-white/5"
                    >
                      {nav[item.key as keyof typeof nav]}
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
