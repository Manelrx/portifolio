"use client";

// /home/ubuntu/portfolio-profissional/src/components/Courses.js
import React, { useState, useCallback } from 'react';
import Image from 'next/image'; // Importar Image
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Importar o componente Modal
import ItemDetailModal from './ItemDetailModal';

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Courses = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="courses"
      className="py-12 md:py-16 bg-background w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Cursos e Treinamentos</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {items.map((item, index) => (
              <div
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
                key={index}
              >
                <motion.div
                  className="glassmorphism-card p-6 rounded-lg glow-on-hover flex flex-col h-full cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openModal(item)}
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
                >
                  {/* Exibir imagem se disponível, senão o ícone */}
                  {item.image ? (
                    <div className="w-full mb-4 rounded overflow-hidden bg-muted/30 aspect-video relative"> {/* Aspect ratio container */}
                      <Image
                        src={item.image}
                        alt={`Certificado ${item.name}`}
                        layout="fill" // Fill the container
                        objectFit="contain" // Contain image within container
                      />
                    </div>
                  ) : (
                    <BookOpen className="w-7 h-7 mb-3 text-primary" />
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-foreground/80 mb-1">Instituição: {item.institution}</p>
                  <p className="text-sm text-foreground/70 mb-3">Conclusão: {item.year}</p>
                  <p className="text-foreground/90 text-sm flex-grow mb-4">
                    {item.description || `Detalhes sobre o curso ${item.name}.`}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition duration-300 text-sm mt-auto self-start font-medium"
                      onClick={(e) => e.stopPropagation()} // Impede que o clique no link abra o modal
                    >
                      Ver Credencial/Curso
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renderiza o Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={closeModal}
        type="course"
      />
    </motion.section>
  );
};

export default Courses;

