import Link from "next/link";
import { MotionDiv } from "@/components/client/motion-div";
import { getSortedProjetosData } from "@/lib/projetos";
import { Calendar, ExternalLink, Code, ArrowRight } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjetosPage() {
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
        <h1 className="section-title gradient-text mb-4">Meus Projetos</h1>
        <p className="section-subtitle">Projetos práticos em segurança, infraestrutura e desenvolvimento</p>

        {allProjetosData.length === 0 ? (
          <p className="text-center text-muted-foreground">Nenhum projeto encontrado ainda.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-5">
            {allProjetosData.map((projeto, index) => (
              <MotionDiv
                key={projeto.id}
                className="premium-card p-6 shimmer-effect group"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={projeto.date}>
                      {new Date(projeto.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: 'UTC'
                      })}
                    </time>
                  </div>

                  <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/projetos/${projeto.id}`}>
                      {projeto.title}
                    </Link>
                  </h2>

                  {projeto.summary && (
                    <p className="text-sm text-foreground/70 mb-3 leading-relaxed">{projeto.summary}</p>
                  )}

                  {/* Tags */}
                  {projeto.tags && projeto.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {projeto.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 items-center pt-3 border-t border-border/30">
                    <Link
                      href={`/projetos/${projeto.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Ver detalhes
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {projeto.liveUrl && projeto.liveUrl !== '#' && (
                      <a
                        href={projeto.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                    {projeto.repoUrl && projeto.repoUrl !== '#' && (
                      <a
                        href={projeto.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Code className="w-3.5 h-3.5" /> Código
                      </a>
                    )}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
