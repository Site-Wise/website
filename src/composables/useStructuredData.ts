import { useHead } from '@vueuse/head'

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  logo: string
  sameAs: string[]
  address?: {
    '@type': string
    addressCountry: string
    addressLocality?: string
  }
  contactPoint?: {
    '@type': string
    contactType: string
    url: string
  }
}

export interface WebsiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  inLanguage: string
  potentialAction: {
    '@type': string
    target: string
    'query-input': string
  }
}

export interface SoftwareApplicationSchema {
  '@context': string
  '@type': string
  name: string
  applicationCategory: string
  applicationSubCategory: string
  operatingSystem: string
  offers: {
    '@type': string
    price: string
    priceCurrency: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: string
    ratingCount: string
  }
  description: string
  url: string
  screenshot?: string
  featureList: string[]
}

export function useOrganizationSchema() {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SiteWise',
    description: 'Construction expense management and material tracking software for Indian contractors and builders.',
    url: 'https://sitewise.in',
    logo: 'https://sitewise.in/logo.svg',
    sameAs: [
      'https://github.com/site-wise/app'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://app.sitewise.in/login'
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useWebsiteSchema() {
  const schema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SiteWise',
    url: 'https://sitewise.in',
    description: 'Construction expense management app for tracking material costs, labor payments, and site budgets in India.',
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sitewise.in/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export function useSoftwareApplicationSchema() {
  const schema: SoftwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SiteWise',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Construction Management Software',
    operatingSystem: 'Web, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR'
    },
    description: 'Construction expense management app for India. Track material costs, labor payments, service expenses, and site budgets. Multi-user construction accounting software for contractors, builders, and civil engineers.',
    url: 'https://sitewise.in',
    featureList: [
      'Material cost tracking',
      'Labor payment management',
      'Construction ledger management',
      'Service expense tracking',
      'Multi-site expense management',
      'Real-time budget monitoring',
      'Multi-user collaboration',
      'Multi-language support',
      'Offline PWA support',
      'Financial report generation'
    ]
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export function useBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const schema: BreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}
