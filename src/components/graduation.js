"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react'; // Importa o ícone apropriado

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Componente renomeado e ajustado para Formação Acadêmica
const Graduation = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // Não renderiza a seção se não houver itens
  }

  return (
    <motion.section
      id="graduation" // Mantém o ID para links de navegação
      className="py-12 md:py-16 bg-background w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        {/* Título da seção atualizado */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Formação Acadêmica</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {items.map((item, index) => (
            // Card com estilo glassmorphism e glow
            <div
              key={index}
              className="glassmorphism-card p-6 rounded-lg glow-on-hover border-l-4 border-primary flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Ícone de Graduação */}
              <div className="flex-shrink-0 text-primary mt-1">
                <GraduationCap size={24} />
              </div>
              {/* Conteúdo da Formação */}
              <div className="flex-grow">
                {/* Usa os campos corretos: degree, institution, period, description */}
                <h3 className="text-xl font-semibold text-foreground mb-1">{item.degree}</h3>
                <p className="text-md font-medium text-primary mb-2">{item.institution}</p>
                <p className="text-sm text-foreground/70 mb-3">{item.period}</p>
                {/* Mostra a descrição se existir */}
                {item.description && (
                  <p className="text-foreground/90 text-sm">{item.description}</p>
                )}
                {/* Remove a lista de 'responsibilities' que não se aplica aqui */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Graduation;

