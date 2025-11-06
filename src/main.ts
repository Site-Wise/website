import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { setupRouter } from './router'
import { useDarkMode } from './composables/useDarkMode'
import { initPostHog } from './composables/usePostHog'
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

      // Initialize PostHog analytics
      const posthogKey = import.meta.env.VITE_POSTHOG_API_KEY
      if (posthogKey) {
        initPostHog({
          apiKey: posthogKey,
          apiHost: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
          options: {
            // Capture pageviews on route changes
            capture_pageview: false, // We'll do this manually with router
          }
        })

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
      } else if (import.meta.env.DEV) {
        console.warn('PostHog API key not found. Set VITE_POSTHOG_API_KEY in .env file.')
      }
    }
  }
)