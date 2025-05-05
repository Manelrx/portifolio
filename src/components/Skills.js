"use client"; // Marca como Client Component para usar Framer Motion

// /home/ubuntu/portfolio-profissional/src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa motion
import { Cpu, BrainCircuit } from 'lucide-react'; // Ícones para técnica e soft skill

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Skills = ({ skills }) => {
  // Verifica se o objeto skills e as listas technical/soft existem e não estão vazias
  const hasTechnicalSkills = skills && Array.isArray(skills.technical) && skills.technical.length > 0;
  const hasSoftSkills = skills && Array.isArray(skills.soft) && skills.soft.length > 0;

  if (!hasTechnicalSkills && !hasSoftSkills) {
    return null; // Não renderiza a seção se não houver nenhuma habilidade
  }

  return (
    <motion.section
      id="skills"
      className="py-12 md:py-16 bg-card w-full" // Fundo do card
      initial="hidden"
      // Remove whileInView e viewport, anima diretamente na montagem
      animate="visible"
      // viewport={{ once: true, amount: 0.2 }} // Removido
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        {/* Seção de Habilidades Técnicas */}
        {hasTechnicalSkills && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {skills.technical.map((skill, index) => (
                // Aplica estilo glassmorphism e glow no hover
                <div
                  key={`tech-${index}`}
                  className="glassmorphism-card p-4 rounded-lg text-center glow-on-hover flex flex-col items-center justify-center aspect-square"
                >
                  <Cpu className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold text-foreground/90 text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Seção de Soft Skills */}
        {hasSoftSkills && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Soft Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {skills.soft.map((skill, index) => (
                // Aplica estilo glassmorphism e glow no hover
                <div
                  key={`soft-${index}`}
                  className="glassmorphism-card p-4 rounded-lg text-center glow-on-hover flex flex-col items-center justify-center aspect-square"
                >
                  <BrainCircuit className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-semibold text-foreground/90 text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;

