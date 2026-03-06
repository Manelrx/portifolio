"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import ItemDetailModal from './ItemDetailModal';
import { useLanguage } from '../hooks/useLanguage';

const Courses = ({ items }) => {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = useCallback((item) => setSelectedItem(item), []);
  const closeModal = useCallback(() => setSelectedItem(null), []);

  if (!items || items.length === 0) return null;

  return (
    <section id="courses" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{t('courses.title')}</h2>
          <p className="section-subtitle">{t('courses.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="premium-card overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openModal(item)}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
            >
              {/* Image Area */}
              {item.image ? (
                <div className="relative w-full aspect-video bg-background/50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${t('courses.certificateAlt')} ${item.name}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/40" />
                </div>
              )}

              {/* Content */}
              <div className="p-5 relative z-10">
                <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3 h-3" />
                  {item.year}
                </div>

                {item.link && item.link !== '#' && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t('courses.viewCredential')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ItemDetailModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={closeModal}
        type="course"
      />
    </section>
  );
};

export default Courses;
