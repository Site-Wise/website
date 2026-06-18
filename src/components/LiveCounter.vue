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

const signups = ref(2847)
const tracked = ref(48294712)
let id: ReturnType<typeof setInterval>

onMounted(() => {
  id = setInterval(() => {
    if (Math.random() < 0.4) signups.value += 1
    tracked.value += Math.floor(Math.random() * 4200)
  }, 1800)
})

onUnmounted(() => clearInterval(id))
</script>
