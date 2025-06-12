<template>
  <section id="features" class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
          Everything you need to
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            manage your sites
          </span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
          Comprehensive construction management features designed for modern teams
        </p>
      </div>
      
      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Material Tracking -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Package class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Material Tracking</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Track inventory, monitor usage, and manage material costs across all your construction sites with real-time updates.
          </p>
        </div>
        
        <!-- Service Management -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200/50 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Wrench class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Service Management</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Coordinate services, track contractor work, and manage service schedules efficiently across multiple projects.
          </p>
        </div>
        
        <!-- Ledgers -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200/50 dark:hover:from-green-900/30 dark:hover:to-green-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <BookOpen class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Ledgers</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Maintain detailed financial records, track expenses, and generate comprehensive reports for better financial control.
          </p>
        </div>
        
        <!-- Payment Logs -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20 hover:from-orange-100 hover:to-orange-200/50 dark:hover:from-orange-900/30 dark:hover:to-orange-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <CreditCard class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Payment Logs</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Track all payments, manage invoices, and maintain transparent financial records with automated logging.
          </p>
        </div>
        
        <!-- Multi-User Support -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:from-indigo-100 hover:to-indigo-200/50 dark:hover:from-indigo-900/30 dark:hover:to-indigo-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Multi-User Support</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Collaborate with your team, assign roles, and customize access permissions for each site and user.
          </p>
        </div>
        
        <!-- Multi-Lingual -->
        <div class="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 dark:from-pink-900/20 dark:to-pink-800/20 hover:from-pink-100 hover:to-pink-200/50 dark:hover:from-pink-900/30 dark:hover:to-pink-800/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl">
          <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Globe class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Multi-Lingual</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            Support for multiple languages ensures your global team can work efficiently in their preferred language.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Package, Wrench, BookOpen, CreditCard, Users, Globe } from 'lucide-vue-next'
</script>