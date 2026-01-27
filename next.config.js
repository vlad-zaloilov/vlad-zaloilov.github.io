/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./dist",
  basePath: "/vlad-zaloilov.github.io",
  assetPrefix: "/vlad-zaloilov.github.io",
  turbopack: {
    resolveExtensions: [".js", ".jsx"],
    rules: {
      "*.glsl": {
        loaders: ["raw-loader"],
        as: "*.js"
      },
    },
  },
}
 
export default nextConfig