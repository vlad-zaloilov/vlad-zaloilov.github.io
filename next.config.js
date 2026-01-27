/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./dist",
  basePath: "/vlad-zaloilov",
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