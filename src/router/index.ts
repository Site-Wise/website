import type { RouteRecordRaw } from 'vue-router'

// Define routes for SSG
export const setupRouter = (): RouteRecordRaw[] => [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'SiteWise - Smart Construction Material & Service Tracking',
      description: 'Open source material and service tracking app with lightweight PocketBase database. Multi-user, multi-lingual, PWA-ready construction management solution.',
      ogImage: '/og-image.jpg'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
    meta: {
      title: 'Privacy Policy - SiteWise',
      description: 'Privacy policy for SiteWise construction management application.'
    }
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue'),
    meta: {
      title: 'Terms of Service - SiteWise',
      description: 'Terms of service for SiteWise construction management application.'
    }
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: () => import('../views/BlogList.vue'),
    meta: {
      title: 'Blog - SiteWise',
      description: 'Latest updates, tips, and insights about construction management and SiteWise.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue'),
    meta: {
      title: 'Blog Post - SiteWise',
      description: 'Read our latest blog post about construction management.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us - SiteWise',
      description: 'Learn more about SiteWise and our mission to improve construction management.'
    }
  }
]