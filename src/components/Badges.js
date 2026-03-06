"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import ItemDetailModal from './ItemDetailModal';

const Badges = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = useCallback((item) => setSelectedItem(item), []);
  const closeModal = useCallback(() => setSelectedItem(null), []);

  if (!items || items.length === 0) return null;

  return (
    <section id="badges" className="py-20 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Badges & Conquistas</h2>
          <p className="section-subtitle">Reconhecimentos e validações de competências por organizações líderes</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openModal(item)}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
            >
              <div className="glass-card p-4 text-center shimmer-effect h-full flex flex-col items-center justify-center gap-3">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name || 'Badge'}
                    width={96}
                    height={96}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <p className="text-xs font-medium text-foreground/80 leading-tight line-clamp-2">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ItemDetailModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={closeModal}
        type="badge"
      />
    </section>
  );
};

export default Badges;
