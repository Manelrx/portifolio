"use client"; // Marca como Client Component para usar Framer Motion

// /home/ubuntu/portfolio-profissional/src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa motion

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // Não renderiza a seção se não houver itens
  }

  return (
    <motion.section
      id="experience"
      className="py-12 md:py-16 bg-background w-full" // Fundo principal
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Experiência Profissional</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {items.map((item, index) => (
            // Aplica estilo glassmorphism e glow no hover
            <div
              key={index}
              className="glassmorphism-card p-6 rounded-lg glow-on-hover border-l-4 border-primary"
            >
              {/* O campo 'title' nos dados é 'role', ajustando aqui para consistência */}
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.role}</h3>
              <p className="text-md font-medium text-primary mb-2">{item.company}</p>
              <p className="text-sm text-foreground/70 mb-3">{item.period}</p>
              {/* Verifica se 'responsibilities' existe e é um array antes de mapear */}
              {Array.isArray(item.responsibilities) && item.responsibilities.length > 0 ? (
                <ul className="list-disc list-inside text-foreground/90 space-y-1">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              ) : item.description ? (
                // Se 'responsibilities' não existir ou estiver vazio, mas 'description' existir, mostra a descrição
                <p className="text-foreground/90">{item.description}</p>
              ) : null /* Não mostra nada se nem responsibilities nem description existirem */}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
