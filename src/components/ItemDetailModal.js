"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const ItemDetailModal = ({ item, isOpen, onClose, type }) => {
  if (!item) return null;

  const displayName = item.name || item.title || 'Detalhes';
  const displayImage = item.image;
  const displayUrl = item.url || item.link;
  const displayOrg = item.institution || item.issuer;
  const displayDate = item.year || item.date;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-card/95 backdrop-blur-xl border border-border/40 rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4 text-foreground/70" />
            </button>

            {/* Image */}
            {displayImage && (
              <div className="relative w-full aspect-video bg-background/50 rounded-t-2xl overflow-hidden">
                <Image
                  src={displayImage}
                  alt={displayName}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 512px) 100vw, 512px"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{displayName}</h3>
              
              {displayOrg && (
                <p className="text-primary text-sm font-medium mb-1">{displayOrg}</p>
              )}

              {displayDate && (
                <p className="text-xs font-mono text-muted-foreground mb-4">{displayDate}</p>
              )}

              {item.description && (
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">{item.description}</p>
              )}

              {displayUrl && displayUrl !== '#' && (
                <a
                  href={displayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {type === 'badge' ? 'Ver Badge' : type === 'certification' ? 'Verificar' : 'Ver Credencial'}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItemDetailModal;
