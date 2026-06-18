<template>
  <section id="tech" class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-ink-2 border-y border-cream-3 dark:border-ink-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">Built lean</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-4">Runs anywhere. Hosts for pennies.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">A modern, lightweight stack — so self-hosting costs you next to nothing and the app stays fast on a cheap phone.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-12">
        <div class="rounded-md border border-cream-3 dark:border-ink-4 bg-cream dark:bg-ink-3 p-7">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-sm bg-ink dark:bg-amber flex items-center justify-center">
              <Code class="w-5 h-5 text-amber dark:text-ink" />
            </div>
            <h3 class="font-display text-xl font-semibold text-ink dark:text-cream">Frontend</h3>
          </div>
          <div class="flex flex-col gap-4">
            <div v-for="t in frontend" :key="t.name" class="flex items-baseline gap-3">
              <span class="font-mono text-sm font-medium text-ink dark:text-cream w-28 shrink-0">{{ t.name }}</span>
              <span class="text-sm text-ink/60 dark:text-cream/60">{{ t.note }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-md border border-cream-3 dark:border-ink-4 bg-cream dark:bg-ink-3 p-7">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-sm bg-ink dark:bg-amber flex items-center justify-center">
              <Database class="w-5 h-5 text-amber dark:text-ink" />
            </div>
            <h3 class="font-display text-xl font-semibold text-ink dark:text-cream">Backend</h3>
          </div>
          <div class="flex flex-col gap-4">
            <div v-for="t in backend" :key="t.name" class="flex items-baseline gap-3">
              <span class="font-mono text-sm font-medium text-ink dark:text-cream w-28 shrink-0">{{ t.name }}</span>
              <span class="text-sm text-ink/60 dark:text-cream/60">{{ t.note }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid sm:grid-cols-3 gap-5">
        <div v-for="b in benefits" :key="b.title" class="flex gap-4">
          <component :is="b.icon" class="w-6 h-6 text-amber-deep dark:text-amber shrink-0" />
          <div>
            <h4 class="font-display text-lg font-semibold text-ink dark:text-cream mb-1">{{ b.title }}</h4>
            <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ b.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Database, Zap, IndianRupee, Shield } from 'lucide-vue-next'

const frontend = [
  { name: 'Vue 3', note: 'Progressive framework' },
  { name: 'TypeScript', note: 'Type-safe by default' },
  { name: 'Tailwind', note: 'Utility-first styling' },
  { name: 'Vite', note: 'Lightning build tool' },
]
const backend = [
  { name: 'PocketBase', note: 'Lightweight backend' },
  { name: 'Go', note: 'High-performance server' },
  { name: 'SQLite', note: 'Embedded database' },
  { name: 'Realtime API', note: 'Live sync across devices' },
]
const benefits = [
  { icon: Zap, title: 'Lightning fast', body: 'Optimized build and an offline-first PWA. Snappy even on a budget Android.' },
  { icon: IndianRupee, title: 'Cheap to host', body: 'A single binary and one SQLite file. Run it on the smallest VPS you can find.' },
  { icon: Shield, title: 'Secure & reliable', body: 'Built-in auth, validation, and backups. Your khata, safe.' },
]
</script>
