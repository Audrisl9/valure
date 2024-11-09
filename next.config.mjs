/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Tambahkan domain Pexels untuk remote images
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com", // Domain Wix (tambahan opsional jika digunakan)
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Optimalisasi CSS (opsional)
  },
};

export default nextConfig;


