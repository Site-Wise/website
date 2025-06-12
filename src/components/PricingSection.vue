<template>
  <section id="pricing" class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
          Simple, transparent
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            pricing
          </span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
          Choose the plan that works best for your construction business
        </p>
      </div>
      
      <!-- Pricing cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Open Source -->
        <div class="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Open Source</h3>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Free</div>
            <div class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">Forever</div>
            
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Self-hosted solution</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">All core features</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Community support</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">MIT License</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Unlimited sites</span>
              </li>
            </ul>
            
            <button class="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              Download Now
            </button>
          </div>
        </div>
        
        <!-- SaaS Plan -->
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 relative transform scale-105 shadow-lg dark:shadow-2xl">
          <!-- Popular badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Most Popular
            </div>
          </div>
          
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">SaaS</h3>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">$5</div>
            <div class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">per month</div>
            
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Fully managed hosting</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Automatic updates</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Priority support</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Daily backups</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">SSL certificates</span>
              </li>
            </ul>
            
            <button class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
        
        <!-- Enterprise -->
        <div class="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Enterprise</h3>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">Custom</div>
            <div class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">Contact us</div>
            
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Custom deployment</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Advanced integrations</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">24/7 dedicated support</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Custom features</span>
              </li>
              <li class="flex items-center">
                <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span class="text-gray-600 dark:text-gray-300 transition-colors duration-200">SLA guarantee</span>
              </li>
            </ul>
            
            <button class="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      <!-- FAQ -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8 transition-colors duration-200">Frequently Asked Questions</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Is the open source version really free?</h4>
            <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Yes! SiteWise is MIT licensed and completely free to use, modify, and distribute.</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">What's included in the SaaS plan?</h4>
            <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Fully managed hosting, automatic updates, backups, and priority support for just $5/month.</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Can I migrate from self-hosted to SaaS?</h4>
            <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Absolutely! We provide migration tools and support to help you transition seamlessly.</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Do you offer custom development?</h4>
            <p class="text-gray-600 dark:text-gray-300 transition-colors duration-200">Yes, our enterprise plan includes custom features and integrations tailored to your needs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
</script>