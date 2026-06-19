<template>
  <main>
    <!-- Hero — one sharp promise, audience, action -->
    <HeroSection />

    <!-- Proof before explanation — ledger + three outcomes -->
    <ProofSection />

    <!-- Who it's for -->
    <AudienceSection />

    <!-- How it works in 3 steps -->
    <HowItWorksSection />

    <!-- What you get free -->
    <FeaturesSection />

    <!-- What AI will add later (Pro) -->
    <AISection />

    <!-- Live activity — FOMO -->
    <LiveCounter />

    <!-- Pricing -->
    <PricingSection />

    <!-- Built lean — for self-hosters -->
    <TechStackSection />

    <!-- Final CTA -->
    <CTASection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import ProofSection from '../components/ProofSection.vue'
import AudienceSection from '../components/AudienceSection.vue'
import HowItWorksSection from '../components/HowItWorksSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import AISection from '../components/AISection.vue'
import LiveCounter from '../components/LiveCounter.vue'
import PricingSection from '../components/PricingSection.vue'
import TechStackSection from '../components/TechStackSection.vue'
import CTASection from '../components/CTASection.vue'
import { useSeo } from '../composables/useSeo'

// Page metadata — high-intent positioning. (Organization / WebSite /
// SoftwareApplication / FAQ JSON-LD are injected statically in index.html so
// they reliably appear in the pre-rendered HTML for every crawler.)
useSeo({
  title: 'SiteWise | Know Where Every Rupee Goes On Every Construction Site',
  description: 'Track materials, labour, vendor bills, cash expenses and project budgets across multiple construction sites. SiteWise gives contractors complete visibility into site operations, costs and profitability.',
  ogTitle: 'Know Where Every Rupee Goes On Every Construction Site',
  ogDescription: 'Materials. Labour. Vendor bills. Cash advances. SiteWise gives builders and contractors one place to manage every site in real time.',
  keywords: 'construction site operating system, construction expense management India, construction cost tracking, site expense tracker, labour payment management, vendor bills, RA bills, site progress tracking',
})

const route = useRoute()

onMounted(() => {
  // Handle hash navigation when coming from other pages
  if (route.hash) {
    const elementId = route.hash.substring(1)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
})
</script>
