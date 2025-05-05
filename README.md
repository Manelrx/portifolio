# Portfólio Profissional com Blog

Este é um projeto de portfólio pessoal construído com Next.js, TypeScript e Tailwind CSS, apresentando uma seção de projetos e um blog dinâmico alimentado por arquivos Markdown.

## Funcionalidades

*   **Página Inicial:** Apresentação pessoal e links rápidos.
*   **Página de Projetos:** Exibição dos projetos desenvolvidos.
*   **Blog:**
    *   Listagem de posts com títulos e datas.
    *   Páginas individuais para cada post, renderizadas a partir de arquivos Markdown.
    *   Conteúdo dos posts formatado (parágrafos, títulos, código, etc.).
*   **Design Responsivo:** Adaptado para diferentes tamanhos de tela.
*   **Animações:** Utiliza Framer Motion para animações sutis.
*   **Exportação Estática:** O projeto está configurado para gerar um site totalmente estático, ideal para hospedagem em plataformas como Vercel, Netlify, GitHub Pages, etc.

## Tecnologias Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Animações:** [Framer Motion](https://www.framer.com/motion/)
*   **Processamento de Markdown:**
    *   `gray-matter`: Para extrair metadados (frontmatter) dos arquivos Markdown.
    *   `remark` & `remark-html`: Para converter Markdown em HTML.
*   **Gerenciador de Pacotes:** npm

## Começando

Siga estas instruções para configurar e executar o projeto localmente.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (Versão 18.x ou superior recomendada)
*   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1.  Clone o repositório (ou extraia os arquivos do projeto se recebidos em formato zip):
    ```bash
    # Se for um repositório git
    git clone <url-do-repositorio>
    cd <nome-da-pasta-do-projeto>
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Executando em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

A página será recarregada automaticamente se você editar os arquivos.

## Build para Produção (Exportação Estática)

Este projeto está configurado para gerar um site estático.

1.  Execute o comando de build:
    ```bash
    npm run build
    ```
2.  Este comando gerará os arquivos estáticos otimizados na pasta `out` na raiz do projeto.
3.  Você pode servir estes arquivos estáticos localmente para teste usando um servidor HTTP simples ou fazer o upload do **conteúdo** da pasta `out` para sua plataforma de hospedagem estática preferida.

    *Exemplo usando `serve` (instale com `npm install -g serve` se não tiver):*
    ```bash
    serve out
    ```

## Estrutura de Pastas (Simplificada)

```
.
├── public/         # Arquivos estáticos (imagens, fontes, etc.)
├── posts/          # Arquivos Markdown para os posts do blog
├── src/
│   ├── app/        # Rotas e páginas principais (App Router)
│   │   ├── blog/     # Páginas relacionadas ao blog
│   │   │   ├── [slug]/ # Página dinâmica para posts individuais
│   │   │   └── page.tsx # Página de listagem do blog
│   │   ├── layout.tsx # Layout principal
│   │   └── page.tsx   # Página inicial
│   │   └── projetos/ # Página de projetos
│   ├── components/ # Componentes reutilizáveis
│   │   ├── client/   # Componentes marcados com "use client"
│   │   └── ui/       # Componentes Shadcn/UI
│   ├── lib/        # Funções utilitárias (processamento de posts)
│   └── styles/     # Arquivos CSS globais
├── next.config.js  # Configuração do Next.js (com output: 'export')
├── package.json    # Dependências e scripts do projeto
├── tsconfig.json   # Configuração do TypeScript
└── tailwind.config.ts # Configuração do Tailwind CSS
```

## Posts do Blog

*   Os posts do blog são escritos em arquivos Markdown (`.md`) e localizados na pasta `posts`.
*   Cada arquivo Markdown deve conter um *frontmatter* no início para metadados como `title`, `date`, e opcionalmente `author`, `image`, `tags`, `summary`.

    *Exemplo de Frontmatter:*
    ```yaml
    ---
    title: 'Meu Primeiro Post'
    date: '2024-05-05'
    author: 'Seu Nome'
    summary: 'Um breve resumo do post para a listagem.'
    tags: ['Next.js', 'Blog']
    ---

    Conteúdo do post em Markdown aqui...
    ```
*   O nome do arquivo (sem a extensão `.md`) será usado como o `slug` na URL do post (ex: `posts/meu-primeiro-post.md` -> `/blog/meu-primeiro-post`).

