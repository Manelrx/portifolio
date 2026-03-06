"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section id="certifications" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Certificações Profissionais</h2>
          <p className="section-subtitle">Credenciais verificáveis que comprovam expertise em segurança</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="premium-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Certificate Image */}
              {item.image && (
                <div className="relative w-full aspect-[16/10] bg-background/50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Golden seal overlay */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-6 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <span>{item.date}</span>
                </div>

                {item.description && (
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                )}

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verificar Certificação
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
