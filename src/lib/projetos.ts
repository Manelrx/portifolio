import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Aponta para a nova pasta 'projetos_posts'
const projetosDirectory = path.join(process.cwd(), 'projetos_posts');

// Define um tipo para os metadados esperados (pode ser customizado para projetos)
interface ProjetoFrontmatter {
  date: string;
  title: string;
  author?: string;
  image?: string;  // Imagem principal do projeto
  tags?: string[]; // Tecnologias usadas, etc.
  summary?: string; // Resumo para a página de listagem
  liveUrl?: string; // Link para o projeto online
  repoUrl?: string; // Link para o repositório no GitHub/GitLab
}

export function getSortedProjetosData() {
  // Pega os nomes dos arquivos em /projetos_posts
  const fileNames = fs.readdirSync(projetosDirectory);
  const allProjetosData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Garante que apenas arquivos markdown sejam processados
    .map((fileName) => {
      // Remove ".md" do nome do arquivo para obter o id
      const id = fileName.replace(/\.md$/, '');

      // Lê o arquivo markdown como string
      const fullPath = path.join(projetosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Usa gray-matter para parsear a seção de metadados
      const matterResult = matter(fileContents);

      // Combina os dados com o id, usando o tipo ProjetoFrontmatter
      return {
        id,
        ...(matterResult.data as ProjetoFrontmatter),
      };
    });
  // Ordena os projetos por data (mais recentes primeiro)
  return allProjetosData.sort((a, b) => {
    if (a.date && b.date) {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    }
    return 0;
  });
}

export function getAllProjetoIds() {
  const fileNames = fs.readdirSync(projetosDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''), // Usa 'slug' para corresponder ao parâmetro da rota dinâmica
        },
      };
    });
}

export async function getProjetoData(slug: string) {
  const fullPath = path.join(projetosDirectory, `${slug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    console.error(`Error reading projeto file: ${fullPath}`, err);
    return null;
  }

  // Usa gray-matter para parsear a seção de metadados
  const matterResult = matter(fileContents);

  // Usa remark para converter markdown em string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combina os dados com o id e contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as ProjetoFrontmatter),
  };
}

