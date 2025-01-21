
const url = process.env.NEXT_EXTERNAL_DOMAIN

module.exports = {
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
    images: {
      domains: [url], 
      unoptimized: true, 
    },
  };