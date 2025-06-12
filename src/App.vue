<template>
  <div id="app" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
    <!-- Navigation -->
    <NavHeader />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Tech Stack Section -->
    <TechStackSection />
    
    <!-- Pricing Section -->
    <PricingSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavHeader from './components/NavHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import PricingSection from './components/PricingSection.vue'
import CTASection from './components/CTASection.vue'
import FooterSection from './components/FooterSection.vue'
import { useDarkMode } from './composables/useDarkMode'

const { initializeDarkMode } = useDarkMode()

onMounted(() => {
  initializeDarkMode()
})
</script>