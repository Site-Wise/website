import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),

    // Brotli compression for better performance
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  // SSG configuration
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // vite-ssg 28 uses beasties (the maintained critters fork). This inlines the
    // critical CSS into each page's <head> and converts the bundle stylesheet to a
    // non-blocking async load, removing app.css from the render-blocking path.
    beastiesOptions: {
      // Keep our hand-written critical CSS in index.html instead of stripping it.
      reduceInlineStyles: false,
      // Google Fonts are already loaded non-blocking in index.html — don't touch them.
      external: true,
      // Inline critical CSS, then load the full bundle stylesheet asynchronously
      // (preload + onload swap) so app.css no longer blocks first render.
      preload: 'swap',
    },
  },

  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        // Advanced code splitting for optimal loading
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue'
            }
            if (id.includes('lucide-vue-next')) {
              return 'icons'
            }
            if (id.includes('@vueuse')) {
              return 'vueuse'
            }
            // posthog-js is large and ships legacy/polyfilled code. Keep it in its own
            // chunk so it stays a pure dynamic-import (loaded on idle) and never gets
            // modulepreloaded alongside the statically-imported vendor code.
            if (id.includes('posthog-js')) {
              return 'posthog'
            }
            return 'vendor'
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[ext]/[name]-[hash][extname]`
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // Enable CSS minification
    cssMinify: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', 'lucide-vue-next'],
  },

  server: {
    port: 5173,
    host: true,
  },

  preview: {
    port: 4173,
    host: true,
  },
})