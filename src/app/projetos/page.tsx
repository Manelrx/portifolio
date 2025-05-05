// /home/ubuntu/portfolio-profissional/src/app/projetos/page.tsx
// Adaptado para funcionar como o Blog, lendo de /projetos_posts
import Link from "next/link";
import { MotionDiv } from "@/components/client/motion-div";
import { getSortedProjetosData } from "@/lib/projetos"; // Importa a função para buscar dados dos projetos
import { Calendar, ExternalLink, Code, BookOpen } from "lucide-react"; // Ícones

// Define as variantes de animação
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// Componente da página principal de Projetos (Server Component)
export default function ProjetosPage() {
  // Busca os dados diretamente no servidor durante o build
  const allProjetosData = getSortedProjetosData();

  return (
    <MotionDiv
      className="w-full min-h-screen bg-background pt-24 pb-16 md:pt-28 md:pb-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Meus Projetos
        </h1>

        {allProjetosData.length === 0 ? (
          <p className="text-center text-foreground/70">Nenhum projeto encontrado ainda.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-10">
            {allProjetosData.map((projeto, index) => (
              <MotionDiv
                key={projeto.id}
                className="glassmorphism-card p-6 rounded-lg glow-on-hover"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-2 text-primary">
                  {/* Link para a página de detalhes do projeto */}
                  <Link href={`/projetos/${projeto.id}`} className="hover:underline">
                    {projeto.title}
                  </Link>
                </h2>
                <div className="flex items-center text-sm text-foreground/70 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={projeto.date}>{new Date(projeto.date).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                {/* Exibe o resumo se disponível */}
                {projeto.summary && (
                  <p className="text-foreground/80 mb-4">{projeto.summary}</p>
                )}
                {/* Exibe tags se disponíveis */}
                {projeto.tags && projeto.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* Links (Detalhes, Online, Repositório) */}
                <div className="flex flex-wrap gap-4 items-center mt-4 pt-4 border-t border-border/50">
                  <Link href={`/projetos/${projeto.id}`} className="text-primary hover:underline font-medium flex items-center gap-1 text-sm">
                    Ver detalhes <BookOpen className="w-4 h-4" />
                  </Link>
                  {projeto.liveUrl && projeto.liveUrl !== '#' && (
                    <a
                      href={projeto.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary hover:underline"
                    >
                      <ExternalLink size={16} /> Ver Online
                    </a>
                  )}
                  {projeto.repoUrl && projeto.repoUrl !== '#' && (
                    <a
                      href={projeto.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary hover:underline"
                    >
                      <Code size={16} /> Repositório
                    </a>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        )}
      </div>
    </MotionDiv>
  );
}

