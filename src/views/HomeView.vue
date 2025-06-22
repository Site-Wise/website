<template>
  <main>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <section id="features">
      <FeaturesSection />
    </section>
    
    <!-- Tech Stack Section -->
    <section id="tech">
      <TechStackSection />
    </section>
    
    <!-- Pricing Section -->
    <section id="pricing">
      <PricingSection />
    </section>
    
    <!-- CTA Section -->
    <CTASection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import TechStackSection from '../components/TechStackSection.vue'
import PricingSection from '../components/PricingSection.vue'
import CTASection from '../components/CTASection.vue'

const route = useRoute()

onMounted(() => {
  // Handle hash navigation when coming from other pages
  if (route.hash) {
    const elementId = route.hash.substring(1) // Remove the # symbol
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Small delay to ensure DOM is fully rendered
  }
})
</script>