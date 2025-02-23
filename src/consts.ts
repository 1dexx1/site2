export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'polxr',
  DESCRIPTION:
    'portfolio',
  EMAIL: '',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://site2-weld-eight.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home'},
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  { href: '/tags', label: 'tags' },
  { href: '/work', label: 'project'},
  { href: '/authors', label: 'authors' },
  { href: '/members', label: 'members'},
]

export const SOCIAL_LINKS: Link[] = [

]
