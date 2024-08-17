/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
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
