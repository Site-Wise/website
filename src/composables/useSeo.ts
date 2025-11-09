import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export interface SeoMeta {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  keywords?: string
  canonicalUrl?: string
}

export function useSeo(customMeta?: SeoMeta) {
  const route = useRoute()

  const meta = computed(() => {
    const routeMeta = route.meta as SeoMeta
    const baseUrl = 'https://sitewise.app'
    const currentPath = route.path
    return {
      title: customMeta?.title || routeMeta?.title || 'SiteWise - Construction Expense Management App India',
      description: customMeta?.description || routeMeta?.description || 'Best construction expense management app in India. Track material costs, labor payments, and site expenses with ease.',
      ogImage: customMeta?.ogImage || routeMeta?.ogImage || '/og-image.jpg',
      ogType: customMeta?.ogType || routeMeta?.ogType || 'website',
      keywords: customMeta?.keywords || routeMeta?.keywords || 'construction expense management India, construction cost tracking, site expense tracker',
      canonicalUrl: customMeta?.canonicalUrl || routeMeta?.canonicalUrl || `${baseUrl}${currentPath}`
    }
  })

  useHead({
    title: meta.value.title,
    link: [
      {
        rel: 'canonical',
        href: meta.value.canonicalUrl
      }
    ],
    meta: [
      {
        name: 'description',
        content: meta.value.description
      },
      {
        name: 'keywords',
        content: meta.value.keywords
      },
      // Open Graph
      {
        property: 'og:title',
        content: meta.value.title
      },
      {
        property: 'og:description',
        content: meta.value.description
      },
      {
        property: 'og:image',
        content: meta.value.ogImage
      },
      {
        property: 'og:type',
        content: meta.value.ogType
      },
      {
        property: 'og:url',
        content: meta.value.canonicalUrl
      },
      // Twitter
      {
        name: 'twitter:title',
        content: meta.value.title
      },
      {
        name: 'twitter:description',
        content: meta.value.description
      },
      {
        name: 'twitter:image',
        content: meta.value.ogImage
      }
    ]
  })

  return {
    meta
  }
}
