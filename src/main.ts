import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Create and mount the Vue app
const app = createApp(App)
app.mount('#app')

// Register service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}