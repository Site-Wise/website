import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { setupRouter } from './router'
import { useDarkMode } from './composables/useDarkMode'
import './style.css'

// Export the ViteSSG app
export const createApp = ViteSSG(
  App,
  {
    routes: setupRouter(),
  },
  ({ app, router, isClient }) => {
    // Install head plugin for SEO
    const head = createHead()
    app.use(head)

    // Client-only code
    if (isClient) {
      // Initialize dark mode on client side only
      const { initializeDarkMode } = useDarkMode()
      initializeDarkMode()

      // Initialize PostHog analytics.
      // posthog-js is ~180 KB and ships legacy/polyfilled code (Math.trunc et al.).
      // Load it via dynamic import only once the browser is idle, so it never enters
      // the critical request chain or blocks LCP/FCP. The chunk is fetched on demand
      // (no modulepreload in <head>).
      const posthogKey = import.meta.env.VITE_POSTHOG_API_KEY
      if (posthogKey) {
        const startAnalytics = () => {
          import('./composables/usePostHog').then(({ initPostHog }) => {
            initPostHog({
              apiKey: posthogKey,
              apiHost: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
              options: {
                // Capture pageviews on route changes
                capture_pageview: false, // We'll do this manually with router
              },
            })

            // Capture the landing pageview (afterEach below only fires on subsequent nav)
            if ((window as any).posthog) {
              (window as any).posthog.capture('$pageview', {
                $current_url: window.location.href,
                path: router.currentRoute.value.path,
                name: router.currentRoute.value.name,
              })
            }

            // Track route changes
            router.afterEach((to) => {
              if ((window as any).posthog) {
                (window as any).posthog.capture('$pageview', {
                  $current_url: window.location.href,
                  path: to.path,
                  name: to.name,
                })
              }
            })
          })
        }

        const w = window as any
        if (typeof w.requestIdleCallback === 'function') {
          w.requestIdleCallback(startAnalytics, { timeout: 3000 })
        } else {
          w.setTimeout(startAnalytics, 2000)
        }
      } else if (import.meta.env.DEV) {
        console.warn('PostHog API key not found. Set VITE_POSTHOG_API_KEY in .env file.')
      }
    }
  }
)