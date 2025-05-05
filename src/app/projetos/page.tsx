"use client";

// /home/ubuntu/portfolio-profissional/src/app/projetos/page.tsx
import React from 'react';
import Image from 'next/image'; // Importar Image
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react'; // Ícones

// Dados de exemplo para projetos (substitua pelos seus)
const projectsData = [
  {
    title: "Projeto Exemplo 1: Plataforma Inovadora",
    description: "Uma breve descrição do projeto, destacando o problema resolvido, as tecnologias utilizadas e os resultados alcançados. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/600x400?text=Projeto+1", // Substitua pela URL da imagem do seu projeto
    tags: ["React", "Node.js", "IA", "Blockchain"],
    liveUrl: "#", // Link para o projeto online (se houver)
    repoUrl: "#", // Link para o repositório (se houver)
  },
  {
    title: "Projeto Exemplo 2: Ferramenta de Análise",
    description: "Outra descrição concisa sobre um projeto diferente. Foco nos desafios técnicos e na solução implementada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/600x400?text=Projeto+2",
    tags: ["Python", "Flask", "Data Science", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Projeto Exemplo 3: Aplicativo Mobile",
    description: "Descrição do terceiro projeto. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: "https://via.placeholder.com/600x400?text=Projeto+3",
    tags: ["React Native", "Firebase", "UX/UI"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

// Variantes de animação
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function ProjectsPage() {
  return (
    <motion.main
      className="flex min-h-screen flex-col items-center pt-24 pb-16 md:pt-28 md:pb-20 bg-background"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Meus Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="glassmorphism-card rounded-lg overflow-hidden flex flex-col h-full glow-on-hover"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full h-48 bg-card/50"> {/* Container for Image */}
                <Image
                  src={project.image}
                  alt={`Imagem do ${project.title}`}
                  layout="fill"
                  objectFit="cover" // Use cover to fill the container
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-foreground mb-3">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 text-sm mb-5 flex-grow">{project.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm text-primary hover:underline ${!project.liveUrl || project.liveUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-disabled={!project.liveUrl || project.liveUrl === '#'}
                    onClick={(e) => (!project.liveUrl || project.liveUrl === '#') && e.preventDefault()}
                  >
                    <ExternalLink size={16} /> Ver Online
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm text-foreground/70 hover:text-primary hover:underline ${!project.repoUrl || project.repoUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-disabled={!project.repoUrl || project.repoUrl === '#'}
                    onClick={(e) => (!project.repoUrl || project.repoUrl === '#') && e.preventDefault()}
                  >
                    <Code size={16} /> Repositório
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Adicionar paginação ou botão "Carregar Mais" se houver muitos projetos */} 

      </div>
    </motion.main>
  );
}
