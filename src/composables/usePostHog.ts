import posthog from 'posthog-js'
import type { PostHog } from 'posthog-js'
import { ref } from 'vue'

// PostHog instance
let posthogInstance: PostHog | null = null
const isInitialized = ref(false)

export interface PostHogConfig {
  apiKey: string
  apiHost?: string
  options?: any
}

/**
 * Initialize PostHog analytics
 * @param config - PostHog configuration
 */
export function initPostHog(config: PostHogConfig) {
  // Only initialize on client side and in production
  if (typeof window === 'undefined') {
    return
  }

  if (isInitialized.value) {
    console.warn('PostHog is already initialized')
    return posthogInstance
  }

  try {
    const apiHost = config.apiHost || 'https://app.posthog.com'

    posthogInstance = posthog.init(config.apiKey, {
      api_host: apiHost,
      // Performance optimizations
      loaded: () => {
        if (import.meta.env.DEV) {
          console.log('PostHog loaded successfully')
        }
      },
      // Capture pageviews automatically
      capture_pageview: true,
      // Capture performance metrics
      capture_pageleave: true,
      // Disable in development by default
      opt_out_capturing_by_default: import.meta.env.DEV,
      // Enable session recording (optional)
      disable_session_recording: import.meta.env.DEV,
      // Additional options
      ...config.options,
    }) || null

    isInitialized.value = true

    // Make it available globally for Web Vitals
    if (posthogInstance) {
      (window as any).posthog = posthogInstance
    }

    return posthogInstance
  } catch (error) {
    console.error('Failed to initialize PostHog:', error)
    return null
  }
}

/**
 * Use PostHog analytics
 */
export function usePostHog() {
  /**
   * Track an event
   */
  const captureEvent = (eventName: string, properties?: Record<string, any>) => {
    if (posthogInstance && isInitialized.value) {
      posthogInstance.capture(eventName, properties)
    } else if (import.meta.env.DEV) {
      console.log('[PostHog] Event:', eventName, properties)
    }
  }

  /**
   * Identify a user
   */
  const identify = (userId: string, properties?: Record<string, any>) => {
    if (posthogInstance && isInitialized.value) {
      posthogInstance.identify(userId, properties)
    }
  }

  /**
   * Track a page view
   */
  const capturePageView = (properties?: Record<string, any>) => {
    if (posthogInstance && isInitialized.value) {
      posthogInstance.capture('$pageview', properties)
    }
  }

  /**
   * Reset user identity (e.g., on logout)
   */
  const reset = () => {
    if (posthogInstance && isInitialized.value) {
      posthogInstance.reset()
    }
  }

  return {
    posthog: posthogInstance,
    isInitialized,
    captureEvent,
    identify,
    capturePageView,
    reset,
  }
}
