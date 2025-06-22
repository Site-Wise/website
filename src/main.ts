import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Create and mount the Vue app
const app = createApp(App)
app.use(router)

// Wait for router to be ready before mounting
router.isReady().then(() => {
  app.mount('#app')
})