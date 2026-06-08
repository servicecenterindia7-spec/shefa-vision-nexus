import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  // Cloudflare Pages deployment
  prerender: {
    crawlLinks: true,
    ignorePayloadExtraction: false,
    ignore: ['/admin'],
    routes: ['/sitemap.xml', '/robots.txt'],
  },
  routeRules: {
    // Cache HTML pages for 1 hour
    '/**/*.html': { cache: { maxAge: 60 * 60 } },
    // Don't cache API routes
    '/api/**': { noCache: true },
  },
  // Use Cloudflare runtime
  sourceMap: true,
})
