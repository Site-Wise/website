<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
    <!-- Navigation -->
    <NavHeader />
    
    <!-- Router View -->
    <RouterView />
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue'
import FooterSection from './components/FooterSection.vue'
import { useDarkMode } from './composables/useDarkMode'

const { initializeDarkMode } = useDarkMode()

onMounted(() => {
  initializeDarkMode()
})
</script>