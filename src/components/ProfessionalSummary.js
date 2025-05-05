"use client"; // Marca como Client Component para usar Framer Motion

// /home/ubuntu/portfolio-profissional/src/components/ProfessionalSummary.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa motion

// Define as variantes de animação (pode reutilizar as mesmas)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProfessionalSummary = ({ summary }) => {
  if (!summary) {
    return null; // Não renderiza se não houver resumo
  }

  return (
    // Usa motion.div e aplica as variantes
    // Adiciona o id="summary" aqui para a navegação
    <motion.div
      id="summary"
      className="text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Adiciona um pequeno delay para animar após a imagem
      variants={sectionVariants}
    >
      {/* Mantém o gradiente no título e clareia o texto do parágrafo */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Resumo Profissional</h2>
      {/* Alterado para text-neutral-200 para maior contraste */}
      <p className="text-lg text-neutral-200 leading-relaxed">
        {summary}
      </p>
    </motion.div>
  );
};

export default ProfessionalSummary;
