/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["https://rahatappsdev.github.io/portfolio/"],
      remotePatterns: [
        {
         protocol: 'https',
         hostname: 'rahatappsdev.github.io',
         port: '',
         pathname: '/**',
       }]
},
};

export default nextConfig;
