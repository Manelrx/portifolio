import Link from "next/link";
import { MotionDiv } from "@/components/client/motion-div";
import { getSortedPostsData } from "@/lib/posts";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <MotionDiv
      className="w-full min-h-screen bg-background pt-24 pb-16 md:pt-28 md:pb-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title gradient-text mb-4">Blog</h1>
        <p className="section-subtitle">Artigos sobre cibersegurança, boas práticas e tendências em TI</p>

        {allPostsData.length === 0 ? (
          <p className="text-center text-muted-foreground">Nenhum post encontrado ainda.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-5">
            {allPostsData.map((post, index) => (
              <MotionDiv
                key={post.id}
                className="premium-card p-6 shimmer-effect group"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: 'UTC'
                      })}
                    </time>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Ler artigo
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
