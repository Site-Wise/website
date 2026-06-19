<template>
  <section class="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
    <!-- Dot-grid blueprint background -->
    <div class="absolute inset-0 pointer-events-none text-ink dark:text-amber dotgrid" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <!-- Copy -->
        <div class="animate-fade-in-up">
          <span class="inline-flex items-center gap-2 h-7 px-3 rounded-sm bg-amber-soft text-[#6B4900] text-xs font-semibold tracking-[0.02em] mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-amber"></span>
            Live · {{ signupsToday }} contractors signed up today
          </span>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] text-ink dark:text-cream mb-5">
            Know exactly where every <span class="text-amber-deep dark:text-amber">rupee</span> went on every site.
          </h1>

          <p class="text-lg text-ink/70 dark:text-cream/70 leading-relaxed max-w-xl mb-8">
            Sitewise is the site expense system for Indian contractors, supervisors, and accountants.
            Materials, mazdoor wages, petty cash, vendor bills, and advances — in one shared khata.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 mb-6">
            <a href="https://app.sitewise.in/login" class="inline-flex items-center justify-center h-13 px-6 rounded-sm bg-amber hover:bg-amber-deep text-ink font-semibold text-base active:scale-[0.98] transition-all duration-150" style="height:52px" aria-label="Start free on your first site">
              Start free on your first site →
            </a>
            <a href="https://app.sitewise.in/login" class="inline-flex items-center justify-center h-13 px-6 rounded-sm border border-cream-3 dark:border-ink-4 hover:border-ink dark:hover:border-cream text-ink dark:text-cream font-semibold text-base active:scale-[0.98] transition-all duration-150" style="height:52px" aria-label="See a live demo">
              See a live demo
            </a>
          </div>

          <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span class="text-xs font-medium text-stone-2 dark:text-stone">No credit card · Self-hostable · O'Saasy License</span>
            <img src="/illustrations/made-in-india-badge.svg" alt="Made in India" width="120" height="32" loading="lazy" decoding="async" class="h-[22px] w-auto" />
          </div>
        </div>

        <!-- Proof visual -->
        <div class="relative animate-fade-in-up">
          <div class="rounded-lg overflow-hidden border border-cream-3 dark:border-ink-4 shadow-card dark:shadow-none bg-cream">
            <img src="/illustrations/site.svg" alt="A construction site tracked in Sitewise" width="320" height="200" fetchpriority="high" decoding="async" class="w-full h-auto block" />
          </div>

          <!-- Floating stat card -->
          <div class="absolute -bottom-6 -left-4 sm:-left-8 bg-white dark:bg-ink-3 border border-cream-3 dark:border-ink-4 rounded-md shadow-card dark:shadow-none p-5 min-w-[220px]">
            <div class="eyebrow text-stone-3 dark:text-stone">Today across your sites</div>
            <div class="font-display text-3xl font-semibold text-ink dark:text-cream tabular-nums mt-1.5">₹{{ todayTotal.toLocaleString('en-IN') }}</div>
            <div class="text-sm font-semibold text-forest-deep dark:text-forest mt-1.5">↑ 8.4% vs yesterday</div>
          </div>

          <!-- Floating savings chip -->
          <div class="absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2 bg-ink dark:bg-ink-3 text-cream rounded-sm px-3 h-9 shadow-card">
            <span class="text-xs font-medium text-stone">Saved vs paper</span>
            <span class="font-display text-sm font-semibold text-amber tabular-nums">₹3,200/day</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const signupsToday = 12
const todayTotal = ref(0)

// Count-up on first paint — numbers ticking up is core to the brand.
onMounted(() => {
  const target = 47200
  const start = performance.now()
  const dur = 800
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - t, 3)
    todayTotal.value = Math.floor(target * eased)
    if (t < 1) requestAnimationFrame(tick)
    else todayTotal.value = target
  }
  requestAnimationFrame(tick)
})
</script>
