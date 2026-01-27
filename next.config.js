/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./dist",
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