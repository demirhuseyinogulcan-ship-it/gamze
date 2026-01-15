'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle } from '@/components/ui';

const stats = [
  { value: '10+', key: 'experience' },
  { value: '500+', key: 'students' },
  { value: '100+', key: 'events' },
];

export function About() {
  const { t } = useTranslation();
  const about = t('about');

  return (
    <section id="about" className="section-padding bg-midnight relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 overflow-hidden rounded-sm w-full h-full"
              >
                <Image
                  src="/images/hakkimda.jpg"
                  alt="Gamze Yıldız - Profesyonel Tango Eğitmeni"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ objectPosition: '50% 20%' }}
                  priority
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-sm -z-10"
              />
              
              {/* Gold Accent */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 bg-gold"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <SectionTitle
              subtitle={about.subtitle}
              title={about.title}
              align="left"
              className="mb-8"
            />

            <div className="space-y-6 mb-10">
              {about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="body-md"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="block font-heading text-4xl md:text-5xl text-gold mb-2">
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    {about.stats[stat.key as keyof typeof about.stats]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
