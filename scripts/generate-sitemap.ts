import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { blogPosts } from '../src/data/blogPosts'

const baseUrl = 'https://sitewise.in'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

const staticRoutes: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/privacy-policy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: '/terms-of-service',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.5
  }
]

// Generate blog post URLs
const blogUrls: SitemapUrl[] = blogPosts.map(post => ({
  loc: `/blog/${post.slug}`,
  lastmod: post.publishedAt.toISOString().split('T')[0],
  changefreq: 'monthly' as const,
  priority: post.featured ? 0.8 : 0.7
}))

const allUrls = [...staticRoutes, ...blogUrls]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>
`

// Write sitemap to dist/public directory
const outputPath = resolve(process.cwd(), 'dist', 'sitemap.xml')

try {
  writeFileSync(outputPath, sitemap, 'utf-8')
  console.log(`✓ Sitemap generated successfully at ${outputPath}`)
  console.log(`  Total URLs: ${allUrls.length} (${staticRoutes.length} static + ${blogUrls.length} blog posts)`)
} catch (error) {
  console.error('✗ Error generating sitemap:', error)
  process.exit(1)
}
