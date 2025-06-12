<template>
  <section class="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-gray-700 mb-8">
          <Sparkles class="w-4 h-4 mr-2 text-blue-600" />
          Made with AI ❤️ in India • MIT Licensed
        </div>
        
        <!-- Main heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Smart Construction
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Material Tracking
          </span>
        </h1>
        
        <!-- Subheading -->
        <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Open source app powered by lightweight PocketBase database. Track materials, services, and ledgers across multiple sites with ease.
        </p>
        
        <!-- Feature highlights -->
        <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-600">
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Multi-user Support
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Multi-lingual
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Light & Dark Mode
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            PWA Ready
          </div>
        </div>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span class="flex items-center">
              Start Free Trial
              <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
          
          <button class="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            <span class="flex items-center">
              <Github class="w-5 h-5 mr-2" />
              View on GitHub
            </span>
          </button>
        </div>
        
        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">100%</div>
            <div class="text-sm text-gray-600">Open Source</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">$5</div>
            <div class="text-sm text-gray-600">SaaS/month</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">Multi</div>
            <div class="text-sm text-gray-600">Language</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">PWA</div>
            <div class="text-sm text-gray-600">Native Feel</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, Check, ArrowRight, Github } from 'lucide-vue-next'
</script>