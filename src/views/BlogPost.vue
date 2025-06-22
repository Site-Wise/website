<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div v-if="post" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Back Navigation -->
      <nav class="mb-8">
        <RouterLink 
          to="/blog"
          class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Blog
        </RouterLink>
      </nav>

      <!-- Article Header -->
      <header class="mb-12">
        <div class="mb-8">
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span
              v-if="post.featured"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
            >
              Featured
            </span>
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            {{ post.title }}
          </h1>
          
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {{ post.excerpt }}
          </p>
        </div>

        <!-- Article Meta -->
        <div class="flex flex-wrap items-center justify-between py-6 border-t border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-6 mb-4 sm:mb-0">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-semibold text-sm">
                  {{ post.author.split(' ').map(n => n[0]).join('') }}
                </span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ post.author }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>
            
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ formatDate(post.publishedAt) }}
              </div>
              <div v-if="post.updatedAt" class="flex items-center mt-1">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Updated {{ formatDate(post.updatedAt) }}
              </div>
            </div>
          </div>
          
          <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ post.readingTime }} min read
            </div>
          </div>
        </div>

        <!-- Cover Image Placeholder -->
        <div v-if="post.coverImage" class="mt-8 aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg font-medium">{{ post.title.substring(0, 30) }}...</span>
        </div>
      </header>

      <!-- Article Content -->
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <div v-html="formatContent(post.content)" class="leading-relaxed"></div>
      </article>

      <!-- Article Footer -->
      <footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <div class="mt-6 sm:mt-0">
            <RouterLink
              to="/blog"
              class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to All Posts
            </RouterLink>
          </div>
        </div>
      </footer>

      <!-- Related Posts -->
      <section v-if="relatedPosts.length > 0" class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Posts</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(relatedPost.publishedAt) }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ relatedPost.readingTime }} min read
              </span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <RouterLink 
                :to="`/blog/${relatedPost.slug}`"
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {{ relatedPost.title }}
              </RouterLink>
            </h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ relatedPost.excerpt }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in relatedPost.tags.slice(0, 3)"
                :key="tag"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- 404 State -->
    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div class="text-gray-400 dark:text-gray-500 mb-6">
        <svg class="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
      <RouterLink
        to="/blog"
        class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getPostBySlug, blogPosts } from '../data/blogPosts'
import type { BlogPost } from '../types/blog'

const route = useRoute()
const post = ref<BlogPost | undefined>()

const relatedPosts = computed(() => {
  if (!post.value) return []
  
  // Find posts with similar tags
  return blogPosts
    .filter(p => 
      p.id !== post.value!.id && 
      p.tags.some(tag => post.value!.tags.includes(tag))
    )
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 2)
})

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const formatContent = (content: string): string => {
  // Convert markdown-like content to HTML
  return content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-4 mt-6">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-3 mt-4">$1</h3>')
    .replace(/^\*\*(.*)\*\*/gm, '<strong class="font-semibold">$1</strong>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(?!<[h|l|s])/gm, '<p class="mb-4">')
    .replace(/<\/p><p class="mb-4">(<[h|l])/g, '$1')
    .replace(/(<\/h[123]>)<p class="mb-4">/g, '$1')
}

onMounted(() => {
  const slug = route.params.slug as string
  post.value = getPostBySlug(slug)
  
  if (post.value) {
    document.title = `${post.value.title} - SiteWise Blog`
  } else {
    document.title = 'Post Not Found - SiteWise Blog'
  }
})
</script>