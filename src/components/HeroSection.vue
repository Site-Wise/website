<template>
  <section class="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-blue-400/20 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-200">
          <Sparkles class="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
          Made with AI ❤️ in India • MIT Licensed
        </div>
        
        <!-- Main heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-200">
          Construction Expense
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Management Made Easy
          </span>
        </h1>

        <!-- Subheading -->
        <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-200">
          Track material costs, labor payments, and site expenses effortlessly. The best free construction accounting app for Indian contractors and builders.
        </p>
        
        <!-- Feature highlights -->
        <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Track Material Costs
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Manage Labor Payments
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Budget Monitoring
          </div>
          <div class="flex items-center">
            <Check class="w-4 h-4 text-green-500 mr-2" />
            Multi-Site Management
          </div>
        </div>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://app.sitewise.in/login" class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex" aria-label="Start free trial of SiteWise">
            <span class="flex items-center">
              Start Free Trial
              <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
          
          <a href="https://github.com/site-wise/app" target="_blank" rel="noopener" class="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 inline-flex" aria-label="View SiteWise source code on GitHub">
            <span class="flex items-center">
              <Github class="w-5 h-5 mr-2" />
              View on GitHub
            </span>
          </a>
        </div>
        
        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">100%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Open Source</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">$5</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">SaaS/month</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Multi</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Language</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">PWA</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Native Feel</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, Check, ArrowRight, Github } from 'lucide-vue-next'
</script>