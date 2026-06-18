<template>
  <section id="how" class="py-16 sm:py-20 lg:py-24 bg-cream dark:bg-ink">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">How it works</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-4">Live in 30 seconds. Useful from day one.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">No setup project. No consultant. Add a site and start logging.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <div v-for="(s, i) in steps" :key="s.title" class="relative rounded-md border border-cream-3 dark:border-ink-4 bg-white dark:bg-ink-3 p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="font-display text-2xl font-bold text-amber tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="h-px flex-1 bg-cream-3 dark:bg-ink-4"></span>
            <component :is="s.icon" class="w-5 h-5 text-stone-2 dark:text-stone" />
          </div>
          <h3 class="font-display text-xl font-semibold text-ink dark:text-cream mb-2">{{ s.title }}</h3>
          <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ s.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Receipt, LineChart } from 'lucide-vue-next'

const steps = [
  {
    icon: MapPin,
    title: 'Add your site',
    body: 'Name it, set a budget, invite your supervisor. 30 seconds, no credit card.',
  },
  {
    icon: Receipt,
    title: 'Log every kharcha',
    body: 'Materials, mazdoor wages, vendor bills, advances, petty cash — straight from the phone, as it happens.',
  },
  {
    icon: LineChart,
    title: 'See where money went',
    body: 'Live totals per site, vendor, and category. Reconcile, export GST-ready reports, and share a summary.',
  },
]
</script>
