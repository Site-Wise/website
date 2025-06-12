<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 relative overflow-hidden transition-colors duration-500">
    <!-- Background decorations -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-800/90 dark:to-purple-800/90"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to transform your
        <span class="block">construction management?</span>
      </h2>
      
      <p class="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-3xl mx-auto">
        Join thousands of construction professionals who trust SiteWise to manage their materials, services, and sites efficiently.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button class="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span class="flex items-center">
            Start Free Trial
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </button>
        
        <button class="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-200">
          <span class="flex items-center">
            <Github class="w-5 h-5 mr-2" />
            View on GitHub
          </span>
        </button>
      </div>
      
      <!-- Social proof -->
      <div class="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
        <div class="flex items-center text-blue-100 dark:text-blue-200">
          <Star class="w-5 h-5 text-yellow-400 mr-1" />
          <span class="font-medium">MIT Licensed</span>
        </div>
        <div class="flex items-center text-blue-100 dark:text-blue-200">
          <Users class="w-5 h-5 mr-2" />
          <span class="font-medium">Multi-User Ready</span>
        </div>
        <div class="flex items-center text-blue-100 dark:text-blue-200">
          <Globe class="w-5 h-5 mr-2" />
          <span class="font-medium">Multi-Lingual</span>
        </div>
        <div class="flex items-center text-blue-100 dark:text-blue-200">
          <Heart class="w-5 h-5 mr-2" />
          <span class="font-medium">Made in India</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Github, Star, Users, Globe, Heart } from 'lucide-vue-next'
</script>