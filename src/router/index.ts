import type { RouteRecordRaw } from 'vue-router'

// Define routes for SSG
export const setupRouter = (): RouteRecordRaw[] => [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'SiteWise - Construction Expense Management App India | Track Site Costs & Budgets',
      description: 'Best construction expense management app in India. Track material costs, labor payments, and site expenses with ease. Free construction accounting software for contractors, builders, and site engineers.',
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
      title: 'Construction Management Tips & Expense Tracking Guide - SiteWise Blog',
      description: 'Expert tips on construction expense management, cost tracking, budget planning, and site financial management. Learn how to manage construction costs effectively in India.',
      ogImage: '/og-image.jpg'
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