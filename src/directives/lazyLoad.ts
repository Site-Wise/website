import type { Directive } from 'vue'

export const lazyLoad: Directive = {
  mounted(el: HTMLImageElement, binding) {
    const loadImage = () => {
      if (binding.value) {
        el.src = binding.value
      }
    }

    const createObserver = () => {
      const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '50px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(el)
          }
        })
      }, options)

      observer.observe(el)
    }

    // Check if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
      createObserver()
    } else {
      // Fallback for older browsers
      loadImage()
    }
  }
}
