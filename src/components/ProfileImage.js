// /home/ubuntu/portfolio-profissional/src/components/ProfileImage.js
import React from 'react';
import Image from 'next/image'; // Usando next/image para otimização

// Este componente agora é renderizado dentro da seção Hero em page.tsx
// Removemos a tag <section> externa e o padding vertical que estavam aqui.
const ProfileImage = ({ src, alt }) => {
  return (
    // O id="profile-image" pode ser mantido aqui se necessário para navegação, embora não esteja no menu atual
    <div id="profile-image" className="container mx-auto px-4 flex justify-center">
      {/* Ajuste o tamanho da imagem e borda conforme necessário */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image
          src={src} // Caminho relativo à pasta 'public'
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority // Priorizar carregamento se for LCP (Largest Contentful Paint)
        />
      </div>
    </div>
  );
};

export default ProfileImage;

