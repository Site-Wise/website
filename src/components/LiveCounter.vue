<template>
  <section class="relative overflow-hidden bg-ink text-cream py-16 sm:py-20 border-y border-ink-4">
    <div class="absolute inset-0 pointer-events-none text-amber dotgrid" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <span class="eyebrow text-amber flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span> Live, right now
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-cream mt-3 mb-4">While you read this, contractors are joining.</h2>
        <p class="text-lg text-[#C9C5BE] max-w-md">The wait was the only thing that ever cost more than paper.</p>
      </div>

      <div class="flex flex-col gap-6 sm:flex-row sm:gap-12 lg:justify-end">
        <div>
          <div class="eyebrow text-stone">Contractors using Sitewise</div>
          <div class="font-display text-5xl sm:text-6xl font-bold text-amber tabular-nums mt-1">{{ signups.toLocaleString('en-IN') }}</div>
        </div>
        <div>
          <div class="eyebrow text-stone">Tracked this month</div>
          <div class="font-display text-4xl sm:text-5xl font-bold text-cream tabular-nums mt-1">₹{{ (tracked / 10000000).toFixed(2) }}Cr</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Live activity stays in a believable range: 50 → 100 signups, tracked starts at ₹5 Cr.
const SIGNUP_BASE = 50
const SIGNUP_CEILING = 100

const signups = ref(SIGNUP_BASE)
const tracked = ref(50000000) // ₹5 Cr
let id: ReturnType<typeof setInterval>

onMounted(() => {
  id = setInterval(() => {
    if (signups.value >= SIGNUP_CEILING) {
      clearInterval(id)
      return
    }
    if (Math.random() < 0.4) {
      signups.value += 1
      // ~₹1L per new signup keeps the running total realistic (hovers around ₹5 Cr)
      tracked.value += 80000 + Math.floor(Math.random() * 120000)
    }
  }, 1800)
})

onUnmounted(() => clearInterval(id))
</script>
