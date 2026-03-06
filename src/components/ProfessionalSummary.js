"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <motion.div
      id="about"
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Status Badge */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="status-badge">
          <span className="pulse-dot" />
          Disponível para oportunidades
        </div>
      </motion.div>

      {/* Summary Text */}
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
        {summary}
      </p>
    </motion.div>
  );
};

export default ProfessionalSummary;
