'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';
import { Container } from '@/components/ui';

export function Philosophy() {
  const { t } = useTranslation();
  const philosophy = t('philosophy');

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/0.jpg"
          alt="Tango background"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 30%' }}
          loading="lazy"
          quality={75}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-midnight/60" />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-transparent to-midnight/50" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <Container size="narrow" className="relative z-10">
        <div className="relative">
          {/* Decorative Quote Marks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -top-16 -left-8 font-heading text-[200px] text-gold leading-none select-none"
          >
            &ldquo;
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 block"
            >
              {philosophy.subtitle}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-md text-white mb-12"
            >
              {philosophy.title}
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl italic text-gold/90 mb-10 leading-relaxed"
            >
              {philosophy.quote}
            </motion.blockquote>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-0.5 bg-gold mx-auto mb-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-lg max-w-2xl mx-auto text-white/70"
            >
              {philosophy.description}
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold/10 rounded-full"
          />
        </div>
      </Container>
    </section>
  );
}
