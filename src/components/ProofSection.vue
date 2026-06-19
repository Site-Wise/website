<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-cream dark:bg-ink">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">Why contractors switch</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-4">Stop guessing. Start knowing.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">This isn't generic accounting software. It's site operations software — built for how money actually moves on a construction site.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- Ledger proof — reads like a real app screen -->
        <div>
          <div class="rounded-lg overflow-hidden border border-cream-3 dark:border-ink-4 shadow-card dark:shadow-none bg-cream">
            <div class="flex items-center gap-2 px-4 h-10 border-b border-cream-3 dark:border-ink-4 bg-white dark:bg-ink-3">
              <span class="w-2.5 h-2.5 rounded-full bg-cream-3 dark:bg-ink-4"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-cream-3 dark:bg-ink-4"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-cream-3 dark:bg-ink-4"></span>
              <span class="ml-2 font-mono text-xs text-stone-2 dark:text-stone">khata · Site A · 12 May 2026</span>
            </div>
            <img src="/illustrations/khata.svg" alt="A Sitewise site ledger with material and labour costs" width="240" height="200" loading="lazy" decoding="async" class="w-full h-auto block" />
          </div>
          <!-- Shareable artifact — the viral loop -->
          <div class="mt-4 flex items-center justify-between gap-3 rounded-md border border-cream-3 dark:border-ink-4 px-4 py-3">
            <span class="text-sm text-ink/70 dark:text-cream/70">Send a branded weekly summary on WhatsApp — every site, one tap.</span>
            <span class="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-deep dark:text-forest">
              <Share2 class="w-4 h-4" /> Share
            </span>
          </div>
        </div>

        <!-- Three outcomes, not ten features -->
        <div class="flex flex-col gap-4">
          <div v-for="o in outcomes" :key="o.title" class="flex gap-4 rounded-md border border-cream-3 dark:border-ink-4 bg-white dark:bg-ink-3 p-5">
            <div class="shrink-0 w-11 h-11 rounded-sm bg-amber-soft dark:bg-ink-2 flex items-center justify-center">
              <component :is="o.icon" class="w-5 h-5 text-amber-deep dark:text-amber" />
            </div>
            <div>
              <h3 class="font-display text-lg font-semibold text-ink dark:text-cream mb-1">{{ o.title }}</h3>
              <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ o.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck, Clock, MessageSquare, Share2 } from 'lucide-vue-next'

const outcomes = [
  {
    icon: ShieldCheck,
    title: 'Fewer cash leaks',
    body: 'Every advance and vendor bill reconciled. Catch the ₹3,200/day that quietly leaks out when you track on paper.',
  },
  {
    icon: Clock,
    title: 'Month-end in minutes',
    body: 'Close the books without chasing slips. Material, labour, and petty cash totals are always current. Exports in one tap.',
  },
  {
    icon: MessageSquare,
    title: 'Less WhatsApp back-and-forth',
    body: 'One shared site khata. Supervisor, thekedaar, and owner all see the same numbers, live — no more screenshot threads.',
  },
]
</script>
