"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, ChevronRight, Container, Globe, Activity } from 'lucide-react';

const InfrastructureServices = ({ data }) => {
  if (!data) return null;

  return (
    <section id="infrastructure" className="py-20 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Infraestrutura & Serviços</h2>
          <p className="section-subtitle">{data.intro}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="premium-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Sustentação e Evolução</h3>
                <p className="text-sm text-muted-foreground">Disponibilidade, segurança e performance dos serviços críticos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {data.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-xl bg-foreground/[0.03] border border-border/20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureServices;
