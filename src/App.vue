<template>
  <div class="min-h-screen bg-cream dark:bg-ink text-ink dark:text-cream">
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