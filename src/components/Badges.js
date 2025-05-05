"use client";

// /home/ubuntu/portfolio-profissional/src/components/Badges.js
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import { Award } from 'lucide-react'; // Ícone de Award removido para simplificar
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Importar o componente Modal
import ItemDetailModal from './ItemDetailModal';

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Badges = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps' }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
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
      id="badges"
      className="py-12 md:py-16 bg-card w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 gradient-text">Badges e Conquistas</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {items.map((item, index) => (
              <div
                className="embla__slide flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 pl-4"
                key={index}
              >
                <motion.div
                  className="glassmorphism-card p-4 rounded-lg text-center glow-on-hover flex flex-col items-center justify-center h-full cursor-pointer"
                  // Removido aspect-square para permitir altura variável baseada no conteúdo
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openModal(item)}
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
                >
                  {/* Container da imagem ajustado */}
                  <div className="relative w-full h-32 mb-4 flex items-center justify-center"> {/* Mantém altura fixa, mas centraliza a imagem */}
                    {/* <Award className="absolute inset-0 w-full h-full text-primary/50 z-0" /> */}
                    <Image
                      src={item.image}
                      alt={item.name || 'Badge'}
                      width={128} // Define uma largura base (era w-32)
                      height={128} // Define uma altura base (era h-32)
                      style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} // Garante que a imagem caiba e mantenha proporção
                      className="z-10" // Removido rounded-full
                    />
                  </div>
                  <p className="font-semibold text-foreground/90 text-sm mt-1 min-h-[2.5em]">{item.name || 'Badge'}</p> {/* Garante altura mínima para o texto */}
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
        type="badge"
      />
    </motion.section>
  );
};

export default Badges;

