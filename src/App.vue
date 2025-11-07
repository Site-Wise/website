<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
    <!-- Navigation -->
    <NavHeader />
    
    <!-- Router View -->
    <RouterView />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue'
import FooterSection from './components/FooterSection.vue'
import { useWebVitals } from './composables/useWebVitals'

// Dark mode is initialized in main.ts for SSG compatibility

// Initialize Web Vitals monitoring
useWebVitals((metrics) => {
  // Metrics are automatically logged in development
  // In production, you can send these to your analytics service
  if (import.meta.env.PROD && (window as any).posthog) {
    (window as any).posthog.capture('web_vitals', metrics)
  }
})
</script>