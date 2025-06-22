<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center hover:opacity-80 transition-opacity duration-200">
          <img src="/logo.png" alt="SiteWise Logo" class="h-12 rounded-lg" />
          <span class="ml-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">Site</span>
          <span class="text-xl font-bold leading-tight text-blue-600">Wise</span>
        </RouterLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a @click="navigateToSection('features')" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">Features</a>
          <a @click="navigateToSection('tech')" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">Technology</a>
          <a @click="navigateToSection('pricing')" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer">Pricing</a>
          <RouterLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Blog</RouterLink>
          <a href="https://github.com/site-wise/app" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" target="_blank" rel="noopener" aria-label="Visit SiteWise GitHub repository">GitHub</a>
        </div>
        
        <!-- CTA Button & Dark Mode Toggle -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button 
            @click="toggleDarkMode" 
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            <Sun class="w-5 h-5" v-if="isDark" />
            <Moon class="w-5 h-5" v-else />
          </button>
          
          <a href="https://app.sitewise.in/login" class="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" aria-label="Get started with SiteWise">
            Get Started
          </a>
          
          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200" aria-label="Toggle mobile menu">
            <Menu class="w-5 h-5" v-if="!mobileMenuOpen" />
            <X class="w-5 h-5" v-else />
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
        <div class="flex flex-col space-y-3">
          <a @click="navigateToSection('features'); closeMobileMenu()" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2 cursor-pointer">Features</a>
          <a @click="navigateToSection('tech'); closeMobileMenu()" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2 cursor-pointer">Technology</a>
          <a @click="navigateToSection('pricing'); closeMobileMenu()" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2 cursor-pointer">Pricing</a>
          <RouterLink to="/blog" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">Blog</RouterLink>
          <a href="https://github.com/site-wise/app" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2" target="_blank" rel="noopener" aria-label="Visit SiteWise GitHub repository">GitHub</a>
          <a href="https://app.sitewise.in/login" class="mt-4 w-full px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center inline-block" aria-label="Get started with SiteWise">
            Get Started
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
  // If we're not on the home page, navigate to home first
  if (router.currentRoute.value.path !== '/') {
    router.push(`/#${sectionId}`)
  } else {
    // If we're on home page, just scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>