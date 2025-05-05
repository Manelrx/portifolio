"use client"; // Marca este componente como Client Component

// /home/ubuntu/portfolio-profissional/src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importa o Link do Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    // Links da página inicial (âncoras)
    { id: 'summary', href: '#summary', label: 'Resumo', type: 'anchor' },
    { id: 'experience', href: '#experience', label: 'Experiência', type: 'anchor' },
    { id: 'skills', href: '#skills', label: 'Habilidades', type: 'anchor' },
    { id: 'courses', href: '#courses', label: 'Cursos', type: 'anchor' },
    { id: 'badges', href: '#badges', label: 'Badges', type: 'anchor' },
    { id: 'certifications', href: '#certifications', label: 'Certificações', type: 'anchor' },
    // Links para as novas páginas
    { id: 'projects', href: '/projetos', label: 'Projetos', type: 'page' },
    { id: 'blog', href: '/blog', label: 'Blog', type: 'page' },
  ];

  // Efeito para lidar com o scrollspy e background do navbar
  useEffect(() => {
    const handleScroll = () => {
      // Lógica do Scrollspy (apenas para links âncora)
      let currentSection = '';
      const sections = navItems
        .filter(item => item.type === 'anchor') // Filtra apenas links âncora
        .map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY;
      const offset = 150; // Ajuste este valor conforme necessário

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
          }
        }
      });

      const firstSection = document.getElementById(navItems.find(item => item.type === 'anchor')?.id ?? '');
      if (scrollPosition < (firstSection?.offsetTop ?? offset) - offset) {
        currentSection = '';
      }
      // Só atualiza o activeSection se estivermos na página inicial (path === '/')
      // Isso evita que o scrollspy tente ativar links em outras páginas
      if (window.location.pathname === '/') {
        setActiveSection(currentSection);
      } else {
        setActiveSection(''); // Desativa scrollspy em outras páginas
      }

      // Lógica do background do Navbar
      setScrolled(window.scrollY > 10);
    };

    // Verifica se estamos no lado do cliente antes de adicionar o listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Chama no início

      // Limpa o listener ao desmontar o componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa apenas uma vez no mount

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent shadow-none'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo ou Nome - Link para a Home */}
        <div className="text-xl font-bold">
          <Link href="/" className="gradient-text">
            Emanuel Araújo
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.type === 'anchor' ? (
                <a
                  href={item.href} // Remove a barra inicial para deixar o Next.js/basePath lidar com o prefixo
                  onClick={(e) => {
                    // Se já estiver na home, scroll suave
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Se não estiver na home, o link normal levará para home/#ancora
                  }}
                  className={`transition duration-300 font-medium pb-1 ${activeSection === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground/80 hover:text-primary border-b-2 border-transparent hover:border-primary/50'}`}
                >
                  {item.label}
                </a>
              ) : (
                // Usa o Link do Next.js para navegação entre páginas
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition duration-300 font-medium pb-1 border-b-2 border-transparent hover:border-primary/50"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Botão Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground/80 hover:text-primary focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-background/90 backdrop-blur-md border-t border-border/50`}>
        <ul className="flex flex-col items-center py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.type === 'anchor' ? (
                <a
                  href={item.href} // Remove a barra inicial para deixar o Next.js/basePath lidar com o prefixo
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false); // Fecha o menu
                  }}
                  className={`transition duration-300 font-medium block px-4 py-2 ${activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-primary'}`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition duration-300 font-medium block px-4 py-2"
                  onClick={() => setIsOpen(false)} // Fecha o menu
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

