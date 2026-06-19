<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-ink-2 border-y border-cream-3 dark:border-ink-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">Who it's for</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-4">Built for everyone on the site.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">One shared system, three jobs. Density flexes to whoever's holding the phone.</p>
      </div>

      <div class="grid sm:grid-cols-3 gap-5">
        <div v-for="a in audiences" :key="a.role" class="rounded-md border border-cream-3 dark:border-ink-4 bg-cream dark:bg-ink-3 p-6">
          <div class="w-11 h-11 rounded-sm bg-ink dark:bg-amber flex items-center justify-center mb-5">
            <component :is="a.icon" class="w-5 h-5 text-amber dark:text-ink" />
          </div>
          <div class="eyebrow text-stone-3 dark:text-stone mb-1">{{ a.role }}</div>
          <h3 class="font-display text-xl font-semibold text-ink dark:text-cream mb-2">{{ a.title }}</h3>
          <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ a.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HardHat, Wallet, BarChart3 } from 'lucide-vue-next'

const audiences = [
  {
    icon: HardHat,
    role: 'Supervisors · mazdoors',
    title: 'Fast entry, on site',
    body: 'Log a kharcha in seconds from your phone. Big touch targets, works offline, glove-friendly. No training needed.',
  },
  {
    icon: Wallet,
    role: 'Contractors · thekedaars',
    title: 'Every site, one view',
    body: 'Track material, labour, and vendor payments across all your sites. Know which one is bleeding money before it hurts.',
  },
  {
    icon: BarChart3,
    role: 'Owners · accountants',
    title: 'Oversight & month-end',
    body: 'Multi-site rollups, vendor reconciliation, and GST-ready exports. Close the books without chasing anyone.',
  },
]
</script>
