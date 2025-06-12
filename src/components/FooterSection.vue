<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building2 class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold">SiteWise</span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Open source construction management app powered by lightweight PocketBase database. 
            Track materials, services, and manage multiple sites efficiently.
          </p>
          <div class="flex space-x-4">
            <a href="https://github.com/sitewise/sitewise" class="text-gray-400 hover:text-white transition-colors duration-200" target="_blank" rel="noopener">
              <Github class="w-6 h-6" />
            </a>
            <a href="https://twitter.com/sitewise" class="text-gray-400 hover:text-white transition-colors duration-200" target="_blank" rel="noopener">
              <Twitter class="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/sitewise" class="text-gray-400 hover:text-white transition-colors duration-200" target="_blank" rel="noopener">
              <Linkedin class="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <!-- Product -->
        <div>
          <h3 class="font-semibold mb-4">Product</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#features" class="hover:text-white transition-colors duration-200">Features</a></li>
            <li><a href="#pricing" class="hover:text-white transition-colors duration-200">Pricing</a></li>
            <li><a href="/docs" class="hover:text-white transition-colors duration-200">Documentation</a></li>
            <li><a href="/api" class="hover:text-white transition-colors duration-200">API Reference</a></li>
            <li><a href="/changelog" class="hover:text-white transition-colors duration-200">Changelog</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/about" class="hover:text-white transition-colors duration-200">About</a></li>
            <li><a href="/blog" class="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="/careers" class="hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="/contact" class="hover:text-white transition-colors duration-200">Contact</a></li>
            <li><a href="/support" class="hover:text-white transition-colors duration-200">Support</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom section -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 SiteWise. Made with AI ❤️ in India. Licensed under MIT.
        </div>
        <div class="flex space-x-6 text-sm text-gray-400">
          <a href="/privacy" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" class="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="/license" class="hover:text-white transition-colors duration-200">MIT License</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Building2, Github, Twitter, Linkedin } from 'lucide-vue-next'
</script>