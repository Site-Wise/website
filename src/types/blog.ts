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
  coverSvg?: string // Inline SVG for lightweight, custom images
}

export interface BlogMetadata {
  totalPosts: number
  featuredPosts: BlogPost[]
  recentPosts: BlogPost[]
}