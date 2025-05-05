
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar"; 
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Profissional", // Título inicial
  description: "Portfólio gerado por Emanuel", // Descrição inicial
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* A tag <head> é adicionada automaticamente pelo Next.js */}
      {/* Adiciona padding-top para compensar a altura do navbar fixo */}
      <body className={`${inter.className} pt-16 md:pt-[60px]`}> {/* Ajuste o padding conforme a altura do seu navbar */}
        <Navbar /> {/* Adiciona o Navbar aqui */}
        {children}
      </body>
    </html>
  );
}

