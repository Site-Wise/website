<template>
  <footer class="bg-cream dark:bg-ink border-t border-cream-3 dark:border-ink-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-2">
          <RouterLink to="/" class="inline-flex items-center mb-4 hover:opacity-80 transition-opacity duration-150" aria-label="Sitewise home">
            <img src="/logo/sitewise-wordmark.svg" alt="Sitewise" width="100" height="28" loading="lazy" decoding="async" class="h-7 w-auto block dark:hidden" />
            <img src="/logo/sitewise-wordmark-dark.svg" alt="Sitewise" width="100" height="28" loading="lazy" decoding="async" class="h-7 w-auto hidden dark:block" />
          </RouterLink>
          <p class="text-sm text-ink/70 dark:text-cream/70 max-w-sm leading-relaxed mb-6">
            The site expense system for Indian contractors. Track materials, mazdoor wages, vendor bills, and advances across every site — in one shared khata.
          </p>
          <a href="https://github.com/site-wise/app" class="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-cream-3 dark:border-ink-4 text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream hover:border-ink dark:hover:border-cream transition-colors duration-150" target="_blank" rel="noopener" aria-label="Sitewise on GitHub">
            <Github class="w-5 h-5" />
          </a>
        </div>

        <!-- Product -->
        <div>
          <h3 class="eyebrow text-stone-3 dark:text-stone mb-4">Product</h3>
          <ul class="space-y-2.5 text-sm">
            <li><a href="/#features" @click.prevent="navigateToSection('features')" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Features</a></li>
            <li><a href="/#how" @click.prevent="navigateToSection('how')" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">How it works</a></li>
            <li><a href="/#pricing" @click.prevent="navigateToSection('pricing')" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Pricing</a></li>
            <li><a href="https://github.com/site-wise/app/blob/main/USER_GUIDE.md" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150" target="_blank" rel="noopener">Docs</a></li>
            <li><a href="https://github.com/site-wise/app/blob/main/CHANGELOG.md" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150" target="_blank" rel="noopener">Changelog</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="eyebrow text-stone-3 dark:text-stone mb-4">Company</h3>
          <ul class="space-y-2.5 text-sm">
            <li><RouterLink to="/about" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">About</RouterLink></li>
            <li><RouterLink to="/blog" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Blog</RouterLink></li>
            <li><button type="button" @click="openContactModal" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150 text-left">Contact</button></li>
            <li><a href="https://app.sitewise.in/login" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Open app</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-cream-3 dark:border-ink-4 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-sm text-stone-2 dark:text-stone">
          © 2026 Sitewise · Made with AI ❤️ in India
        </div>
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <RouterLink to="/privacy-policy" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Privacy</RouterLink>
          <RouterLink to="/terms-of-service" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Terms</RouterLink>
          <a href="https://github.com/site-wise/app/blob/main/LICENSE.md" class="text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150" target="_blank" rel="noopener">O'Saasy License</a>
        </div>
      </div>
    </div>

    <ContactModal :is-open="isContactModalOpen" type="contact" @close="closeContactModal" />
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Github } from 'lucide-vue-next'
import ContactModal from './ContactModal.vue'

const router = useRouter()
const isContactModalOpen = ref(false)

const navigateToSection = (sectionId: string) => {
  if (router.currentRoute.value.path !== '/') {
    router.push(`/#${sectionId}`)
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const openContactModal = () => { isContactModalOpen.value = true }
const closeContactModal = () => { isContactModalOpen.value = false }
</script>
