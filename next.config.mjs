/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep links to the old Squarespace blog working
  async redirects() {
    return [
      { source: "/fajrblogs", destination: "/blog", permanent: true },
      { source: "/fajrblogs/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
