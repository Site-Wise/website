<template>
  <section class="relative overflow-hidden bg-ink text-cream py-20 sm:py-24 lg:py-28">
    <div class="absolute inset-0 pointer-events-none text-amber dotgrid" aria-hidden="true"></div>

    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-5 leading-[1.05]">
        Every day on paper costs you <span class="text-amber">₹3,200</span>.
      </h2>
      <p class="text-lg text-[#C9C5BE] mb-10 max-w-xl mx-auto">
        Add your first site, log today's kharcha, and see where the money actually goes. Setup takes 30 seconds.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://app.sitewise.in/login" class="inline-flex items-center justify-center h-13 px-6 rounded-sm bg-amber hover:bg-amber-deep text-ink font-semibold text-base active:scale-[0.98] transition-all duration-150" style="height:52px" aria-label="Start free on your first site">
          Start free on your first site →
        </a>
        <a href="https://github.com/site-wise/app" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-sm border border-ink-4 hover:border-cream text-cream font-semibold text-base active:scale-[0.98] transition-all duration-150" style="height:52px" aria-label="View Sitewise on GitHub">
          <Github class="w-5 h-5" /> View on GitHub
        </a>
      </div>

      <div class="mt-12 flex flex-wrap justify-center items-center gap-x-7 gap-y-3">
        <span v-for="p in proof" :key="p.label" class="flex items-center gap-2 text-sm text-[#C9C5BE]">
          <component :is="p.icon" class="w-4 h-4 text-amber" />
          {{ p.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, Scale, Users, Globe, Heart } from 'lucide-vue-next'

const proof = [
  { icon: Scale, label: 'O\'Saasy License' },
  { icon: Users, label: 'Multi-user' },
  { icon: Globe, label: 'Multi-lingual' },
  { icon: Heart, label: 'Made in India' },
]
</script>
