import { ref, watch } from 'vue'

const isDark = ref(false)

// Initialize dark mode from localStorage or system preference
const initializeDarkMode = () => {
  const stored = localStorage.getItem('darkMode')
  if (stored) {
    isDark.value = JSON.parse(stored)
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDarkMode()
}

// Update DOM and localStorage
const updateDarkMode = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('darkMode', JSON.stringify(isDark.value))
}

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  updateDarkMode()
}

// Watch for changes
watch(isDark, updateDarkMode)

export const useDarkMode = () => {
  return {
    isDark,
    toggleDarkMode,
    initializeDarkMode
  }
}