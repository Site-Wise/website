# Performance Optimizations Guide

This document outlines all the performance optimizations implemented in the SiteWise website to achieve high PageSpeed/Lighthouse scores across all categories.

## Overview

The website has been comprehensively optimized for:
- **Performance**: Fast loading, optimal bundle sizes, efficient caching
- **SEO**: Pre-rendered pages, meta tags, semantic HTML
- **Accessibility**: WCAG compliance, reduced motion support, proper contrast
- **Best Practices**: PWA support, HTTPS, modern web standards

## Static Site Generation (SSG)

### Implementation
- **Tool**: `vite-ssg` for pre-rendering all pages at build time
- **Benefits**:
  - Instant page loads (HTML is pre-generated)
  - Better SEO (crawlers see full content immediately)
  - Lower server costs (static files can be served from CDN)
  - Improved Core Web Vitals scores

### Configuration
See `vite.config.ts`:
```typescript
ssgOptions: {
  script: 'async',
  formatting: 'minify',
  crittersOptions: {
    reduceInlineStyles: false,
  },
}
```

## Progressive Web App (PWA)

### Features
- **Service Worker**: Offline support and caching
- **Manifest**: Install as native app
- **Workbox**: Advanced caching strategies

### Cache Strategy
- **Static assets**: Cache-first with 1-year expiration
- **Google Fonts**: Cache-first with long-term storage
- **API calls**: Network-first with cache fallback

### Configuration
The PWA is configured in `vite.config.ts` using `vite-plugin-pwa`.

## Bundle Optimization

### Code Splitting
- **Automatic**: Each route is lazy-loaded
- **Manual chunks**:
  - `vue`: Vue.js runtime (100KB → 38KB gzipped)
  - `icons`: Lucide icons library
  - `vueuse`: VueUse utilities
  - `vendor`: Other dependencies (180KB → 59KB gzipped)

### Compression
- **Gzip**: ~70% size reduction
- **Brotli**: ~75% size reduction (better than gzip)
- Both formats are pre-generated at build time

### Tree Shaking
- Dead code elimination enabled
- ES modules for optimal tree-shaking
- Unused dependencies are automatically removed

## Performance Features

### Critical CSS
- Inlined critical styles in `index.html`
- System fonts loaded first to prevent FOIT (Flash of Invisible Text)
- Tailwind CSS is optimized and minified

### Resource Hints
```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Module Preload -->
<link rel="modulepreload" href="/src/main.ts" />
```

### Image Optimization
- Lazy loading directive available (`v-lazy-load`)
- Responsive images with proper sizing
- WebP support
- Placeholder backgrounds during loading

### Font Optimization
- System fonts as primary fallback
- `font-display: swap` to prevent invisible text
- Google Fonts cached aggressively by service worker

## Web Vitals Monitoring

### Implementation
The `useWebVitals` composable tracks:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **FCP** (First Contentful Paint): < 1.8s
- **TTFB** (Time to First Byte): < 600ms

### Usage
Metrics are automatically logged in development and sent to PostHog in production.

## PostHog Analytics

### Setup
1. Create a PostHog account at https://app.posthog.com
2. Get your API key from Project Settings
3. Create a `.env` file (see `.env.example`):
```bash
VITE_POSTHOG_API_KEY=your_api_key_here
VITE_POSTHOG_HOST=https://app.posthog.com
```

### Features
- **Automatic pageview tracking** on route changes
- **Web Vitals integration** for performance monitoring
- **Session recording** (disabled in development)
- **Event tracking** via `usePostHog()` composable

### Usage Example
```typescript
import { usePostHog } from '@/composables/usePostHog'

const { captureEvent } = usePostHog()

// Track custom events
captureEvent('button_clicked', {
  button_name: 'Get Started',
  page: '/home'
})
```

## SEO Optimization

### Meta Tags
- Comprehensive meta tags for all routes
- Open Graph tags for social media
- Twitter Card tags
- Dynamic meta tags via `useSeo()` composable

### Structured Data
- Semantic HTML
- Proper heading hierarchy
- ARIA labels for accessibility

### Sitemap
Generated automatically by vite-ssg for all routes.

## Accessibility

### Features
- Proper color contrast (WCAG AA compliant)
- Focus indicators for keyboard navigation
- Reduced motion support for vestibular disorders
- Screen reader friendly markup

### Implementation
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Build Optimization

### Terser Configuration
- Console logs removed in production
- Debug statements removed
- 2-pass compression for maximum size reduction
- Safari 10 compatibility

### CSS Optimization
- Minification enabled
- Code splitting per route
- Unused CSS removed by Tailwind's purge

## Performance Checklist

- [x] Static Site Generation (SSG)
- [x] Progressive Web App (PWA)
- [x] Service Worker with caching
- [x] Code splitting and lazy loading
- [x] Gzip and Brotli compression
- [x] Critical CSS inlining
- [x] Resource hints (preconnect, dns-prefetch, modulepreload)
- [x] Image lazy loading
- [x] Font optimization
- [x] Tree shaking
- [x] Minification (HTML, CSS, JS)
- [x] Web Vitals monitoring
- [x] PostHog analytics integration
- [x] SEO meta tags
- [x] Accessibility features

## Expected Lighthouse Scores

With these optimizations, you should achieve:
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## Build Commands

```bash
# Development
npm run dev

# Production build with SSG
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Deployment

The generated `dist` folder contains:
- Pre-rendered HTML pages
- Optimized and compressed assets
- Service worker for offline support
- PWA manifest

Deploy to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

## Monitoring

1. **Development**: Web Vitals logged to console
2. **Production**:
   - Web Vitals sent to PostHog
   - Custom events tracked via PostHog
   - User sessions recorded (optional)

## Further Optimizations

For even better performance:
1. Use a CDN for static assets
2. Enable HTTP/2 or HTTP/3
3. Implement edge caching
4. Use WebP/AVIF images
5. Implement critical path CSS extraction
6. Add resource priorities with `fetchpriority`

## Troubleshooting

### Build fails
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite-ssg-temp`

### PostHog not loading
- Check `.env` file has correct API key
- Verify API key in PostHog dashboard
- Check browser console for errors

### Poor performance scores
- Run Lighthouse in incognito mode
- Disable browser extensions
- Test on a clean network profile
- Ensure server has proper caching headers

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Vite SSG](https://github.com/antfu/vite-ssg)
- [PostHog Docs](https://posthog.com/docs)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PWA Checklist](https://web.dev/pwa-checklist/)
