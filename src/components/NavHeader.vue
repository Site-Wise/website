<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/logo.png" alt="SiteWise Logo" class="h-12 rounded-lg" />
          <span class="ml-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">Site</span>
          <span class="text-xl font-bold leading-tight text-blue-600">Wise</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Features</a>
          <a href="#tech" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Technology</a>
          <a href="#pricing" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Pricing</a>
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
          
          <button class="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" aria-label="Get started with SiteWise">
            Get Started
          </button>
          
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
          <a href="#features" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">Features</a>
          <a href="#tech" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">Technology</a>
          <a href="#pricing" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2">Pricing</a>
          <a href="https://github.com/site-wise/app" @click="closeMobileMenu" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-2" target="_blank" rel="noopener" aria-label="Visit SiteWise GitHub repository">GitHub</a>
          <button class="mt-4 w-full px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200" aria-label="Get started with SiteWise">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>