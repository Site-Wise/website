<template>
  <div class="min-h-screen bg-cream dark:bg-ink">
    <!-- Hero Section -->
    <div class="bg-ink dark:bg-ink-2 text-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="font-display text-4xl md:text-5xl font-bold mb-4">Sitewise Blog</h1>
          <p class="text-xl text-cream/70 max-w-2xl mx-auto">
            Expert guidance on getting a handle on the expences at your construction site.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Featured Posts -->
      <section v-if="featuredPosts.length > 0" class="mb-16">
        <h2 class="font-display text-3xl font-bold text-ink dark:text-cream mb-8">Featured Posts</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="post in featuredPosts"
            :key="post.id"
            class="bg-white dark:bg-ink-3 border border-cream-3 dark:border-ink-4 rounded-md shadow-card overflow-hidden hover:shadow-xl transition-shadow duration-150"
          >
            <div v-if="post.coverImage" class="aspect-video bg-cream-2 dark:bg-ink-4">
              <div class="w-full h-full bg-ink dark:bg-amber flex items-center justify-center">
                <span class="text-amber dark:text-ink text-sm font-medium">{{ post.title.substring(0, 20) }}...</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <span class="px-2 py-1 bg-amber-soft dark:bg-ink-4 text-amber-deep dark:text-amber text-xs font-medium rounded">
                    Featured
                  </span>
                  <span class="text-sm text-ink/60 dark:text-cream/60">
                    {{ formatDate(post.publishedAt) }}
                  </span>
                </div>
                <span class="text-sm text-ink/60 dark:text-cream/60">
                  {{ post.readingTime }} min read
                </span>
              </div>
              <h3 class="text-xl font-bold text-ink dark:text-cream mb-3">
                <RouterLink
                  :to="`/blog/${post.slug}`"
                  class="hover:text-amber-deep dark:hover:text-amber transition-colors"
                >
                  {{ post.title }}
                </RouterLink>
              </h3>
              <p class="text-ink/70 dark:text-cream/70 mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-cream-2 dark:bg-ink-4 text-ink/70 dark:text-cream/70 text-xs rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
                <p class="text-sm text-ink/60 dark:text-cream/60">by {{ post.author }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- All Posts -->
      <section>
        <div class="flex items-center justify-between mb-8">
          <h2 class="font-display text-3xl font-bold text-ink dark:text-cream">All Posts</h2>
          <div class="flex items-center space-x-4">
            <!-- Tag Filter -->
            <select
              v-model="selectedTag"
              class="px-3 py-2 border border-cream-3 dark:border-ink-4 rounded-sm bg-white dark:bg-ink-3 text-ink dark:text-cream text-sm"
            >
              <option value="">All Tags</option>
              <option v-for="tag in allTags" :key="tag" :value="tag">
                {{ tag }}
              </option>
            </select>
          </div>
        </div>

        <!-- Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            class="bg-white dark:bg-ink-3 border border-cream-3 dark:border-ink-4 rounded-md shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-150"
          >
            <div class="aspect-video bg-cream-2 dark:bg-ink-4">
              <div class="w-full h-full bg-ink dark:bg-amber flex items-center justify-center">
                <span class="text-amber dark:text-ink text-sm font-medium">{{ post.title.substring(0, 15) }}...</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm text-ink/60 dark:text-cream/60">
                  {{ formatDate(post.publishedAt) }}
                </span>
                <span class="text-sm text-ink/60 dark:text-cream/60">
                  {{ post.readingTime }} min read
                </span>
              </div>
              <h3 class="text-lg font-bold text-ink dark:text-cream mb-2">
                <RouterLink
                  :to="`/blog/${post.slug}`"
                  class="hover:text-amber-deep dark:hover:text-amber transition-colors"
                >
                  {{ post.title }}
                </RouterLink>
              </h3>
              <p class="text-ink/70 dark:text-cream/70 text-sm mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="tag in post.tags.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-1 bg-cream-2 dark:bg-ink-4 text-ink/70 dark:text-cream/70 text-xs rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
                <p class="text-xs text-ink/60 dark:text-cream/60">{{ post.author }}</p>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <div class="text-stone dark:text-stone-2 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-ink dark:text-cream mb-2">No posts found</h3>
          <p class="text-ink/60 dark:text-cream/60">Try selecting a different tag or check back later for new content.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { blogPosts, getFeaturedPosts, getAllTags } from '../data/blogPosts'

const selectedTag = ref('')
const featuredPosts = ref(getFeaturedPosts())
const allTags = ref(getAllTags())

const filteredPosts = computed(() => {
  let posts = blogPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  if (selectedTag.value) {
    posts = posts.filter(post => post.tags.includes(selectedTag.value))
  }

  return posts
})

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

onMounted(() => {
  // Set page title
  document.title = 'Blog - SiteWise'
})
</script>
