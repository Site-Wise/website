<template>
  <section id="tech" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
          Built with
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            modern technology
          </span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
          Lightweight, fast, and scalable architecture that can be hosted super cheaply
        </p>
      </div>
      
      <!-- Tech stack grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Frontend Stack -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <Code class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">Frontend Stack</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-green-600 dark:text-green-400 font-semibold text-sm">V</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">Vue 3</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Progressive JavaScript framework</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">T</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">TypeScript</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Type-safe JavaScript</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">T</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">Tailwind CSS</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Utility-first CSS framework</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-purple-600 dark:text-purple-400 font-semibold text-sm">V</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">Vite</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Lightning fast build tool</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend Stack -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Database class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">Backend Stack</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-orange-600 dark:text-orange-400 font-semibold text-sm">P</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">PocketBase</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Lightweight backend solution</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-green-600 dark:text-green-400 font-semibold text-sm">G</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">Go Backend</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">High-performance server</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">S</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">SQLite</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Embedded database</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mr-3">
                <span class="text-red-600 dark:text-red-400 font-semibold text-sm">R</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white transition-colors duration-200">Real-time APIs</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">Live data synchronization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Lightning Fast</h4>
          <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Optimized for speed with modern build tools and efficient architecture</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <DollarSign class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Cost Effective</h4>
          <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Host for pennies with minimal server requirements and efficient resource usage</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Secure & Reliable</h4>
          <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Built-in authentication, data validation, and backup capabilities</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code, Database, Zap, DollarSign, Shield } from 'lucide-vue-next'
</script>