'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle } from '@/components/ui';

const levelColors: Record<string, string> = {
  'Başlangıç': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Orta Seviye': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Intermediate': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'İleri Seviye': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Advanced': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Lady Styling': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
};

export function Schedule() {
  const { t } = useTranslation();
  const schedule = t('schedule');

  return (
    <section id="schedule" className="section-padding bg-midnight-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Container>
        <SectionTitle
          subtitle={schedule.subtitle}
          title={schedule.title}
          description={schedule.description}
        />

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-sm border border-white/10"
        >
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-midnight border-b border-white/10">
                  <th className="px-6 py-5 text-left font-heading text-lg text-gold">Gün</th>
                  <th className="px-6 py-5 text-left font-heading text-lg text-gold">Saat</th>
                  <th className="px-6 py-5 text-left font-heading text-lg text-gold">Seviye</th>
                  <th className="px-6 py-5 text-left font-heading text-lg text-gold">Lokasyon</th>
                </tr>
              </thead>
              <tbody>
                {schedule.classes.map((classItem, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-midnight/50 border-b border-white/5 hover:bg-midnight transition-colors duration-300"
                  >
                    <td className="px-6 py-5 font-body text-white">{classItem.day}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-white/80">
                        <Clock size={16} className="text-gold" />
                        {classItem.time}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border ${levelColors[classItem.level] || 'bg-white/10 text-white/80 border-white/20'}`}>
                        <Users size={14} />
                        {classItem.level}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-white/80">
                        <MapPin size={16} className="text-gold" />
                        {classItem.location}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-white/10">
            {schedule.classes.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 bg-midnight/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl text-white">{classItem.day}</h3>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${levelColors[classItem.level] || 'bg-white/10 text-white/80 border-white/20'}`}>
                    {classItem.level}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    {classItem.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {schedule.locations.map((location, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-midnight rounded-sm border border-white/5"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-white mb-1">{location.name}</h4>
                <p className="text-white/60 text-sm">{location.address}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
