import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export interface SeoMeta {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  keywords?: string
}

export function useSeo(customMeta?: SeoMeta) {
  const route = useRoute()

  const meta = computed(() => {
    const routeMeta = route.meta as SeoMeta
    return {
      title: customMeta?.title || routeMeta?.title || 'SiteWise - Smart Construction Material & Service Tracking',
      description: customMeta?.description || routeMeta?.description || 'Open source material and service tracking app with lightweight PocketBase database.',
      ogImage: customMeta?.ogImage || routeMeta?.ogImage || '/og-image.jpg',
      ogType: customMeta?.ogType || routeMeta?.ogType || 'website',
      keywords: customMeta?.keywords || routeMeta?.keywords || 'construction management, material tracking, service tracking'
    }
  })

  useHead({
    title: meta.value.title,
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
