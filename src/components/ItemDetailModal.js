"use client";

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose, // Para o botão de fechar
} from "@/components/ui/dialog"; // Ajuste o caminho se necessário
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const ItemDetailModal = ({ item, isOpen, onClose, type }) => {
  if (!item) return null;

  // Determina o conteúdo com base no tipo (badge ou course)
  const isBadge = type === 'badge';
  const title = isBadge ? item.name : item.name; // Ajustado para usar 'name' para ambos
  const imageUrl = item.image;
  const linkUrl = isBadge ? item.url : item.link;
  const description = item.description || (isBadge ? `Detalhes sobre a conquista ${title}.` : `Detalhes sobre o curso ${title}.`);
  const institution = !isBadge ? item.institution : null;
  const year = !isBadge ? item.year : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-card border-border/80 glassmorphism-modal text-foreground">
        <DialogHeader className="items-center text-center pt-4">
          {imageUrl && (
            <div className="w-full max-w-md mb-4 rounded-lg overflow-hidden border border-border/50 bg-muted/30 aspect-video relative"> {/* Dynamic height container */}
              <Image
                src={imageUrl}
                alt={title}
                layout="fill" // Fill the container
                objectFit="contain" // Contain image within container
              />
            </div>
          )}
          <DialogTitle className="text-xl font-semibold gradient-text">{title}</DialogTitle>
          {institution && <p className="text-sm text-foreground/80">{institution} {year ? `(${year})` : ''}</p>}
        </DialogHeader>
        <div className="px-6 py-4">
          <DialogDescription className="text-sm text-foreground/90 text-center">
            {description}
          </DialogDescription>
        </div>
        <DialogFooter className="sm:justify-center px-6 pb-4">
          {linkUrl && linkUrl !== '#' && (
            <Button asChild variant="outline" className="bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary">
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {isBadge ? 'Ver Credencial' : 'Ver Certificado/Curso'}
              </a>
            </Button>
          )}
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="bg-secondary/50 hover:bg-secondary/70">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
        {/* Botão de fechar no canto superior direito (opcional, Dialog já tem overlay click) */}
        {/* <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
