<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 class="w-5 h-5 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-900">SiteWise</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
          <a href="#tech" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Technology</a>
          <a href="#pricing" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
          <a href="https://github.com/sitewise/sitewise" class="text-gray-600 hover:text-gray-900 transition-colors duration-200" target="_blank" rel="noopener">GitHub</a>
        </div>
        
        <!-- CTA Button -->
        <div class="flex items-center space-x-4">
          <button class="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
          
          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
            <Menu class="w-5 h-5" v-if="!mobileMenuOpen" />
            <X class="w-5 h-5" v-else />
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="flex flex-col space-y-3">
          <a href="#features" @click="closeMobileMenu" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2">Features</a>
          <a href="#tech" @click="closeMobileMenu" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2">Technology</a>
          <a href="#pricing" @click="closeMobileMenu" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2">Pricing</a>
          <a href="https://github.com/sitewise/sitewise" @click="closeMobileMenu" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2" target="_blank" rel="noopener">GitHub</a>
          <button class="mt-4 w-full px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Building2, Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>