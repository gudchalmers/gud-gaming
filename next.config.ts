import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: false,
  output: "standalone",
}
 
export default nextConfig