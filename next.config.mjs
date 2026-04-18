/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
    {
      protocol: "https",
      hostname: "www.google.com",
    },
  ],
     domains: ["via.placeholder.com", "i.ytimg.com","www.google.com"],
  },

};

export default nextConfig;
