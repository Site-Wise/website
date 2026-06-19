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
        textContent: JSON.stringify(schema)
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
        textContent: JSON.stringify(schema)
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
    description: 'Construction site operating system for managing materials, labour, expenses, vendor payments, budgets and project execution. One place for Indian contractors and builders to run every site.',
    url: 'https://sitewise.in',
    featureList: [
      'Material cost & delivery tracking',
      'Labour payment management',
      'Vendor bills & running account (RA) bills',
      'Construction ledger (khata)',
      'Site progress & milestone tracking',
      'Multi-site budget monitoring',
      'Multi-user collaboration',
      'Multi-language support',
      'AI-powered insights (roadmap)',
      'GST-ready financial reports'
    ]
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify(schema)
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
        textContent: JSON.stringify(schema)
      }
    ]
  })
}

export interface FaqSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

// High-intent construction-operations FAQs for SEO rich results.
const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What is the best software for construction cost tracking?',
    a: 'SiteWise is purpose-built for construction cost tracking in India. It records materials, labour, vendor bills and cash expenses per site and shows live budget versus actual spend, so contractors always know where the money went.'
  },
  {
    q: 'How do I manage labour payments across multiple construction sites?',
    a: 'SiteWise tracks daily wages, advances and contractor bills for every site in one place, so you can record mazdoor and thekedaar payments on the spot and reconcile them at month-end without spreadsheets.'
  },
  {
    q: 'How do contractors track site expenses?',
    a: 'Contractors log materials, labour, vendor bills, petty cash and advances from their phone as they happen. SiteWise totals them by site, vendor and category in real time and exports GST-ready reports.'
  },
  {
    q: 'How do I manage progress-based payments on a construction project?',
    a: 'SiteWise tracks work completion against milestones, quantities and project progress so contractors and owners can verify completed work before releasing payments.'
  },
  {
    q: 'How can I verify contractor progress before approving an invoice?',
    a: 'SiteWise provides progress tracking, milestone verification and project records that help teams validate completed work before processing payments.'
  },
  {
    q: 'How do builders track contractor running bills?',
    a: 'SiteWise helps builders manage running bills, completed quantities, previous certifications, retention amounts and payment approvals from a single platform.'
  },
  {
    q: 'What software helps manage RA Bills and progress payments?',
    a: 'SiteWise simplifies Running Account (RA) bills by linking project progress, completed work quantities and payment certifications to contractor invoices.'
  },
  {
    q: 'How do I prevent overpayment to contractors?',
    a: 'SiteWise compares approved work progress, quantities and historical payments to ensure payments are released only for completed and verified work.'
  },
  {
    q: 'How can project owners track milestone-based payments?',
    a: 'SiteWise allows owners to define milestones, monitor completion status and release payments according to actual project progress.'
  },
  {
    q: 'How do I track work completed versus money spent on a construction project?',
    a: 'SiteWise connects project expenses, labour costs, material consumption and work progress to provide visibility into earned value and project performance.'
  },
  {
    q: 'How do I certify construction work for payment?',
    a: 'SiteWise maintains progress records, quantity measurements and project documentation that support payment certification workflows.'
  },
  {
    q: 'How do I verify construction material deliveries on site?',
    a: 'SiteWise records delivery photos, quantities, timestamps and supplier information, creating a verifiable record of materials received at the construction site.'
  },
  {
    q: 'How can I reduce material theft on construction projects?',
    a: 'SiteWise creates an auditable record of material deliveries, helping project teams identify shortages, discrepancies and potential pilferage before materials are consumed.'
  },
  {
    q: 'How do contractors track delivered materials?',
    a: 'SiteWise links supplier deliveries, delivery photos, quantities received and project records so contractors can track materials from arrival through consumption.'
  },
  {
    q: 'How can I prove what materials arrived on site?',
    a: 'SiteWise stores photo evidence, delivery records and timestamps, providing a permanent audit trail for every material delivery.'
  },
  {
    q: 'How do I identify delivery shortages before approving payment?',
    a: 'SiteWise allows site teams to compare delivered quantities, photos and supplier records before accepting materials or releasing payments.'
  }
]

export function useFaqSchema() {
  const schema: FaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a
      }
    }))
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify(schema)
      }
    ]
  })
}
