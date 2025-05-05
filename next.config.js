/** @type {import("next").NextConfig} */

// Define o nome do repositório para o basePath
const repoName = "portifolio";

const nextConfig = {
  output: "export", // Necessário para exportação estática
  basePath: `/${repoName}`, // Define o subdiretório para GitHub Pages
  assetPrefix: `/${repoName}/`, // Garante que os assets também usem o basePath
  reactStrictMode: true,
  images: {
    // Desabilita a otimização de imagens do Next.js, pois não funciona com exportação estática sem configuração adicional
    unoptimized: true,
    // Configuração de remotePatterns mantida, mas a otimização está desabilitada
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

