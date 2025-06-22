<template>
  <footer class="bg-gray-900 dark:bg-black text-white transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <RouterLink to="/" class="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200">
            <img src="/logo.png" alt="SiteWise Logo" class="h-12 rounded-lg" />
            <span class="ml-2 text-xl font-bold leading-tight text-white">Site</span>
            <span class="text-xl font-bold leading-tight text-blue-600">Wise</span>
          </RouterLink>
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
            <li><a @click="navigateToSection('features')" class="hover:text-white transition-colors duration-200 cursor-pointer">Features</a></li>
            <li><a @click="navigateToSection('pricing')" class="hover:text-white transition-colors duration-200 cursor-pointer">Pricing</a></li>
            <li><a href="https://github.com/site-wise/app/blob/main/USER_GUIDE.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">Documentation</a></li>
            <!-- <li><a href="/api" class="hover:text-white transition-colors duration-200">API Reference</a></li> -->
            <li><a href="https://github.com/site-wise/app/blob/main/CHANGELOG.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">Changelog</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400 dark:text-gray-500">
            <li><RouterLink to="/about" class="hover:text-white transition-colors duration-200">About</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:text-white transition-colors duration-200">Blog</RouterLink></li>
            <!-- <li><a href="/careers" class="hover:text-white transition-colors duration-200">Careers</a></li> -->
            <li><a @click="openContactModal" class="hover:text-white transition-colors duration-200 cursor-pointer">Contact</a></li>
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
          <RouterLink to="/privacy-policy" class="hover:text-white transition-colors duration-200">Privacy Policy</RouterLink>
          <RouterLink to="/terms-of-service" class="hover:text-white transition-colors duration-200">Terms of Service</RouterLink>
          <a href="https://github.com/site-wise/app/blob/main/LICENSE.md" class="hover:text-white transition-colors duration-200" target="_blank" rel="noopener">MIT License</a>
        </div>
      </div>
    </div>
    
    <!-- Contact Modal -->
    <ContactModal 
      :is-open="isContactModalOpen" 
      type="contact" 
      @close="closeContactModal" 
    />
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Github } from 'lucide-vue-next'
import ContactModal from './ContactModal.vue'

const router = useRouter()
const isContactModalOpen = ref(false)

const navigateToSection = (sectionId: string) => {
  // If we're not on the home page, navigate to home first
  if (router.currentRoute.value.path !== '/') {
    router.push(`/#${sectionId}`)
  } else {
    // If we're on home page, just scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const openContactModal = () => {
  isContactModalOpen.value = true
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}
</script>