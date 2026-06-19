<template>
  <section id="features" class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-ink-2 border-y border-cream-3 dark:border-ink-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">What you get free</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-4">The core khata is free. Forever.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">Self-host it under the O'Saasy License, or let us run it. Either way the full site ledger costs nothing.</p>
      </div>

      <!-- Illustrated core features -->
      <div class="grid md:grid-cols-3 gap-5 mb-6">
        <div v-for="f in features" :key="f.eyebrow" class="rounded-lg overflow-hidden border border-cream-3 dark:border-ink-4 bg-cream dark:bg-ink-3 shadow-card dark:shadow-none transition-colors duration-150 hover:border-ink dark:hover:border-stone-3">
          <div class="h-44 flex items-center justify-center bg-cream-2 dark:bg-ink">
            <img :src="`/illustrations/${f.illo}.svg`" :alt="f.title" width="240" height="200" loading="lazy" decoding="async" class="h-full max-w-full" />
          </div>
          <div class="p-6">
            <span class="eyebrow text-stone-3 dark:text-stone">{{ f.eyebrow }}</span>
            <h3 class="font-display text-xl font-semibold text-ink dark:text-cream mt-2 mb-2">{{ f.title }}</h3>
            <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ f.body }}</p>
          </div>
        </div>
      </div>

      <!-- Everything else in the free core -->
      <div class="rounded-lg border border-cream-3 dark:border-ink-4 bg-cream dark:bg-ink-3 p-6 sm:p-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          <div v-for="item in extras" :key="item" class="flex items-center gap-3">
            <Check class="w-4 h-4 text-forest-deep dark:text-forest shrink-0" />
            <span class="text-sm text-ink/80 dark:text-cream/80">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const features = [
  {
    illo: 'materials',
    eyebrow: 'Material tracking',
    title: 'Every bag of cement, every brick.',
    body: 'Cement, steel, sand, bricks. Real-time quantities and cost across every site, with vendor-wise rates.',
  },
  {
    illo: 'worker',
    eyebrow: 'Mazdoor & thekedaar',
    title: 'Wages and contractor bills, sorted.',
    body: 'Daily wages, advances, and contractor invoices. Nothing falls through the cracks at month-end.',
  },
  {
    illo: 'khata',
    eyebrow: 'Construction khata',
    title: "Your site's ledger, digital.",
    body: 'Every transaction logged, every vendor reconciled. GST-ready exports in one tap.',
  },
]

const extras = [
  'Unlimited items, vendors & technicians',
  'Multi-user with roles per site',
  'Multi-lingual (English + Indian languages)',
  'Petty cash & advances tracking',
  'PWA — installs like a native app',
  'Works offline, syncs when back online',
  'Light & dark mode',
  'Shareable weekly summaries',
  'Self-hostable · O\'Saasy License',
]
</script>
