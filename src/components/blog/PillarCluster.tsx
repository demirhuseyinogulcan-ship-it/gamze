/**
 * PillarCluster Component
 * Pillar-Cluster yapısını görsel olarak gösterir
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PillarCluster, Locale } from '@/types/blog';
import { getCategoryInfo } from '@/lib/constants/blog';

interface PillarClusterProps {
  data: PillarCluster;
  locale?: Locale;
}

export function PillarClusterView({ data, locale = 'tr' }: PillarClusterProps) {
  const { pillar, clusters } = data;
  const category = getCategoryInfo(pillar.category);
  const basePath = locale === 'tr' ? '/blog' : '/en/blog';
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative bg-gradient-to-br from-midnight-50 to-midnight rounded-sm overflow-hidden border border-gold/20"
    >
      {/* Pillar (Ana Yazı) */}
      <Link href={`${basePath}/${pillar.slug}`} className="block group">
        <div className="relative aspect-[21/9] md:aspect-[3/1]">
          <Image
            src={pillar.image}
            alt={pillar.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold text-midnight px-3 py-1 text-xs font-medium uppercase tracking-wider mb-4">
                <BookOpen size={14} />
                {locale === 'tr' ? 'Ana Rehber' : 'Main Guide'}
              </div>
              
              {/* Category */}
              <span className="block text-gold text-sm uppercase tracking-wider mb-2">
                {category?.icon} {category?.name[locale]}
              </span>
              
              {/* Title */}
              <h3 className="font-heading text-2xl md:text-4xl text-white mb-3 group-hover:text-gold transition-colors">
                {pillar.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-white/70 text-base md:text-lg mb-4 line-clamp-2 hidden md:block">
                {pillar.excerpt}
              </p>
              
              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                {locale === 'tr' ? 'Rehberi Oku' : 'Read Guide'}
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Clusters (Alt Yazılar) */}
      {clusters.length > 0 && (
        <div className="p-6 md:p-10">
          <h4 className="text-white/50 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-gold/30" />
            {locale === 'tr' ? 'İlgili Konular' : 'Related Topics'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`${basePath}/${cluster.slug}`}
                  className="group flex items-start gap-4 p-4 rounded-sm bg-midnight/50 border border-white/5 hover:border-gold/30 transition-all"
                >
                  {/* Image */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden">
                    <Image
                      src={cluster.image}
                      alt={cluster.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading text-lg text-white group-hover:text-gold transition-colors line-clamp-2">
                      {cluster.title}
                    </h5>
                    <span className="text-white/40 text-sm">
                      {cluster.readingTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}

// Çoklu Pillar-Cluster görünümü
interface PillarClustersListProps {
  clusters: PillarCluster[];
  locale?: Locale;
}

export function PillarClustersList({ clusters, locale = 'tr' }: PillarClustersListProps) {
  if (clusters.length === 0) return null;
  
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="heading-md text-white mb-4">
          {locale === 'tr' ? 'Kapsamlı Rehberler' : 'Comprehensive Guides'}
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          {locale === 'tr'
            ? 'Tango yolculuğunuzda size yol gösterecek detaylı rehberler'
            : 'Detailed guides to help you on your tango journey'}
        </p>
      </div>
      
      {clusters.map((cluster) => (
        <PillarClusterView key={cluster.pillar.slug} data={cluster} locale={locale} />
      ))}
    </section>
  );
}
