<template>
  <footer class="bg-gray-900 dark:bg-black text-white transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="SiteWise Logo" class="h-12 rounded-lg" />
            <!-- <span class="text-xl font-bold">SiteWise</span> -->
          </div>
          <p class="text-gray-400 dark:text-gray-500 mb-6 max-w-md transition-colors duration-200">
            Open source construction management app powered by lightweight PocketBase database. 
            Track materials, services, and manage multiple sites efficiently.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/site-wise/app" class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200" target="_blank" rel="noopener" aria-label="Visit SiteWise on GitHub">
              <Github class="w-6 h-6" />
            </a>
            <!-- <a href="https://twitter.com/sitewise" class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200" target="_blank" rel="noopener" aria-label="Follow SiteWise on Twitter">
              <Twitter class="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/sitewise" class="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200" target="_blank" rel="noopener" aria-label="Connect with SiteWise on LinkedIn">
              <Linkedin class="w-6 h-6" />
            </a> -->
          </div>
        </div>
        
        <!-- Product -->
        <div>
          <h3 class="font-semibold mb-4">Product</h3>
          <ul class="space-y-2 text-gray-400 dark:text-gray-500">
            <li><a href="#features" class="hover:text-white transition-colors duration-200">Features</a></li>
            <li><a href="#pricing" class="hover:text-white transition-colors duration-200">Pricing</a></li>
            <li><a href="https://github.com/site-wise/app/blob/main/USER_GUIDE.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">Documentation</a></li>
            <!-- <li><a href="/api" class="hover:text-white transition-colors duration-200">API Reference</a></li> -->
            <li><a href="https://github.com/site-wise/app/blob/main/CHANGELOG.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">Changelog</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400 dark:text-gray-500">
            <li><a href="/about" class="hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="/blog" class="hover:text-white transition-colors duration-200">Blog</a></li>
            <!-- <li><a href="/careers" class="hover:text-white transition-colors duration-200">Careers</a></li> -->
            <li><a href="/contact" class="hover:text-white transition-colors duration-200">Contact</a></li>
            <!-- <li><a href="/support" class="hover:text-white transition-colors duration-200">Support</a></li> -->
          </ul>
        </div>
      </div>
      
      <!-- Bottom section -->
      <div class="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0 transition-colors duration-200">
          © 2025 SiteWise. Made with AI ❤️ in India. Licensed under MIT.
        </div>
        <div class="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
          <a href="/privacy" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" class="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="https://github.com/site-wise/app/blob/main/LICENSE.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">MIT License</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'
</script>