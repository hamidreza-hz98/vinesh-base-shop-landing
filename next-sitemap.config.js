/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://amiranwatch.com',
  generateRobotsTxt: true, // (optional) Generate robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // Exclude any routes you don't want
  exclude: ['/admin/*', '/profile/*'], 
  transform: async (config, path) => {
    // Custom logic for dynamic pages
    return {
      loc: path, // => "/products" etc
      changefreq: 'daily',
      priority: path.startsWith('/products') ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    // Fetch dynamic products from your API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/sitemap`);
    const data = await res.json();

    return data.data.map((item) => ({
      loc: item.url.replace(config.siteUrl, ''),
      lastmod: item.lastmod,
      priority: 0.9,
      changefreq: 'weekly',
    }));
  },
};
