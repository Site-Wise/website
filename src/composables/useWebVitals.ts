import { onMounted } from 'vue'

export interface WebVitalsMetrics {
  CLS?: number  // Cumulative Layout Shift
  FID?: number  // First Input Delay
  FCP?: number  // First Contentful Paint
  LCP?: number  // Largest Contentful Paint
  TTFB?: number // Time to First Byte
}

export function useWebVitals(callback?: (metrics: WebVitalsMetrics) => void) {
  const metrics: WebVitalsMetrics = {}

  onMounted(() => {
    if (typeof window === 'undefined') return

    // Web Vitals API
    const reportMetric = (metric: any) => {
      metrics[metric.name as keyof WebVitalsMetrics] = metric.value

      if (callback) {
        callback(metrics)
      }

      // Log to console in development
      if (import.meta.env.DEV) {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value)
      }
    }

    // Use PerformanceObserver for modern browsers
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          reportMetric({
            name: 'LCP',
            value: lastEntry.renderTime || lastEntry.loadTime
          })
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
          const firstInput = entryList.getEntries()[0] as any
          reportMetric({
            name: 'FID',
            value: firstInput.processingStart - firstInput.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries() as any[]) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              reportMetric({
                name: 'CLS',
                value: clsValue
              })
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.warn('Performance monitoring not supported:', e)
      }
    }

    // Navigation Timing API for older browsers
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as any
        if (perfData) {
          // First Contentful Paint
          const paintEntries = performance.getEntriesByType('paint')
          const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            reportMetric({
              name: 'FCP',
              value: fcpEntry.startTime
            })
          }

          // Time to First Byte
          reportMetric({
            name: 'TTFB',
            value: perfData.responseStart - perfData.requestStart
          })
        }
      }, 0)
    })
  })

  return {
    metrics
  }
}
