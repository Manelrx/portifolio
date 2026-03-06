"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Graduation = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section id="education" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Formação Acadêmica</h2>
          <p className="section-subtitle">Base teórica e prática em Ciência da Computação e Segurança da Informação</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="premium-card p-6 shimmer-effect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground leading-tight">{item.degree}</h3>
                    <p className="text-accent text-sm font-medium mt-1">{item.institution}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graduation;
