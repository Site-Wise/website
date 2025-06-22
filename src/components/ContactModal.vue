<template>
  <!-- Modal Overlay -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 overflow-y-auto"
    @click="closeModal"
  >
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      
      <!-- Modal container -->
      <div 
        class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ modalTitle }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mt-1">
              {{ modalSubtitle }}
            </p>
          </div>
          <button 
            @click="closeModal"
            class="rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email address"
            />
          </div>

          <!-- Company -->
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company/Organization
            </label>
            <input
              v-model="form.company"
              type="text"
              id="company"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your company name"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="+91 9876543210"
            />
          </div>

          <!-- Inquiry Type (conditional) -->
          <div v-if="type === 'sales'">
            <label for="inquiryType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Inquiry Type
            </label>
            <select
              v-model="form.inquiryType"
              id="inquiryType"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="enterprise">Enterprise Plan Inquiry</option>
              <option value="custom">Custom Solution Request</option>
              <option value="volume">Volume Pricing</option>
              <option value="demo">Product Demo Request</option>
              <option value="migration">Migration Assistance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Project Details (conditional for sales) -->
          <div v-if="type === 'sales'">
            <label for="projectDetails" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Details
            </label>
            <textarea
              v-model="form.projectDetails"
              id="projectDetails"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Tell us about your project size, timeline, and specific requirements..."
            ></textarea>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ type === 'sales' ? 'Additional Information' : 'Message *' }}
            </label>
            <textarea
              v-model="form.message"
              id="message"
              :required="type === 'contact'"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              :placeholder="type === 'sales' ? 'Any additional questions or information...' : 'Please describe your inquiry or question...'"
            ></textarea>
          </div>

          <!-- Turnstile -->
          <div>
            <div 
              ref="turnstileWidget" 
              class="cf-turnstile" 
              :data-sitekey="turnstileSiteKey"
              data-theme="auto"
              data-callback="onTurnstileSuccess"
              data-error-callback="onTurnstileError"
            ></div>
            <p v-if="turnstileError" class="text-red-600 dark:text-red-400 text-sm mt-2">
              {{ turnstileError }}
            </p>
          </div>

          <!-- Submit Button -->
          <div class="flex space-x-3">
            <button
              type="submit"
              :disabled="isSubmitting || !turnstileToken"
              class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>
                {{ type === 'sales' ? 'Contact Sales' : 'Send Message' }}
              </span>
            </button>
            
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800 dark:text-green-200">
                Message Sent Successfully!
              </h3>
              <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="submitError" class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
                Error Sending Message
              </h3>
              <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{{ submitError }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
  type: 'contact' | 'sales'
}>()

const emit = defineEmits<{
  close: []
}>()

// Form data
const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  inquiryType: 'enterprise',
  projectDetails: '',
  message: ''
})

// State
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')
const turnstileToken = ref('')
const turnstileError = ref('')
const turnstileWidget = ref<HTMLElement | null>(null)

// Turnstile configuration
// Uses VITE_TURNSTILE_SITE_KEY from environment variables
// Falls back to Cloudflare's testing key that always passes (for development)
// Get your production key from: https://dash.cloudflare.com/
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'

// Computed properties
const modalTitle = computed(() => {
  return props.type === 'sales' ? 'Contact Sales' : 'Get in Touch'
})

const modalSubtitle = computed(() => {
  return props.type === 'sales' 
    ? 'Let\'s discuss your enterprise needs and find the perfect solution for your business.'
    : 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
})

// Methods
const closeModal = () => {
  if (!isSubmitting.value) {
    resetForm()
    emit('close')
  }
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'enterprise',
    projectDetails: '',
    message: ''
  }
  isSubmitting.value = false
  showSuccess.value = false
  submitError.value = ''
  turnstileToken.value = ''
  turnstileError.value = ''
  
  // Reset Turnstile widget
  if (window.turnstile && turnstileWidget.value) {
    window.turnstile.reset()
  }
}

const loadTurnstile = (): Promise<void> => {
  if (window.turnstile) {
    return Promise.resolve()
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Turnstile script'))
    document.head.appendChild(script)
  })
}

const handleSubmit = async () => {
  if (!turnstileToken.value) {
    turnstileError.value = 'Please complete the security verification'
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const payload = {
      ...form.value,
      type: props.type,
      turnstileToken: turnstileToken.value,
      timestamp: new Date().toISOString(),
      source: 'website'
    }

    const response = await fetch('https://contact.sitewise.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json() as { success: boolean; message?: string }
    
    if (result.success) {
      showSuccess.value = true
      // Auto-close after 3 seconds
      setTimeout(() => {
        closeModal()
      }, 3000)
    } else {
      throw new Error(result.message || 'Submission failed')
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    submitError.value = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

// Global Turnstile callbacks
const setupTurnstileCallbacks = () => {
  window.onTurnstileSuccess = (token: string) => {
    turnstileToken.value = token
    turnstileError.value = ''
  }

  window.onTurnstileError = () => {
    turnstileToken.value = ''
    turnstileError.value = 'Security verification failed. Please try again.'
  }
}

// Watch for modal open/close
watch(() => props.isOpen, async (isOpen) => {
  if (isOpen) {
    resetForm()
    try {
      await loadTurnstile()
      setupTurnstileCallbacks()
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (window.turnstile && turnstileWidget.value) {
          window.turnstile.render(turnstileWidget.value, {
            sitekey: turnstileSiteKey,
            theme: 'auto',
            callback: 'onTurnstileSuccess',
            'error-callback': 'onTurnstileError'
          })
        }
      }, 100)
    } catch (error) {
      console.error('Failed to load Turnstile:', error)
      turnstileError.value = 'Failed to load security verification. Please refresh the page.'
    }
  }
})

// Escape key handler
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  
  // Cleanup global callbacks
  if (window.onTurnstileSuccess) {
    window.onTurnstileSuccess = undefined
  }
  if (window.onTurnstileError) {
    window.onTurnstileError = undefined
  }
})

// TypeScript declarations for global functions
declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string
        theme?: string
        callback?: string
        'error-callback'?: string
      }) => void
      reset: () => void
    }
    onTurnstileSuccess?: (token: string) => void
    onTurnstileError?: () => void
  }
}
</script>