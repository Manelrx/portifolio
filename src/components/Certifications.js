"use client"; // Marca este componente como Client Component (já era necessário pelo carrossel)

// /home/ubuntu/portfolio-profissional/src/components/Certifications.js
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'; // Usar next/image para otimização
import { motion } from 'framer-motion'; // Importa motion
import { Star } from 'lucide-react'; // Exemplo de ícone

// Define as variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Certifications = ({ items }) => {
  const autoplayOptions = {
    delay: 30000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="certifications"
      className="py-12 md:py-16 bg-background w-full" // Fundo principal
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Certificações</h2>
        {/* Aplica estilo glassmorphism ao container do carrossel */}
        <div className="max-w-4xl mx-auto glassmorphism-card p-4 rounded-lg overflow-hidden relative glow-on-hover">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, index) => (
                <div className="flex-grow-0 flex-shrink-0 basis-full min-w-0 px-4" key={index}>
                  <div className="text-center">
                    <div className="relative w-full h-64 md:h-96 mb-4 bg-card/50 rounded flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 text-primary" /> {/* Ícone */}
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-foreground/80 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Indicadores de Posição (Dots) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === selectedIndex ? 'bg-primary' : 'bg-foreground/30 hover:bg-foreground/50'}`}
                aria-label={`Ir para certificação ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;

