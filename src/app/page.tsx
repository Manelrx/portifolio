"use client"; // Adicionado para permitir o uso de motion

// /home/ubuntu/portfolio-profissional/src/app/page.tsx
import React from 'react';
// Restaura a importação original dos dados
import { portfolioData } from '../data/portfolioData.js'; // Certifique-se que o caminho e extensão estão corretos

import ProfessionalSummary from '../components/ProfessionalSummary';
import ProfileImage from '../components/ProfileImage';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Badges from '../components/Badges';
import Certifications from '../components/Certifications';

// Import motion para animar a seção Hero também
import { motion } from 'framer-motion';
// Importar ícones para links sociais
import { Github, Linkedin } from 'lucide-react';

// Define as variantes de animação (pode reutilizar as mesmas)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Remove a definição manual de basePath, pois o next.config.js deve cuidar disso
// const basePath = "/portifolio";

export default function Home() {
  // Remove a construção manual do caminho da imagem, usa diretamente do portfolioData
  // const profileImagePath = `${basePath}${portfolioData.profileImage}`;

  return (
    // O padding-top é gerenciado pelo body no layout.tsx
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">

      {/* Hero/Introduction Section - Adiciona animação */}
      <motion.section
        id="hero"
        className="w-full bg-gradient-to-b from-background via-card/50 to-background pt-24 pb-16 md:pt-28 md:pb-20" // Ajusta padding e fundo
        initial="hidden"
        animate="visible" // Anima na carga inicial
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          {/* Profile Image - Usa o caminho diretamente do portfolioData */}
          <div className="mb-10">
             {/* Assumindo que o componente ProfileImage lida com o basePath/assetPrefix ou a imagem está em /public */}
             <ProfileImage src={portfolioData.profileImage} alt="Foto de Perfil" />
          </div>

          {/* Professional Summary */}
          <ProfessionalSummary summary={portfolioData.professionalSummary} />

          {/* Social Links Section */}
          <div className="mt-8 flex justify-center gap-6">
            {portfolioData.githubUrl && (
              <a
                href={portfolioData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            {portfolioData.linkedinUrl && (
              <a
                href={portfolioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </motion.section>

      {/* Experience Section - Animação já no componente */}
      <Experience items={portfolioData.experience} />

      {/* Skills Section - Animação já no componente */}
      <Skills skills={portfolioData.skills} />

      {/* Courses Section - Animação já no componente */}
      <Courses items={portfolioData.courses} />

      {/* Badges Section - Animação já no componente */}
      <Badges items={portfolioData.badges} />

      {/* Certifications Section - Animação já no componente */}
      <Certifications items={portfolioData.certifications} />

      {/* Footer Section */}
      <footer className="w-full bg-card text-foreground/70 p-6 text-center mt-16 border-t border-border">
        <p>© {new Date().getFullYear()} {portfolioData.name || 'Emanuel Araújo'}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}


