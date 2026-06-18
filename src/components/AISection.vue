<template>
  <section class="relative overflow-hidden bg-ink text-cream py-16 sm:py-20 lg:py-24">
    <div class="absolute inset-0 pointer-events-none text-amber dotgrid" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="inline-flex items-center gap-2 h-7 px-3 rounded-sm bg-ink-3 text-amber text-xs font-semibold tracking-[0.02em] mb-5">
          <Sparkles class="w-3.5 h-3.5" /> Sitewise Pro · on the roadmap
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">The ledger stays free. The smart stuff is Pro.</h2>
        <p class="text-lg text-[#C9C5BE]">We don't lock the core khata behind a wall. We charge for the work it saves you — the AI that reads your bills, flags the leaks, and forecasts your cash.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-4 rounded-lg overflow-hidden border border-ink-4">
        <div v-for="cap in capabilities" :key="cap.title" class="bg-ink p-6">
          <component :is="cap.icon" class="w-6 h-6 text-amber mb-4" />
          <h3 class="font-display text-lg font-semibold text-cream mb-1.5">{{ cap.title }}</h3>
          <p class="text-sm text-[#C9C5BE] leading-relaxed">{{ cap.body }}</p>
        </div>
      </div>

      <p class="mt-8 text-sm text-stone">
        Shipping incrementally. Free self-hosters keep the core forever — Pro features run on managed hosting.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ScanLine, AlertTriangle, TrendingUp, CheckCircle2, Camera, FileBarChart2, Sparkles } from 'lucide-vue-next'

const capabilities = [
  { icon: ScanLine, title: 'AI bill extraction', body: 'Snap a vendor bill. Sitewise reads the items, rates, and totals and books them — no typing.' },
  { icon: AlertTriangle, title: 'Anomaly detection', body: 'Flags the cement order that cost 40% more than last week, before it becomes a leak.' },
  { icon: TrendingUp, title: 'Cashflow forecasting', body: 'Projects spend per site from your run-rate so you know what you owe before the bill lands.' },
  { icon: CheckCircle2, title: 'Approval automation', body: 'Route advances and big purchases for one-tap approval. An audit trail without the chasing.' },
  { icon: Camera, title: 'Photo tagging', body: 'Tag site photos to expenses and progress automatically — proof attached to every rupee.' },
  { icon: FileBarChart2, title: 'Advanced reporting', body: 'Branded, shareable summaries and GST/Tally-ready reports that close month-end faster.' },
]
</script>
