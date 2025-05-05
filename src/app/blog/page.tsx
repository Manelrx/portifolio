// /home/ubuntu/portfolio-profissional/src/app/blog/page.tsx
// Convertido para Server Component para buscar dados no build time
import Link from "next/link";
// import { motion } from "framer-motion"; // Removido import direto
import { MotionDiv } from "@/components/client/motion-div"; // Importa o componente cliente
import { getSortedPostsData } from "@/lib/posts"; // Importa a função para buscar dados estaticamente
import { Calendar, BookOpen } from "lucide-react";

// Removida a interface PostData não utilizada
// interface PostData {
//   id: string;
//   title: string;
//   date: string;
// }

// Define as variantes de animação (mantidas)
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// Componente da página principal do Blog (Agora Server Component)
export default function BlogPage() {
  // Busca os dados diretamente no servidor durante o build
  // A tipagem é inferida de getSortedPostsData
  const allPostsData = getSortedPostsData();

  // Não há mais estados de loading ou error, pois os dados são pré-renderizados

  return (
    // Usa o componente cliente MotionDiv
    <MotionDiv
      className="w-full min-h-screen bg-background pt-24 pb-16 md:pt-28 md:pb-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Blog
        </h1>

        {allPostsData.length === 0 ? (
          <p className="text-center text-foreground/70">Nenhum post encontrado ainda.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-10">
            {allPostsData.map((post, index) => (
              // Usa o componente cliente MotionDiv
              <MotionDiv
                key={post.id}
                className="glassmorphism-card p-6 rounded-lg glow-on-hover"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-2 text-primary">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center text-sm text-foreground/70 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {/* Formatar data continua sendo feito no cliente, mas o valor vem do servidor */}
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric", timeZone: 'UTC' })}</time>
                </div>
                {/* Removido o sumário, pois não está nos dados retornados por getSortedPostsData */}
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline font-medium flex items-center">
                  Ler mais <BookOpen className="w-4 h-4 ml-2" />
                </Link>
              </MotionDiv>
            ))}
          </div>
        )}
      </div>
    </MotionDiv>
  );
}

