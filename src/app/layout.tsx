
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Emanuel Araújo | Security Analyst & Infrastructure",
  description: "Portfólio profissional de Emanuel Araújo — Analista de Segurança, SOC, Infraestrutura e Cibersegurança. Conheça minha experiência, certificações e projetos.",
  keywords: ["cibersegurança", "segurança da informação", "SOC", "infraestrutura", "pentest", "portfólio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
