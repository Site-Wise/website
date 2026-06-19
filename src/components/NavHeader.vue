<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-ink/90 backdrop-blur-md border-b border-cream-3 dark:border-ink-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center hover:opacity-80 transition-opacity duration-150" aria-label="Sitewise home">
          <img src="/logo/sitewise-wordmark.svg" alt="Sitewise" width="100" height="28" decoding="async" class="h-7 w-auto block dark:hidden" />
          <img src="/logo/sitewise-wordmark-dark.svg" alt="Sitewise" width="100" height="28" decoding="async" class="h-7 w-auto hidden dark:block" />
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a @click="navigateToSection('how')" class="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150 cursor-pointer">How it works</a>
          <a @click="navigateToSection('features')" class="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150 cursor-pointer">Features</a>
          <a @click="navigateToSection('pricing')" class="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150 cursor-pointer">Pricing</a>
          <RouterLink to="/blog" class="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150">Blog</RouterLink>
          <a href="https://github.com/site-wise/app" class="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream transition-colors duration-150" target="_blank" rel="noopener" aria-label="Sitewise on GitHub">GitHub</a>
        </div>

        <!-- CTA Button & Dark Mode Toggle -->
        <div class="flex items-center space-x-3">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-sm text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream hover:bg-cream-2 dark:hover:bg-ink-2 transition-colors duration-150"
            aria-label="Toggle dark mode"
          >
            <Sun class="w-5 h-5" v-if="isDark" />
            <Moon class="w-5 h-5" v-else />
          </button>

          <a href="https://app.sitewise.in/login" class="hidden sm:inline-flex items-center h-9 px-4 rounded-sm text-sm font-semibold text-cream bg-ink hover:bg-ink-2 active:scale-[0.98] transition-all duration-150" aria-label="Open the Sitewise app">
            Open app →
          </a>

          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-sm text-ink/70 dark:text-cream/70 hover:text-ink dark:hover:text-cream hover:bg-cream-2 dark:hover:bg-ink-2 transition-colors duration-150" aria-label="Toggle mobile menu">
            <Menu class="w-5 h-5" v-if="!mobileMenuOpen" />
            <X class="w-5 h-5" v-else />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-cream-3 dark:border-ink-4">
        <div class="flex flex-col space-y-1">
          <a @click="navigateToSection('how'); closeMobileMenu()" class="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors duration-150 py-2 cursor-pointer">How it works</a>
          <a @click="navigateToSection('features'); closeMobileMenu()" class="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors duration-150 py-2 cursor-pointer">Features</a>
          <a @click="navigateToSection('pricing'); closeMobileMenu()" class="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors duration-150 py-2 cursor-pointer">Pricing</a>
          <RouterLink to="/blog" @click="closeMobileMenu" class="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors duration-150 py-2">Blog</RouterLink>
          <a href="https://github.com/site-wise/app" @click="closeMobileMenu" class="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors duration-150 py-2" target="_blank" rel="noopener">GitHub</a>
          <a href="https://app.sitewise.in/login" class="mt-3 inline-flex items-center justify-center h-11 px-4 rounded-sm text-sm font-semibold text-cream bg-ink hover:bg-ink-2 active:scale-[0.98] transition-all duration-150 text-center" aria-label="Open the Sitewise app">
            Open app →
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useDarkMode } from '../composables/useDarkMode'

const router = useRouter()
const { isDark, toggleDarkMode } = useDarkMode()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

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
</script>
