/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // évite l'image optimizer côté serveur
  trailingSlash: true,
};

module.exports = nextConfig;
