'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle } from '@/components/ui';

const galleryImages = [
  { src: '/images/0.jpg', alt: 'Tango performansı', span: 'col-span-2 row-span-2' },
  { src: '/images/1.jpg', alt: 'Tango dersi', span: 'col-span-1 row-span-1' },
  { src: '/images/2.jpg', alt: 'Dans etkinliği', span: 'col-span-1 row-span-2' },
  { src: '/images/3.jpg', alt: 'Tango gösterisi', span: 'col-span-1 row-span-1' },
  { src: '/images/4.jpg', alt: 'Dans çalışması', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  const { t } = useTranslation();
  const gallery = t('gallery');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    const newIndex = direction === 'prev'
      ? (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      : (selectedIndex + 1) % galleryImages.length;
    setSelectedIndex(newIndex);
  }, [selectedIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox('prev');
    if (e.key === 'ArrowRight') navigateLightbox('next');
  }, [closeLightbox, navigateLightbox]);

  return (
    <section id="gallery" className="section-padding bg-midnight relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle={gallery.subtitle}
          title={gallery.title}
        />

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${image.span}`}
              aria-label={`${image.alt} - Büyütmek için tıklayın`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center"
                >
                  <span className="text-midnight font-medium text-sm">Görüntüle</span>
                </motion.div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-500 rounded-sm" />
            </motion.button>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Galeri görüntüleyici"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-gold transition-colors duration-300 z-10"
              aria-label="Kapat"
            >
              <X size={32} />
            </motion.button>

            {/* Navigation */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-gold transition-colors duration-300 z-10"
              aria-label="Önceki"
            >
              <ChevronLeft size={40} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-gold transition-colors duration-300 z-10"
              aria-label="Sonraki"
            >
              <ChevronRight size={40} />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-body text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
