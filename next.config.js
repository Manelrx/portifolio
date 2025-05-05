/** @type {import("next").NextConfig} */

// Define o nome do repositório para o basePath
const repoName = "portifolio"; // Descomentado para build estático

const nextConfig = {
  output: "export", // Descomentado para build estático
  basePath: `/${repoName}`, // Descomentado para build estático
  assetPrefix: `/${repoName}/`, // Descomentado para build estático
  reactStrictMode: true,
  images: {
    // Desabilita a otimização de imagens do Next.js, pois não funciona com exportação estática sem configuração adicional
    unoptimized: true,
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

