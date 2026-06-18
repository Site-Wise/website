<template>
  <section id="pricing" class="py-16 sm:py-20 lg:py-24 bg-cream dark:bg-ink">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <span class="eyebrow text-stone-3 dark:text-stone">Pricing</span>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-cream mt-3 mb-3">Free to self-host. Free to get hosted — for now.</h2>
        <p class="text-lg text-ink/70 dark:text-cream/70">Managed hosting and the Pro AI layer are ₹2,499/site/month. We're not charging yet — start free while we're early.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
        <!-- Self-hosted -->
        <div class="rounded-md border border-cream-3 dark:border-ink-4 bg-white dark:bg-ink-3 p-8 flex flex-col">
          <div class="eyebrow text-stone-3 dark:text-stone">Self-hosted</div>
          <div class="font-display text-5xl font-bold text-ink dark:text-cream tabular-nums mt-4">Free</div>
          <div class="text-sm text-ink/60 dark:text-cream/60 mt-1 mb-6">Forever · O'Saasy License</div>
          <ul class="flex flex-col gap-2.5 mb-8">
            <li v-for="f in selfHosted" :key="f" class="flex items-center gap-2.5 text-sm text-ink/80 dark:text-cream/80">
              <span class="text-amber font-bold">✓</span> {{ f }}
            </li>
          </ul>
          <a href="https://github.com/site-wise/app" target="_blank" rel="noopener" class="mt-auto inline-flex items-center justify-center h-11 rounded-sm border border-cream-3 dark:border-ink-4 hover:border-ink dark:hover:border-cream text-ink dark:text-cream font-semibold active:scale-[0.98] transition-all duration-150">
            View on GitHub
          </a>
        </div>

        <!-- Hosted — accent ink card -->
        <div class="rounded-md border border-ink bg-ink text-cream p-8 flex flex-col shadow-card md:-mt-2 md:mb-2">
          <span class="inline-flex self-start items-center gap-2 h-6 px-2 rounded-sm bg-amber-soft text-[#6B4900] text-xs font-semibold mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-amber"></span> Free · early access
          </span>
          <div class="eyebrow text-amber">Hosted · Pro</div>
          <div class="flex items-baseline gap-2.5 mt-4">
            <span class="font-display text-5xl font-bold tabular-nums">Free</span>
            <span class="font-display text-2xl font-semibold text-stone line-through tabular-nums" aria-label="usually ₹2,499">₹2,499</span>
          </div>
          <div class="text-sm text-[#C9C5BE] mt-1 mb-6">/ site / month — free while we're early. Lock it in now.</div>
          <ul class="flex flex-col gap-2.5 mb-8">
            <li v-for="f in hosted" :key="f" class="flex items-center gap-2.5 text-sm text-[#C9C5BE]">
              <span class="text-amber font-bold">✓</span> {{ f }}
            </li>
          </ul>
          <a href="https://app.sitewise.in/login" class="mt-auto inline-flex items-center justify-center h-11 rounded-sm bg-amber hover:bg-amber-deep text-ink font-semibold active:scale-[0.98] transition-all duration-150">
            Start free on your first site
          </a>
        </div>

        <!-- Enterprise -->
        <div class="rounded-md border border-cream-3 dark:border-ink-4 bg-white dark:bg-ink-3 p-8 flex flex-col">
          <div class="eyebrow text-stone-3 dark:text-stone">Enterprise</div>
          <div class="font-display text-5xl font-bold text-ink dark:text-cream mt-4">Custom</div>
          <div class="text-sm text-ink/60 dark:text-cream/60 mt-1 mb-6">For builders at scale</div>
          <ul class="flex flex-col gap-2.5 mb-8">
            <li v-for="f in enterprise" :key="f" class="flex items-center gap-2.5 text-sm text-ink/80 dark:text-cream/80">
              <span class="text-amber font-bold">✓</span> {{ f }}
            </li>
          </ul>
          <button @click="openSalesModal" class="mt-auto inline-flex items-center justify-center h-11 rounded-sm border border-cream-3 dark:border-ink-4 hover:border-ink dark:hover:border-cream text-ink dark:text-cream font-semibold active:scale-[0.98] transition-all duration-150">
            Contact sales
          </button>
        </div>
      </div>

      <!-- FAQ -->
      <div class="mt-16 max-w-4xl mx-auto">
        <h3 class="font-display text-2xl font-semibold text-ink dark:text-cream text-center mb-8">Questions, answered straight.</h3>
        <div class="grid md:grid-cols-2 gap-x-10 gap-y-8">
          <div v-for="q in faqs" :key="q.q">
            <h4 class="font-semibold text-ink dark:text-cream mb-1.5">{{ q.q }}</h4>
            <p class="text-sm text-ink/70 dark:text-cream/70 leading-relaxed">{{ q.a }}</p>
          </div>
        </div>
      </div>
    </div>

    <ContactModal :is-open="isSalesModalOpen" type="sales" @close="closeSalesModal" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactModal from './ContactModal.vue'

const selfHosted = [
  'The complete site khata',
  'All core features',
  'Unlimited items, vendors & users',
  'Community support',
  'O\'Saasy License',
]
const hosted = [
  'Everything in self-hosted',
  'Fully managed hosting + SSL',
  'Daily backups',
  'Priority support',
  'Sitewise Pro AI as it ships',
]
const enterprise = [
  'Custom & on-prem deployment',
  'Tally & ERP integrations',
  '24/7 dedicated support',
  'SSO & advanced roles',
  'SLA guarantee',
]

const faqs = [
  { q: 'Is the self-hosted version really free?', a: 'Yes. Run it on your own server under the O\'Saasy License and the full site ledger costs nothing, forever.' },
  { q: "What's the difference between free and Pro?", a: 'The core khata is identical. Pro adds managed hosting, backups, priority support, and the AI layer — bill extraction, anomaly detection, forecasting. Pro normally runs ₹2,499/site/month; it\'s free during early access.' },
  { q: 'Can I move from self-hosted to hosted later?', a: 'Absolutely. Export your data and we\'ll help you migrate to managed hosting in minutes.' },
  { q: 'Is my data locked in?', a: 'Never. Your khata exports to GST-ready formats any time. It\'s your money and your data.' },
]

const isSalesModalOpen = ref(false)
const openSalesModal = () => { isSalesModalOpen.value = true }
const closeSalesModal = () => { isSalesModalOpen.value = false }
</script>
