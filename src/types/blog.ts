export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt?: Date
  tags: string[]
  readingTime: number
  featured?: boolean
  coverImage?: string
}

export interface BlogMetadata {
  totalPosts: number
  featuredPosts: BlogPost[]
  recentPosts: BlogPost[]
}